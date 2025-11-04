import { Lesson } from '@/types/course';

// Module 1 - Chapitre 1: Les Fondamentaux de la Crypto
export const module1Chapter1: Record<string, Lesson> = {
  'money-evolution': {
    id: 'money-evolution',
    title: "L'histoire de la monnaie",
    category: 'Module 1 - Ch1',
    objective: "Comprendre l'évolution de la monnaie à travers les âges",
    content: `# L'histoire de la monnaie

La monnaie a évolué du troc aux cryptomonnaies en passant par les pièces, le papier et la monnaie fiduciaire.

## Du troc aux pièces
Le troc était le premier système d'échange, mais il nécessitait une "double coïncidence des besoins". Les pièces ont ensuite standardisé les échanges.

## La monnaie papier
Inventée en Chine, la monnaie papier a facilité les transactions en étant plus légère et pratique.

## La monnaie fiat moderne
Depuis 1971 et l'abandon de l'étalon-or, la monnaie repose sur la confiance dans les gouvernements.`,
    quiz: [
      {
        question: "Quel est le principal problème du système de troc ?",
        options: ["Il est trop lent", "Il nécessite une double coïncidence des besoins", "Il est illégal"],
        correctAnswer: 1
      }
    ]
  },
  'what-is-fiat': {
    id: 'what-is-fiat',
    title: "La monnaie fiat et ses limites",
    category: 'Module 1 - Ch1',
    objective: "Comprendre le fonctionnement de la monnaie fiat",
    content: `# La monnaie fiat et ses limites

La monnaie fiat est une devise émise par un gouvernement qui n'est pas adossée à une marchandise physique comme l'or.

## Qu'est-ce que la monnaie fiat ?
Elle tire sa valeur de la confiance dans le gouvernement qui l'émet et de son cours légal.

## Les limites de la fiat
- **Inflation** : Les banques centrales peuvent imprimer de l'argent, dévaluant la monnaie
- **Contrôle centralisé** : Les gouvernements contrôlent totalement la masse monétaire
- **Barrières géographiques** : Difficile d'envoyer de l'argent à l'international`,
    quiz: []
  },
  'internet-evolution': {
    id: 'internet-evolution',
    title: "Du Web1 au Web3",
    category: 'Module 1 - Ch1',
    objective: "Comprendre l'évolution d'Internet",
    content: `# Du Web1 au Web3

## Web 1.0 (1990-2004) - Lecture seule
Sites statiques, pas d'interaction. Vous pouviez seulement lire du contenu.

## Web 2.0 (2004-présent) - Lecture et écriture
Réseaux sociaux, blogs, interactivité. Vous pouvez créer du contenu mais les plateformes le possèdent.

## Web 3.0 (émergent) - Lecture, écriture et propriété
Décentralisé, vous possédez vos données et votre contenu grâce à la blockchain.`,
    quiz: []
  },
  'data-ownership': {
    id: 'data-ownership',
    title: "La donnée comme richesse",
    category: 'Module 1 - Ch1',
    objective: "Comprendre la valeur de vos données",
    content: `# La donnée comme richesse

Vos données ont une valeur immense. Facebook, Google, Amazon génèrent des milliards en vendant vos données à des annonceurs.

## Le problème actuel
Vous créez le contenu, mais les plateformes en profitent financièrement.

## La solution Web3
Dans le Web3, vous possédez vos données et pouvez choisir de les monétiser ou non.`,
    quiz: []
  },
  'web3-intro': {
    id: 'web3-intro',
    title: "Qu'est-ce que le Web3 ?",
    category: 'Module 1 - Ch1',
    objective: "Définir le Web3",
    content: `# Qu'est-ce que le Web3 ?

Le Web3 est la nouvelle génération d'Internet basée sur la blockchain, où les utilisateurs reprennent le contrôle.

## Caractéristiques principales
- **Décentralisé** : Pas de serveur central
- **Transparent** : Toutes les transactions sont visibles
- **Permissionless** : Accessible à tous sans autorisation`,
    quiz: []
  },
  'decentralization': {
    id: 'decentralization',
    title: "Le pouvoir de la décentralisation",
    category: 'Module 1 - Ch1',
    objective: "Comprendre la décentralisation",
    content: `# Le pouvoir de la décentralisation

La décentralisation élimine les intermédiaires et les points de contrôle centraux.

## Avantages
- **Censure résistante** : Personne ne peut vous bloquer
- **Transparence** : Tout est vérifiable
- **Sécurité** : Pas de point unique de défaillance`,
    quiz: []
  },
  'blockchain-intro': {
    id: 'blockchain-intro',
    title: "C'est quoi une blockchain ?",
    category: 'Module 1 - Ch1',
    objective: "Comprendre la blockchain",
    content: `# C'est quoi une blockchain ?

Une blockchain est une base de données distribuée, sécurisée et immuable.

## Comment ça marche ?
Les transactions sont regroupées en "blocs" qui sont liés ensemble de manière cryptographique, formant une "chaîne".

## Caractéristiques
- **Immuable** : Impossible de modifier le passé
- **Distribuée** : Copiée sur des milliers d'ordinateurs
- **Sécurisée** : Protégée par la cryptographie`,
    quiz: []
  },
  'consensus': {
    id: 'consensus',
    title: "Proof of Work / Proof of Stake",
    category: 'Module 1 - Ch1',
    objective: "Comprendre les mécanismes de consensus",
    content: `# Proof of Work vs Proof of Stake

## Proof of Work (PoW)
Utilisé par Bitcoin. Les mineurs résolvent des énigmes mathématiques complexes pour valider les blocs.

**Avantages** : Très sécurisé
**Inconvénients** : Consomme beaucoup d'énergie

## Proof of Stake (PoS)
Utilisé par Ethereum. Les validateurs "stakent" (bloquent) leurs cryptos pour valider les transactions.

**Avantages** : Économe en énergie
**Inconvénients** : Favorise ceux qui ont beaucoup de cryptos`,
    quiz: []
  }
};

