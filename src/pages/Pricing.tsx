import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Zap } from 'lucide-react';
import { startCheckout } from '@/lib/subscriptions';
import { toast } from 'sonner';

const Pricing = () => {
  const { t, language } = useLanguage();
  const [loading, setLoading] = useState(false);

  const plans = [
    {
      id: 'free',
      name: language === 'fr' ? 'Gratuit' : 'Free',
      price: '0€',
      period: language === 'fr' ? '/mois' : '/month',
      description: language === 'fr' ? 'Pour découvrir les bases' : 'To discover the basics',
      features: [
        language === 'fr' ? '3 cours débutants' : '3 beginner courses',
        language === 'fr' ? 'Quiz interactifs' : 'Interactive quizzes',
        language === 'fr' ? 'Suivi de progression' : 'Progress tracking',
        language === 'fr' ? 'Support communautaire' : 'Community support'
      ],
      cta: language === 'fr' ? 'Commencer gratuitement' : 'Start for free',
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '29€',
      period: language === 'fr' ? '/mois' : '/month',
      description: language === 'fr' ? 'Accès complet illimité' : 'Full unlimited access',
      features: [
        language === 'fr' ? 'Tous les cours (20+)' : 'All courses (20+)',
        language === 'fr' ? 'Analyse technique avancée' : 'Advanced technical analysis',
        language === 'fr' ? 'Analyse fondamentale' : 'Fundamental analysis',
        language === 'fr' ? 'Stratégies avancées' : 'Advanced strategies',
        language === 'fr' ? 'Chat IA intégré' : 'Integrated AI chat',
        language === 'fr' ? 'Certificats de réussite' : 'Completion certificates',
        language === 'fr' ? 'Support prioritaire' : 'Priority support',
        language === 'fr' ? 'Mises à jour exclusives' : 'Exclusive updates'
      ],
      cta: language === 'fr' ? 'Passer Premium' : 'Go Premium',
      popular: true
    }
  ];

  const handleSubscribe = async (planId: string) => {
    if (planId === 'free') {
      toast.info(language === 'fr' ? 'Vous utilisez déjà le plan gratuit' : 'You are already using the free plan');
      return;
    }

    setLoading(true);
    try {
      await startCheckout(planId);
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error(language === 'fr' ? 'Erreur lors du paiement' : 'Payment error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          {language === 'fr' ? 'Choisissez votre plan' : 'Choose your plan'}
        </h1>
        <p className="text-xl text-muted-foreground">
          {language === 'fr' 
            ? 'Investissez dans votre formation crypto' 
            : 'Invest in your crypto education'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="gap-1 px-4 py-1">
                  <Zap className="w-3 h-3" />
                  {language === 'fr' ? 'Populaire' : 'Popular'}
                </Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={plan.popular ? 'default' : 'outline'}
                onClick={() => handleSubscribe(plan.id)}
                disabled={loading}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
