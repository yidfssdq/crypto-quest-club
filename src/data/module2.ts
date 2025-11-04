import { Lesson } from '@/types/course';

// Module 2 - Parcours Trading
export const tradingPath: Record<string, Lesson> = {
  // 1. Bases et mindset du trader
  '6-rules-of-trading': {
    id: '6-rules-of-trading',
    title: "Les 6 règles d'or du trading",
    category: 'Trading - Bases',
    objective: "Maîtriser les principes fondamentaux",
    content: `# Les 6 règles d'or du trading

## 1. Ne risquez jamais plus de 1-2% par trade
C'est la règle la plus importante. Même les meilleurs traders perdent parfois.

## 2. Ayez toujours un stop-loss
Ne tradez JAMAIS sans stop-loss. C'est votre assurance contre les grosses pertes.

## 3. Respectez votre plan de trading
Les émotions sont votre ennemi. Suivez votre stratégie, point.

## 4. Le ratio Risk/Reward minimum est 1:2
Risquer 100€ pour gagner 50€ ? Jamais. Visez au moins 200€ de gain.

## 5. Tradez avec la tendance
"The trend is your friend" - Ne combattez pas le marché.

## 6. Tenez un journal de trading
Notez chaque trade : raison d'entrée, résultat, émotions. Apprenez de vos erreurs.`,
    quiz: [
      {
        question: "Quel pourcentage de votre capital devriez-vous risquer par trade ?",
        options: ["5-10%", "1-2%", "20%"],
        correctAnswer: 1
      }
    ]
  },
  'type-of-trader': {
    id: 'type-of-trader',
    title: "Les différents types de traders",
    category: 'Trading - Bases',
    objective: "Trouver votre style de trading",
    content: `# Les différents types de traders

## Scalper
- **Durée** : Quelques secondes à quelques minutes
- **Objectif** : Petits profits répétés
- **Profil** : Réactif, résiste au stress

## Day Trader
- **Durée** : Plusieurs heures (clôture avant la nuit)
- **Objectif** : Profits moyens sur la journée
- **Profil** : Discipliné, peut rester concentré longtemps

## Swing Trader
- **Durée** : Plusieurs jours à quelques semaines
- **Objectif** : Capturer les swings (mouvements) importants
- **Profil** : Patient, analyse approfondie

## Position Trader (HODLer)
- **Durée** : Plusieurs mois à années
- **Objectif** : Gains long terme
- **Profil** : Très patient, vision macro

Quel type êtes-vous ?`,
    quiz: []
  },
  'trading-terms': {
    id: 'trading-terms',
    title: "Termes de trading essentiels",
    category: 'Trading - Bases',
    objective: "Maîtriser le vocabulaire",
    content: `# Termes de trading essentiels

## Long / Short
- **Long** : Parier sur la hausse (acheter)
- **Short** : Parier sur la baisse (vendre à découvert)

## Bull / Bear Market
- **Bull** : Marché haussier (les taureaux frappent vers le haut)
- **Bear** : Marché baissier (les ours frappent vers le bas)

## Support / Résistance
- **Support** : Niveau où le prix a du mal à descendre
- **Résistance** : Niveau où le prix a du mal à monter

## FOMO / FUD
- **FOMO** : Fear Of Missing Out (peur de rater une opportunité)
- **FUD** : Fear, Uncertainty, Doubt (peur, incertitude, doute)`,
    quiz: []
  },
  'market-psychology': {
    id: 'market-psychology',
    title: "Psychologie des marchés",
    category: 'Trading - Bases',
    objective: "Comprendre la psychologie collective",
    content: `# Psychologie des marchés

Le marché est mû par deux émotions : la PEUR et la CUPIDITÉ.

## Le cycle émotionnel
1. **Optimisme** : "Ça va monter !"
2. **Euphorie** : "Je suis un génie !"
3. **Anxiété** : "Ça commence à baisser..."
4. **Déni** : "C'est juste un petit correction"
5. **Panique** : "Je vends tout !"
6. **Capitulation** : "Je ne toucherai plus jamais aux cryptos"
7. **Dépression** : "J'ai tout perdu"
8. **Espoir** : "Peut-être que..."

## Comment éviter le piège ?
✅ Achetez quand tout le monde a peur
✅ Vendez quand tout le monde est euphorique
✅ Ne tradez PAS sous l'émotion`,
    quiz: []
  },
  'trading-journal': {
    id: 'trading-journal',
    title: "Tenir un journal de trading",
    category: 'Trading - Bases',
    objective: "Apprendre de ses trades",
    content: `# Tenir un journal de trading

Un journal de trading est votre meilleur outil de progression.

## Que noter ?
Pour CHAQUE trade :
- Date et heure
- Actif tradé
- Long ou Short
- Raison de l'entrée (setup technique)
- Prix d'entrée / Stop-loss / Take profit
- Résultat (gain/perte en % et €)
- Erreurs commises
- Émotions ressenties

## Pourquoi c'est crucial ?
Après 50 trades, vous verrez des patterns :
- Quels setups fonctionnent le mieux
- À quels moments vous perdez
- Vos erreurs récurrentes`,
    quiz: []
  },

  // 2. Analyse technique et lecture du marché
  'market-structure': {
    id: 'market-structure',
    title: "Structure de marché",
    category: 'Trading - Technique',
    objective: "Lire la structure du marché",
    content: `# Structure de marché

## Tendance haussière
Une série de higher highs (HH) et higher lows (HL).

## Tendance baissière
Une série de lower highs (LH) et lower lows (LL).

## Range (consolidation)
Le prix oscille entre un support et une résistance sans direction claire.

## Breakout
Quand le prix sort d'un range avec force et volume.`,
    quiz: []
  },
  'support-resistance': {
    id: 'support-resistance',
    title: "Support et Résistance - Les fondations du trading",
    category: 'Trading - Technique',
    objective: "Identifier les niveaux clés",
    content: `# Support et Résistance

## Support
Niveau où les acheteurs sont suffisamment forts pour empêcher la baisse.

## Résistance
Niveau où les vendeurs sont suffisamment forts pour empêcher la hausse.

## Flip de niveau
Un ancien support devient résistance (et vice versa) quand il est cassé.

## Comment les trader ?
- Achetez près d'un support
- Vendez près d'une résistance
- Attendez une confirmation avant de trader un breakout`,
    quiz: []
  },
  'candlestick-patterns': {
    id: 'candlestick-patterns',
    title: "Patterns de chandeliers",
    category: 'Trading - Technique',
    objective: "Lire les bougies japonaises",
    content: `# Patterns de chandeliers

## Patterns haussiers
- **Hammer** : Bougie avec longue mèche basse = rejet de la baisse
- **Bullish Engulfing** : Grande bougie verte englobe la rouge précédente
- **Morning Star** : 3 bougies signalant un retournement haussier

## Patterns baissiers
- **Shooting Star** : Bougie avec longue mèche haute = rejet de la hausse
- **Bearish Engulfing** : Grande bougie rouge englobe la verte précédente
- **Evening Star** : 3 bougies signalant un retournement baissier

⚠️ Toujours confirmer avec le contexte !`,
    quiz: []
  },
  'chart-patterns': {
    id: 'chart-patterns',
    title: "Figures chartistes",
    category: 'Trading - Technique',
    objective: "Reconnaître les patterns graphiques",
    content: `# Figures chartistes

## Patterns de continuation
- **Triangles** : Consolidation avant continuation de tendance
- **Flags & Pennants** : Pause brève avant reprise

## Patterns de retournement
- **Tête et épaules** : Signal de retournement baissier
- **Tête et épaules inversée** : Signal de retournement haussier
- **Double top/bottom** : Rejet d'un niveau important

## Comment les trader ?
Attendez la confirmation (breakout + volume) avant d'entrer.`,
    quiz: []
  },
  'moving-averages': {
    id: 'moving-averages',
    title: "Moyennes mobiles",
    category: 'Trading - Technique',
    objective: "Utiliser les EMA/SMA",
    content: `# Moyennes mobiles

## EMA vs SMA
- **SMA** : Simple Moving Average (moyenne simple)
- **EMA** : Exponential Moving Average (plus réactive)

## EMA populaires
- **EMA 9** : Court terme
- **EMA 21** : Moyen terme
- **EMA 50** : Support/résistance important
- **EMA 200** : Tendance long terme

## Golden Cross / Death Cross
- **Golden Cross** : EMA 50 croise au-dessus EMA 200 = très haussier
- **Death Cross** : EMA 50 croise en-dessous EMA 200 = très baissier`,
    quiz: []
  },
  'rsi': {
    id: 'rsi',
    title: "RSI - Relative Strength Index",
    category: 'Trading - Technique',
    objective: "Identifier les zones de surachat/survente",
    content: `# RSI - Relative Strength Index

Le RSI mesure la force d'un mouvement sur une échelle de 0 à 100.

## Interprétation
- **RSI > 70** : Surachat (overbought) - Possible correction
- **RSI < 30** : Survente (oversold) - Possible rebond
- **RSI = 50** : Zone neutre

## Divergences
Signal très puissant :
- **Divergence haussière** : Prix fait des plus bas, RSI fait des plus hauts
- **Divergence baissière** : Prix fait des plus hauts, RSI fait des plus bas`,
    quiz: []
  },
  'macd': {
    id: 'macd',
    title: "MACD (trend & momentum)",
    category: 'Trading - Technique',
    objective: "Utiliser le MACD",
    content: `# MACD - Moving Average Convergence Divergence

Le MACD combine plusieurs moyennes mobiles pour identifier les changements de momentum.

## Composants
- **Ligne MACD** : Différence entre EMA 12 et EMA 26
- **Ligne de signal** : EMA 9 de la ligne MACD
- **Histogramme** : Différence entre les deux

## Signaux
- Croisement MACD > Signal = Achat
- Croisement MACD < Signal = Vente
- Divergences = Signal de retournement`,
    quiz: []
  },
  'fib-retracement': {
    id: 'fib-retracement',
    title: "Retracements de Fibonacci",
    category: 'Trading - Technique',
    objective: "Utiliser Fibonacci",
    content: `# Retracements de Fibonacci

Les niveaux de Fibonacci identifient où le prix pourrait rebondir.

## Niveaux clés
- **23.6%** : Retracement faible
- **38.2%** : Retracement modéré
- **50%** : Niveau psychologique
- **61.8%** : Golden Ratio (le plus important)
- **78.6%** : Retracement profond

## Comment tracer ?
Du swing low au swing high (ou inverse) d'un mouvement significatif.`,
    quiz: []
  },
  'volume-profile': {
    id: 'volume-profile',
    title: "Volume profile & zones",
    category: 'Trading - Technique',
    objective: "Analyser le volume",
    content: `# Volume Profile

Le volume profile montre où le plus de volume a été échangé à chaque niveau de prix.

## Zones importantes
- **HVN** : High Volume Node = Zone où beaucoup a été tradé = Support/Résistance fort
- **LVN** : Low Volume Node = Zone rapide à traverser

## Utilisation
Les zones HVN agissent comme des aimants pour le prix.`,
    quiz: []
  },
  'order-flow': {
    id: 'order-flow',
    title: "Order flow (aperçu)",
    category: 'Trading - Technique',
    objective: "Introduction à l'order flow",
    content: `# Order Flow

L'order flow analyse les ordres d'achat et de vente en temps réel.

## Concepts clés
- **Bid** : Prix auquel les acheteurs veulent acheter
- **Ask** : Prix auquel les vendeurs veulent vendre
- **Order book** : Liste de tous les ordres en attente

## Utilité
Voir où se situent les gros ordres (whales) pour anticiper les mouvements.`,
    quiz: []
  },

  // 3. Gestion du risque et exécution
  'what-is-leverage-in-trading': {
    id: 'what-is-leverage-in-trading',
    title: "Qu'est-ce que le Leverage ?",
    category: 'Trading - Risque',
    objective: "Comprendre l'effet de levier",
    content: `# Qu'est-ce que le Leverage ?

Le leverage (levier) vous permet de trader avec plus d'argent que vous n'en avez.

## Exemple
Avec un levier x10 :
- Vous déposez 100€
- Vous tradez comme si vous aviez 1000€
- Un mouvement de +10% = +100€ de profit (100% sur votre capital)
- Mais un mouvement de -10% = -100€ (vous êtes liquidé)

## Dangers
⚠️ Le leverage amplifie AUSSI les pertes !
⚠️ Plus le levier est élevé, plus vite vous pouvez être liquidé

## Recommandation
Débutants : x2-x3 maximum
Expérimentés : x5-x10
Pros : x10-x20`,
    quiz: []
  },
  'position-sizing': {
    id: 'position-sizing',
    title: "Calcul de la taille de position",
    category: 'Trading - Risque',
    objective: "Calculer la bonne taille de position",
    content: `# Calcul de la taille de position

La taille de position détermine combien vous risquez par trade.

## Formule
Taille = (Capital × % Risque) ÷ (Distance Stop-Loss en %)

## Exemple
- Capital : 1000€
- Risque accepté : 2% (20€)
- Stop-loss : 5% du prix d'entrée

Taille = (1000 × 0.02) ÷ 0.05 = 400€

Donc vous pouvez trader 400€ de cet actif.`,
    quiz: []
  },
  'risk-management': {
    id: 'risk-management',
    title: "Gestion du risque dans le trading",
    category: 'Trading - Risque',
    objective: "Protéger son capital",
    content: `# Gestion du risque

La gestion du risque est plus importante que votre stratégie d'entrée.

## Règles essentielles
1. **1-2% max par trade** : Avec 50 trades perdants consécutifs à 2%, vous perdez 63%. Avec 5% par trade, vous êtes ruiné en 20 trades.

2. **Ratio R:R minimum 1:2** : Si vous perdez 50% du temps avec un R:R de 1:2, vous êtes rentable.

3. **Stop-loss TOUJOURS** : Sans exception. Jamais.

4. **Diversification** : Ne mettez pas tout sur un seul trade.`,
    quiz: []
  },
  'market-orders': {
    id: 'market-orders',
    title: "Types d'ordres de trading",
    category: 'Trading - Risque',
    objective: "Maîtriser les ordres",
    content: `# Types d'ordres

## Market Order
Achète/vend immédiatement au prix du marché.
⚠️ Attention au slippage en cas de faible liquidité.

## Limit Order
Achète/vend uniquement à un prix spécifique ou meilleur.
✅ Vous contrôlez le prix, mais l'ordre peut ne pas être rempli.

## Stop-Loss Order
Vend automatiquement si le prix atteint un certain niveau.
✅ Protège vos profits et limite vos pertes.

## Take-Profit Order
Vend automatiquement quand votre objectif de profit est atteint.
✅ Sécurise vos gains.`,
    quiz: []
  },

  // 4. Stratégies de trading actives
  'scalping-strategy': {
    id: 'scalping-strategy',
    title: "Stratégie de scalping",
    category: 'Trading - Stratégies',
    objective: "Maîtriser le scalping",
    content: `# Stratégie de scalping

Le scalping consiste à faire de nombreux trades courts pour des petits profits.

## Setup
- Timeframe : 1m, 5m, 15m
- Indicateurs : EMA 9/21, RSI, Volume
- Spread faible et haute liquidité essentiels

## Exemple de stratégie
1. Attendre que le prix touche EMA 21
2. Confirmer avec RSI < 30 (oversold) ou > 70 (overbought)
3. Entrer avec un stop serré (0.5-1%)
4. Take profit rapide (0.5-2%)

⚠️ Très stressant, nécessite discipline et rapidité`,
    quiz: []
  },
  'swing-trading-strategy': {
    id: 'swing-trading-strategy',
    title: "Stratégie de swing trading",
    category: 'Trading - Stratégies',
    objective: "Capturer les swings",
    content: `# Stratégie de swing trading

Le swing trading capture les mouvements moyens sur plusieurs jours.

## Setup
- Timeframe : 4H, Daily
- Indicateurs : EMA 50/200, RSI, Support/Résistance
- Tenir 3-10 jours généralement

## Exemple de stratégie
1. Identifier la tendance avec EMA 200
2. Attendre un retracement sur support ou EMA 50
3. Confirmer avec bougie de retournement
4. Entrer avec R:R minimum 1:3
5. Tenir jusqu'au prochain niveau de résistance`,
    quiz: []
  },
  'breakout-trading': {
    id: 'breakout-trading',
    title: "Trading de breakouts",
    category: 'Trading - Stratégies',
    objective: "Trader les cassures",
    content: `# Trading de breakouts

Trader les cassures de niveaux importants avec volume.

## Setup de breakout
1. Identifier un range ou une résistance forte
2. Attendre la cassure avec VOLUME élevé
3. Attendre un retest du niveau cassé
4. Entrer sur la confirmation

⚠️ Beaucoup de faux breakouts ! Toujours confirmer.`,
    quiz: []
  },
  'range-trading': {
    id: 'range-trading',
    title: "Trading en range",
    category: 'Trading - Stratégies',
    objective: "Trader les consolidations",
    content: `# Trading en range

Profiter des oscillations entre support et résistance.

## Stratégie
1. Identifier un range clair (support/résistance testés 3+ fois)
2. Acheter près du support
3. Vendre près de la résistance
4. Stop-loss en dehors du range

⚠️ Sortir dès que le range est cassé !`,
    quiz: []
  },
  'arbitrage': {
    id: 'arbitrage',
    title: "Arbitrage",
    category: 'Trading - Stratégies',
    objective: "Profiter des différences de prix",
    content: `# Arbitrage

Profiter des différences de prix d'un même actif sur différentes plateformes.

## Exemple
BTC est à 40 000$ sur Binance et 40 200$ sur Coinbase.
→ Acheter sur Binance, vendre sur Coinbase = 200$ de profit.

## Limites
- Frais de transaction
- Vitesse d'exécution
- Temps de transfert
- Ces opportunités disparaissent vite`,
    quiz: []
  },
  'grid-trading': {
    id: 'grid-trading',
    title: "Grid Trading",
    category: 'Trading - Stratégies',
    objective: "Automatiser avec une grille",
    content: `# Grid Trading

Placer des ordres d'achat et de vente à intervalles réguliers.

## Comment ça marche ?
Créer une "grille" d'ordres :
- Ordres d'achat tous les 2% en dessous du prix
- Ordres de vente tous les 2% au-dessus du prix

À chaque mouvement, vous achetez bas et vendez haut automatiquement.

## Idéal pour
Les marchés en range (pas en tendance forte).`,
    quiz: []
  }
};