// Module 1 - Chapitre 2: La crypto-monnaie et son écosystème  
export const module1Chapter2: Record<string, Lesson> = {
  'bitcoin-story': {
    id: 'bitcoin-story',
    title: "L'histoire du Bitcoin",
    category: 'Module 1 - Ch2',
    objective: "Découvrir les origines du Bitcoin",
    content: `# L'histoire du Bitcoin

Créé en 2009 par Satoshi Nakamoto (identité inconnue), Bitcoin est la première cryptomonnaie.

## La genèse
Le 3 janvier 2009, le premier bloc Bitcoin (Genesis Block) est miné avec le message : "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"

## La révolution
Bitcoin propose une monnaie décentralisée, sans banque ni gouvernement.`,
    quiz: []
  },
  'ethereum-smart-contracts': {
    id: 'ethereum-smart-contracts',
    title: "Ethereum et les smart contracts",
    category: 'Module 1 - Ch2',
    objective: "Comprendre Ethereum",
    content: `# Ethereum et les smart contracts

Créé par Vitalik Buterin en 2015, Ethereum est bien plus qu'une simple cryptomonnaie.

## Les smart contracts
Des programmes autonomes qui s'exécutent automatiquement quand certaines conditions sont remplies.

## Applications
DeFi, NFTs, DAOs... Ethereum est la plateforme de développement Web3 la plus utilisée.`,
    quiz: []
  },
  'altcoins': {
    id: 'altcoins',
    title: "Les altcoins",
    category: 'Module 1 - Ch2',
    objective: "Découvrir les alternatives au Bitcoin",
    content: `# Les altcoins

"Altcoin" = Alternative Coin. Toute crypto qui n'est pas Bitcoin.

## Catégories principales
- **Plateformes de smart contracts** : Ethereum, Solana, Cardano
- **Stablecoins** : USDT, USDC, DAI
- **DeFi tokens** : UNI, AAVE, LINK
- **Memecoins** : DOGE, SHIB`,
    quiz: []
  },
  'stablecoins': {
    id: 'stablecoins',
    title: "Stabilité en crypto",
    category: 'Module 1 - Ch2',
    objective: "Comprendre les stablecoins",
    content: `# Les stablecoins

Les stablecoins sont des cryptos dont la valeur est liée à un actif stable (généralement le dollar).

## Types de stablecoins
- **Fiat-backed** : USDT, USDC (adossés à des réserves de dollars)
- **Crypto-backed** : DAI (collatéralisé par d'autres cryptos)
- **Algorithmiques** : Régulés par des algorithmes (risqués)`,
    quiz: []
  },
  'tokenomics': {
    id: 'tokenomics',
    title: "Tokenomics",
    category: 'Module 1 - Ch2',
    objective: "Comprendre l'économie des tokens",
    content: `# Tokenomics

La tokenomics (token + economics) définit comment un token fonctionne économiquement.

## Éléments clés
- **Supply totale** : Combien de tokens existeront au maximum
- **Circulation** : Combien sont actuellement en circulation
- **Distribution** : Comment les tokens sont répartis
- **Utilité** : À quoi sert le token`,
    quiz: []
  },
  'wallets': {
    id: 'wallets',
    title: "Les wallets",
    category: 'Module 1 - Ch2',
    objective: "Comprendre les portefeuilles crypto",
    content: `# Les wallets (portefeuilles)

Un wallet stocke vos clés privées qui vous donnent accès à vos cryptos.

## Types de wallets
- **Hot wallets** : Connectés à internet (MetaMask, Trust Wallet)
- **Cold wallets** : Hors ligne (Ledger, Trezor)

## Règle d'or
Not your keys, not your coins. Si vous ne contrôlez pas vos clés privées, vous ne possédez pas vraiment vos cryptos.`,
    quiz: []
  },
  'metamask-tutorial': {
    id: 'metamask-tutorial',
    title: "Créer un wallet MetaMask",
    category: 'Module 1 - Ch2',
    objective: "Créer son premier wallet pas à pas",
    content: `# Créer un wallet MetaMask (pas à pas)

## Étape 1 : Installation
Allez sur metamask.io et téléchargez l'extension pour votre navigateur.

## Étape 2 : Créer un wallet
Cliquez sur "Create a Wallet" et choisissez un mot de passe fort.

## Étape 3 : Sauvegarder la seed phrase
MetaMask vous donnera 12 mots. **ÉCRIVEZ-LES SUR PAPIER** et gardez-les en sécurité.

⚠️ Ne JAMAIS partager votre seed phrase !

## Étape 4 : Confirmer
Sélectionnez les mots dans le bon ordre pour confirmer.

## Félicitations ! 
Vous avez votre premier wallet crypto.`,
    quiz: []
  },
  'send-receive': {
    id: 'send-receive',
    title: "Envoyer & recevoir des cryptos",
    category: 'Module 1 - Ch2',
    objective: "Maîtriser les transactions",
    content: `# Envoyer & recevoir des cryptos

## Recevoir des cryptos
1. Ouvrez votre wallet
2. Cliquez sur "Receive" ou votre adresse
3. Copiez votre adresse publique
4. Partagez-la à l'expéditeur

## Envoyer des cryptos
1. Cliquez sur "Send"
2. Collez l'adresse du destinataire
3. Entrez le montant
4. Vérifiez les frais de gas
5. Confirmez la transaction

⚠️ **Vérifiez TOUJOURS l'adresse avant d'envoyer !**`,
    quiz: []
  },
  'cex-vs-dex': {
    id: 'cex-vs-dex',
    title: "CEX vs DEX",
    category: 'Module 1 - Ch2',
    objective: "Comprendre les différents types d'exchanges",
    content: `# CEX vs DEX

## CEX (Centralized Exchange)
Plateformes centralisées comme Binance, Coinbase, Kraken.

**Avantages** : Facile à utiliser, rapide, support client
**Inconvénients** : Vous ne contrôlez pas vos clés

## DEX (Decentralized Exchange)  
Plateformes décentralisées comme Uniswap, PancakeSwap.

**Avantages** : Vous gardez le contrôle, pas de KYC
**Inconvénients** : Plus complexe, frais de gas`,
    quiz: []
  },
  'bridges': {
    id: 'bridges',
    title: "Les bridges",
    category: 'Module 1 - Ch2',
    objective: "Comprendre les ponts entre blockchains",
    content: `# Les bridges (ponts)

Les bridges permettent de transférer des actifs d'une blockchain à une autre.

## Pourquoi en a-t-on besoin ?
Les blockchains ne communiquent pas naturellement entre elles. Les bridges créent cette connexion.

## Exemples
- Transférer des ETH d'Ethereum vers Polygon
- Déplacer des tokens de Binance Smart Chain vers Avalanche

⚠️ Les bridges peuvent être risqués - utilisez des bridges réputés.`,
    quiz: []
  }
};

