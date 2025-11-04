import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContentBlurProps {
  children: React.ReactNode;
  isBlurred: boolean;
}

export function ContentBlur({ children, isBlurred }: ContentBlurProps) {
  const navigate = useNavigate();
  const { language } = useLanguage();

  if (!isBlurred) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Contenu flouté */}
      <div className="filter blur-sm pointer-events-none select-none">
        {children}
      </div>

      {/* Overlay avec cadenas */}
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="text-center space-y-4 p-8 max-w-md">
          <div className="inline-flex p-4 rounded-full bg-primary/10 border border-primary/20">
            <Lock className="w-12 h-12 text-primary" />
          </div>
          
          <h3 className="text-2xl font-bold">
            {language === 'fr' ? 'Contenu Verrouillé' : 'Locked Content'}
          </h3>
          
          <p className="text-muted-foreground">
            {language === 'fr' 
              ? 'Créez un compte gratuit pour accéder à ce contenu et débloquer 3 cours offerts !' 
              : 'Create a free account to access this content and unlock 3 free courses!'}
          </p>

          <Button 
            onClick={() => navigate('/auth')}
            className="gradient-primary"
            size="lg"
          >
            <Lock className="w-4 h-4 mr-2" />
            {language === 'fr' ? "S'inscrire Gratuitement" : 'Sign Up Free'}
          </Button>
        </div>
      </div>
    </div>
  );
}
