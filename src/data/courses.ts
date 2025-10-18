import { Lesson, Category } from '@/types/course';
import { beginningsLessonsFr } from './beginningsCourses';
import { technicalLessonsFr } from './technicalCourses';
import { categoryQuizzesFr } from './categoryQuizzes';

export const categories: Category[] = [
  {
    id: 'beginnings',
    name: 'Les débuts',
    icon: '🚀',
    lessons: [
      'what-is-crypto',
      'what-is-wallet',
      'how-to-create-wallet',
      'how-to-buy-crypto',
      'transfer-crypto-to-wallet',
      'crypto-security',
      'crypto-trading-basics',
      'technical-analysis-crypto',
      'fundamental-analysis-crypto',
      'useful-crypto-resources',
      'practical-beginner-tips',
      'beginnings-category-quiz'
    ]
  },
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
      'dictionary',
      'market-psychology',
      'trading-journal',
      'position-sizing',
      'market-orders',
      'candlestick-patterns',
      'basics-category-quiz'
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
      'inversion-fair-value-gaps',
      'macd-indicator',
      'fibonacci-retracement',
      'ema-sma',
      'support-resistance',
      'trend-lines',
      'volume-analysis',
      'ichimoku-cloud',
      'divergence-trading',
      'technical-category-quiz'
    ]
  },
  {
    id: 'fundamental',
    name: 'Analyse fondamentale',
    icon: '🧠',
    lessons: [
      'fundamental-analysis-basics',
      'interesting-site-links',
      'ws-asian-london-session',
      'tokenomics',
      'on-chain-analysis',
      'news-trading',
      'economic-calendar',
      'whale-watching',
      'fundamental-category-quiz'
    ]
  },
  {
    id: 'strategies',
    name: 'Stratégies avancées',
    icon: '🎯',
    lessons: [
      'scalping-strategy',
      'swing-trading-strategy',
      'breakout-trading',
      'range-trading',
      'arbitrage',
      'grid-trading',
      'dca-strategy',
      'strategies-category-quiz'
    ]
  },
  {
    id: 'misc',
    name: 'Divers',
    icon: '💰',
    lessons: [
      'memecoins-tutorial',
      'ebook-pdf',
      'tax-crypto',
      'wallet-security',
      'defi-basics'
    ]
  }
];