// Module 1 - Chapitre 3: La DeFi et les services du Web3
export const module1Chapter3: Record<string, Lesson> = {
  'what-is-defi': {
    id: 'what-is-defi',
    title: "C'est quoi la DeFi ?",
    category: 'Module 1 - Ch3',
    objective: "Découvrir la finance décentralisée",
    content: `# C'est quoi la DeFi ?

DeFi = Decentralized Finance (Finance Décentralisée)

## Le concept
Recréer tous les services financiers traditionnels (prêts, échanges, investissements) sans banques ni intermédiaires.

## Avantages
- Accessible à tous 24/7
- Pas de discrimination
- Transparence totale
- Rendements souvent plus élevés`,
    quiz: []
  },
  'liquidity-pools': {
    id: 'liquidity-pools',
    title: "Pools de liquidité",
    category: 'Module 1 - Ch3',
    objective: "Comprendre les pools de liquidité",
    content: `# Pools de liquidité

Un pool de liquidité est un smart contract contenant des fonds que les utilisateurs peuvent échanger.

## Comment ça marche ?
Les "liquidity providers" déposent des paires de tokens (ex: ETH/USDC) dans un pool et gagnent des frais sur chaque transaction.

## Exemple
Sur Uniswap, si vous ajoutez 1 ETH + 2000 USDC, vous fournissez de la liquidité et gagnez 0.3% sur chaque swap.`,
    quiz: []
  },
  'yield-farming': {
    id: 'yield-farming',
    title: "Yield farming",
    category: 'Module 1 - Ch3',
    objective: "Découvrir le yield farming",
    content: `# Yield Farming

Le yield farming consiste à déplacer vos cryptos entre différents protocoles DeFi pour maximiser les rendements.

## Stratégies courantes
- Fournir de la liquidité sur Uniswap
- Staker des tokens sur Aave
- Farmer des rewards sur Curve

⚠️ Plus le rendement est élevé, plus le risque est grand.`,
    quiz: []
  },
  'staking': {
    id: 'staking',
    title: "Staking",
    category: 'Module 1 - Ch3',
    objective: "Comprendre le staking",
    content: `# Staking

Staker = bloquer vos cryptos pour sécuriser un réseau et gagner des récompenses.

## Types de staking
- **Proof of Stake** : Valider des transactions (Ethereum)
- **Liquidity Mining** : Fournir de la liquidité (Uniswap)
- **Governance Staking** : Participer à la gouvernance (Curve)

## Rendements
Généralement entre 5% et 20% APY selon le protocole et le token.`,
    quiz: []
  }
};

