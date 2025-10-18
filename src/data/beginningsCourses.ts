import { Lesson } from '@/types/course';

// The Beginnings Category - French Lessons
export const beginningsLessonsFr: Record<string, Lesson> = {
  'what-is-crypto': {
    id: 'what-is-crypto',
    title: 'Qu\'est-ce que la crypto-monnaie ?',
    category: 'beginnings',
    objective: 'Comprendre les bases de la crypto-monnaie',
    content: `**Définition**

La crypto-monnaie est une monnaie numérique décentralisée basée sur la blockchain, qui est un registre public sécurisé et immuable.

Bitcoin (BTC) est la première crypto, créée en 2009.

Les altcoins (Ethereum, Solana, Cardano…) ont des usages variés : smart contracts, DeFi, NFTs, etc.

**Principes clés**

**Décentralisation** : pas de banque centrale, pas de contrôle gouvernemental direct.

**Transparence** : transactions visibles sur la blockchain.

**Sécurité** : cryptographie et consensus empêchent les fraudes.

**Pourquoi la crypto est révolutionnaire ?**

- Transactions peer-to-peer sans intermédiaire
- Frais souvent plus bas que les banques traditionnelles
- Accès financier pour tous, même sans compte bancaire
- Propriété réelle de vos actifs (pas comme l'argent en banque)

**Les différentes cryptos**

- **Bitcoin (BTC)** : l'or numérique, réserve de valeur
- **Ethereum (ETH)** : plateforme pour applications décentralisées
- **Stablecoins (USDT, USDC)** : cryptos indexées sur le dollar
- **Altcoins** : milliers d'autres projets avec des usages variés`,
    quiz: [
      {
        question: 'Qu\'est-ce que Bitcoin ?',
        options: ['Une banque en ligne', 'La première crypto-monnaie créée en 2009', 'Un réseau social'],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce que la blockchain ?',
        options: ['Un registre public sécurisé et immuable', 'Un type de crypto', 'Une application mobile'],
        correctAnswer: 0
      },
      {
        question: 'Quel est un avantage de la décentralisation ?',
        options: ['Plus de contrôle gouvernemental', 'Pas de banque centrale nécessaire', 'Des frais plus élevés'],
        correctAnswer: 1
      }
    ]
  },

  'what-is-wallet': {
    id: 'what-is-wallet',
    title: 'Qu\'est-ce qu\'un Wallet (portefeuille) ?',
    category: 'beginnings',
    objective: 'Comprendre les wallets crypto et leurs types',
    content: `**Définition**

Un wallet crypto est un outil qui te permet de stocker, envoyer et recevoir des crypto-monnaies.

**Il contient :**

**Clé publique** : comme ton IBAN, adresse pour recevoir crypto.

**Clé privée** : comme ton mot de passe → ne jamais partager !

**Types de Wallet**

**Hot Wallet (en ligne)** : plus pratique mais moins sécurisé.
- Exemples : MetaMask, Trust Wallet, wallets intégrés aux exchanges.
- Avantages : accès rapide, facile à utiliser
- Inconvénients : vulnérable aux hacks

**Cold Wallet (hors ligne)** : très sécurisé, stocké physiquement.
- Exemples : Ledger, Trezor, wallet papier.
- Avantages : très sécurisé, protection contre les hacks
- Inconvénients : moins pratique pour trader

**Conseils de sécurité**

✅ Ne jamais stocker de grosses sommes sur un hot wallet.
✅ Toujours sauvegarder la clé privée et la phrase seed.
✅ Écrire la phrase seed sur papier (pas numériquement)
✅ Ne jamais partager sa clé privée avec personne
✅ Vérifier toujours l'adresse avant d'envoyer des fonds`,
    quiz: [
      {
        question: 'Quelle est la différence principale entre hot et cold wallet ?',
        options: ['Le prix', 'Hot est en ligne, Cold est hors ligne', 'La couleur'],
        correctAnswer: 1
      },
      {
        question: 'Que ne faut-il JAMAIS partager ?',
        options: ['Votre adresse publique', 'Votre clé privée', 'Le nom de votre wallet'],
        correctAnswer: 1
      },
      {
        question: 'Quel type de wallet est le plus sécurisé ?',
        options: ['Hot wallet', 'Cold wallet', 'Wallet mobile'],
        correctAnswer: 1
      }
    ]
  },

  'how-to-create-wallet': {
    id: 'how-to-create-wallet',
    title: 'Comment créer un Wallet ?',
    category: 'beginnings',
    objective: 'Apprendre à créer son premier wallet crypto',
    content: `**Exemple avec MetaMask**

**Étape 1 : Installation**
- Installer MetaMask sur navigateur ou mobile
- Disponible pour Chrome, Firefox, Brave, iOS, Android

**Étape 2 : Création**
- Cliquer sur « Créer un wallet »
- Accepter les conditions d'utilisation

**Étape 3 : Mot de passe**
- Choisir un mot de passe fort
- Utiliser au moins 12 caractères
- Mélanger majuscules, minuscules, chiffres, symboles

**Étape 4 : Phrase seed**
- Noter la phrase seed (12 ou 24 mots) dans un endroit sûr
- ⚠️ CRUCIAL : Cette phrase permet de récupérer votre wallet
- Ne JAMAIS la partager ni la stocker en ligne
- L'écrire sur papier et la garder en lieu sûr

**Étape 5 : Confirmation**
- Confirmer la phrase seed en remettant les mots dans l'ordre
- Wallet prêt → tu peux recevoir/envoyer des crypto

**Conseils de sécurité**

✅ Faire plusieurs copies de la phrase seed
✅ Les stocker dans des endroits différents
✅ Ne jamais prendre de photo de la phrase seed
✅ Ne jamais l'envoyer par email ou message
✅ Activer l'authentification 2FA si disponible`,
    quiz: [
      {
        question: 'Combien de mots contient généralement une phrase seed ?',
        options: ['6 mots', '12 ou 24 mots', '100 mots'],
        correctAnswer: 1
      },
      {
        question: 'Où faut-il stocker sa phrase seed ?',
        options: ['Dans un email', 'Sur papier en lieu sûr', 'Sur les réseaux sociaux'],
        correctAnswer: 1
      },
      {
        question: 'Que permet la phrase seed ?',
        options: ['D\'envoyer des cryptos', 'De récupérer votre wallet', 'De gagner des cryptos'],
        correctAnswer: 1
      }
    ]
  },

  'how-to-buy-crypto': {
    id: 'how-to-buy-crypto',
    title: 'Comment acheter de la crypto ?',
    category: 'beginnings',
    objective: 'Apprendre les différentes méthodes d\'achat de crypto',
    content: `**Étapes principales**

**1. Choisir un exchange fiable**

**Centralisé (CEX)** : Binance, Coinbase, Kraken
- Avantages : facile, interface simple, support client
- Inconvénients : garde de vos crypto, risque de hack

**Décentralisé (DEX)** : Uniswap, PancakeSwap
- Nécessite un wallet comme MetaMask
- Avantages : contrôle total, anonymat
- Inconvénients : plus complexe, frais plus élevés

**2. Créer un compte sur l'exchange**
- S'inscrire avec email et mot de passe
- Vérifier l'email

**3. Vérifier identité (KYC)**
- KYC = Know Your Customer
- Fournir pièce d'identité
- Parfois selfie requis
- Processus varie selon l'exchange

**4. Déposer de la monnaie fiat**
- USD, EUR, etc.
- Méthodes : virement bancaire, carte bancaire, PayPal
- Vérifier les frais de chaque méthode

**5. Acheter la crypto désirée**
- Rechercher BTC, ETH, etc.
- Choisir montant à acheter
- Confirmer l'achat

**Conseils pratiques**

✅ Commencer avec de petites sommes
✅ Vérifier les frais d'achat/vente
✅ Comparer les prix entre exchanges
✅ Ne jamais investir plus que ce que vous pouvez perdre
✅ Diversifier vos investissements

**Erreurs à éviter**

❌ Acheter pendant un pump (FOMO)
❌ Investir toutes ses économies
❌ Ne pas vérifier l'adresse de dépôt
❌ Ignorer les frais de transaction`,
    quiz: [
      {
        question: 'Quelle est la différence entre CEX et DEX ?',
        options: ['Le prix', 'CEX est centralisé, DEX est décentralisé', 'La vitesse'],
        correctAnswer: 1
      },
      {
        question: 'Que signifie KYC ?',
        options: ['Keep Your Crypto', 'Know Your Customer', 'Kill Your Coins'],
        correctAnswer: 1
      },
      {
        question: 'Quelle est une bonne pratique pour débuter ?',
        options: ['Investir toutes ses économies', 'Commencer avec de petites sommes', 'Acheter pendant un pump'],
        correctAnswer: 1
      }
    ]
  },

  'transfer-crypto-to-wallet': {
    id: 'transfer-crypto-to-wallet',
    title: 'Transférer ses crypto vers un Wallet',
    category: 'beginnings',
    objective: 'Apprendre à transférer en toute sécurité',
    content: `**Étapes de transfert**

**1. Copier l'adresse publique du wallet**
- Ouvrir votre wallet (MetaMask, Trust Wallet, etc.)
- Copier l'adresse publique (commence généralement par 0x pour Ethereum)
- Double-vérifier l'adresse

**2. Aller sur l'exchange**
- Se connecter à votre exchange
- Aller dans « Retrait » ou « Withdrawal »
- Sélectionner la crypto à retirer

**3. Choisir le réseau approprié**
- Très important ! Réseau doit correspondre
- ETH = ERC20
- BSC = BEP20
- Polygon = Polygon Network
- ⚠️ Mauvais réseau = perte des fonds

**4. Coller l'adresse et montant**
- Coller l'adresse de votre wallet
- Entrer le montant à transférer
- Vérifier les frais de réseau

**5. Confirmer la transaction**
- Vérifier une dernière fois tout
- Confirmer le retrait
- Attendre la confirmation (quelques minutes)

**Test avec petit montant**

⚠️ TOUJOURS envoyer une petite fraction en test avant un gros transfert

Exemple :
- Si vous voulez transférer 1000 USDT
- Envoyez d'abord 10 USDT pour tester
- Vérifiez que ça arrive bien
- Puis envoyez le reste

**Vérifications importantes**

✅ Adresse correcte (vérifier 3-4 premiers et derniers caractères)
✅ Réseau compatible
✅ Frais acceptables
✅ Montant correct

**Erreurs fatales à éviter**

❌ Mauvais réseau = perte totale des fonds
❌ Adresse incorrecte = perte totale
❌ Envoyer tout d'un coup sans test
❌ Ne pas vérifier les frais`,
    quiz: [
      {
        question: 'Que se passe-t-il si on choisit le mauvais réseau ?',
        options: ['Rien de grave', 'Perte totale des fonds', 'Transaction plus lente'],
        correctAnswer: 1
      },
      {
        question: 'Quelle est la meilleure pratique avant un gros transfert ?',
        options: ['Envoyer tout d\'un coup', 'Faire un test avec un petit montant', 'Attendre le lendemain'],
        correctAnswer: 1
      },
      {
        question: 'Quel réseau pour Ethereum ?',
        options: ['BEP20', 'ERC20', 'TRC20'],
        correctAnswer: 1
      }
    ]
  },

  'crypto-security': {
    id: 'crypto-security',
    title: 'Sécurité crypto',
    category: 'beginnings',
    objective: 'Protéger ses cryptos contre les menaces',
    content: `**Points clés de sécurité**

**1. Protection de la clé privée**
❌ Jamais partager la clé privée ou phrase seed
❌ Jamais la stocker en ligne
✅ L'écrire sur papier
✅ La garder en lieu sûr (coffre-fort)
✅ Faire plusieurs copies

**2. Authentification à deux facteurs (2FA)**
✅ Activer 2FA sur tous les exchanges
✅ Utiliser Google Authenticator ou Authy
✅ Ne jamais utiliser SMS (vulnérable)

**3. Protection contre le phishing**
⚠️ Vérifier les URL avant de se connecter
⚠️ Ne pas cliquer sur liens inconnus
⚠️ Méfiance des emails suspects
✅ Taper l'URL manuellement dans le navigateur
✅ Vérifier le cadenas SSL (https://)

**4. Gestion des wallets**
✅ Cold wallets pour grosses sommes (Ledger, Trezor)
✅ Hot wallets seulement pour petites sommes de trading
✅ Ne jamais laisser de gros montants sur exchanges

**5. Arnaques courantes**

**Faux airdrops** : promettent des cryptos gratuites contre envoi de fonds
**Pump and dump** : groupe Telegram qui manipule les prix
**Faux support** : se font passer pour le support officiel
**Sites clonés** : copient des sites légitimes pour voler vos fonds

**Exemple : Ledger + MetaMask**
Tu peux interagir avec des DEX via MetaMask tout en gardant tes fonds sécurisés sur Ledger.

**Règle d'or**

Si c'est trop beau pour être vrai, c'est probablement une arnaque !`,
    quiz: [
      {
        question: 'Où stocker de grosses sommes ?',
        options: ['Sur un exchange', 'Cold wallet (Ledger, Trezor)', 'Hot wallet mobile'],
        correctAnswer: 1
      },
      {
        question: 'Quelle méthode 2FA est la plus sûre ?',
        options: ['SMS', 'Google Authenticator', 'Email'],
        correctAnswer: 1
      },
      {
        question: 'Comment vérifier qu\'un site est légitime ?',
        options: ['Cliquer sur le premier lien Google', 'Vérifier l\'URL et le cadenas SSL', 'Faire confiance à l\'email'],
        correctAnswer: 1
      }
    ]
  },

  'crypto-trading-basics': {
    id: 'crypto-trading-basics',
    title: 'Bases du Trading Crypto',
    category: 'beginnings',
    objective: 'Comprendre les fondamentaux du trading crypto',
    content: `**Types de trading crypto**

**Spot Trading** : achat et vente immédiate
- Simple et direct
- Vous possédez réellement la crypto
- Pas de liquidation possible

**Leverage / Margin Trading** : emprunter pour augmenter position
- Risque élevé ⚠️
- Possibilité de liquidation
- Gains et pertes multipliés

**Staking** : bloquer crypto pour générer des intérêts
- Revenu passif
- Généralement 5-20% annuel
- Crypto bloquée pendant une période

**Yield Farming / DeFi** : fournir liquidité pour revenus passifs
- Rendements potentiellement élevés
- Risques : impermanent loss, smart contract bugs
- Plus complexe

**Règles d'or du trading crypto**

✅ Toujours définir stop-loss et take-profit
✅ Ne jamais investir plus que ce que tu peux te permettre de perdre
✅ Commencer par du spot trading avant le leverage
✅ Diversifier les investissements
✅ Tenir un journal de trading

**Différences crypto vs forex/actions**

📊 **Volatilité** : crypto beaucoup plus volatile
⏰ **Horaires** : crypto 24/7, forex/actions ont des horaires
🌍 **Décentralisation** : crypto pas contrôlée par gouvernements
💰 **Accessibilité** : crypto accessible à tous, partout

**Erreurs de débutants**

❌ Trader avec l'effet de levier sans expérience
❌ FOMO (acheter au plus haut)
❌ Ne pas avoir de stratégie
❌ Tout mettre sur une seule crypto
❌ Vendre en panique lors des baisses`,
    quiz: [
      {
        question: 'Quel type de trading est recommandé pour débuter ?',
        options: ['Leverage x100', 'Spot Trading', 'Futures'],
        correctAnswer: 1
      },
      {
        question: 'Qu\'est-ce que le staking ?',
        options: ['Trader rapidement', 'Bloquer crypto pour générer des intérêts', 'Vendre à découvert'],
        correctAnswer: 1
      },
      {
        question: 'Quelle est la principale différence entre crypto et forex ?',
        options: ['Le prix', 'Crypto est 24/7 et décentralisé', 'La couleur des graphiques'],
        correctAnswer: 1
      }
    ]
  },

  'technical-analysis-crypto': {
    id: 'technical-analysis-crypto',
    title: 'Analyse Technique en Crypto',
    category: 'beginnings',
    objective: 'Appliquer l\'analyse technique aux cryptos',
    content: `**Mêmes principes que forex ou actions**

L'analyse technique fonctionne sur tous les marchés, y compris les cryptos.

**Concepts clés**

**Support / Résistance** : points où le prix rebondit ou casse
- Support = plancher, prix rebondit
- Résistance = plafond, prix bloque

**Order Blocks (OB)** : zones d'accumulation institutionnelle
- Agissent comme support/résistance majeurs
- Haute probabilité de réaction

**Fair Value Gaps (FVG)** : déséquilibres de prix
- Zones où le marché cherche à revenir
- Opportunités d'entrée

**Trend Lines** : lignes de tendance
- Connectent les points pivots
- Identifient la direction du marché

**Ichimoku Cloud** : indicateur complet
- Tendance, support/résistance, momentum
- Très visuel et puissant

**Divergences** : comparaison prix vs indicateur
- Signale perte de momentum
- Retournement potentiel

**Volumes** : confirme les mouvements
- Volume élevé + cassure = fiable
- Volume faible = fausse cassure possible

**Timeframes multiples**

📊 **H4/D1** : identifier la tendance générale
📊 **M15/M30** : timing des entrées
📊 **W1** : vision long terme

**Particularités crypto**

⚡ Plus volatile que forex/actions
🌙 Trading 24/7 (pas de gap week-end)
📰 Très sensible aux news
🐋 Impact des whales sur les prix

**Conseils pratiques**

✅ Toujours combiner plusieurs indicateurs
✅ Respecter les timeframes supérieurs
✅ Attendre les confirmations
✅ Ne pas over-trader`,
    quiz: [
      {
        question: 'Sur quel timeframe identifier la tendance générale ?',
        options: ['M1', 'H4/D1', 'M5'],
        correctAnswer: 1
      },
      {
        question: 'Que confirme un volume élevé lors d\'une cassure ?',
        options: ['Rien', 'La fiabilité de la cassure', 'C\'est une fausse cassure'],
        correctAnswer: 1
      },
      {
        question: 'Quelle est une particularité du trading crypto ?',
        options: ['Fermé le week-end', '24/7 sans interruption', 'Uniquement pendant les heures de bureau'],
        correctAnswer: 1
      }
    ]
  },

  'fundamental-analysis-crypto': {
    id: 'fundamental-analysis-crypto',
    title: 'Analyse Fondamentale en Crypto',
    category: 'beginnings',
    objective: 'Comprendre les facteurs fondamentaux affectant les cryptos',
    content: `**Facteurs macroéconomiques**

**Taux d'intérêt, inflation, chômage, PIB**
- Impactent les cryptos comme les marchés traditionnels
- FED/BCE influences majeures

**Annonces réglementaires**
- Adoption ou interdiction par pays
- Régulations SEC, CFTC aux USA
- Impact immédiat sur les prix

**Adoption institutionnelle**
- Entreprises acceptant crypto (Tesla, PayPal)
- Fonds institutionnels investissant
- ETF Bitcoin/Ethereum

**Facteurs spécifiques crypto**

**Updates technologiques**
- Ethereum Merge
- Bitcoin Halving
- Nouveaux protocoles

**Volume et capitalisation**
- Plus c'est liquide, plus c'est sûr
- Top 100 cryptos généralement plus stables

**Sentiment du marché**
- Fear & Greed Index
- Analyse des réseaux sociaux
- Tendances Google

**Bitcoin dominance**
- % de Bitcoin dans total market cap
- Indique si money flow vers BTC ou altcoins

**Exemple concret**

📰 **BTC annonce intégration ETF**
→ Hausse probable sur 1–2 semaines
→ Analyse technique pour timer l'entrée

**Calendrier économique**

✅ Suivre les annonces FED
✅ Monitorer les news crypto
✅ Vérifier les updates des projets

**Ressources**

📊 CoinMarketCap
📊 CoinGecko
📰 CryptoPanic
📈 TradingView`,
    quiz: [
      {
        question: 'Quel événement Bitcoin a lieu tous les 4 ans ?',
        options: ['Halving', 'Merge', 'Fork'],
        correctAnswer: 0
      },
      {
        question: 'Que mesure le Fear & Greed Index ?',
        options: ['Le prix', 'Le sentiment du marché', 'Le volume'],
        correctAnswer: 1
      },
      {
        question: 'Quel est l\'impact d\'une régulation positive ?',
        options: ['Baisse des prix', 'Hausse probable', 'Aucun effet'],
        correctAnswer: 1
      }
    ]
  },

  'useful-crypto-resources': {
    id: 'useful-crypto-resources',
    title: 'Ressources utiles pour débuter en crypto',
    category: 'beginnings',
    objective: 'Connaître les meilleurs outils et sites crypto',
    content: `**Sites de tracking et prix**

🌐 **CoinMarketCap**
- https://coinmarketcap.com
- Suivi prix et capitalisation
- Classement des cryptos
- Informations sur les projets

🌐 **CoinGecko**
- https://www.coingecko.com
- Suivi détaillé des projets
- Données on-chain
- Portfolio tracker

**Éducation et formation**

📚 **Binance Academy**
- https://academy.binance.com
- Guides et tutoriels gratuits
- Pour tous niveaux
- Très complet

📚 **Crypto.com University**
- Cours gratuits
- Certifications
- Articles éducatifs

**News et actualités**

📰 **CryptoPanic**
- https://cryptopanic.com
- Agrégateur de news crypto
- Filtres par crypto
- Alertes personnalisables

📰 **CoinTelegraph**
- Actualités quotidiennes
- Analyses de marché
- Interviews d'experts

**Analyse et trading**

📊 **TradingView**
- https://tradingview.com
- Graphiques professionnels
- Indicateurs techniques
- Alertes prix

📊 **CoinGlass**
- Données on-chain
- Liquidations
- Open interest

**Communautés**

💬 **Reddit** : r/cryptocurrency, r/bitcoin
💬 **Twitter** : suivre les experts et projets
💬 **Discord** : communautés de projets
💬 **Telegram** : groupes de discussion

**Sécurité**

🔐 **Guides Ledger**
- Sécurisation wallet
- Best practices

🔐 **Etherscan / BSCScan**
- Vérifier transactions
- Explorer blockchain

**Outils pratiques**

⚙️ **Gas trackers** : suivi des frais réseau
⚙️ **Portfolio trackers** : suivre investissements
⚙️ **Tax calculators** : calcul des impôts crypto`,
    quiz: [
      {
        question: 'Quel site utiliser pour suivre les prix et market cap ?',
        options: ['Facebook', 'CoinMarketCap', 'Instagram'],
        correctAnswer: 1
      },
      {
        question: 'Où trouver des tutoriels crypto gratuits ?',
        options: ['Binance Academy', 'TikTok', 'YouTube seulement'],
        correctAnswer: 0
      },
      {
        question: 'Quel outil pour des graphiques professionnels ?',
        options: ['Paint', 'TradingView', 'Excel'],
        correctAnswer: 1
      }
    ]
  },

  'practical-beginner-tips': {
    id: 'practical-beginner-tips',
    title: 'Conseils pratiques pour débutants',
    category: 'beginnings',
    objective: 'Éviter les erreurs classiques de débutants',
    content: `**Sécurité avant tout**

✅ Toujours sécuriser tes wallets
✅ Ne jamais partager clé privée / phrase seed
✅ Activer 2FA partout
✅ Utiliser cold wallet pour grosses sommes

**Gestion du capital**

✅ Ne pas investir tout son argent dans une seule crypto
✅ Diversifier : BTC, ETH, quelques altcoins
✅ Garder une réserve en stablecoins (USDT, USDC)
✅ Réinvestir progressivement, pas tout d'un coup

**Commencer petit**

✅ Débuter avec des sommes faibles
✅ Comprendre le fonctionnement avant d'investir plus
✅ Tester les transferts avec de petits montants
✅ Apprendre de ses erreurs sans perdre gros

**Journal de trading**

📝 Tenir un journal : prix, raison de l'entrée/sortie, émotion
📝 Analyser tes trades régulièrement
📝 Identifier tes patterns d'erreurs
📝 Améliorer ta stratégie

**Rester informé**

📰 Suivre les actualités crypto
📊 Comprendre que le marché est très sensible aux news
🔔 Mettre des alertes de prix
📚 Continuer à apprendre constamment

**Éviter les arnaques**

❌ Attention aux fakes ICO / scams
❌ Méfiance des promesses de gains garantis
❌ Ne jamais envoyer de crypto pour "doubler" votre argent
❌ Vérifier toujours la légitimité des projets

**Psychologie**

🧠 Ne pas trader émotionnellement
🧠 Accepter les pertes font partie du processus
🧠 Ne pas vendre en panique
🧠 Ne pas acheter sous FOMO

**Patience et discipline**

⏳ Les meilleurs traders sont patients
⏳ Attendre les bonnes opportunités
⏳ Suivre son plan de trading
⏳ Ne pas over-trader

**Réalisme**

💭 Gains rapides = exception, pas la règle
💭 Viser 5-10% par mois = très bon
💭 Accepter qu'on ne peut pas tout gagner
💭 Se former continuellement`,
    quiz: [
      {
        question: 'Quelle est la première priorité ?',
        options: ['Gagner rapidement', 'Sécuriser ses wallets', 'Trader beaucoup'],
        correctAnswer: 1
      },
      {
        question: 'Pourquoi tenir un journal de trading ?',
        options: ['C\'est obligatoire', 'Pour identifier ses erreurs et s\'améliorer', 'Pour impressionner'],
        correctAnswer: 1
      },
      {
        question: 'Quel est un signe d\'arnaque ?',
        options: ['Promettre de doubler votre argent', 'Demander KYC', 'Offrir du support'],
        correctAnswer: 0
      }
    ]
  }
};
