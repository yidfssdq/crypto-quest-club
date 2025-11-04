// Structure des modules et chapitres pour la navigation

export interface Chapter {
  id: string;
  title: string;
  icon: string;
  lessons: string[];
}

export interface Module {
  id: string;
  title: string;
  titleEn: string;
  icon: string;
  chapters: Chapter[];
  isPremium?: boolean;
}

export const moduleStructure: Module[] = [
  {
    id: 'module1',
    title: '🧠 MODULE 1 — Les Fondamentaux de la Crypto',
    titleEn: '🧠 MODULE 1 — Crypto Fundamentals',
    icon: '🧠',
    isPremium: false,
    chapters: [
      {
        id: 'module1-ch1',
        title: '📍 Comprendre l\'argent, Internet et le Web3',
        icon: '📍',
        lessons: [
          'money-evolution',
          'what-is-fiat',
          'internet-evolution',
          'data-ownership',
          'web3-intro',
          'decentralization',
          'blockchain-intro',
          'consensus'
        ]
      },
      {
        id: 'module1-ch2',
        title: '🪙 La crypto-monnaie et son écosystème',
        icon: '🪙',
        lessons: [
          'bitcoin-story',
          'ethereum-smart-contracts',
          'altcoins',
          'stablecoins',
          'tokenomics',
          'wallets',
          'metamask-tutorial',
          'send-receive',
          'cex-vs-dex',
          'bridges'
        ]
      },
      {
        id: 'module1-ch3',
        title: '⚙️ La DeFi et les services du Web3',
        icon: '⚙️',
        lessons: [
          'what-is-defi',
          'liquidity-pools',
          'yield-farming',
          'staking'
        ]
      },
      {
        id: 'module1-ch4',
        title: '🧩 Les NFT, DAO et le Web3 Social',
        icon: '🧩',
        lessons: [
          'what-is-nft',
          'dao-intro'
        ]
      },
      {
        id: 'module1-ch5',
        title: '🛡️ Sécurité, risques et fiscalité',
        icon: '🛡️',
        lessons: [
          'private-keys-security',
          'scams',
          'rug-pulls'
        ]
      }
    ]
  },
  {
    id: 'module2',
    title: '🚀 MODULE 2 — Crypto Pro : Pratique, Trading & Stratégies',
    titleEn: '🚀 MODULE 2 — Crypto Pro: Practice, Trading & Strategies',
    icon: '🚀',
    isPremium: true,
    chapters: [
      {
        id: 'trading-basics',
        title: '📘 PARCOURS TRADING - Bases et mindset',
        icon: '🧩',
        lessons: [
          '6-rules-of-trading',
          'type-of-trader',
          'trading-terms',
          'market-psychology',
          'trading-journal'
        ]
      },
      {
        id: 'trading-technical',
        title: '📊 PARCOURS TRADING - Analyse technique',
        icon: '📊',
        lessons: [
          'market-structure',
          'support-resistance',
          'candlestick-patterns',
          'chart-patterns',
          'moving-averages',
          'rsi',
          'macd',
          'fib-retracement',
          'volume-profile',
          'order-flow'
        ]
      },
      {
        id: 'trading-risk',
        title: '⚙️ PARCOURS TRADING - Gestion du risque',
        icon: '⚙️',
        lessons: [
          'what-is-leverage-in-trading',
          'position-sizing',
          'risk-management',
          'market-orders'
        ]
      },
      {
        id: 'trading-strategies',
        title: '🧠 PARCOURS TRADING - Stratégies actives',
        icon: '🧠',
        lessons: [
          'scalping-strategy',
          'swing-trading-strategy',
          'breakout-trading',
          'range-trading',
          'arbitrage',
          'grid-trading'
        ]
      },
      {
        id: 'investing-path',
        title: '💼 PARCOURS INVESTISSEMENT',
        icon: '🌱',
        lessons: [
          'allocation-strategies',
          'drawdown-management'
        ]
      },
      {
        id: 'onchain-path',
        title: '🔍 On-chain & Analytics',
        icon: '🔬',
        lessons: [
          'block-explorers',
          'dune-basics'
        ]
      },
      {
        id: 'derivatives-path',
        title: '📊 Dérivés (Futures & Options)',
        icon: '📊',
        lessons: [
          'perps-funding'
        ]
      },
      {
        id: 'automation-path',
        title: '🤖 Automatisation & Outils',
        icon: '🤖',
        lessons: [
          'portfolio-trackers',
          'dca-automation'
        ]
      },
      {
        id: 'airdrops-path',
        title: '🎁 Airdrops & Quêtes',
        icon: '🎁',
        lessons: [
          'eligibility-research',
          'wallet-hygiene'
        ]
      }
    ]
  }
];

// Fonction helper pour obtenir tous les cours d'un module
export const getAllLessonsFromModule = (moduleId: string): string[] => {
  const module = moduleStructure.find(m => m.id === moduleId);
  if (!module) return [];
  
  return module.chapters.flatMap(chapter => chapter.lessons);
};

// Fonction helper pour vérifier si un cours est premium
export const isLessonPremium = (lessonId: string): boolean => {
  for (const module of moduleStructure) {
    for (const chapter of module.chapters) {
      if (chapter.lessons.includes(lessonId)) {
        return module.isPremium || false;
      }
    }
  }
  return false;
};
