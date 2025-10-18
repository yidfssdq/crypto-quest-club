import { Lesson } from '@/types/course';

// Fundamental Analysis Category - French Lessons
export const fundamentalLessonsFr: Record<string, Lesson> = {
  'fundamental-analysis-basics': {
    id: 'fundamental-analysis-basics',
    title: 'Analyse Fondamentale - Les Bases',
    category: 'fundamental',
    objective: 'Comprendre l\'analyse fondamentale et son application en crypto',
    content: `**Introduction**

L'analyse fondamentale (FA) est l'étude des facteurs économiques, financiers et autres qui influencent la valeur d'un actif crypto. Contrairement à l'analyse technique, qui se base sur les graphiques, l'analyse fondamentale cherche à comprendre la valeur intrinsèque d'un projet.

**Explications détaillées**

**Projet et équipe**
Vérifier l'équipe derrière le projet, leur expérience et crédibilité. Une équipe solide avec un track record prouvé est essentielle.

**Livre blanc (Whitepaper)**
Comprendre la technologie, le problème résolu et l'utilité du token. Le whitepaper est le document fondateur qui explique la vision du projet.

**Tokenomics**
Étudier l'émission, l'offre totale, l'inflation et le rôle du token. La tokenomics détermine la valeur potentielle à long terme.

**Adoption et communauté**
Plus le projet est adopté et soutenu, plus sa valeur potentielle augmente. Une communauté active est un signe de santé du projet.

**Partenariats et investisseurs**
Les collaborations stratégiques peuvent booster la légitimité. Les investisseurs de renom apportent crédibilité et ressources.

**Application pratique**

Analyser un projet crypto récent et évaluer son potentiel sur 3 critères : équipe, technologie et adoption.

**Exemple concret**

Ethereum : fort écosystème, adoption massive, développement actif → valeur fondamentale élevée.

**Résumé / Points clés**

✓ FA = comprendre la valeur intrinsèque d'un projet
✓ Se concentrer sur équipe, technologie, adoption, tokenomics
✓ FA complète = meilleur choix d'investissement long terme`,
    quiz: [
      {
        question: 'Quelle est la différence entre analyse technique et fondamentale ?',
        options: ['L\'AT étudie les graphiques, l\'AF étudie la valeur intrinsèque', 'C\'est la même chose', 'L\'AT est pour le long terme'],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi le livre blanc est-il important ?',
        options: ['Pour connaître le prix', 'Pour comprendre la technologie et la vision', 'Pour voir les graphiques'],
        correctAnswer: 1
      },
      {
        question: 'Quels facteurs influencent l\'adoption d\'un projet ?',
        options: ['Uniquement le prix', 'Communauté, utilité, partenariats', 'La couleur du logo'],
        correctAnswer: 1
      },
      {
        question: 'Que signifie "tokenomics" ?',
        options: ['L\'économie et l\'utilité du token', 'Le prix du token', 'Le nombre de tokens'],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi analyser l\'équipe du projet est essentiel ?',
        options: ['Pour connaître leur âge', 'Pour vérifier leur expérience et crédibilité', 'Ce n\'est pas important'],
        correctAnswer: 1
      }
    ]
  },

  'interesting-site-links': {
    id: 'interesting-site-links',
    title: 'Sites et Ressources Utiles',
    category: 'fundamental',
    objective: 'Connaître les meilleurs outils pour suivre le marché crypto',
    content: `**Introduction**

Il existe de nombreux sites et outils pour suivre le marché crypto et s'informer sur les projets. Cette leçon liste les plus utiles.

**Explications détaillées**

**CoinMarketCap / CoinGecko**
Suivi des prix, volumes et capitalisations en temps réel. Ces sites sont essentiels pour tout trader crypto.
- Prix en temps réel
- Classement par capitalisation
- Données historiques
- Liens vers les projets

**Messari.io**
Analyse approfondie de projets et crypto-monnaies. Messari fournit des recherches de qualité institutionnelle.
- Rapports détaillés
- Métriques avancées
- Analyses fondamentales

**Glassnode / CryptoQuant**
Données on-chain et métriques avancées. Ces outils permettent d'analyser les mouvements sur la blockchain.
- Flux des exchanges
- Comportement des whales
- Indicateurs on-chain

**TradingView**
Graphiques et indicateurs techniques. La référence pour l'analyse technique.
- Graphiques professionnels
- Indicateurs personnalisables
- Alertes de prix

**Reddit / Twitter**
Communautés et informations en temps réel. Suivre les discussions et annonces importantes.
- r/CryptoCurrency
- Comptes officiels des projets
- Influenceurs crypto

**Application pratique**

Créer une liste de favoris et configurer des alertes sur les projets suivis.

**Exemple concret**

Suivre Ethereum sur CoinGecko et mettre en place une alerte prix sur TradingView.

**Résumé / Points clés**

✓ Sites essentiels : CoinMarketCap, CoinGecko, Messari
✓ Suivre données on-chain : Glassnode
✓ S'informer via communautés : Reddit, Twitter`,
    quiz: [
      {
        question: 'Quel site est idéal pour suivre les prix et volumes crypto ?',
        options: ['Facebook', 'CoinMarketCap', 'Instagram'],
        correctAnswer: 1
      },
      {
        question: 'Quelle plateforme fournit des données on-chain détaillées ?',
        options: ['Glassnode', 'Twitter', 'YouTube'],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi Twitter est utile pour le trading crypto ?',
        options: ['Pour voir des photos', 'Pour suivre les annonces en temps réel', 'Pour jouer'],
        correctAnswer: 1
      },
      {
        question: 'Quelle différence entre CoinMarketCap et Messari ?',
        options: ['Messari fournit des analyses approfondies', 'Aucune différence', 'CoinMarketCap est payant'],
        correctAnswer: 0
      },
      {
        question: 'Que signifie "alertes prix" ?',
        options: ['Un danger', 'Une notification quand le prix atteint un niveau', 'Une erreur'],
        correctAnswer: 1
      }
    ]
  },

  'trading-sessions': {
    id: 'trading-sessions',
    title: 'Sessions de Trading - WS / Asian / London',
    category: 'fundamental',
    objective: 'Comprendre l\'impact des sessions de trading sur la volatilité',
    content: `**Introduction**

Les marchés crypto sont actifs 24/7, mais certaines heures sont plus volatiles selon les sessions financières mondiales : Asie, Londres, Wall Street.

**Explications détaillées**

**Asian Session (Tokyo, Singapour)**
0h-9h UTC, volatilité modérée, tendances souvent de continuation.
- Marché plus calme
- Mouvements lents
- Idéal pour scalping prudent

**London Session**
8h-17h UTC, forte liquidité, mouvements importants sur BTC et ETH.
- Haute volatilité
- Volume important
- Opportunités de breakout

**Wall Street Session**
13h-22h UTC, volatilité maximale, nouvelles économiques influencent fortement.
- Volatilité maximale
- Impact des nouvelles US
- Overlap avec London = meilleur moment

**Chevauchement sessions**
Moments de plus grande volatilité = opportunités de trading.
- London + Wall Street (13h-17h UTC) = meilleur moment
- Plus de liquidité
- Mouvements plus importants

**Application pratique**

Analyser les tendances BTC lors de la session Londres et comparer avec l'Asie.

**Exemple concret**

BTC souvent stable pendant l'Asian Session, puis bouge fortement à l'ouverture de Londres et Wall Street.

**Résumé / Points clés**

✓ Sessions définissent la volatilité
✓ Chevauchements = meilleure liquidité et mouvements
✓ Adapter stratégie au timing`,
    quiz: [
      {
        question: 'Quelle session a généralement la plus forte volatilité ?',
        options: ['Asian Session', 'Wall Street Session', 'Aucune'],
        correctAnswer: 1
      },
      {
        question: 'Quelle est l\'Asian Session en UTC ?',
        options: ['0h-9h', '13h-22h', '8h-17h'],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi le chevauchement des sessions est important ?',
        options: ['Ce n\'est pas important', 'Plus de volatilité et liquidité', 'Moins de mouvement'],
        correctAnswer: 1
      },
      {
        question: 'Quelle session est influencée par les nouvelles économiques US ?',
        options: ['Asian Session', 'London Session', 'Wall Street Session'],
        correctAnswer: 2
      },
      {
        question: 'Quelle session est idéale pour les traders débutants cherchant moins de volatilité ?',
        options: ['Wall Street', 'Asian Session', 'London'],
        correctAnswer: 1
      }
    ]
  },

  'tokenomics': {
    id: 'tokenomics',
    title: 'Tokenomics - Économie des Tokens',
    category: 'fundamental',
    objective: 'Comprendre l\'économie et la valeur des tokens',
    content: `**Introduction**

La tokenomics étudie l'économie des tokens : leur création, distribution, utilisation et valeur potentielle.

**Explications détaillées**

**Supply / Offre totale**
Max supply vs circulating supply.
- **Max Supply** : nombre total de tokens qui existeront
- **Circulating Supply** : tokens actuellement en circulation
- **Total Supply** : tokens déjà créés

**Inflation / Déflation**
Certains tokens sont émis régulièrement, d'autres brûlés.
- **Inflationniste** : nouveaux tokens créés régulièrement
- **Déflationniste** : tokens brûlés régulièrement
- Impact sur la valeur

**Utilité du token**
Governance, staking, paiements, NFT.
- **Governance** : voter sur les décisions
- **Staking** : bloquer pour gagner des récompenses
- **Utility** : payer des frais, services
- **Rewards** : récompenses pour utilisateurs

**Récompenses et incitations**
Motivent adoption et staking.
- APY/APR du staking
- Programmes de récompenses
- Distribution équitable

**Application pratique**

Analyser un token pour comprendre s'il est inflationniste ou déflationniste et son utilité.

**Exemple concret**

BNB : offre limitée, burn régulier → effet déflationniste → valeur augmente potentiellement.

**Résumé / Points clés**

✓ Comprendre supply et utilité
✓ Étudier mécanismes inflation/déflation
✓ Vérifier incitations à l'adoption`,
    quiz: [
      {
        question: 'Qu\'est-ce que l\'offre totale d\'un token ?',
        options: ['Le prix du token', 'Le nombre maximum de tokens qui existeront', 'Le nombre de holders'],
        correctAnswer: 1
      },
      {
        question: 'Quel est l\'effet d\'un burn régulier sur un token ?',
        options: ['Augmente l\'offre', 'Réduit l\'offre - effet déflationniste', 'Aucun effet'],
        correctAnswer: 1
      },
      {
        question: 'Quels rôles un token peut-il avoir ?',
        options: ['Uniquement paiement', 'Governance, staking, utility, rewards', 'Aucun rôle'],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce que la tokenomics ?',
        options: ['Le prix du token', 'L\'économie et les mécanismes du token', 'Le logo du projet'],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi l\'utilité du token est-elle importante ?',
        options: ['Ce n\'est pas important', 'Elle détermine la demande et la valeur', 'Pour le design'],
        correctAnswer: 1
      }
    ]
  },

  'onchain-analysis': {
    id: 'onchain-analysis',
    title: 'Analyse On-Chain',
    category: 'fundamental',
    objective: 'Utiliser les données blockchain pour anticiper les mouvements',
    content: `**Introduction**

L'analyse on-chain observe les données enregistrées sur la blockchain pour anticiper les mouvements de prix.

**Explications détaillées**

**Wallets actifs / flux entrants et sortants**
Analyser le nombre de wallets actifs et les flux de crypto.
- Augmentation wallets actifs = intérêt croissant
- Flux vers exchanges = vente potentielle
- Flux hors exchanges = accumulation

**Transactions et volumes**
Suivre le nombre et la taille des transactions.
- Volume élevé = forte activité
- Grosses transactions = whales actives
- Petites transactions = retail

**Hodlers vs traders**
Distinguer les détenteurs long terme des traders.
- Long Term Holders (LTH) = stabilité
- Short Term Holders (STH) = volatilité
- Ratio LTH/STH = sentiment marché

**Tendances d'accumulation et de distribution**
Identifier si les whales accumulent ou distribuent.
- Accumulation = signal haussier
- Distribution = signal baissier
- Zones d'accumulation = supports potentiels

**Application pratique**

Utiliser Glassnode pour observer le nombre de BTC détenus par les whales et anticiper la volatilité.

**Exemple concret**

Un gros transfert BTC sur un exchange → possible vente massive → baisse de prix.

**Résumé / Points clés**

✓ On-chain = comprendre comportement des investisseurs
✓ Flux et wallets = anticiper mouvements
✓ Données fiables pour trading stratégique`,
    quiz: [
      {
        question: 'Que mesure l\'analyse on-chain ?',
        options: ['Uniquement le prix', 'Les données enregistrées sur la blockchain', 'Les réseaux sociaux'],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi suivre les whales est important ?',
        options: ['Ce n\'est pas important', 'Leurs mouvements peuvent influencer le marché', 'Pour connaître leur identité'],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'un wallet actif ?',
        options: ['Un wallet qui fait des transactions', 'Un wallet vide', 'Un wallet fermé'],
        correctAnswer: 0
      },
      {
        question: 'Comment identifier une accumulation ?',
        options: ['Prix qui monte', 'Flux sortants des exchanges', 'Flux vers les exchanges'],
        correctAnswer: 1
      },
      {
        question: 'Quel site fournit ces données ?',
        options: ['Facebook', 'Glassnode', 'Instagram'],
        correctAnswer: 1
      }
    ]
  },

  'news-trading': {
    id: 'news-trading',
    title: 'News Trading - Trading sur Actualités',
    category: 'fundamental',
    objective: 'Profiter des mouvements créés par les actualités',
    content: `**Introduction**

Le news trading consiste à trader en fonction des actualités et annonces économiques ou crypto.

**Explications détaillées**

**Types de news**
Régulation, partenariats, hacks, mises à jour protocoles.
- **Régulation** : lois, interdictions, acceptations
- **Partenariats** : collaborations institutionnelles
- **Hacks** : piratages, failles de sécurité
- **Updates** : hard forks, nouvelles fonctionnalités

**Impact sur le marché**
Volatilité forte immédiate.
- News positive = pump rapide
- News négative = dump rapide
- Volatilité extrême = opportunités et risques

**Stratégies**
Scalping rapide, protection par stop-loss, suivre calendrier économique.
- Entrer rapidement après annonce
- Stop-loss strict obligatoire
- Take profit rapide
- Ne pas hold pendant news

**Application pratique**

Réagir à une annonce SEC ou à un hard fork important.

**Exemple concret**

Annonce de l'adoption d'Ethereum par une grande entreprise → hausse rapide du prix.

**Résumé / Points clés**

✓ News trading = opportunités de court terme
✓ Nécessite vigilance et rapidité
✓ Stop-loss indispensable`,
    quiz: [
      {
        question: 'Quelle news peut influencer le prix de la crypto ?',
        options: ['Uniquement la météo', 'Régulation, partenariats, hacks', 'Rien n\'influence'],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce que le scalping ?',
        options: ['Holding long terme', 'Trading rapide sur petits mouvements', 'Ne rien faire'],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi utiliser stop-loss avec news trading ?',
        options: ['Ce n\'est pas utile', 'Pour se protéger de la volatilité extrême', 'Pour gagner plus'],
        correctAnswer: 1
      },
      {
        question: 'Quelle est la différence entre news positive et négative ?',
        options: ['Aucune', 'Positive = hausse, Négative = baisse', 'C\'est aléatoire'],
        correctAnswer: 1
      },
      {
        question: 'Quel outil permet de suivre rapidement les news crypto ?',
        options: ['CryptoPanic', 'Un journal papier', 'La radio'],
        correctAnswer: 0
      }
    ]
  },

  'economic-calendar': {
    id: 'economic-calendar',
    title: 'Calendrier Économique',
    category: 'fundamental',
    objective: 'Anticiper les événements qui influencent le marché',
    content: `**Introduction**

Un calendrier économique permet de suivre les événements qui influencent les marchés financiers et indirectement le marché crypto.

**Explications détaillées**

**Principaux indicateurs**
Inflation, taux d'intérêt, chômage, PIB.
- **Taux d'intérêt** : impact majeur sur tous les marchés
- **Inflation** : détermine politique monétaire
- **Chômage** : santé économique
- **PIB** : croissance économique

**Calendrier**
Planning précis des publications.
- Dates et heures des annonces
- Impact attendu (faible/moyen/élevé)
- Prévisions vs résultats réels
- Historique des données

**Impact sur crypto**
Les annonces majeures des banques centrales influencent BTC/ETH.
- Hausse taux = baisse crypto généralement
- Baisse taux = hausse crypto généralement
- Inflation élevée = intérêt pour BTC
- Crise économique = volatilité

**Application pratique**

Planifier son trading autour des publications économiques importantes.

**Exemple concret**

Publication des taux FED → forte volatilité sur BTC/USD.

**Résumé / Points clés**

✓ Suivre événements économiques clés
✓ Comprendre impact potentiel sur crypto
✓ Ajuster stratégie selon calendrier`,
    quiz: [
      {
        question: 'Que montre un calendrier économique ?',
        options: ['Les vacances', 'Les publications économiques importantes', 'La météo'],
        correctAnswer: 1
      },
      {
        question: 'Quels indicateurs influencent BTC/ETH ?',
        options: ['Uniquement le nombre de tweets', 'Taux d\'intérêt, inflation, chômage', 'Aucun'],
        correctAnswer: 1
      },
      {
        question: 'Quelle publication crée souvent une forte volatilité ?',
        options: ['Annonce taux FED', 'Prévisions météo', 'Résultats sportifs'],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi planifier le trading autour du calendrier économique ?',
        options: ['Ce n\'est pas utile', 'Pour anticiper la volatilité', 'Pour s\'ennuyer'],
        correctAnswer: 1
      },
      {
        question: 'Quel outil fournit ce calendrier en temps réel ?',
        options: ['Investing.com', 'Un agenda papier', 'Le téléphone'],
        correctAnswer: 0
      }
    ]
  },

  'whale-watching': {
    id: 'whale-watching',
    title: 'Whale Watching - Suivre les Baleines',
    category: 'fundamental',
    objective: 'Anticiper les mouvements en suivant les gros détenteurs',
    content: `**Introduction**

Le whale watching consiste à suivre les mouvements des gros détenteurs (whales) de crypto pour anticiper les tendances.

**Explications détaillées**

**Transferts importants**
Vers/depuis exchanges.
- **Vers exchange** : vente potentielle = baissier
- **Hors exchange** : accumulation = haussier
- **Entre wallets** : réorganisation
- **Montant significatif** : >1000 BTC ou équivalent

**Accumulation vs distribution**
Identifier si les whales achètent ou vendent.
- **Accumulation** : achats progressifs, haussier
- **Distribution** : ventes progressives, baissier
- **Redistribution** : changement de trend
- **Consolidation** : phase neutre

**Alertes sur mouvements significatifs**
Recevoir notifications en temps réel.
- Whale Alert (Twitter/Telegram)
- Glassnode alerts
- Exchange whale alerts
- Seuils personnalisables

**Application pratique**

Utiliser Whale Alert pour recevoir des notifications sur gros mouvements BTC/ETH.

**Exemple concret**

Une whale transfère 10 000 BTC vers un exchange → risque vente massive → baisse potentielle du prix.

**Résumé / Points clés**

✓ Whale watching = indicateur avancé de volatilité
✓ Suivre transferts pour anticiper mouvements
✓ Complémentaire à l'analyse technique`,
    quiz: [
      {
        question: 'Qu\'est-ce qu\'une whale en crypto ?',
        options: ['Un animal marin', 'Un gros détenteur de crypto', 'Un petit investisseur'],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi suivre les transferts vers les exchanges ?',
        options: ['Par curiosité', 'Car cela indique une vente potentielle', 'Ce n\'est pas important'],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce que l\'accumulation ?',
        options: ['Vendre progressivement', 'Acheter progressivement', 'Ne rien faire'],
        correctAnswer: 1
      },
      {
        question: 'Quel outil permet de suivre les whales ?',
        options: ['Whale Alert', 'Facebook', 'Snapchat'],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi whale watching est utile pour le trading ?',
        options: ['Ce n\'est pas utile', 'Pour anticiper les gros mouvements de marché', 'Pour s\'amuser'],
        correctAnswer: 1
      }
    ]
  }
};

// Export English version will be added separately
export const fundamentalLessonsEn: Record<string, Lesson> = {};
