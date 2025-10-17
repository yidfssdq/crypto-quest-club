import { supabase } from '@/integrations/supabase/client';
import { UserProgress } from '@/types/course';

const STORAGE_KEY = 'cryptolearn_progress';

// Get progress from server or localStorage cache
export const getProgress = async (): Promise<UserProgress> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      // Try to get from server
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (data && !error) {
        const serverProgress: UserProgress = {
          completedLessons: (data.completed_lessons as string[]) || [],
          quizScores: (data.quiz_scores as Record<string, number>) || {},
          level: (data.level as 'Débutant' | 'Intermédiaire' | 'Expert') || 'Débutant'
        };
        
        // Update localStorage cache
        localStorage.setItem(STORAGE_KEY, JSON.stringify(serverProgress));
        return serverProgress;
      }
    }
  } catch (error) {
    console.error('Error fetching server progress:', error);
  }

  // Fallback to localStorage
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  
  return {
    completedLessons: [],
    quizScores: {},
    level: 'Débutant'
  };
};

// Save progress to both server and localStorage
export const saveProgress = async (progress: UserProgress): Promise<void> => {
  // Always save to localStorage as cache
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));

  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      // Save to server
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          completed_lessons: progress.completedLessons,
          quiz_scores: progress.quizScores,
          level: progress.level,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id'
        });

      if (error) {
        console.error('Error saving progress to server:', error);
      }
    }
  } catch (error) {
    console.error('Error in saveProgress:', error);
  }
};

export const markLessonComplete = async (lessonId: string, score: number): Promise<void> => {
  const progress = await getProgress();
  
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
  }
  
  progress.quizScores[lessonId] = score;
  
  // Update level based on completed lessons
  const completedCount = progress.completedLessons.length;
  if (completedCount >= 15) {
    progress.level = 'Expert';
  } else if (completedCount >= 7) {
    progress.level = 'Intermédiaire';
  } else {
    progress.level = 'Débutant';
  }
  
  await saveProgress(progress);
};

export const isLessonCompleted = async (lessonId: string): Promise<boolean> => {
  const progress = await getProgress();
  return progress.completedLessons.includes(lessonId);
};

export const getCompletionPercentage = async (): Promise<number> => {
  const progress = await getProgress();
  const totalLessons = 18;
  return Math.round((progress.completedLessons.length / totalLessons) * 100);
};

export const getTotalScore = async (): Promise<number> => {
  const progress = await getProgress();
  const scores = Object.values(progress.quizScores);
  if (scores.length === 0) return 0;
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
};
