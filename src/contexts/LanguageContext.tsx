import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Home page
    'hero.badge': '🚀 Plateforme éducative crypto',
    'hero.title': 'Maîtrise le trading crypto<br />comme un pro',
    'hero.subtitle': 'Cours détaillés • Quiz interactifs • IA assistant • Suivi de progression',
    'hero.subtitle2': 'Apprends à ton rythme, entre amis 🎯',
    'hero.cta': 'Commencer gratuitement',
    'hero.ai': 'Découvrir l\'IA',
    'hero.lessons': 'Leçons complètes',
    'hero.quizzes': 'Quiz interactifs',
    'hero.assistant': 'Assistant IA',
    
    // Stats
    'stats.title': 'Tes Statistiques',
    'stats.level': 'Niveau',
    'stats.progress': 'Ta Progression',
    'stats.lessons': 'leçons complétées',
    'stats.score': 'Score moyen',
    'stats.goal': 'Objectif',
    
    // Categories
    'categories.title': 'Catégories de cours',
    'categories.courses': 'cours',
    'categories.interactive': 'Interactif',
    
    // Features
    'features.courses.title': '📚 Cours structurés',
    'features.courses.desc': '50+ leçons complètes du niveau débutant aux stratégies avancées avec explications détaillées',
    'features.quiz.title': '✅ Quiz interactifs',
    'features.quiz.desc': 'Valide tes connaissances avec 200+ questions de quiz à chaque fin de leçon',
    'features.ai.title': '🤖 Assistant IA',
    'features.ai.desc': 'Gemini IA spécialisé en crypto disponible 24/7 pour répondre à tes questions',
    
    // CTA
    'cta.title': 'Prêt à devenir un pro du trading crypto ? 🚀',
    'cta.desc': 'Rejoins la plateforme et commence ton apprentissage dès maintenant. C\'est 100% gratuit et sans engagement.',
    'cta.button': 'Débuter mon parcours',
    
    // Footer
    'footer.copyright': 'CryptoLearn Hub © 2025 — Site éducatif non financier',
    
    // Profile
    'profile.title': 'Mon Profil',
    'profile.info': 'Informations personnelles',
    'profile.username': 'Nom d\'utilisateur',
    'profile.email': 'Email',
    'profile.update': 'Mettre à jour le profil',
    'profile.password': 'Changer le mot de passe',
    'profile.newPassword': 'Nouveau mot de passe',
    'profile.confirmPassword': 'Confirmer le mot de passe',
    'profile.updatePassword': 'Mettre à jour le mot de passe',
    'profile.language': 'Langue',
    'profile.selectLanguage': 'Sélectionner la langue',
    'profile.french': 'Français',
    'profile.english': 'Anglais',
    'profile.back': 'Retour',
    'profile.updating': 'Mise à jour...',
    'profile.success': 'Profil mis à jour avec succès !',
    'profile.passwordSuccess': 'Mot de passe mis à jour avec succès !',
    'profile.error': 'Erreur lors de la mise à jour',
    'profile.passwordError': 'Les mots de passe ne correspondent pas',
    'profile.passwordShort': 'Le mot de passe doit contenir au moins 6 caractères',
  },
  en: {
    // Home page
    'hero.badge': '🚀 Crypto educational platform',
    'hero.title': 'Master crypto trading<br />like a pro',
    'hero.subtitle': 'Detailed courses • Interactive quizzes • AI assistant • Progress tracking',
    'hero.subtitle2': 'Learn at your own pace, with friends 🎯',
    'hero.cta': 'Start for free',
    'hero.ai': 'Discover AI',
    'hero.lessons': 'Complete lessons',
    'hero.quizzes': 'Interactive quizzes',
    'hero.assistant': 'AI Assistant',
    
    // Stats
    'stats.title': 'Your Statistics',
    'stats.level': 'Level',
    'stats.progress': 'Your Progress',
    'stats.lessons': 'lessons completed',
    'stats.score': 'Average score',
    'stats.goal': 'Goal',
    
    // Categories
    'categories.title': 'Course categories',
    'categories.courses': 'courses',
    'categories.interactive': 'Interactive',
    
    // Features
    'features.courses.title': '📚 Structured courses',
    'features.courses.desc': '50+ complete lessons from beginner level to advanced strategies with detailed explanations',
    'features.quiz.title': '✅ Interactive quizzes',
    'features.quiz.desc': 'Validate your knowledge with 200+ quiz questions at the end of each lesson',
    'features.ai.title': '🤖 AI Assistant',
    'features.ai.desc': 'Crypto-specialized Gemini AI available 24/7 to answer your questions',
    
    // CTA
    'cta.title': 'Ready to become a crypto trading pro? 🚀',
    'cta.desc': 'Join the platform and start your learning journey now. It\'s 100% free with no commitment.',
    'cta.button': 'Start my journey',
    
    // Footer
    'footer.copyright': 'CryptoLearn Hub © 2025 — Non-financial educational site',
    
    // Profile
    'profile.title': 'My Profile',
    'profile.info': 'Personal information',
    'profile.username': 'Username',
    'profile.email': 'Email',
    'profile.update': 'Update profile',
    'profile.password': 'Change password',
    'profile.newPassword': 'New password',
    'profile.confirmPassword': 'Confirm password',
    'profile.updatePassword': 'Update password',
    'profile.language': 'Language',
    'profile.selectLanguage': 'Select language',
    'profile.french': 'French',
    'profile.english': 'English',
    'profile.back': 'Back',
    'profile.updating': 'Updating...',
    'profile.success': 'Profile updated successfully!',
    'profile.passwordSuccess': 'Password updated successfully!',
    'profile.error': 'Error updating profile',
    'profile.passwordError': 'Passwords do not match',
    'profile.passwordShort': 'Password must be at least 6 characters',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
