import { Lesson } from '@/types/course';

// Category Quizzes - 25 questions each
export const categoryQuizzesFr: Record<string, Lesson> = {
  'beginnings-category-quiz': {
    id: 'beginnings-category-quiz',
    title: 'Quiz Final - Les Débuts',
    category: 'beginnings',
    objective: 'Valider vos connaissances sur les bases crypto',
    content: 'Ce quiz couvre tous les concepts des débuts en crypto. Il faut 70% pour valider.',
    quiz: Array.from({ length: 25 }, (_, i) => ({
      question: `Question ${i + 1} sur les bases crypto`,
      options: ['Option A', 'Option B', 'Option C'],
      correctAnswer: Math.floor(Math.random() * 3)
    }))
  },
  'basics-category-quiz': {
    id: 'basics-category-quiz',
    title: 'Quiz Final - Bases du Trading',
    category: 'basics',
    objective: 'Valider vos connaissances sur les bases du trading',
    content: 'Ce quiz couvre tous les concepts des bases du trading. Il faut 70% pour valider.',
    quiz: Array.from({ length: 25 }, (_, i) => ({
      question: `Question ${i + 1} sur les bases du trading`,
      options: ['Option A', 'Option B', 'Option C'],
      correctAnswer: Math.floor(Math.random() * 3)
    }))
  },
  'technical-category-quiz': {
    id: 'technical-category-quiz',
    title: 'Quiz Final - Analyse Technique',
    category: 'technical',
    objective: 'Valider vos connaissances en analyse technique',
    content: 'Ce quiz couvre tous les concepts d\'analyse technique. Il faut 70% pour valider.',
    quiz: Array.from({ length: 25 }, (_, i) => ({
      question: `Question ${i + 1} sur l'analyse technique`,
      options: ['Option A', 'Option B', 'Option C'],
      correctAnswer: Math.floor(Math.random() * 3)
    }))
  },
  'fundamental-category-quiz': {
    id: 'fundamental-category-quiz',
    title: 'Quiz Final - Analyse Fondamentale',
    category: 'fundamental',
    objective: 'Valider vos connaissances en analyse fondamentale',
    content: 'Ce quiz couvre tous les concepts d\'analyse fondamentale. Il faut 70% pour valider.',
    quiz: Array.from({ length: 25 }, (_, i) => ({
      question: `Question ${i + 1} sur l'analyse fondamentale`,
      options: ['Option A', 'Option B', 'Option C'],
      correctAnswer: Math.floor(Math.random() * 3)
    }))
  },
  'strategies-category-quiz': {
    id: 'strategies-category-quiz',
    title: 'Quiz Final - Stratégies Avancées',
    category: 'strategies',
    objective: 'Valider vos connaissances sur les stratégies avancées',
    content: 'Ce quiz couvre tous les concepts des stratégies avancées. Il faut 70% pour valider.',
    quiz: Array.from({ length: 25 }, (_, i) => ({
      question: `Question ${i + 1} sur les stratégies avancées`,
      options: ['Option A', 'Option B', 'Option C'],
      correctAnswer: Math.floor(Math.random() * 3)
    }))
  }
};
