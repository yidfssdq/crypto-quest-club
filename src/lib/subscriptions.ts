import { loadStripe } from '@stripe/stripe-js';

// Clé publique Stripe (à configurer dans les variables d'environnement)
const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY || '';

// Initialiser Stripe
let stripePromise: Promise<any> | null = null;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(stripePublicKey);
  }
  return stripePromise;
};

// URLs de redirection après paiement
const getRedirectUrls = () => {
  const baseUrl = window.location.origin;
  return {
    successUrl: `${baseUrl}/home?subscription=success`,
    cancelUrl: `${baseUrl}/pricing?subscription=canceled`
  };
};

// Démarrer le processus de checkout Stripe
export const startCheckout = async (planId: string) => {
  try {
    const stripe = await getStripe();
    if (!stripe) {
      throw new Error('Stripe not initialized');
    }

    // TODO: Appeler votre edge function Supabase pour créer une session Stripe
    // Pour l'instant, on redirige vers la page de pricing
    console.log('Starting checkout for plan:', planId);
    
    const { successUrl, cancelUrl } = getRedirectUrls();
    
    // Exemple de structure à implémenter avec Supabase Edge Function:
    /*
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabase.auth.session()?.access_token}`
      },
      body: JSON.stringify({
        planId,
        successUrl,
        cancelUrl
      })
    });
    
    const { sessionId } = await response.json();
    await stripe.redirectToCheckout({ sessionId });
    */
    
    // Placeholder: redirection temporaire
    window.location.href = '/pricing';
  } catch (error) {
    console.error('Checkout error:', error);
    throw error;
  }
};

// Vérifier le statut d'abonnement
export const checkSubscriptionStatus = async (userId: string): Promise<boolean> => {
  // TODO: Implémenter la vérification avec Supabase
  // Pour l'instant, retourne false (pas d'abonnement)
  console.log('Checking subscription for user:', userId);
  return false;
};

// Types de plans
export type SubscriptionPlan = 'free' | 'premium';

export const PLANS = {
  FREE: 'free' as SubscriptionPlan,
  PREMIUM: 'premium' as SubscriptionPlan
};
