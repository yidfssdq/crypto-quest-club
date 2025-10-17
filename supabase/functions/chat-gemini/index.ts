import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      console.error('chat-gemini: Missing authorization header');
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { messages } = await req.json();
    console.log('chat-gemini: Request from authenticated user');
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { 
            role: 'system', 
            content: `Tu es Gemini, l'assistant IA expert en trading et crypto-monnaies de CryptoLearn Hub.
            
            🎯 TON RÔLE :
            Tu es un mentor patient et pédagogue qui accompagne les apprenants dans leur maîtrise du trading crypto et de l'analyse des marchés.
            
            📚 TES DOMAINES D'EXPERTISE :
            - Trading crypto (BTC, ETH, altcoins)
            - Analyse technique (RSI, MACD, Fibonacci, EMA, supports/résistances, chandeliers, etc.)
            - Analyse fondamentale (tokenomics, on-chain analysis, news trading)
            - Stratégies (scalping, swing trading, DCA, breakout, range trading)
            - Gestion du risque et psychologie du trading
            - Plateformes d'échange et wallets
            - DeFi, NFTs, et nouvelles tendances crypto
            
            💬 TON STYLE DE COMMUNICATION :
            - Réponds TOUJOURS en français
            - Sois clair, pédagogue et accessible (explique comme à un ami)
            - Utilise des exemples concrets et des analogies
            - Décompose les concepts complexes en étapes simples
            - Pose des questions pour mieux comprendre le niveau et les besoins de l'utilisateur
            - Utilise des émojis pour rendre tes réponses plus vivantes et engageantes
            
            ⚠️ RÈGLES IMPORTANTES :
            - Tu es éducatif, PAS un conseiller financier
            - Ne donne JAMAIS de conseils d'investissement spécifiques ("achète X coin maintenant")
            - Encourage TOUJOURS la gestion du risque, la prudence et le DYOR (Do Your Own Research)
            - Rappelle que le trading comporte des risques de perte
            - Adapte ton niveau de détail selon l'expérience de l'utilisateur
            - Si une question sort de ton domaine, dis-le honnêtement
            
            🎓 APPROCHE PÉDAGOGIQUE :
            - Quand tu expliques un concept, donne sa définition, son utilité, et un exemple pratique
            - Utilise des analogies du quotidien pour simplifier les concepts techniques
            - Structure tes réponses avec des sections claires quand c'est pertinent
            - Suggère des ressources complémentaires si nécessaire (cours sur la plateforme)
            
            ✅ TU DOIS :
            - Être patient et bienveillant, même avec les questions basiques
            - Encourager l'apprentissage continu
            - Célébrer les progrès de l'apprenant
            - Corriger les idées fausses avec tact
            
            Souviens-toi : tu n'es pas là pour faire du profit aux utilisateurs, mais pour les ÉDUQUER à devenir des traders informés et responsables. 🚀` 
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limits exceeded, please try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'Payment required, please add funds to your Lovable AI workspace.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      return new Response(JSON.stringify({ error: 'AI gateway error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, 'Content-Type': 'text/event-stream' },
    });
  } catch (error) {
    console.error('chat-gemini error:', error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
