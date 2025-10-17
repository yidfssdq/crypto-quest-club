import { categories as frCategories, lessons as frLessons } from './courses';
import { Category } from '@/types/course';

const enCategories: Category[] = [
  {
    id: 'basics',
    name: 'Trading Basics',
    icon: '🪙',
    lessons: frCategories[0].lessons
  },
  {
    id: 'technical',
    name: 'Technical Analysis',
    icon: '📈',
    lessons: frCategories[1].lessons
  },
  {
    id: 'fundamental',
    name: 'Fundamental Analysis',
    icon: '🧠',
    lessons: frCategories[2].lessons
  },
  {
    id: 'strategies',
    name: 'Advanced Strategies',
    icon: '🎯',
    lessons: frCategories[3].lessons
  },
  {
    id: 'misc',
    name: 'Miscellaneous',
    icon: '💰',
    lessons: frCategories[4].lessons
  }
];

export function getCategories(language: 'fr' | 'en'): Category[] {
  return language === 'fr' ? frCategories : enCategories;
}

export function getLessons(language: 'fr' | 'en') {
  // For now, lessons content remains in French
  // You can extend this to translate lesson content as well
  return frLessons;
}
