import { UserProgress } from '@/types/course';

const STORAGE_KEY = 'cryptolearn_progress';

export const getProgress = (): UserProgress => {
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

export const saveProgress = (progress: UserProgress): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const markLessonComplete = (lessonId: string, score: number): void => {
  const progress = getProgress();
  
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
  
  saveProgress(progress);
};

export const isLessonCompleted = (lessonId: string): boolean => {
  const progress = getProgress();
  return progress.completedLessons.includes(lessonId);
};

export const getCompletionPercentage = (): number => {
  const progress = getProgress();
  const totalLessons = 18; // Total number of lessons
  return Math.round((progress.completedLessons.length / totalLessons) * 100);
};

export const getTotalScore = (): number => {
  const progress = getProgress();
  const scores = Object.values(progress.quizScores);
  if (scores.length === 0) return 0;
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
};