// Module 1 - Chapitre 4: Les NFT, DAO et le Web3 Social
export const module1Chapter4: Record<string, Lesson> = {
  'what-is-nft': {
    id: 'what-is-nft',
    title: "C'est quoi un NFT ?",
    category: 'Module 1 - Ch4',
    objective: "Comprendre les NFTs",
    content: `# C'est quoi un NFT ?

NFT = Non-Fungible Token (Token Non-Fongible)

## Qu'est-ce que ça signifie ?
Un NFT est unique et ne peut pas être échangé à l'identique. Contrairement à 1 ETH qui vaut toujours 1 ETH, chaque NFT est différent.

## Utilisations
- Art digital
- Avatars de profil
- Tickets d'événements
- Certificats de propriété`,
    quiz: []
  },
  'dao-intro': {
    id: 'dao-intro',
    title: "DAO",
    category: 'Module 1 - Ch4',
    objective: "Découvrir les organisations décentralisées",
    content: `# DAO (Decentralized Autonomous Organization)

Une DAO est une organisation gouvernée par des smart contracts et ses membres, sans hiérarchie traditionnelle.

## Comment ça fonctionne ?
Les détenteurs de tokens votent sur les propositions. Si la majorité approuve, le smart contract exécute automatiquement la décision.

## Exemples célèbres
- MakerDAO (protocole DeFi)
- Uniswap DAO (exchange décentralisé)`,
    quiz: []
  }
};

