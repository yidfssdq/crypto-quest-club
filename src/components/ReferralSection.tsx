import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Copy, Users, Euro, Gift } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ReferralData {
  code: string;
  total_referrals: number;
  total_earnings: number;
}

export function ReferralSection() {
  const [referralData, setReferralData] = useState<ReferralData | null>(null);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    loadReferralData();
  }, []);

  const loadReferralData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('referral_codes')
        .select('code, total_referrals, total_earnings')
        .eq('user_id', user.id)
        .single();

      if (error) throw error;
      setReferralData(data);
    } catch (error) {
      console.error('Error loading referral data:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyReferralCode = () => {
    if (!referralData) return;
    
    const referralUrl = `${window.location.origin}/auth?ref=${referralData.code}`;
    navigator.clipboard.writeText(referralUrl);
    toast.success(language === 'fr' ? 'Lien copié !' : 'Link copied!');
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="w-5 h-5" />
            {language === 'fr' ? 'Parrainage' : 'Referral'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            <div className="h-20 bg-muted rounded"></div>
            <div className="h-10 bg-muted rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gift className="w-5 h-5 text-primary" />
          {language === 'fr' ? 'Programme de Parrainage' : 'Referral Program'}
        </CardTitle>
        <CardDescription>
          {language === 'fr' 
            ? 'Gagnez 5€ par personne parrainée ! Retrait possible à partir de 20€.' 
            : 'Earn €5 per referral! Withdrawal available from €20.'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                {language === 'fr' ? 'Parrainages' : 'Referrals'}
              </span>
            </div>
            <p className="text-2xl font-bold">{referralData?.total_referrals || 0}</p>
          </div>
          
          <div className="p-4 rounded-lg bg-success/10 border border-success/20">
            <div className="flex items-center gap-2 mb-2">
              <Euro className="w-4 h-4 text-success" />
              <span className="text-sm text-muted-foreground">
                {language === 'fr' ? 'Gains' : 'Earnings'}
              </span>
            </div>
            <p className="text-2xl font-bold">
              {referralData?.total_earnings?.toFixed(2) || '0.00'}€
            </p>
          </div>
        </div>

        {/* Referral Link */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {language === 'fr' ? 'Votre lien de parrainage' : 'Your referral link'}
          </label>
          <div className="flex gap-2">
            <Input
              value={`${window.location.origin}/auth?ref=${referralData?.code || ''}`}
              readOnly
              className="bg-background/50"
            />
            <Button onClick={copyReferralCode} variant="outline" size="icon">
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            {language === 'fr' 
              ? 'Partagez ce lien pour inviter vos amis' 
              : 'Share this link to invite your friends'}
          </p>
        </div>

        {/* Referral Code */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {language === 'fr' ? 'Code de parrainage' : 'Referral code'}
          </label>
          <div className="flex gap-2">
            <Input
              value={referralData?.code || ''}
              readOnly
              className="bg-background/50 font-mono text-lg"
            />
            <Button 
              onClick={() => {
                navigator.clipboard.writeText(referralData?.code || '');
                toast.success(language === 'fr' ? 'Code copié !' : 'Code copied!');
              }} 
              variant="outline" 
              size="icon"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 rounded-lg bg-muted/50 border">
          <p className="text-sm text-muted-foreground">
            {language === 'fr' ? (
              <>
                💡 <strong>Comment ça marche ?</strong><br/>
                Partagez votre code avec vos amis. Quand ils s'inscrivent et créent un compte, 
                vous recevez automatiquement 5€. Vous pouvez demander un virement dès que 
                vous atteignez 20€.
              </>
            ) : (
              <>
                💡 <strong>How it works?</strong><br/>
                Share your code with friends. When they sign up and create an account, 
                you automatically receive €5. You can request a transfer once you reach €20.
              </>
            )}
          </p>
        </div>

        {/* Withdrawal button */}
        {referralData && referralData.total_earnings >= 20 && (
          <Button className="w-full gradient-primary" size="lg">
            <Euro className="w-4 h-4 mr-2" />
            {language === 'fr' 
              ? `Demander un virement (${referralData.total_earnings.toFixed(2)}€)` 
              : `Request transfer (€${referralData.total_earnings.toFixed(2)})`}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