export const lessons: Record<string, Lesson> = {
  'macd-indicator': {
    id: 'macd-indicator',
    title: 'Indicateur MACD - Moving Average Convergence Divergence',
    category: 'technical',
    objective: 'Maîtriser le MACD pour détecter les changements de tendance',
    content: `Le MACD est l'un des indicateurs les plus populaires et puissants en analyse technique. Il combine plusieurs moyennes mobiles pour identifier les changements de momentum.

**Qu'est-ce que le MACD ?**

Le MACD (Moving Average Convergence Divergence) mesure la relation entre deux moyennes mobiles exponentielles (EMA). Il se compose de trois éléments :
- La ligne MACD : différence entre l'EMA 12 et l'EMA 26
- La ligne de signal : EMA 9 de la ligne MACD
- L'histogramme : différence entre la ligne MACD et la ligne de signal

**Comment interpréter le MACD ?**

**Croisements de lignes :**
- Quand la ligne MACD croise au-dessus de la ligne de signal = signal d'achat 📈
- Quand la ligne MACD croise en-dessous de la ligne de signal = signal de vente 📉

**Croisements avec le zéro :**
- MACD passe au-dessus de 0 = tendance haussière se renforce
- MACD passe en-dessous de 0 = tendance baissière se renforce

**Divergences :**
Les divergences sont des signaux très puissants :
- Divergence haussière : le prix fait des plus bas, mais le MACD fait des plus hauts = retournement potentiel à la hausse
- Divergence baissière : le prix fait des plus hauts, mais le MACD fait des plus bas = retournement potentiel à la baisse

**L'histogramme**

L'histogramme montre la force du mouvement :
- Barres qui grandissent = momentum s'accélère
- Barres qui rétrécissent = momentum ralentit
- Passage du positif au négatif (ou inverse) = changement de momentum

**Stratégie MACD simple**

1. Attendre un croisement de la ligne MACD avec la ligne de signal
2. Confirmer avec l'histogramme qui change de couleur
3. Vérifier qu'il n'y a pas de divergence contre ta position
4. Placer ton stop-loss sous le dernier support (achat) ou résistance (vente)

**Limites du MACD**

- Retard : étant basé sur des moyennes mobiles, le MACD est un indicateur retardé
- Faux signaux en range : dans un marché sans tendance claire, le MACD peut donner beaucoup de faux signaux
- Nécessite confirmation : toujours combiner avec d'autres indicateurs (RSI, volume, support/résistance)

**Paramètres recommandés**

Les paramètres standards (12, 26, 9) fonctionnent bien sur la plupart des timeframes. Pour le scalping, tu peux essayer (5, 13, 7) pour plus de réactivité.`,
    quiz: [
      {
        question: 'De quoi est composé le MACD ?',
        options: [
          'Une seule moyenne mobile',
          'La ligne MACD, la ligne de signal et l\'histogramme',
          'Uniquement l\'histogramme'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel signal donne un croisement de la ligne MACD au-dessus de la ligne de signal ?',
        options: [
          'Signal de vente',
          'Signal de maintien',
          'Signal d\'achat'
        ],
        correctAnswer: 2
      },
      {
        question: 'Qu\'est-ce qu\'une divergence baissière ?',
        options: [
          'Le prix fait des plus hauts mais le MACD fait des plus bas',
          'Le prix et le MACD montent ensemble',
          'Le prix fait des plus bas et le MACD aussi'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que représente l\'histogramme du MACD ?',
        options: [
          'Le volume de transactions',
          'La différence entre la ligne MACD et la ligne de signal',
          'Le prix de l\'actif'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle est la principale limite du MACD ?',
        options: [
          'Il est trop complexe à comprendre',
          'C\'est un indicateur retardé qui donne parfois de faux signaux',
          'Il ne fonctionne que sur Bitcoin'
        ],
        correctAnswer: 1
      }
    ]
  },
  'fibonacci-retracement': {
    id: 'fibonacci-retracement',
    title: 'Retracements de Fibonacci',
    category: 'technical',
    objective: 'Utiliser Fibonacci pour identifier les niveaux de support et résistance clés',
    content: `Les retracements de Fibonacci sont l'un des outils les plus utilisés en analyse technique pour identifier les niveaux où le prix pourrait rebondir ou casser.

**D'où vient Fibonacci ?**

Leonardo Fibonacci était un mathématicien italien qui a découvert une séquence de nombres (0, 1, 1, 2, 3, 5, 8, 13, 21...) où chaque nombre est la somme des deux précédents. Cette séquence apparaît partout dans la nature et... dans les marchés financiers.

**Les niveaux de Fibonacci**

Les niveaux clés utilisés en trading sont :
- **23.6%** : retracement faible
- **38.2%** : retracement modéré
- **50%** : niveau psychologique (pas un vrai nombre de Fibonacci mais très utilisé)
- **61.8%** : le "Golden Ratio" - niveau le plus important
- **78.6%** : retracement profond

**Comment tracer les Fibonacci ?**

1. Identifie un mouvement significatif (swing low to swing high ou vice versa)
2. Trace l'outil Fibonacci du point A au point B
3. Les niveaux apparaissent automatiquement

En tendance haussière : trace du bas (swing low) vers le haut (swing high)
En tendance baissière : trace du haut (swing high) vers le bas (swing low)

**Comment utiliser les Fibonacci ?**

**En tendance haussière :**
Après une montée, le prix va souvent "retracer" (redescendre) avant de repartir à la hausse. Les niveaux Fibonacci indiquent où le prix pourrait rebondir :
- 23.6% = retracement léger, tendance très forte
- 38.2% - 50% = zone de retracement "normale"
- 61.8% = dernier niveau de défense avant cassure de tendance

**En tendance baissière :**
Même principe inversé. Le prix remonte un peu avant de continuer sa chute.

**Stratégie de trading Fibonacci**

1. Attendre une forte tendance (haussière ou baissière)
2. Tracer les Fibonacci du point bas au point haut
3. Attendre que le prix revienne sur un niveau Fibonacci (généralement 38.2%, 50% ou 61.8%)
4. Chercher une confirmation (chandelier de retournement, volume, RSI oversold/overbought)
5. Entrer en position avec stop-loss juste en-dessous/au-dessus du niveau Fibonacci

**Extensions de Fibonacci**

Au-delà du retracement, on utilise aussi les extensions pour identifier les objectifs de prix :
- 127.2%
- 161.8% (objectif classique)
- 261.8%

Ces niveaux indiquent jusqu'où le prix pourrait aller après avoir cassé le précédent high/low.

**Combiner Fibonacci avec d'autres outils**

Fibonacci est encore plus puissant quand tu le combines avec :
- Support et résistance horizontaux
- Moyennes mobiles
- Trendlines
- Volume

Quand plusieurs indicateurs convergent sur le même niveau = probabilité élevée de réaction du prix.

**Erreurs à éviter**

❌ Tracer des Fibonacci sur n'importe quel mouvement : choisis des swings significatifs
❌ Trader uniquement sur Fibonacci sans confirmation
❌ Oublier que Fibonacci n'est pas magique : ce sont des zones, pas des prix exacts`,
    quiz: [
      {
        question: 'Quel est le niveau de Fibonacci le plus important ?',
        options: [
          '23.6%',
          '50%',
          '61.8% (Golden Ratio)'
        ],
        correctAnswer: 2
      },
      {
        question: 'Comment trace-t-on Fibonacci en tendance haussière ?',
        options: [
          'Du haut vers le bas',
          'Du bas (swing low) vers le haut (swing high)',
          'Au hasard'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que représente un retracement de 38.2% ?',
        options: [
          'Le prix a baissé de 38.2% depuis le dernier high',
          'Le prix est revenu à 38.2% du mouvement précédent',
          'Le volume a baissé de 38.2%'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle extension Fibonacci est l\'objectif de prix classique ?',
        options: [
          '127.2%',
          '161.8%',
          '261.8%'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi combiner Fibonacci avec d\'autres indicateurs ?',
        options: [
          'C\'est obligatoire par la loi',
          'Pour augmenter la probabilité de succès quand plusieurs signaux convergent',
          'Fibonacci seul ne fonctionne jamais'
        ],
        correctAnswer: 1
      }
    ]
  },
  'ema-sma': {
    id: 'ema-sma',
    title: 'Moyennes Mobiles - EMA et SMA',
    category: 'technical',
    objective: 'Maîtriser les moyennes mobiles pour identifier les tendances',
    content: `Les moyennes mobiles sont les indicateurs les plus simples et les plus utilisés en trading. Elles lissent les variations de prix pour révéler la tendance.

**SMA - Simple Moving Average**

La SMA calcule la moyenne arithmétique des prix sur une période donnée.
Exemple SMA 20 : moyenne des 20 dernières bougies.

**EMA - Exponential Moving Average**

L'EMA donne plus de poids aux prix récents. Elle réagit donc plus vite aux changements de prix que la SMA.

**Quelle moyenne mobile choisir ?**

- **SMA** : plus lisse, moins de faux signaux, mais plus de retard
- **EMA** : plus réactive, détecte plus vite les changements, mais plus de faux signaux

En général, les traders préfèrent l'EMA pour sa réactivité.

**Périodes courantes**

- **EMA 9** : court terme, pour le scalping et day trading
- **EMA 20/21** : court-moyen terme
- **EMA 50** : moyen terme, très populaire
- **EMA 200** : long terme, support/résistance majeur

**Comment utiliser les moyennes mobiles ?**

**1. Identifier la tendance**
- Prix au-dessus de l'EMA = tendance haussière 📈
- Prix en-dessous de l'EMA = tendance baissière 📉

Règle simple : ne trade que dans le sens de la tendance.

**2. Support et résistance dynamiques**
Les EMA agissent comme des supports/résistances qui se déplacent :
- En tendance haussière, le prix rebondit souvent sur l'EMA 20 ou 50
- En tendance baissière, l'EMA agit comme résistance

**3. Croisements (Crossovers)**
Les croisements entre deux moyennes mobiles donnent des signaux :
- **Golden Cross** : EMA courte croise au-dessus d'EMA longue = signal haussier fort
- **Death Cross** : EMA courte croise en-dessous d'EMA longue = signal baissier fort

Exemple : EMA 50 croise au-dessus EMA 200 = Golden Cross = très haussier

**4. Croisement Prix/EMA**
- Prix croise au-dessus de l'EMA = signal d'achat potentiel
- Prix croise en-dessous de l'EMA = signal de vente potentiel

**Stratégies populaires**

**Stratégie EMA 9/21 (court terme)**
- Achat : EMA 9 croise au-dessus EMA 21 + prix au-dessus des deux EMA
- Vente : EMA 9 croise en-dessous EMA 21 + prix en-dessous des deux EMA

**Stratégie EMA 50/200 (moyen-long terme)**
- Achat : Golden Cross (EMA 50 > EMA 200) + pullback sur EMA 50
- Vente : Death Cross (EMA 50 < EMA 200)

**Stratégie Triple EMA (EMA 9, 21, 55)**
- Toutes les EMA alignées dans le même ordre = tendance forte
- Rechercher des entrées lors des pullbacks sur EMA 21

**Limites des moyennes mobiles**

⚠️ **Indicateur retardé** : les moyennes mobiles se basent sur les prix passés
⚠️ **Faux signaux en range** : dans un marché sans tendance, les croisements donnent beaucoup de faux signaux
⚠️ **Whipsaws** : le prix peut traverser l'EMA plusieurs fois rapidement

**Conseils pratiques**

✅ Utilise les EMA sur des timeframes plus élevés pour des signaux plus fiables (4H, Daily)
✅ Combine toujours avec d'autres indicateurs (RSI, volume, support/résistance)
✅ Teste différentes périodes pour trouver celles qui fonctionnent sur tes actifs préférés
✅ Respecte toujours la tendance donnée par l'EMA 200`,
    quiz: [
      {
        question: 'Quelle est la différence entre SMA et EMA ?',
        options: [
          'Il n\'y a aucune différence',
          'L\'EMA donne plus de poids aux prix récents',
          'La SMA est plus rapide que l\'EMA'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'un Golden Cross ?',
        options: [
          'Une EMA courte qui croise au-dessus d\'une EMA longue - signal haussier',
          'Une EMA courte qui croise en-dessous d\'une EMA longue',
          'Le prix qui touche l\'EMA 200'
        ],
        correctAnswer: 0
      },
      {
        question: 'Comment utilise-t-on l\'EMA pour identifier la tendance ?',
        options: [
          'Prix au-dessus de l\'EMA = tendance haussière, en-dessous = baissière',
          'L\'EMA ne peut pas identifier les tendances',
          'Il faut 10 EMA pour identifier une tendance'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quelle EMA est considérée comme un support/résistance majeur long terme ?',
        options: [
          'EMA 9',
          'EMA 20',
          'EMA 200'
        ],
        correctAnswer: 2
      },
      {
        question: 'Quelle est la principale limite des moyennes mobiles ?',
        options: [
          'Elles sont trop complexes',
          'C\'est un indicateur retardé qui donne des faux signaux en range',
          'Elles ne fonctionnent pas sur les cryptos'
        ],
        correctAnswer: 1
      }
    ]
  },
  'support-resistance': {
    id: 'support-resistance',
    title: 'Support et Résistance - Les fondations du trading',
    category: 'technical',
    objective: 'Identifier et utiliser les niveaux clés de support et résistance',
    content: `Les supports et résistances sont les concepts les plus importants en analyse technique. Maîtrise-les, et tu auras déjà une longueur d'avance.

**Qu'est-ce qu'un Support ?**

Un support est un niveau de prix où la demande est suffisamment forte pour empêcher le prix de descendre plus bas. C'est comme un "plancher" que le prix a du mal à traverser.

Psychologie : à ce niveau, les acheteurs pensent que c'est une bonne affaire et achètent massivement, ce qui fait remonter le prix.

**Qu'est-ce qu'une Résistance ?**

Une résistance est un niveau de prix où l'offre est suffisamment forte pour empêcher le prix de monter plus haut. C'est comme un "plafond".

Psychologie : à ce niveau, les vendeurs pensent que le prix est trop élevé et vendent, ce qui fait redescendre le prix.

**Comment identifier Support et Résistance ?**

**1. Niveaux horizontaux**
Regarde les zones où le prix a rebondi plusieurs fois :
- Si le prix est remonté 2-3 fois depuis un niveau = support
- Si le prix a chuté 2-3 fois depuis un niveau = résistance

Plus un niveau a été testé et tenu, plus il est fort.

**2. Anciens sommets et creux**
- Les anciens plus hauts (swing highs) deviennent des résistances
- Les anciens plus bas (swing lows) deviennent des supports

**3. Niveaux psychologiques**
Les nombres ronds attirent l'attention des traders :
- Bitcoin à 50,000$ est un niveau psychologique fort
- Ethereum à 3,000$ aussi
- Les traders placent souvent leurs ordres à ces niveaux ronds

**Support devient Résistance (et vice-versa)**

C'est un concept clé : quand un support est cassé, il devient une résistance. Et quand une résistance est cassée, elle devient un support.

Exemple :
- BTC rebondit sur 40K$ 3 fois = support à 40K$
- BTC casse 40K$ et descend à 38K$
- BTC essaie de remonter mais bloque à 40K$ = 40K$ est maintenant une résistance

**Zones vs Lignes**

❌ Erreur fréquente : penser que support/résistance sont des lignes précises
✅ Réalité : ce sont des ZONES

Ne cherche pas le niveau exact au centime près. Considère plutôt une zone de 1-2% autour du niveau.

**Comment trader Support et Résistance ?**

**Stratégie 1 : Rebond sur Support**
1. Identifier un support fort (testé 2-3 fois minimum)
2. Attendre que le prix approche du support
3. Chercher une confirmation (chandelier de retournement, divergence RSI, volume)
4. Acheter avec stop-loss juste en-dessous du support

**Stratégie 2 : Cassure de Résistance (Breakout)**
1. Identifier une résistance forte
2. Attendre que le prix casse la résistance avec un fort volume
3. Attendre un retest de la résistance (devenue support)
4. Acheter lors du retest avec stop-loss sous le nouveau support

**Stratégie 3 : Vente à la Résistance**
1. Prix approche d'une résistance en tendance baissière ou range
2. Chercher des signes de rejet (mèche haute, volume vendeur)
3. Shorter avec stop-loss au-dessus de la résistance

**Confirmations importantes**

Ne trade jamais uniquement sur support/résistance. Cherche des confirmations :
- **Volume** : une cassure avec fort volume est plus fiable
- **Chandeliers** : patterns de retournement (doji, marteau, étoile filante)
- **Indicateurs** : RSI, MACD qui confirment le mouvement

**Types de support/résistance**

**Statiques :**
- Lignes horizontales
- Niveaux psychologiques

**Dynamiques :**
- Moyennes mobiles (EMA 50, 200)
- Trendlines (lignes de tendance)
- Bollinger Bands

**Fausses cassures (Fake Breakout)**

Attention aux pièges ! Parfois, le prix casse un niveau puis revient immédiatement = fausse cassure.

Comment les éviter :
- Attendre une bougie de clôture au-dessus/en-dessous du niveau
- Vérifier le volume (faible volume = méfiance)
- Attendre un retest avant d'entrer

**Force d'un Support/Résistance**

Un niveau est plus fort quand :
- Il a été testé plusieurs fois
- Il correspond à un niveau psychologique rond
- Il aligne plusieurs timeframes (support 4H + Daily)
- Il coïncide avec Fibonacci, EMA ou autre indicateur`,
    quiz: [
      {
        question: 'Qu\'est-ce qu\'un support ?',
        options: [
          'Un niveau où le prix monte toujours',
          'Un niveau où la demande empêche le prix de descendre plus bas',
          'Un indicateur technique'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que se passe-t-il quand un support est cassé ?',
        options: [
          'Il disparaît pour toujours',
          'Il devient une résistance',
          'Il devient plus fort'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'un niveau psychologique ?',
        options: [
          'Un niveau qui n\'existe que dans la tête',
          'Un nombre rond (ex: 50,000$) qui attire l\'attention des traders',
          'Un support émotionnel'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle confirmation est importante pour valider une cassure ?',
        options: [
          'Un fort volume',
          'La couleur de la bougie',
          'L\'heure de la journée'
        ],
        correctAnswer: 0
      },
      {
        question: 'Support et résistance sont-ils des lignes ou des zones ?',
        options: [
          'Des lignes précises au centime près',
          'Des zones de 1-2% environ',
          'Ça n\'a aucune importance'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'une fausse cassure (fake breakout) ?',
        options: [
          'Une cassure qui n\'est pas réelle',
          'Le prix casse un niveau puis revient immédiatement',
          'Une cassure pendant les weekends'
        ],
        correctAnswer: 1
      }
    ]
  },
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
      },
      {
        question: 'Avec un capital de 2000€, quel montant maximum devrais-tu risquer par trade selon la règle des 2% ?',
        options: [
          '20€',
          '40€',
          '100€'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi est-il important de définir son stop-loss AVANT d\'entrer en position ?',
        options: [
          'Pour augmenter ses gains potentiels',
          'Pour éviter les décisions émotionnelles en cas de perte',
          'Pour payer moins de frais'
        ],
        correctAnswer: 1
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
      },
      {
        question: 'Que doit contenir un journal de trading ?',
        options: [
          'Uniquement les trades gagnants',
          'Tous les trades avec entrée, sortie, raison et émotions',
          'Seulement le résultat final du mois'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi ne faut-il jamais trader avec de l\'argent dont on a besoin ?',
        options: [
          'Cela crée un stress qui conduit à de mauvaises décisions',
          'C\'est illégal',
          'Les plateformes l\'interdisent'
        ],
        correctAnswer: 0
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
      },
      {
        question: 'Combien de temps un Position Trader garde-t-il ses positions ?',
        options: [
          'Quelques minutes',
          'Une seule journée',
          'Des mois voire des années'
        ],
        correctAnswer: 2
      },
      {
        question: 'Quel type de trading nécessite des compétences en programmation ?',
        options: [
          'Day Trading',
          'Trading Algorithmique',
          'Swing Trading'
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
      },
      {
        question: 'Quel niveau de leverage est recommandé pour un débutant ?',
        options: [
          'x50 ou x100 pour maximiser les gains',
          'x10 minimum',
          'Aucun leverage, ou maximum x2-x3'
        ],
        correctAnswer: 2
      },
      {
        question: 'Que se passe-t-il lors d\'une liquidation ?',
        options: [
          'Tu gagnes un bonus',
          'L\'exchange ferme ta position et tu perds ton capital investi',
          'Ta position est automatiquement doublée'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle est la différence entre Cross Margin et Isolated Margin ?',
        options: [
          'En Cross tout le capital peut être utilisé, en Isolated seul le capital alloué est à risque',
          'Cross est plus sûr qu\'Isolated',
          'Il n\'y a aucune différence'
        ],
        correctAnswer: 0
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
      },
      {
        question: 'Dans un plan de trading, pourquoi définir des horaires spécifiques ?',
        options: [
          'Pour avoir une routine et éviter les périodes de faible liquidité',
          'Pour trader 24h/24',
          'Ce n\'est pas important'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel type d\'objectif est le plus approprié dans un plan de trading ?',
        options: [
          'Devenir millionnaire en un mois',
          'Viser 5% de gain mensuel de façon mesurable',
          'Trader autant que possible'
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
      },
      {
        question: 'Quelle stratégie RSI fonctionne mieux dans un marché en range ?',
        options: [
          'Acheter uniquement quand RSI > 70',
          'Acheter en survente (RSI < 30) et vendre en surachat (RSI > 70)',
          'Ignorer le RSI complètement'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi ne faut-il pas acheter uniquement parce que le RSI est < 30 ?',
        options: [
          'Car en forte tendance baissière le RSI peut rester bas longtemps',
          'Car c\'est illégal',
          'Car le RSI n\'est jamais fiable'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que signifie un RSI qui casse 50 en tendance haussière ?',
        options: [
          'Signal de vente immédiate',
          'Signal de continuation de la tendance',
          'Aucune signification'
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
      },
      {
        question: 'Qu\'est-ce que le FOMO ?',
        options: [
          'Fear Of Missing Out - peur de rater une opportunité',
          'Un type d\'ordre',
          'Une crypto-monnaie'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quelle est la différence entre un Market Order et un Limit Order ?',
        options: [
          'Aucune différence',
          'Market s\'exécute immédiatement, Limit à un prix spécifique',
          'Market est moins cher'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que signifie DCA (Dollar Cost Averaging) ?',
        options: [
          'Acheter tout d\'un coup',
          'Investir régulièrement la même somme',
          'Vendre en panique'
        ],
        correctAnswer: 1
      }
    ]
  },
  'boll': {
    id: 'boll',
    title: 'Les Bandes de Bollinger',
    category: 'technical',
    objective: 'Comprendre et utiliser les Bandes de Bollinger pour identifier la volatilité et les opportunités de trading',
    content: `Les Bandes de Bollinger ont été développées par John Bollinger dans les années 1980 comme un outil pour aider les traders à identifier la volatilité potentielle des prix et les zones de prix relativement élevées ou basses par rapport aux échanges précédents.

Elles offrent une définition relative des notions de "haut" et de "bas" du marché et permettent d'identifier les situations de surachat ou de survente.

**Qu'est-ce que c'est et ce que ça montre**

Les Bandes de Bollinger se composent de trois lignes :

**Bande du milieu** : une moyenne mobile simple (généralement une SMA sur 20 périodes)

**Bande supérieure** : moyenne mobile + (multiplicateur × écart-type)

**Bande inférieure** : moyenne mobile - (multiplicateur × écart-type)

Le réglage standard utilise une période de 20 jours avec un multiplicateur de 2 écarts-types, mais cela peut être adapté selon l'actif ou l'unité de temps.

Lorsque les bandes se resserrent, cela indique une période de faible volatilité (appelée "squeeze"). Lorsqu'elles s'écartent, cela signale une augmentation de la volatilité.

**Comment les trader**

**1. Le rebond de Bollinger (Bollinger Bounce)**
Les prix ont tendance à rebondir sur les bandes extérieures, qui agissent comme des zones de support ou de résistance.
Exemple : Si le prix d'une action touche la bande inférieure et remonte, cela peut être vu comme une opportunité d'achat.

**2. Le Squeeze de Bollinger**
Quand les bandes se rapprochent fortement, cela signale souvent un mouvement imminent — soit une hausse, soit une baisse.

**3. "Riding the Bands" (Suivre les bandes)**
En tendance haussière forte, le prix peut coller à la bande supérieure ; en tendance baissière, à la bande inférieure.
Cela indique que la tendance actuelle est puissante et peut se poursuivre.

**4. Les Cassures (Breakouts)**
Une clôture au-dessus de la bande supérieure peut indiquer un possible repli, tandis qu'une clôture sous la bande inférieure peut signaler un rebond potentiel.

**⚠️ Important**

Il est recommandé d'utiliser les Bandes de Bollinger avec d'autres indicateurs pour confirmer les signaux. Ne trade jamais uniquement sur la base d'un seul indicateur.`,
    quiz: [
      {
        question: 'De combien de lignes se composent les Bandes de Bollinger ?',
        options: [
          'Une seule ligne',
          'Deux lignes',
          'Trois lignes'
        ],
        correctAnswer: 2
      },
      {
        question: 'Que représente la bande du milieu ?',
        options: [
          'Une moyenne mobile simple',
          'Le prix le plus haut',
          'Le prix le plus bas'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que signifie un "Bollinger Squeeze" ?',
        options: [
          'Les bandes s\'écartent fortement',
          'Les bandes se resserrent, signalant un mouvement imminent',
          'Le prix sort des bandes'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel est le réglage standard des Bandes de Bollinger ?',
        options: [
          '10 périodes avec 1 écart-type',
          '20 périodes avec 2 écarts-types',
          '50 périodes avec 3 écarts-types'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que suggère un prix qui "colle" à la bande supérieure ?',
        options: [
          'Une tendance haussière forte',
          'Une tendance baissière',
          'Aucune tendance'
        ],
        correctAnswer: 0
      },
      {
        question: 'Pourquoi ne faut-il pas trader uniquement avec les Bandes de Bollinger ?',
        options: [
          'Elles sont toujours fausses',
          'Il faut les combiner avec d\'autres indicateurs pour confirmer',
          'Elles sont interdites'
        ],
        correctAnswer: 1
      }
    ]
  },
  'stochastic': {
    id: 'stochastic',
    title: 'L\'Oscillateur Stochastique',
    category: 'technical',
    objective: 'Maîtriser l\'oscillateur stochastique pour identifier les zones de surachat et survente',
    content: `L'Oscillateur Stochastique est un indicateur de momentum développé par George C. Lane à la fin des années 1950.
Il compare le prix de clôture actuel d'un actif à l'ensemble de ses prix sur une période donnée.

Sa sensibilité aux mouvements du marché peut être ajustée en modifiant la période ou en prenant une moyenne mobile du résultat.

**Qu'est-ce que c'est et ce que ça montre**

L'oscillateur mesure la position du prix actuel par rapport au plus haut et au plus bas d'une période donnée.

**Formule :**

%K = [(Clôture actuelle - Plus bas) / (Plus haut - Plus bas)] × 100

%D = moyenne mobile à 3 jours de %K

Généralement, deux lignes sont tracées :

**%K** (ligne rapide)

**%D** (ligne lente, moyenne de %K)

Lorsque la valeur dépasse 80, l'actif est souvent considéré comme suracheté.
En dessous de 20, il est souvent survendu.

**Comment le trader**

**1. Zones de surachat/survente**

Au-dessus de 80 = zone de surachat possible.
En dessous de 20 = zone de survente.

**2. Divergences haussières et baissières**

Une **divergence haussière** se produit lorsque le prix fait un nouveau plus bas, mais pas l'oscillateur.
Inversement, une **divergence baissière** se produit quand le prix fait un nouveau plus haut, mais pas l'oscillateur.

**3. Croisements (%K et %D)**

Si la ligne %K croise au-dessus de %D → signal haussier.

Si la ligne %K croise en dessous de %D → signal baissier.

**⚠️ Important**

Comme toujours, cet indicateur doit être utilisé avec d'autres outils techniques pour confirmer les signaux. Ne te fie jamais à un seul indicateur.`,
    quiz: [
      {
        question: 'Qui a développé l\'Oscillateur Stochastique ?',
        options: [
          'John Bollinger',
          'George C. Lane',
          'Welles Wilder'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que mesure l\'oscillateur stochastique ?',
        options: [
          'Le volume des transactions',
          'La position du prix actuel par rapport au plus haut et plus bas',
          'La volatilité uniquement'
        ],
        correctAnswer: 1
      },
      {
        question: 'À partir de quelle valeur considère-t-on un actif comme suracheté ?',
        options: [
          'Au-dessus de 50',
          'Au-dessus de 70',
          'Au-dessus de 80'
        ],
        correctAnswer: 2
      },
      {
        question: 'Que signifie %D dans le stochastique ?',
        options: [
          'La ligne rapide',
          'La moyenne mobile de %K (ligne lente)',
          'Le prix de clôture'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'une divergence haussière ?',
        options: [
          'Le prix fait un nouveau plus haut mais pas l\'oscillateur',
          'Le prix fait un nouveau plus bas mais pas l\'oscillateur',
          'L\'oscillateur est à 50'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel signal donne un croisement de %K au-dessus de %D ?',
        options: [
          'Signal baissier',
          'Signal haussier',
          'Aucun signal'
        ],
        correctAnswer: 1
      }
    ]
  },
  'market-psychology': {
    id: 'market-psychology',
    title: 'Psychologie des marchés',
    category: 'basics',
    objective: 'Comprendre les émotions qui influencent les marchés',
    content: `La psychologie est souvent plus importante que l'analyse technique. Comprendre comment les émotions influencent les prix est essentiel.

**Les cycles émotionnels du marché**

Les marchés suivent des cycles émotionnels prévisibles : euphorie, cupidité, déni, peur, capitulation, puis espoir. Identifier où nous sommes dans ce cycle peut te donner un avantage considérable.

**L'euphorie et la cupidité**

Quand tout le monde parle de crypto, que les médias mainstream en parlent positivement, que ton coiffeur te donne des conseils d'investissement... c'est souvent le signe d'un sommet proche. L'euphorie pousse les prix à des niveaux irrationnels.

**La peur et la capitulation**

À l'inverse, quand les médias proclament "la mort du Bitcoin", que personne ne veut en entendre parler, que les prix sont au plus bas depuis des mois... c'est souvent le meilleur moment pour acheter. Warren Buffett le dit bien : "Sois craintif quand les autres sont cupides, et cupide quand les autres sont craintifs."

**Le biais de confirmation**

Nous avons tous tendance à chercher des informations qui confirment nos croyances existantes. Si tu es bullish sur Bitcoin, tu vas naturellement ignorer les analyses baissières et ne lire que les analyses haussières. Lutte contre ce biais en cherchant activement des opinions contraires.

**L'effet de foule (FOMO)**

Fear Of Missing Out - la peur de rater quelque chose. C'est ce qui pousse les gens à acheter au sommet parce que "tout le monde gagne de l'argent". Ne jamais entrer en position par FOMO. Attends toujours ton setup.

**La discipline émotionnelle**

Les meilleurs traders sont ceux qui peuvent rester rationnels quand tout le monde panique ou s'excite. Avoir un plan et s'y tenir, quoi qu'il arrive, est la clé du succès à long terme.`,
    quiz: [
      {
        question: 'Quel est souvent le meilleur moment pour acheter selon la psychologie des marchés ?',
        options: [
          'Quand tout le monde est euphorique',
          'Quand les médias proclament la mort du Bitcoin',
          'Quand ton coiffeur te donne des conseils'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce que le FOMO ?',
        options: [
          'Fear Of Missing Out',
          'First Order Market Operation',
          'Financial Optimization Method'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel est le conseil de Warren Buffett ?',
        options: [
          'Acheter toujours haut',
          'Être craintif quand les autres sont cupides',
          'Suivre toujours la foule'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce que le biais de confirmation ?',
        options: [
          'Chercher uniquement des infos qui confirment nos croyances',
          'Confirmer tous ses trades par email',
          'Vérifier deux fois ses ordres'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que faire quand tout le monde parle positivement de crypto dans les médias ?',
        options: [
          'Acheter immédiatement',
          'Être prudent, c\'est souvent signe d\'un sommet',
          'Vendre tout'
        ],
        correctAnswer: 1
      }
    ]
  },
  'trading-journal': {
    id: 'trading-journal',
    title: 'Tenir un journal de trading',
    category: 'basics',
    objective: 'Apprendre à documenter et analyser ses trades',
    content: `Un journal de trading est ton outil d'apprentissage le plus puissant. Sans lui, tu répètes les mêmes erreurs indéfiniment.

**Que noter dans ton journal ?**

Pour chaque trade, note :
- Date et heure d'entrée/sortie
- Paire tradée (BTC/USDT, ETH/USDT, etc.)
- Direction (Long/Short)
- Prix d'entrée et de sortie
- Taille de position
- Stop-loss et take-profit
- Raison d'entrée (setup technique, signal...)
- Émotion ressentie (confiant, stressé, FOMO...)
- Résultat (gain/perte en € et en %)
- Leçons apprises

**L'importance de l'honnêteté**

Sois brutalement honnête dans ton journal. Personne ne le lira sauf toi. Si tu as perdu par cupidité, écris-le. Si tu as ignoré ton stop-loss, note-le.

**Analyse hebdomadaire**

Chaque dimanche, revois tes trades de la semaine :
- Quel est ton taux de réussite ?
- Quels sont tes meilleurs setups ?
- Quelles erreurs reviennent le plus souvent ?
- Sur quelles paires es-tu le plus profitable ?

**Exemple de journal simplifié**

Date : 15/03/2024 10:30
Paire : BTC/USDT
Direction : LONG
Entrée : 65,000$
Stop-loss : 64,500$
Take-profit : 66,500$
Taille : 0.1 BTC
Raison : Cassure de résistance + RSI sortant de survente
Émotion : Confiant, setup clair
Résultat : +150$ (+2.3%)
Leçon : Bon respect du plan

**Outils pour ton journal**

Tu peux utiliser :
- Un simple fichier Excel/Google Sheets
- Une application dédiée comme Edgewonk ou TradingView
- Un carnet papier (moins pratique pour l'analyse)

**Pourquoi ça fonctionne ?**

Le simple fait de noter te force à réfléchir avant d'agir. Tu ne pourras plus trader impulsivement si tu sais que tu devras l'écrire et l'analyser ensuite.`,
    quiz: [
      {
        question: 'Quelle information n\'est PAS essentielle dans un journal de trading ?',
        options: [
          'L\'émotion ressentie',
          'Le résultat du trade',
          'La couleur de tes vêtements ce jour-là'
        ],
        correctAnswer: 2
      },
      {
        question: 'À quelle fréquence faut-il analyser son journal ?',
        options: [
          'Jamais, juste le remplir suffit',
          'Au moins une fois par semaine',
          'Une fois par an'
        ],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi noter l\'émotion ressentie pendant le trade ?',
        options: [
          'Pour identifier les patterns émotionnels qui causent des erreurs',
          'C\'est inutile',
          'Pour se souvenir de son humeur'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que faire si tu as fait une erreur dans un trade ?',
        options: [
          'Ne pas la noter pour ne pas se sentir mal',
          'L\'écrire honnêtement pour en tirer des leçons',
          'Effacer le trade du journal'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel est le principal avantage d\'un journal de trading ?',
        options: [
          'Impressionner ses amis',
          'Identifier ses erreurs récurrentes et ses meilleurs setups',
          'Remplir du temps'
        ],
        correctAnswer: 1
      }
    ]
  },
  'position-sizing': {
    id: 'position-sizing',
    title: 'Calcul de la taille de position',
    category: 'basics',
    objective: 'Maîtriser le dimensionnement des positions',
    content: `Savoir combien acheter est aussi important que savoir quand acheter. Une mauvaise taille de position peut ruiner même la meilleure stratégie.

**La formule de base**

Taille de position = (Capital × Risque%) ÷ Distance au stop-loss

**Exemple pratique**

Tu as 5000€ de capital et tu respectes la règle des 2% de risque maximum :
- Risque maximum : 5000€ × 2% = 100€
- Tu veux acheter BTC à 40,000€
- Ton stop-loss est à 39,000€
- Distance : 1,000€ par BTC

Taille de position = 100€ ÷ 1,000€ = 0.1 BTC

Tu peux donc acheter 0.1 BTC. Si le stop-loss se déclenche, tu perds exactement 100€ (2% de ton capital).

**L'erreur classique du débutant**

Beaucoup de débutants font l'inverse : ils décident d'acheter pour 1000€ de BTC, puis placent un stop-loss au hasard. C'est la pire approche car tu ne contrôles pas ton risque.

**Position sizing avec leverage**

Si tu utilises un leverage x5 :
- Même calcul de base
- Mais divise ta position par 5 car le leverage la multiplie
- Avec notre exemple : 0.1 BTC ÷ 5 = 0.02 BTC avec leverage x5

**Le risque adaptatif**

Certains traders ajustent leur risque selon leur confiance :
- Setup A+ : 2% de risque
- Setup A : 1.5% de risque
- Setup B : 1% de risque

Mais JAMAIS plus de 2% même sur les meilleurs setups.

**Pyramidage**

Si tu veux ajouter à une position gagnante :
- Ne jamais augmenter ton risque total au-delà de 2%
- Remonte ton stop-loss au point d'entrée initial
- Chaque ajout doit être plus petit que le précédent

**Règle des 6%**

Ne jamais avoir plus de 6% de ton capital total en risque simultanément. Si tu as déjà 3 positions ouvertes risquant 2% chacune, n'en ouvre pas de nouvelle.`,
    quiz: [
      {
        question: 'Comment calculer la taille de position ?',
        options: [
          'Acheter autant que possible',
          '(Capital × Risque%) ÷ Distance au stop-loss',
          'Capital ÷ Prix de l\'actif'
        ],
        correctAnswer: 1
      },
      {
        question: 'Avec 10,000€ de capital, 2% de risque et un stop à 500€ de distance, quelle position prendre ?',
        options: [
          '200€ ÷ 500€ = 0.4 unités',
          '10,000€ ÷ 500€ = 20 unités',
          '2% de 10,000€ = 200 unités'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que faire si tu utilises du leverage ?',
        options: [
          'Augmenter la taille de position',
          'Diviser la taille de position par le leverage',
          'Ignorer le leverage dans le calcul'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce que la règle des 6% ?',
        options: [
          'Risquer 6% par trade',
          'Ne jamais avoir plus de 6% de capital total en risque simultanément',
          'Gagner 6% par mois'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle est l\'erreur classique du débutant ?',
        options: [
          'Calculer la position selon le risque',
          'Décider du montant d\'abord, puis placer le stop au hasard',
          'Utiliser un stop-loss'
        ],
        correctAnswer: 1
      }
    ]
  },
  'market-orders': {
    id: 'market-orders',
    title: 'Types d\'ordres de trading',
    category: 'basics',
    objective: 'Maîtriser les différents types d\'ordres',
    content: `Connaître les différents types d'ordres et quand les utiliser est crucial pour exécuter ta stratégie efficacement.

**Market Order (Ordre au marché)**

Achète ou vend immédiatement au meilleur prix disponible.
- Avantage : Exécution garantie et instantanée
- Inconvénient : Prix non garanti, peut être moins bon que prévu
- Quand l'utiliser : Quand tu veux entrer/sortir rapidement

**Limit Order (Ordre à cours limité)**

Tu fixes le prix maximum que tu veux payer (achat) ou minimum que tu veux recevoir (vente).
- Avantage : Tu contrôles le prix d'exécution
- Inconvénient : L'ordre peut ne jamais se remplir
- Quand l'utiliser : Pour entrer à un prix spécifique

Exemple : BTC est à 40,000€. Tu places un limit order d'achat à 39,500€. L'ordre ne s'exécutera que si le prix descend à 39,500€ ou moins.

**Stop-Loss Order**

Ordre qui devient un market order quand le prix atteint un certain niveau.
- But : Limiter tes pertes
- Attention : En forte volatilité, peut s'exécuter à un prix pire que prévu (slippage)

**Stop-Limit Order**

Combinaison de stop et limit. Quand le prix stop est atteint, un limit order est placé.
- Avantage : Contrôle du prix même lors du déclenchement du stop
- Inconvénient : Peut ne pas s'exécuter si le prix bouge trop vite

**Take-Profit Order**

Ferme automatiquement ta position quand le profit cible est atteint.
- Essentiel pour sécuriser tes gains
- Évite l'indécision émotionnelle

**Trailing Stop**

Stop-loss qui suit le prix. Si le prix monte, le stop monte aussi, mais ne descend jamais.

Exemple : Tu achètes à 1000€ avec un trailing stop de 5%
- Prix monte à 1100€ → Stop monte à 1045€ (1100€ - 5%)
- Prix monte à 1200€ → Stop monte à 1140€ (1200€ - 5%)
- Si prix redescend à 1140€ → Position fermée avec 140€ de profit

**OCO (One Cancels Other)**

Deux ordres liés : si l'un s'exécute, l'autre est automatiquement annulé.

Exemple : Tu achètes BTC à 40,000€
- OCO : Take-profit à 42,000€ + Stop-loss à 38,000€
- Si l'un se déclenche, l'autre est annulé automatiquement

**Conseils d'utilisation**

- Pour entrer : Utilise limit orders pour avoir le meilleur prix
- Pour sortir d'urgence : Market order
- Pour protéger : Stop-loss obligatoire
- Pour sécuriser profits : Take-profit ou trailing stop`,
    quiz: [
      {
        question: 'Quel ordre garantit l\'exécution immédiate mais pas le prix ?',
        options: [
          'Limit Order',
          'Market Order',
          'Stop-Limit Order'
        ],
        correctAnswer: 1
      },
      {
        question: 'Un Limit Order d\'achat à 39,500€ s\'exécutera si le prix est à :',
        options: [
          '40,000€',
          '39,000€',
          'Jamais'
        ],
        correctAnswer: 1
      },
      {
        question: 'À quoi sert un Trailing Stop ?',
        options: [
          'À acheter automatiquement',
          'À suivre le prix à la hausse tout en protégeant les profits',
          'À annuler tous les ordres'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que signifie OCO ?',
        options: [
          'One Cancels Other',
          'Only Cash Orders',
          'Open Close Operation'
        ],
        correctAnswer: 0
      },
      {
        question: 'Quel type d\'ordre utiliser pour entrer à un prix précis ?',
        options: [
          'Market Order',
          'Limit Order',
          'Stop-Loss'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce que le slippage ?',
        options: [
          'Un type d\'ordre',
          'La différence entre le prix attendu et le prix d\'exécution réel',
          'Un indicateur technique'
        ],
        correctAnswer: 1
      }
    ]
  },
  'candlestick-patterns': {
    id: 'candlestick-patterns',
    title: 'Patterns de chandeliers japonais',
    category: 'basics',
    objective: 'Reconnaître et utiliser les patterns de chandeliers',
    content: `Les chandeliers japonais racontent l'histoire de la bataille entre acheteurs et vendeurs. Apprendre à les lire donne un avantage énorme.

**Anatomie d'un chandelier**

- Corps : Différence entre ouverture et clôture
- Mèche haute : Plus haut atteint
- Mèche basse : Plus bas atteint
- Vert/Blanc : Clôture > Ouverture (haussier)
- Rouge/Noir : Clôture < Ouverture (baissier)

**Patterns haussiers**

**1. Hammer (Marteau)**
- Petit corps en haut
- Longue mèche basse (2-3x le corps)
- Apparaît après une baisse
- Signal : Les vendeurs ont poussé bas mais les acheteurs ont repris le contrôle

**2. Bullish Engulfing (Engloutissant haussier)**
- Deux chandeliers : petit rouge puis grand vert
- Le vert "engloutit" complètement le rouge
- Signal très fort de retournement haussier

**3. Morning Star (Étoile du matin)**
- Trois chandeliers : grand rouge, petit (rouge ou vert), grand vert
- Signal de fin de baisse

**Patterns baissiers**

**4. Shooting Star (Étoile filante)**
- Petit corps en bas
- Longue mèche haute
- Apparaît après une hausse
- Signal : Les acheteurs ont poussé haut mais les vendeurs ont repris le contrôle

**5. Bearish Engulfing (Engloutissant baissier)**
- Deux chandeliers : petit vert puis grand rouge
- Le rouge engloutit le vert
- Signal fort de retournement baissier

**6. Evening Star (Étoile du soir)**
- Trois chandeliers : grand vert, petit, grand rouge
- Signal de fin de hausse

**Patterns de continuation**

**7. Three White Soldiers (Trois soldats blancs)**
- Trois grands chandeliers verts consécutifs
- Confirmation de tendance haussière forte

**8. Three Black Crows (Trois corbeaux noirs)**
- Trois grands chandeliers rouges consécutifs
- Confirmation de tendance baissière forte

**Patterns d'indécision**

**9. Doji**
- Ouverture = Clôture (pas de corps)
- Signal d'indécision du marché
- Important aux niveaux de support/résistance

**10. Spinning Top**
- Petit corps (peu importe la couleur)
- Longues mèches haut et bas
- Indécision, potentiel retournement

**Règles d'utilisation**

1. Ne JAMAIS trader un pattern seul
2. Toujours confirmer avec :
   - Niveau de support/résistance
   - Volume (pattern plus fort si volume élevé)
   - Indicateurs techniques (RSI, MACD...)
3. Attendre la confirmation du chandelier suivant

**Exemple de trade**

BTC est en baisse depuis 3 jours. Un Hammer apparaît sur un support majeur à 38,000€. Le chandelier suivant ouvre en hausse.
- Signal : Potentiel retournement haussier
- Confirmation : Support + Hammer + chandelier de confirmation
- Action : Envisager un achat avec stop sous le Hammer`,
    quiz: [
      {
        question: 'Qu\'indique un Hammer après une baisse ?',
        options: [
          'Continuation de la baisse',
          'Potentiel retournement haussier',
          'Indécision'
        ],
        correctAnswer: 1
      },
      {
        question: 'Combien de chandeliers composent un Bullish Engulfing ?',
        options: [
          'Un seul',
          'Deux',
          'Trois'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que signifie un Doji ?',
        options: [
          'Forte tendance haussière',
          'Indécision du marché',
          'Crash imminent'
        ],
        correctAnswer: 1
      },
      {
        question: 'Où apparaît une Shooting Star ?',
        options: [
          'Après une baisse',
          'Après une hausse',
          'N\'importe où'
        ],
        correctAnswer: 1
      },
      {
        question: 'Faut-il trader un pattern de chandelier seul ?',
        options: [
          'Oui, c\'est suffisant',
          'Non, toujours le confirmer avec d\'autres éléments',
          'Seulement le lundi'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que représentent les "Three White Soldiers" ?',
        options: [
          'Signal baissier',
          'Confirmation de tendance haussière forte',
          'Indécision'
        ],
        correctAnswer: 1
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