// Module 1 - Chapitre 5: Sécurité, risques et fiscalité
export const module1Chapter5: Record<string, Lesson> = {
  'private-keys-security': {
    id: 'private-keys-security',
    title: "Sécurité des clés privées",
    category: 'Module 1 - Ch5',
    objective: "Protéger ses clés privées",
    content: `# Sécurité des clés privées

Vos clés privées = accès à vos fonds. Si quelqu'un les obtient, vos cryptos sont perdues.

## Règles d'or
1. Ne JAMAIS partager votre seed phrase
2. Ne JAMAIS la saisir sur un site web
3. Ne JAMAIS la prendre en photo
4. Ne JAMAIS la stocker sur votre ordinateur

## Stockage sécurisé
- Écrivez-la sur papier
- Utilisez un support métallique résistant au feu
- Gardez plusieurs copies dans des endroits différents`,
    quiz: []
  },
  'scams': {
    id: 'scams',
    title: "Arnaques",
    category: 'Module 1 - Ch5',
    objective: "Reconnaître les arnaques",
    content: `# Les arnaques en crypto

## Arnaques courantes
- **Phishing** : Faux sites web qui ressemblent aux vrais
- **Fake airdrops** : "Connectez votre wallet pour recevoir des tokens gratuits"
- **Pump and dump** : Gonfler artificiellement le prix puis vendre
- **Ponzi schemes** : Rendements garantis impossibles

## Comment se protéger ?
✅ Vérifiez toujours les URLs
✅ Ne faites confiance à personne qui vous promet des rendements garantis
✅ Utilisez un hardware wallet pour les grosses sommes`,
    quiz: []
  },
  'rug-pulls': {
    id: 'rug-pulls',
    title: "Rug Pulls",
    category: 'Module 1 - Ch5',
    objective: "Comprendre les rug pulls",
    content: `# Rug Pulls

Un rug pull, c'est quand les développeurs d'un projet disparaissent avec l'argent des investisseurs.

## Comment ça se passe ?
1. Les devs lancent un nouveau token
2. Ils font beaucoup de marketing
3. Les gens achètent le token
4. Les devs retirent toute la liquidité et disparaissent

## Signaux d'alerte
🚩 Équipe anonyme
🚩 Pas d'audit du smart contract
🚩 Liquidité non verrouillée
🚩 Promesses irréalistes`,
    quiz: []
  }
};

export const allModule1Lessons = {
  ...module1Chapter1,
  ...module1Chapter2,
  ...module1Chapter3,
  ...module1Chapter4,
  ...module1Chapter5
};