// Module 2 - Parcours Investissement
export const investingPath: Record<string, Lesson> = {
  'allocation-strategies': {
    id: 'allocation-strategies',
    title: "Allocation de portefeuille",
    category: 'Investissement - Bases',
    objective: "Construire un portefeuille équilibré",
    content: `# Allocation de portefeuille

## Stratégie conservatrice (faible risque)
- 60% BTC
- 30% ETH
- 10% stablecoins

## Stratégie modérée
- 40% BTC
- 30% ETH
- 20% Top 20 altcoins
- 10% small caps

## Stratégie agressive (haut risque)
- 30% BTC/ETH
- 40% Top 50 altcoins
- 30% small caps / nouveaux projets

Adaptez selon votre tolérance au risque !`,
    quiz: []
  },
  'drawdown-management': {
    id: 'drawdown-management',
    title: "Gestion des drawdowns",
    category: 'Investissement - Bases',
    objective: "Survivre aux corrections",
    content: `# Gestion des drawdowns

Un drawdown, c'est la baisse depuis le plus haut point.

## Drawdowns typiques en crypto
- **-20 à -30%** : Correction normale
- **-50%** : Correction sévère
- **-80%+** : Bear market

## Comment gérer ?
1. Ne vérifiez pas votre portfolio 10x par jour
2. Gardez des stablecoins pour moyenner à la baisse (DCA down)
3. Rappelez-vous pourquoi vous avez investi
4. Les drawdowns de -80% se sont toujours récupérés dans le passé`,
    quiz: []
  }
};

