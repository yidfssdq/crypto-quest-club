import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Lock, Crown, Zap } from 'lucide-react';

interface PaywallProps {
  lessonTitle?: string;
}

export const Paywall = ({ lessonTitle }: PaywallProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const features = [
    language === 'fr' ? 'Accès à tous les cours' : 'Access to all courses',
    language === 'fr' ? 'Analyse technique avancée' : 'Advanced technical analysis',
    language === 'fr' ? 'Stratégies de trading' : 'Trading strategies',
    language === 'fr' ? 'Support IA intégré' : 'Integrated AI support',
    language === 'fr' ? 'Certificats de réussite' : 'Completion certificates',
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <Card className="border-primary/50">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Lock className="w-12 h-12 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl">
            {language === 'fr' ? 'Contenu Premium' : 'Premium Content'}
          </CardTitle>
          <CardDescription className="text-lg">
            {lessonTitle 
              ? (language === 'fr' 
                  ? `"${lessonTitle}" fait partie de nos cours premium` 
                  : `"${lessonTitle}" is part of our premium courses`)
              : (language === 'fr'
                  ? 'Ce contenu est réservé aux membres premium'
                  : 'This content is reserved for premium members')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <p className="font-semibold flex items-center gap-2">
              <Crown className="w-5 h-5 text-primary" />
              {language === 'fr' ? 'Avec Premium, débloquez :' : 'With Premium, unlock:'}
            </p>
            <ul className="space-y-2 ml-7">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 space-y-3">
            <Button 
              className="w-full" 
              size="lg"
              onClick={() => navigate('/pricing')}
            >
              <Crown className="w-5 h-5 mr-2" />
              {language === 'fr' ? 'Passer Premium - 29€/mois' : 'Go Premium - 29€/month'}
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => navigate('/home')}
            >
              {language === 'fr' ? 'Retour aux cours gratuits' : 'Back to free courses'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
