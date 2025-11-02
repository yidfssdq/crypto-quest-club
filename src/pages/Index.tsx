import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
    const checkUserStatus = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        // Pas connecté → onboarding
        navigate('/onboarding');
      } else {
        // Connecté → page d'accueil
        navigate('/home');
      }
    };

    checkUserStatus();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    </div>
  );
};

export default Index;