// Module 2 - On-chain & Analytics
export const onchainPath: Record<string, Lesson> = {
  'block-explorers': {
    id: 'block-explorers',
    title: "Explorateurs de blocs (bases)",
    category: 'On-chain',
    objective: "Utiliser Etherscan et autres",
    content: `# Explorateurs de blocs

## Qu'est-ce qu'un block explorer ?
Un site web qui vous permet d'explorer la blockchain.

## Explorateurs populaires
- **Etherscan** : Ethereum
- **BscScan** : Binance Smart Chain
- **Polygonscan** : Polygon
- **Solscan** : Solana

## Ce que vous pouvez voir
- Transactions
- Adresses de wallets
- Smart contracts
- Tokens
- Gas fees`,
    quiz: []
  },
  'dune-basics': {
    id: 'dune-basics',
    title: "Dune Analytics — bases",
    category: 'On-chain',
    objective: "Analyser les données on-chain",
    content: `# Dune Analytics

Dune permet de créer des dashboards pour analyser les données blockchain.

## Utilisations
- Volume de trading sur DEX
- Nombre d'utilisateurs actifs
- TVL (Total Value Locked) par protocole
- Flux de tokens

C'est comme Google Analytics mais pour la blockchain.`,
    quiz: []
  }
};

// Module 2 - Dérivés
export const derivativesPath: Record<string, Lesson> = {
  'perps-funding': {
    id: 'perps-funding',
    title: "Perpétuels & funding rates",
    category: 'Dérivés',
    objective: "Comprendre les contrats perpétuels",
    content: `# Perpétuels & Funding Rates

## Contrats perpétuels
Comme les futures, mais sans date d'expiration.

## Funding Rate
Frais périodique échangé entre longs et shorts pour maintenir le prix du contrat proche du spot.

- **Funding positif** : Les longs paient les shorts (marché trop bullish)
- **Funding négatif** : Les shorts paient les longs (marché trop bearish)`,
    quiz: []
  }
};

