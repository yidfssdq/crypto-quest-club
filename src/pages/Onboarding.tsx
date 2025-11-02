import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Rocket, BookOpen, Trophy, TrendingUp } from 'lucide-react';

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const steps = [
    {
      icon: Rocket,
      title: t('onboarding.step1.title') || 'Bienvenue sur CryptoLearn',
      description: t('onboarding.step1.description') || 'Apprenez le trading crypto de A à Z avec des cours structurés et des quiz interactifs.',
    },
    {
      icon: BookOpen,
      title: t('onboarding.step2.title') || 'Parcours d\'apprentissage complet',
      description: t('onboarding.step2.description') || 'Des cours pour débutants aux stratégies avancées, progressez à votre rythme.',
    },
    {
      icon: Trophy,
      title: t('onboarding.step3.title') || 'Validez vos connaissances',
      description: t('onboarding.step3.description') || 'Chaque cours se termine par un quiz pour valider vos acquis et suivre votre progression.',
    },
    {
      icon: TrendingUp,
      title: t('onboarding.step4.title') || 'Devenez un expert',
      description: t('onboarding.step4.description') || 'Passez de débutant à expert et maîtrisez les marchés crypto.',
    },
  ];

  const currentStep = steps[step];
  const Icon = currentStep.icon;

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/auth');
    }
  };

  const handleSkip = () => {
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-6 bg-primary/10 rounded-full">
              <Icon className="w-16 h-16 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl">{currentStep.title}</CardTitle>
          <CardDescription className="text-lg">{currentStep.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-12 rounded-full transition-all ${
                  index === step ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <Button variant="outline" onClick={handleSkip} className="flex-1">
              {t('onboarding.skip') || 'Passer'}
            </Button>
            <Button onClick={handleNext} className="flex-1">
              {step < steps.length - 1 ? t('onboarding.next') || 'Suivant' : t('onboarding.start') || 'Commencer'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;
