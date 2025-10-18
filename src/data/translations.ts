import { categories as frCategories, lessons as frLessons } from './courses';
import { Category, Lesson } from '@/types/course';
import { enLessons } from './englishLessons';

const enCategories: Category[] = [
  {
    id: 'beginnings',
    name: 'The Beginnings',
    icon: '🚀',
    lessons: frCategories[0].lessons
  },
  {
    id: 'basics',
    name: 'Trading Basics',
    icon: '🪙',
    lessons: frCategories[1].lessons
  },
  {
    id: 'technical',
    name: 'Technical Analysis',
    icon: '📈',
    lessons: frCategories[2].lessons
  },
  {
    id: 'fundamental',
    name: 'Fundamental Analysis',
    icon: '🧠',
    lessons: frCategories[3].lessons
  },
  {
    id: 'strategies',
    name: 'Advanced Strategies',
    icon: '🎯',
    lessons: frCategories[4].lessons
  },
  {
    id: 'misc',
    name: 'Miscellaneous',
    icon: '💰',
    lessons: frCategories[5].lessons
  }
];

export function getCategories(language: 'fr' | 'en'): Category[] {
  return language === 'fr' ? frCategories : enCategories;
}

export function getLessonById(id: string, language: 'fr' | 'en'): Lesson | undefined {
  if (language === 'en' && enLessons[id]) {
    return enLessons[id];
  }
  return frLessons[id];
}