// Module 2 - Automatisation
export const automationPath: Record<string, Lesson> = {
  'portfolio-trackers': {
    id: 'portfolio-trackers',
    title: "Trackers & reporting",
    category: 'Automatisation',
    objective: "Suivre son portfolio",
    content: `# Portfolio Trackers

## Outils populaires
- **CoinGecko** : Gratuit, simple
- **CoinMarketCap** : Gratuit, très complet
- **Delta** : App mobile excellente
- **Zapper** : Pour DeFi

## Fonctionnalités utiles
- Prix en temps réel
- Alertes de prix
- Historique de transactions
- Calcul de P&L (Profit & Loss)`,
    quiz: []
  },
  'dca-automation': {
    id: 'dca-automation',
    title: "Automatiser le DCA",
    category: 'Automatisation',
    objective: "DCA automatique",
    content: `# Automatiser le DCA

DCA = Dollar Cost Averaging (acheter régulièrement la même somme).

## Pourquoi automatiser ?
- Supprime l'émotion
- Discipline automatique
- Moyennage du prix d'achat

## Où automatiser ?
- Binance (Recurring Buy)
- Coinbase (Recurring Orders)
- Kraken (Scheduled Orders)

Exemple : Acheter 100€ de BTC tous les lundis.`,
    quiz: []
  }
};

