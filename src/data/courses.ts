import { Lesson, Category } from '@/types/course';

export const categories: Category[] = [
  {
    id: 'basics',
    name: 'Bases du trading',
    icon: '🪙',
    lessons: [
      '6-rules-of-trading',
      'type-of-trader',
      'what-is-leverage-in-trading',
      'trading-plan',
      'risk-management',
      'trading-terms',
      'dictionary'
    ]
  },
  {
    id: 'technical',
    name: 'Analyse technique',
    icon: '📈',
    lessons: [
      'boll',
      'stochastic',
      'rsi',
      'order-block',
      'fair-value-gaps',
      'inversion-fair-value-gaps'
    ]
  },
  {
    id: 'fundamental',
    name: 'Analyse fondamentale',
    icon: '🧠',
    lessons: [
      'fundamental-analysis-basics',
      'interesting-site-links',
      'ws-asian-london-session'
    ]
  },
  {
    id: 'misc',
    name: 'Divers',
    icon: '💰',
    lessons: [
      'memecoins-tutorial',
      'ebook-pdf'
    ]
  }
];

export const lessons: Record<string, Lesson> = {
  'risk-management': {
    id: 'risk-management',
    title: 'Gestion du risque dans le trading',
    category: 'basics',
    objective: 'Apprendre à protéger son capital et éviter les pertes inutiles',
    content: `La gestion du risque est la pierre angulaire du trading réussi. Sans une stratégie solide de risk management, même les meilleurs traders finissent par perdre leur capital.

**Pourquoi le Risk Management est crucial ?**

Le trading n'est pas seulement une question de gains, mais surtout de protection de ton capital. Un trader qui ne gère pas ses risques peut avoir raison 90% du temps et tout perdre en quelques mauvais trades. La règle d'or : "Ne jamais risquer plus que ce que tu peux te permettre de perdre."

**La règle des 2%**

C'est l'une des règles fondamentales du trading : ne jamais risquer plus de 2% de ton capital total sur un seul trade. Par exemple, si tu as 1000€ sur ton compte, tu ne devrais pas risquer plus de 20€ par position. Cela te permet d'encaisser plusieurs pertes consécutives sans détruire ton compte.

**Le Stop-Loss : Ton meilleur ami**

Le stop-loss est un ordre automatique qui clôture ta position si le prix atteint un certain niveau de perte. C'est ton filet de sécurité. Définir ton stop-loss AVANT d'entrer en position est essentiel. Ne le déplace jamais pour éviter de sortir d'un trade perdant - c'est le piège de l'espoir qui ruine de nombreux traders.

**Le Ratio Risk/Reward**

Toujours viser un ratio minimum de 1:2 ou 1:3 (risque:récompense). Si tu risques 20€, vise au moins 40€ de gain potentiel. Cela signifie que même avec un taux de réussite de 40%, tu peux être profitable sur le long terme.

**Exemple concret d'un trade bien géré**

Imaginons que tu as 1000€ et tu veux acheter du Bitcoin :
- Capital : 1000€
- Risque maximal (2%) : 20€
- Prix d'entrée : 40,000€
- Stop-loss : 39,600€ (perte de 400€/BTC)
- Tu peux acheter : 20€ ÷ 400€ = 0.05 BTC
- Take profit : 41,200€ (gain de 1200€/BTC = 60€ pour toi)
- Ratio R:R = 60:20 = 1:3 ✅

**Les erreurs à éviter**

Ne jamais moyenner à la baisse (acheter plus quand ça descend pour "récupérer"), ne jamais trader avec de l'argent dont tu as besoin, ne jamais ignorer ton stop-loss, et surtout, ne jamais trader sous le coup de l'émotion.`,
    quiz: [
      {
        question: 'Que signifie la "règle des 2%" ?',
        options: [
          'Ne jamais risquer plus de 2% de ton capital par trade',
          'Toujours risquer 20% minimum',
          'Miser 2% de ton portefeuille sur chaque crypto'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que fait un stop-loss ?',
        options: [
          'Il achète plus de cryptos',
          'Il vend automatiquement en cas de perte',
          'Il bloque les frais'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel est le ratio Risk/Reward minimum recommandé ?',
        options: [
          '1:1',
          '1:2 ou plus',
          '3:1'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que faire si ton trade est en perte et approche du stop-loss ?',
        options: [
          'Déplacer le stop-loss plus loin pour éviter la perte',
          'Acheter plus pour moyenner à la baisse',
          'Laisser le stop-loss se déclencher comme prévu'
        ],
        correctAnswer: 2
      }
    ]
  },
  '6-rules-of-trading': {
    id: '6-rules-of-trading',
    title: 'Les 6 règles d\'or du trading',
    category: 'basics',
    objective: 'Maîtriser les principes fondamentaux pour trader avec succès',
    content: `Ces 6 règles constituent le socle de tout trader performant. Respecte-les religieusement et tu augmenteras considérablement tes chances de succès.

**1. Toujours avoir un plan de trading**

Ne jamais entrer en position sans savoir exactement pourquoi, à quel prix entrer, où placer ton stop-loss et où prendre tes profits. Un plan détaillé élimine les décisions émotionnelles.

**2. Gérer ton risque (Risk Management)**

Comme vu précédemment, ne risque jamais plus de 1-2% de ton capital par trade. Cette règle seule peut faire la différence entre survie et faillite.

**3. Tenir un journal de trading**

Note TOUS tes trades : entrée, sortie, raison, émotion ressentie, résultat. Ce journal est ta meilleure source d'apprentissage. Tu verras rapidement tes patterns d'erreurs.

**4. Contrôler tes émotions**

La peur et la cupidité sont tes pires ennemis. Stick à ton plan, même quand c'est difficile. Un bon trader est discipliné, pas émotionnel.

**5. Ne jamais trader avec de l'argent dont tu as besoin**

Utilise uniquement de l'argent que tu peux te permettre de perdre. Le trading avec de l'argent "urgent" crée un stress insupportable qui conduit à de mauvaises décisions.

**6. Apprendre continuellement**

Les marchés évoluent. Ce qui fonctionnait hier peut ne plus fonctionner demain. Reste humble, continue à apprendre, à tester, à t'adapter. Les meilleurs traders sont des étudiants perpétuels.`,
    quiz: [
      {
        question: 'Quelle est la première chose à faire avant d\'entrer en position ?',
        options: [
          'Acheter immédiatement',
          'Avoir un plan de trading clair',
          'Demander l\'avis sur Twitter'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi tenir un journal de trading ?',
        options: [
          'C\'est obligatoire par la loi',
          'Pour identifier ses erreurs et progresser',
          'Pour impressionner ses amis'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel est le pire ennemi d\'un trader ?',
        options: [
          'Les frais de transaction',
          'Les émotions (peur et cupidité)',
          'Le manque d\'Internet'
        ],
        correctAnswer: 1
      }
    ]
  },
  'type-of-trader': {
    id: 'type-of-trader',
    title: 'Les différents types de traders',
    category: 'basics',
    objective: 'Identifier ton style de trading pour maximiser tes chances de succès',
    content: `Tous les traders ne sont pas pareils. Comprendre les différents styles t'aidera à trouver celui qui correspond le mieux à ta personnalité et ton emploi du temps.

**Le Scalper**

Le scalper réalise des dizaines voire des centaines de trades par jour, avec des positions qui durent de quelques secondes à quelques minutes. Il cherche de petits profits rapides et répétés. Ce style demande une concentration extrême, une excellente connexion Internet et beaucoup de temps devant les écrans.

**Le Day Trader**

Le day trader ouvre et ferme toutes ses positions dans la même journée. Il ne garde jamais de positions overnight. Ce style nécessite plusieurs heures par jour et une bonne maîtrise de l'analyse technique à court terme.

**Le Swing Trader**

Le swing trader garde ses positions de quelques jours à quelques semaines. Il cherche à capturer des "swings" ou mouvements de prix significatifs. Ce style est idéal si tu as un emploi à temps plein car il ne nécessite pas une surveillance constante.

**Le Position Trader (ou Investisseur long terme)**

Ce trader garde ses positions pendant des mois voire des années. Il se base principalement sur l'analyse fondamentale et les tendances macroéconomiques. C'est le style le moins stressant mais qui demande beaucoup de patience.

**Le Trader Algorithmique**

Ce trader utilise des robots et des algorithmes pour trader automatiquement selon des règles prédéfinies. Nécessite des compétences en programmation.

**Quel style te correspond ?**

Demande-toi : combien de temps puis-je consacrer au trading chaque jour ? Quelle est ma tolérance au stress ? Est-ce que je préfère l'action rapide ou la patience ? Tes réponses détermineront ton style optimal.`,
    quiz: [
      {
        question: 'Quelle est la principale caractéristique d\'un scalper ?',
        options: [
          'Il garde ses positions plusieurs mois',
          'Il fait des dizaines de trades par jour',
          'Il ne trade que le Bitcoin'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel style convient le mieux si tu as un travail à temps plein ?',
        options: [
          'Scalping',
          'Day Trading',
          'Swing Trading'
        ],
        correctAnswer: 2
      },
      {
        question: 'Que fait un Day Trader à la fin de la journée ?',
        options: [
          'Il garde toutes ses positions ouvertes',
          'Il ferme toutes ses positions',
          'Il double ses positions'
        ],
        correctAnswer: 1
      }
    ]
  },
  'what-is-leverage-in-trading': {
    id: 'what-is-leverage-in-trading',
    title: 'Qu\'est-ce que le Leverage (effet de levier) ?',
    category: 'basics',
    objective: 'Comprendre l\'effet de levier et ses risques',
    content: `Le leverage est un outil puissant mais extrêmement dangereux. Comprendre son fonctionnement est crucial avant de l'utiliser.

**Qu'est-ce que le Leverage ?**

Le leverage (ou effet de levier) te permet de trader avec plus d'argent que tu n'en as réellement. Par exemple, avec un leverage x10, si tu as 100€, tu peux trader comme si tu avais 1000€.

**Comment ça fonctionne ?**

L'exchange te "prête" temporairement de l'argent pour amplifier ta position. Si le prix évolue en ta faveur, tes gains sont multipliés. Mais attention : tes pertes aussi sont multipliées.

**Exemple concret**

Sans leverage :
- Capital : 100€
- Prix BTC : 40,000€
- Tu achètes : 0.0025 BTC
- Prix monte à 42,000€ (+5%)
- Ton gain : 5€ (nouveau total : 105€)

Avec leverage x10 :
- Capital : 100€
- Position équivalente : 1000€
- Tu contrôles : 0.025 BTC
- Prix monte à 42,000€ (+5%)
- Ton gain : 50€ (nouveau total : 150€) 🎉

Mais si le prix descend de 5% :
- Sans leverage : perte de 5€ (reste 95€)
- Avec leverage x10 : perte de 50€ (reste 50€) 😱

**Les dangers du Leverage**

Avec un leverage élevé, une variation de seulement 10% contre toi peut liquider entièrement ta position. La liquidation signifie que l'exchange ferme automatiquement ta position et tu perds tout ton capital investi.

**Règle d'or**

Si tu es débutant, NE PAS utiliser de leverage. Une fois expérimenté, limite-toi à x2 ou x3 maximum. Les leverages x50 ou x100 sont des pièges à débutants.

**Cross vs Isolated Margin**

En mode Cross, tout ton capital peut être utilisé pour maintenir la position. En mode Isolated, seul le capital alloué à cette position spécifique est à risque. Préfère toujours le mode Isolated.`,
    quiz: [
      {
        question: 'Qu\'est-ce que le leverage x10 ?',
        options: [
          'Tu trades avec 10 fois ton capital',
          'Tu gagnes 10€ par trade',
          'Tu peux faire 10 trades'
        ],
        correctAnswer: 0
      },
      {
        question: 'Avec leverage x5, si le prix baisse de 20%, que se passe-t-il ?',
        options: [
          'Tu perds 20€',
          'Tu es liquidé (perte totale)',
          'Tu doubles ton argent'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel mode de marge est recommandé pour limiter les risques ?',
        options: [
          'Cross Margin',
          'Isolated Margin',
          'Full Margin'
        ],
        correctAnswer: 1
      }
    ]
  },
  'trading-plan': {
    id: 'trading-plan',
    title: 'Créer un plan de trading efficace',
    category: 'basics',
    objective: 'Construire un plan de trading personnalisé et le suivre rigoureusement',
    content: `Un plan de trading est ta feuille de route. Sans plan, tu navigues à l'aveugle.

**Les composantes d'un bon plan de trading**

**1. Tes objectifs**
Définis des objectifs réalistes et mesurables : "Je vise 5% de gain par mois" plutôt que "Je veux devenir riche".

**2. Ton style de trading**
Scalping, day trading, swing trading ? Choisis en fonction de ton temps disponible et ta personnalité.

**3. Tes règles d'entrée**
Quelles conditions doivent être réunies pour que tu entres en position ? RSI en survente + cassure de résistance ? Support testé 3 fois ?

**4. Tes règles de sortie**
Où places-tu ton take-profit ? Ton stop-loss ? À quel moment sors-tu manuellement ?

**5. Ta gestion du risque**
Combien risques-tu par trade ? Quel est ton capital maximum à risquer par jour ?

**6. Les actifs que tu trades**
Ne trade pas tout. Concentre-toi sur 2-3 paires que tu connais bien (BTC/USDT, ETH/USDT...).

**7. Tes horaires de trading**
Quand trades-tu ? Évite de trader durant les périodes de faible liquidité (weekends).

**Exemple de plan simple**

Objectif : +3% par mois
Style : Swing trading
Actifs : BTC/USDT, ETH/USDT
Horaires : Vérification matin et soir
Entrée : RSI < 30 + prix sur support clé + volume croissant
Stop-loss : 2% sous le support
Take-profit : 6% au-dessus de l'entrée
Risque max : 2% du capital par trade

**L'importance de la discipline**

Avoir un plan est une chose, le suivre en est une autre. La discipline est ce qui sépare les traders gagnants des perdants. Respecte ton plan, même quand c'est dur.`,
    quiz: [
      {
        question: 'Quelle est la première étape d\'un plan de trading ?',
        options: [
          'Acheter des cryptos au hasard',
          'Définir des objectifs clairs et réalistes',
          'Regarder YouTube'
        ],
        correctAnswer: 1
      },
      {
        question: 'Combien de paires de cryptos un débutant devrait-il trader ?',
        options: [
          'Au moins 20 pour diversifier',
          '2-3 paires qu\'il connaît bien',
          'Toutes les paires disponibles'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que faut-il faire une fois le plan créé ?',
        options: [
          'Le modifier tous les jours',
          'Le suivre avec discipline',
          'L\'oublier et trader à l\'instinct'
        ],
        correctAnswer: 1
      }
    ]
  },
  'rsi': {
    id: 'rsi',
    title: 'RSI - Relative Strength Index',
    category: 'technical',
    objective: 'Maîtriser l\'indicateur RSI pour détecter les zones de surachat et survente',
    content: `Le RSI est l'un des indicateurs les plus populaires en analyse technique. Simple mais puissant.

**Qu'est-ce que le RSI ?**

Le RSI (Relative Strength Index) mesure la force et la vitesse des mouvements de prix. Il oscille entre 0 et 100.

**Comment l'interpréter ?**

- RSI > 70 : Zone de SURACHAT → Le prix est peut-être trop haut, attention à un retournement baissier
- RSI < 30 : Zone de SURVENTE → Le prix est peut-être trop bas, attention à un rebond haussier
- RSI = 50 : Zone neutre

**Stratégies de base avec le RSI**

**1. Stratégie de Mean Reversion (retour à la moyenne)**
- Achète quand RSI < 30 (survente)
- Vends quand RSI > 70 (surachat)

Cette stratégie fonctionne bien dans les marchés en range (sans tendance claire).

**2. Stratégie de divergence**
Une divergence se produit quand le prix fait un nouveau plus haut mais le RSI fait un plus bas (divergence baissière), ou inversement.

Exemple : Le BTC atteint 42,000€ (nouveau plus haut) mais le RSI atteint seulement 65 alors qu'il était à 75 au précédent plus haut → Signal baissier fort

**3. Cassure de niveaux**
Quand le RSI casse 50 en tendance haussière, c'est souvent un bon signal de continuation.

**Erreurs courantes**

Ne JAMAIS acheter uniquement parce que le RSI est < 30. En forte tendance baissière, le RSI peut rester en survente pendant longtemps. Combine toujours le RSI avec d'autres indicateurs ou analyse de structure.

**Paramètres**

Le paramètre standard est RSI(14), c'est-à-dire calculé sur 14 périodes. Tu peux ajuster selon ton timeframe : RSI(7) pour du court terme, RSI(21) pour du long terme.`,
    quiz: [
      {
        question: 'Que signifie un RSI à 75 ?',
        options: [
          'Zone de survente, opportunité d\'achat',
          'Zone de surachat, attention possible retournement',
          'Zone neutre'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'une divergence baissière ?',
        options: [
          'Le prix monte mais le RSI descend',
          'Le prix descend et le RSI aussi',
          'Le RSI est à 50'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel est le paramètre standard du RSI ?',
        options: [
          'RSI(7)',
          'RSI(14)',
          'RSI(50)'
        ],
        correctAnswer: 1
      }
    ]
  },
  'dictionary': {
    id: 'dictionary',
    title: 'Dictionnaire des termes de trading',
    category: 'basics',
    objective: 'Maîtriser le vocabulaire essentiel du trading crypto',
    content: `Voici les termes les plus importants à connaître :

**ATH (All-Time High)** : Le prix le plus haut jamais atteint par un actif.

**ATL (All-Time Low)** : Le prix le plus bas jamais atteint.

**Bullish** : Marché haussier, optimiste. "Je suis bullish sur BTC" = je pense que le prix va monter.

**Bearish** : Marché baissier, pessimiste.

**FOMO (Fear Of Missing Out)** : La peur de rater une opportunité. Souvent cause de mauvaises décisions.

**FUD (Fear, Uncertainty, Doubt)** : Propagation de peur et doute, souvent pour manipuler le marché.

**HODL** : Hold On for Dear Life. Garder ses cryptos long terme malgré la volatilité.

**Pump & Dump** : Manipulation où le prix est artificiellement gonflé (pump) puis vendu massivement (dump).

**Whale** : Gros détenteur de crypto capable d'influencer le marché.

**Resistance** : Niveau de prix où la pression vendeuse est forte.

**Support** : Niveau de prix où la pression acheteuse est forte.

**Market Order** : Ordre exécuté immédiatement au prix du marché.

**Limit Order** : Ordre exécuté uniquement à un prix spécifique ou meilleur.

**Spread** : Différence entre le prix d'achat et de vente.

**Slippage** : Différence entre le prix attendu et le prix réel d'exécution.

**Gas Fees** : Frais de transaction sur les blockchains (surtout Ethereum).

**Staking** : Bloquer ses cryptos pour gagner des récompenses.

**DCA (Dollar Cost Averaging)** : Investir régulièrement la même somme, peu importe le prix.

**Long Position** : Parier sur la hausse du prix.

**Short Position** : Parier sur la baisse du prix.

**Liquidation** : Fermeture forcée d'une position avec leverage quand les pertes sont trop importantes.

**Capitulation** : Vente massive par panique, souvent marque le bas du marché.`,
    quiz: [
      {
        question: 'Que signifie "être bullish" ?',
        options: [
          'Penser que le prix va baisser',
          'Penser que le prix va monter',
          'Ne pas avoir d\'opinion'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'un support ?',
        options: [
          'Un niveau où la pression acheteuse est forte',
          'Un service client',
          'Un type de wallet'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que signifie HODL ?',
        options: [
          'Hold On for Dear Life - garder long terme',
          'Un type de trading rapide',
          'Une stratégie de short'
        ],
        correctAnswer: 0
      }
    ]
  }
};

// Les autres leçons seront ajoutées progressivement
export const getAllLessons = (): Lesson[] => {
  return Object.values(lessons);
};

export const getLessonById = (id: string): Lesson | undefined => {
  return lessons[id];
};

export const getLessonsByCategory = (categoryId: string): Lesson[] => {
  return getAllLessons().filter(lesson => lesson.category === categoryId);
};
