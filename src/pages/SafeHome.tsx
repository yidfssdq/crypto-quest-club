import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProgress, getCompletionPercentage } from '@/utils/progressSync';
import { UserProgress } from '@/types/course';
import { Lock, CheckCircle2 } from 'lucide-react';

const SafeHome = () => {
  const { t, language } = useLanguage();
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    quizScores: {},
    level: 'Débutant'
  });
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const loadProgress = async () => {
      const userProgress = await getProgress();
      const percent = await getCompletionPercentage();
      setProgress(userProgress);
      setPercentage(percent);
    };
    loadProgress();
  }, []);

  const modules = [
    {
      id: 'beginnings',
      title: language === 'fr' ? 'Les Débuts' : 'The Beginnings',
      icon: '🚀',
      lessons: 3,
      isPremium: false
    },
    {
      id: 'basics',
      title: language === 'fr' ? 'Bases du Trading' : 'Trading Basics',
      icon: '🪙',
      lessons: 5,
      isPremium: false
    },
    {
      id: 'technical',
      title: language === 'fr' ? 'Analyse Technique' : 'Technical Analysis',
      icon: '📈',
      lessons: 8,
      isPremium: true
    },
    {
      id: 'fundamental',
      title: language === 'fr' ? 'Analyse Fondamentale' : 'Fundamental Analysis',
      icon: '🧠',
      lessons: 8,
      isPremium: true
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{t('home.title') || 'Votre parcours d\'apprentissage'}</h1>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{t('progress.title') || 'Progression Globale'}</span>
              <Badge variant="secondary">{progress.level}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={percentage} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              {percentage}% {t('progress.completed') || 'complété'} • {progress.completedLessons.length} {t('progress.lessons') || 'leçons terminées'}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {modules.map((module) => {
          const completedInModule = progress.completedLessons.filter(id => id.startsWith(module.id)).length;
          const moduleProgress = (completedInModule / module.lessons) * 100;

          return (
            <Link key={module.id} to={`/home#${module.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{module.icon}</span>
                      <div>
                        <CardTitle className="text-xl">{module.title}</CardTitle>
                        <CardDescription>
                          {module.lessons} {t('module.lessons') || 'leçons'}
                        </CardDescription>
                      </div>
                    </div>
                    {module.isPremium && (
                      <Badge variant="outline" className="gap-1">
                        <Lock className="w-3 h-3" />
                        Premium
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Progress value={moduleProgress} />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {completedInModule}/{module.lessons} {t('module.completed') || 'terminées'}
                    </span>
                    {moduleProgress === 100 && (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SafeHome;