// Module 2 - Airdrops
export const airdropsPath: Record<string, Lesson> = {
  'eligibility-research': {
    id: 'eligibility-research',
    title: "Éligibilité & recherche",
    category: 'Airdrops',
    objective: "Trouver les airdrops",
    content: `# Éligibilité & Recherche

## Qu'est-ce qu'un airdrop ?
Distribution gratuite de tokens aux early adopters d'un protocole.

## Comment devenir éligible ?
1. Utiliser le protocole (swap, liquidity, bridge)
2. Interagir plusieurs fois
3. Garder des fonds dans le protocole
4. Participer à la gouvernance

## Où chercher ?
- Twitter Crypto
- Discord des projets
- Airdrops.io
- DefiLlama`,
    quiz: []
  },
  'wallet-hygiene': {
    id: 'wallet-hygiene',
    title: "Hygiène wallet pour airdrops",
    category: 'Airdrops',
    objective: "Optimiser pour les airdrops",
    content: `# Hygiène Wallet

## Règles d'or
1. **Séparer les wallets** : Un wallet par activité
2. **Pas de bot behavior** : Variez les montants et timings
3. **Transactions régulières** : Restez actif
4. **Éviter Sybil** : Ne pas copier le même pattern sur 50 wallets

## Red flags
- Toujours les mêmes montants
- Transactions en même temps
- Wallet vide après une semaine`,
    quiz: []
  }
};

export const allModule2Lessons = {
  ...tradingPath,
  ...investingPath,
  ...onchainPath,
  ...derivativesPath,
  ...automationPath,
  ...airdropsPath
};
