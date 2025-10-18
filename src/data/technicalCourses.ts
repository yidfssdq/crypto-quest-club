import { Lesson } from '@/types/course';

// Additional Technical Analysis Courses
export const technicalLessonsFr: Record<string, Lesson> = {
  'order-block': {
    id: 'order-block',
    title: 'Order Block (OB)',
    category: 'technical',
    objective: 'Maîtriser l\'identification et l\'utilisation des Order Blocks',
    content: `**Définition détaillée**

L'Order Block est une zone où les institutions financières (smart money) ont accumulé ou distribué d'importants ordres.

Il agit comme support ou résistance majeur.

Les traders professionnels utilisent les OB pour anticiper des points de retournement ou continuation de tendance.

**Identification précise**

1. Repérer une bougie impulsive (grand corps, souvent sans ou avec de petites mèches)
2. Localiser la dernière bougie dans la direction opposée avant l'impulsion → c'est le OB
3. Vérifier que cette zone a été testée au moins une fois → plus le test est fréquent, plus la zone est fiable

**Types d'Order Blocks**

📈 **OB haussier** : dernière bougie baissière avant impulsion haussière → support
📉 **OB baissier** : dernière bougie haussière avant impulsion baissière → résistance

**Exemple chiffré**

Prix EUR/USD :
- 1,1200 → 1,1250 → 1,1300 (impulsion haussière)
- OB haussier = zone 1,1200–1,1250
- Lors du retest → entrée longue avec stop sous 1,1200

**Stratégie de trading**

✅ Attendre le retest de l'OB
✅ Chercher une confirmation : pin bar, engulfing, rejet de wick
✅ Stop-loss : juste derrière la zone OB
✅ Take-profit : 2–3 fois le risque, ou prochain OB/FVG

**Psychologie et astuces**

💡 OB reflète l'activité institutionnelle → plus fiable que les simples niveaux S/R
💡 Confluence OB + FVG + trend line = zone à haute probabilité (>70%)
💡 OB non testé = zone "fraîche" plus puissante
💡 Plus l'impulsion est forte, plus l'OB est significatif`,
    quiz: [
      {
        question: 'Qu\'est-ce qu\'un Order Block ?',
        options: [
          'Un indicateur technique',
          'Une zone d\'accumulation institutionnelle agissant comme S/R majeur',
          'Un type de bougie'
        ],
        correctAnswer: 1
      },
      {
        question: 'Comment identifier un OB haussier ?',
        options: [
          'N\'importe quelle bougie verte',
          'La dernière bougie baissière avant une impulsion haussière',
          'La première bougie du jour'
        ],
        correctAnswer: 1
      },
      {
        question: 'Où placer le stop-loss sur un trade OB ?',
        options: [
          'Au hasard',
          'Juste derrière la zone OB',
          'Très loin de l\'entrée'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qui renforce la fiabilité d\'un OB ?',
        options: [
          'La couleur de la bougie',
          'Confluence avec FVG, trend line, volume',
          'L\'heure de la journée'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel ratio risk/reward viser sur OB ?',
        options: [
          '1:1',
          '2-3:1 minimum',
          '0.5:1'
        ],
        correctAnswer: 1
      }
    ]
  },

  'trend-lines': {
    id: 'trend-lines',
    title: 'Trend Lines (Lignes de tendance)',
    category: 'technical',
    objective: 'Maîtriser le tracé et l\'utilisation des trend lines',
    content: `**Définition avancée**

Une trend line est une droite reliant les points pivots significatifs pour identifier la tendance.

Sert aussi à repérer cassures et rebonds potentiels.

**Méthodes précises de tracé**

1. Identifier minimum 2 points hauts ou bas significatifs
2. Tracer ligne → ajuster légèrement si nécessaire
3. Surveiller les rebonds multiples → confirme force du support/résistance dynamique

**Exemple pratique**

EUR/USD :
- Bas à 1,1200 et 1,1250
- Tracer trend line haussière
- Prix touche la ligne à 1,1280 + pin bar → entrée longue

**Types de trend lines**

📈 **Trend line haussière** : relie les plus bas ascendants → support dynamique
📉 **Trend line baissière** : relie les plus hauts descendants → résistance dynamique
↔️ **Trend line horizontale** : support/résistance classique

**Stratégie avancée**

✅ Rebond sur trend line + OB/FVG → forte probabilité de succès
✅ Cassure trend line + volume élevé → signal de continuation
✅ Fausse cassure (rejet) → opportunité contre-tendance

**Confluence avec d'autres outils**

🔸 Trend line + Fibonacci : zones de retracement renforcées
🔸 Trend line + EMA 50/200 : double confirmation
🔸 Trend line + RSI : divergences visibles

**Astuce psychologique**

⚠️ Cassures fausses sont fréquentes → patience et confirmation
✅ Attendre bougie de clôture au-delà de la ligne
✅ Vérifier le volume lors de la cassure

**Erreurs à éviter**

❌ Forcer le tracé sur des points non significatifs
❌ Redessiner constamment les lignes
❌ Ignorer le contexte général du marché
❌ Trader chaque touch sans confirmation`,
    quiz: [
      {
        question: 'Combien de points minimum pour tracer une trend line ?',
        options: ['1 point', '2 points significatifs', '5 points'],
        correctAnswer: 1
      },
      {
        question: 'Que confirme un volume élevé lors d\'une cassure ?',
        options: [
          'Rien du tout',
          'La fiabilité de la cassure',
          'C\'est une fausse cassure'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'une trend line haussière ?',
        options: [
          'Ligne reliant les plus hauts',
          'Ligne reliant les plus bas ascendants',
          'Ligne horizontale'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que faire avant de trader une cassure ?',
        options: [
          'Entrer immédiatement',
          'Attendre confirmation (clôture bougie + volume)',
          'Ignorer la cassure'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle confluence renforce une trend line ?',
        options: [
          'Aucune confluence nécessaire',
          'OB, FVG, Fibonacci, EMA',
          'Seulement la couleur'
        ],
        correctAnswer: 1
      }
    ]
  },

  'volume-analysis': {
    id: 'volume-analysis',
    title: 'Volume Analysis (Analyse de volume)',
    category: 'technical',
    objective: 'Utiliser le volume pour confirmer les mouvements',
    content: `**Concept avancé**

Le volume révèle la force ou la faiblesse d'un mouvement.

Permet de distinguer cassures fiables des faux breaks.

**Indications du volume**

✅ **Volume élevé + cassure** = continuation probable
⚠️ **Volume faible + cassure** = risque de fake break
📊 **Divergence volume/prix** → possible retournement

**Exemple pratique**

EUR/USD casse résistance 1,1300 :
- Avec volume supérieur à la moyenne → continuation probable
- Avec volume faible → attendre confirmation sur M15

**Patterns de volume**

**1. Volume Climax**
- Volume extrême à un sommet/creux
- Signale épuisement de la tendance
- Retournement potentiel

**2. Volume Confirmation**
- Prix monte + volume monte = tendance saine
- Prix monte + volume baisse = divergence, attention

**3. Dry Up Volume**
- Volume très faible en consolidation
- Précède souvent un gros mouvement
- Attendre la cassure

**Stratégie combinée**

💡 **Volume + OB/FVG** → confirme zones institutionnelles
💡 **Volume + divergence RSI** → potentiel retournement fort
💡 **Volume + breakout** → validité du mouvement

**Outils d'analyse du volume**

📊 **Volume Profile** : distribution du volume par prix
📊 **VWAP** : prix moyen pondéré par volume
📊 **OBV** : On Balance Volume (indicateur cumulatif)

**Cas d'école**

**Scénario 1 : Breakout validé**
- Prix casse résistance
- Volume 2x supérieur à moyenne
- → Entrée longue confirmée

**Scénario 2 : Faux breakout**
- Prix casse résistance
- Volume 50% en dessous moyenne
- → Attendre ou ne pas entrer

**Psychologie du volume**

💭 Volume = participation des traders
💭 Fort volume = conviction
💭 Faible volume = indécision`,
    quiz: [
      {
        question: 'Que signifie un volume élevé lors d\'une cassure ?',
        options: [
          'Fausse cassure',
          'Continuation probable et fiabilité',
          'Rien de spécial'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'une divergence volume/prix ?',
        options: [
          'Prix monte mais volume baisse',
          'Prix et volume montent ensemble',
          'Volume constant'
        ],
        correctAnswer: 0
      },
      {
        question: 'Qu\'est-ce que le Volume Climax ?',
        options: [
          'Volume normal',
          'Volume extrême signalant épuisement',
          'Volume très faible'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que précède souvent un volume très faible (Dry Up) ?',
        options: [
          'Rien',
          'Un gros mouvement imminent',
          'Une longue consolidation'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle combinaison valide un trade ?',
        options: [
          'Prix seulement',
          'Volume + OB/FVG + breakout',
          'Juste le volume'
        ],
        correctAnswer: 1
      }
    ]
  },

  'ichimoku-cloud': {
    id: 'ichimoku-cloud',
    title: 'Ichimoku Cloud (Nuage d\'Ichimoku)',
    category: 'technical',
    objective: 'Maîtriser l\'indicateur Ichimoku pour identifier tendances et entrées',
    content: `**Détails avancés**

**Composants de l'Ichimoku**

🔵 **Tenkan-sen** (9 périodes) : ligne de conversion
🔴 **Kijun-sen** (26 périodes) : ligne de base
🟢 **Senkou Span A** : (Tenkan + Kijun) / 2, projeté 26 périodes
🟡 **Senkou Span B** : moyenne 52 périodes, projeté 26 périodes
⚪ **Chikou Span** : prix actuel retardé de 26 périodes
☁️ **Kumo (Cloud)** : zone entre Senkou A et B

**Signaux principaux**

**1. Position par rapport au cloud**
- Prix au-dessus du cloud = tendance haussière forte 📈
- Prix en dessous du cloud = tendance baissière forte 📉
- Prix dans le cloud = indécision, range

**2. Croisements Tenkan/Kijun**
- Tenkan croise Kijun vers le haut = signal achat (TK Cross)
- Tenkan croise Kijun vers le bas = signal vente

**3. Épaisseur du cloud**
- Cloud épais = support/résistance fort
- Cloud fin = zone faible, cassure facile

**Stratégie complète**

**Étape 1 : Identifier tendance (H4/D1)**
- Prix au-dessus cloud = bias haussier
- Prix en dessous cloud = bias baissier

**Étape 2 : Signal d'entrée (M15/M30)**
- Tenkan coupe Kijun dans direction du cloud
- Prix teste le cloud → confirmation

**Étape 3 : Entrée**
- Après rejet ou bougie impulsive
- Stop : au-dessus/en dessous du cloud ou Kijun

**Exemple trade**

BTC/USD H4 :
- Prix au-dessus du cloud (haussier)
- Retracement vers le cloud
- Tenkan croise Kijun vers le haut
- Entrée long à 42,000$
- Stop sous le cloud à 41,500$
- TP au prochain high à 44,000$

**Confluence**

✅ Ichimoku + OB/FVG = signal très fort
✅ Cloud + Fibonacci = zones de retracement renforcées
✅ TK Cross + RSI > 50 = confirmation haussière

**Astuce**

⚠️ Cloud épais = zone forte → ne pas chercher entrées contre tendance
✅ Chikou Span au-dessus prix passé = confirmation haussière additionnelle`,
    quiz: [
      {
        question: 'Que signifie prix au-dessus du cloud ?',
        options: [
          'Tendance baissière',
          'Tendance haussière forte',
          'Pas de tendance'
        ],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce qu\'un TK Cross ?',
        options: [
          'Croisement Tenkan/Kijun',
          'Croisement avec le cloud',
          'Type de bougie'
        ],
        correctAnswer: 0
      },
      {
        question: 'Que signale un cloud épais ?',
        options: [
          'Zone faible',
          'Support/résistance fort',
          'Signal d\'achat'
        ],
        correctAnswer: 1
      },
      {
        question: 'Où placer le stop sur un trade Ichimoku ?',
        options: [
          'Au hasard',
          'Sous le cloud ou Kijun selon position',
          'Très loin'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle confluence renforce Ichimoku ?',
        options: [
          'Aucune',
          'OB, FVG, Fibonacci',
          'Seulement les émotions'
        ],
        correctAnswer: 1
      }
    ]
  },

  'divergence-trading': {
    id: 'divergence-trading',
    title: 'Divergence Trading',
    category: 'technical',
    objective: 'Détecter et trader les divergences entre prix et indicateurs',
    content: `**Définition avancée**

Comparaison prix vs indicateur (RSI, MACD, Stochastique).

Signale perte de momentum → retournement possible.

**Types de divergences**

**1. Divergence Haussière (Bullish)**
📉 Prix : baisse (lower lows)
📈 Indicateur : monte (higher lows)
→ Signal : retournement haussier potentiel

**2. Divergence Baissière (Bearish)**
📈 Prix : monte (higher highs)
📉 Indicateur : baisse (lower highs)
→ Signal : retournement baissier potentiel

**3. Divergence Hidden (Cachée)**
- Confirme continuation de tendance
- Plus rare mais très fiable

**Exemple concret**

EUR/USD :
- Prix descend : 1,1300 → 1,1280 → 1,1260
- RSI monte : 25 → 30 → 35
- → Divergence haussière
- Confirmation : bougie haussière engulfing
- Entrée long : 1,1265
- Stop sous dernier bas : 1,1255
- TP : 1,1320 (1:5.5 R:R)

**Meilleurs indicateurs pour divergences**

📊 **RSI** : le plus populaire, fiable
📊 **MACD** : bon pour divergences long terme
📊 **Stochastique** : excellent en range
📊 **OBV (volume)** : divergences volume/prix

**Stratégie avancée**

✅ Divergence + OB/FVG = signal renforcé énormément
✅ Multi-timeframe : divergence sur H4 → entrée sur M15/M30
✅ Attendre confirmation price action (pin bar, engulfing)

**Confluence maximale**

🎯 Divergence RSI
🎯 + OB non testé
🎯 + FVG
🎯 + Support majeur
= Probabilité > 80%

**Astuce critique**

⚠️ **Divergence seule = risquée** → toujours combiner avec confluence
✅ **Patience** : attendre la confirmation complète
✅ **Risk management** : même avec divergence, respecter 2% max risk

**Erreurs à éviter**

❌ Trader toutes les divergences
❌ Ignorer la tendance générale
❌ Entrer sans confirmation
❌ Oublier le stop-loss`,
    quiz: [
      {
        question: 'Qu\'est-ce qu\'une divergence haussière ?',
        options: [
          'Prix monte, indicateur monte',
          'Prix baisse mais indicateur monte',
          'Prix stable'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quel indicateur est le plus utilisé pour les divergences ?',
        options: [
          'EMA',
          'RSI',
          'Volume seul'
        ],
        correctAnswer: 1
      },
      {
        question: 'Que faire avant d\'entrer sur une divergence ?',
        options: [
          'Entrer immédiatement',
          'Attendre confirmation price action',
          'Ignorer'
        ],
        correctAnswer: 1
      },
      {
        question: 'Quelle confluence maximise la probabilité ?',
        options: [
          'Divergence seule',
          'Divergence + OB + FVG + support',
          'Juste le prix'
        ],
        correctAnswer: 1
      },
      {
        question: 'Peut-on trader uniquement sur divergence ?',
        options: [
          'Oui toujours',
          'Non, toujours combiner avec confluence',
          'Parfois'
        ],
        correctAnswer: 1
      }
    ]
  }
};
