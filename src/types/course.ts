export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface VideoResource {
  title: string;
  url: string;
  thumbnail?: string;
}

export interface Lesson {
  id: string;
  title: string;
  category: string;
  objective: string;
  content: string;
  quiz: QuizQuestion[];
  imageUrl?: string;
  videos?: VideoResource[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  lessons: string[];
}

export interface UserProgress {
  completedLessons: string[];
  quizScores: Record<string, number>;
  level: 'Débutant' | 'Intermédiaire' | 'Expert';
}
