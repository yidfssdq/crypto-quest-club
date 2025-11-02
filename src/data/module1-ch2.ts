import { Lesson } from '@/types/course';

export const module1Chapter2Lessons: Record<string, Lesson> = {
  'bitcoin-story': {
    id: 'bitcoin-story',
    title: "L'histoire du Bitcoin",
    category: 'Module 1 - Chapitre 2',
    objective: "Découvrir la genèse et l'évolution du Bitcoin",
    content: `
# L'histoire du Bitcoin

## La naissance (31 octobre 2008)

### Le Whitepaper

**Satoshi Nakamoto** publie un document de 9 pages : **"Bitcoin: A Peer-to-Peer Electronic Cash System"**

**Contexte :** Crise financière de 2008
- Lehman Brothers fait faillite
- Renflouement des banques par les gouvernements
- Perte de confiance dans le système financier traditionnel

**Vision :** Un système de paiement électronique peer-to-peer, sans intermédiaire.

### 3 janvier 2009 : Le Genesis Block

Satoshi mine le **premier bloc** de Bitcoin (bloc #0).

**Message caché dans le bloc :**
> "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"

(Le Times, 3 janvier 2009 : Le Chancelier au bord d'un second plan de sauvetage pour les banques)

**Interprétation :** Critique du système bancaire traditionnel et preuve de la date de création.

---

## Les premières années (2009-2011)

### 2009 : Début confidentiel
- Quelques développeurs minaient pour le plaisir
- Valeur : ~0 $ (pas de marché)
- Communauté : forums cryptographiques

### 12 janvier 2009 : Première transaction
- Satoshi → Hal Finney : 10 BTC
- Hal Finney : premier à télécharger le logiciel Bitcoin après Satoshi

### 22 mai 2010 : Bitcoin Pizza Day 🍕
**Laszlo Hanyecz** achète **2 pizzas** pour **10 000 BTC**

**Valeur à l'époque :** ~41 $
**Valeur en 2024 :** ~600 millions $

**Pourquoi c'est important :** Première transaction BTC contre un bien physique.

### Octobre 2010 : Premier exchange
**Mt. Gox** est créé (à l'origine, site d'échange de cartes Magic The Gathering).

**Prix du BTC :** 0,05 $

---

## La montée en puissance (2011-2013)

### 2011 : Premiers médias grand public
- TIME Magazine parle de Bitcoin
- Prix : 1 BTC = 1 $ (parité symbolique)

### Février 2011 : Silk Road
Marketplace illégal sur le dark web acceptant uniquement Bitcoin.
- Renforce l'image "monnaie du crime"
- Mais prouve l'utilité réelle de BTC

### Juin 2011 : Premier crash
- Prix passe de 31 $ à 2 $ (-93 %)
- Premier test de résilience

### 2013 : Adoption croissante
- Chypre : crise bancaire → les citoyens se tournent vers Bitcoin
- Prix : 1 BTC = 1 000 $ (sommet)
- Puis crash à 200 $ (correction)

---

## L'institutionnalisation (2014-2017)

### 2014 : Chute de Mt. Gox
**850 000 BTC volés** (~450 millions $ à l'époque)
- Plus gros hack crypto de l'histoire
- Bitcoin survit malgré tout

### 2015 : Ethereum arrive
Vitalik Buterin lance Ethereum → smart contracts
Bitcoin n'est plus seul.

### 2016 : Deuxième halving
Récompense de bloc passe de 25 BTC → 12,5 BTC
- Mécanisme déflationniste
- Prix : ~450 $

### 2017 : Bulle spéculative
- Décembre : 1 BTC = 19 783 $ (ATH)
- Médias mainstream couvrent massivement
- Puis crash à 3 200 $ en 2018 (-84 %)

---

## La maturité (2018-2020)

### 2018-2019 : "Crypto Winter"
- Prix stagne entre 3 000 $ et 10 000 $
- Construction d'infrastructures (exchanges, wallets, régulation)
- Moins de spéculation, plus de développement

### 2020 : Adoption institutionnelle
**MicroStrategy** (entreprise publique) achète 425 millions $ de BTC
**Square** (Jack Dorsey) achète 50 millions $
**PayPal** permet l'achat/vente de BTC

**Narratif change :**
- "Monnaie du crime" → "Or numérique"
- Hedge contre l'inflation (impression massive de $ COVID)

---

## L'ère institutionnelle (2021-présent)

### 2021 : Adoption mainstream
- **Tesla** achète 1,5 milliard $ de BTC
- **El Salvador** adopte Bitcoin comme monnaie légale (7 sept)
- **Taproot** upgrade : améliore privacy et smart contracts

**ATH : 69 000 $** (novembre 2021)

### 2022 : Nouveau bear market
- **Terra/Luna** s'effondre (-99 %)
- **FTX** fait faillite (8 milliards $ perdus)
- Bitcoin chute à 15 500 $

**Conséquence :** Régulation accrue, fin des plateformes centralisées peu fiables.

### 2023-2024 : Retour en force
- **BlackRock** dépose une demande d'ETF Bitcoin spot
- **SEC** approuve 11 ETF Bitcoin (janvier 2024)
- **Halving 2024** : 6,25 BTC → 3,125 BTC par bloc

**Prix actuel (2024) :** ~60 000 - 70 000 $

---

## Qui est Satoshi Nakamoto ?

**Mystère non résolu.**

**Indices :**
- Probablement pas une seule personne (équipe ?)
- Excellente maîtrise de la cryptographie et de l'économie
- Possède ~1 million de BTC (jamais bougés)

**Candidats populaires :**
- **Hal Finney** : cryptographe, premier à recevoir des BTC
- **Nick Szabo** : créateur de Bit Gold (précurseur de Bitcoin)
- **Craig Wright** : s'autoproclame Satoshi (jamais prouvé, procès perdus)
- **Dorian Nakamoto** : homonyme, a nié être Satoshi

**Pourquoi reste-t-il anonyme ?**
- Éviter la pression légale
- Décentralisation totale (pas de leader)
- Sécurité personnelle

---

## Les 4 halvings de Bitcoin

Un **halving** = division par 2 de la récompense de bloc

| Halving | Date | Récompense avant | Récompense après | Prix BTC |
|---------|------|------------------|------------------|----------|
| **Genesis** | 2009 | - | 50 BTC | 0 $ |
| **1er** | 28/11/2012 | 50 BTC | 25 BTC | 12 $ |
| **2e** | 09/07/2016 | 25 BTC | 12,5 BTC | 650 $ |
| **3e** | 11/05/2020 | 12,5 BTC | 6,25 BTC | 8 600 $ |
| **4e** | 20/04/2024 | 6,25 BTC | 3,125 BTC | 64 000 $ |

**Effet observé :** Le prix augmente généralement 12-18 mois après chaque halving (réduction de l'offre).

---

## Les grandes dates

| Date | Événement |
|------|-----------|
| **31/10/2008** | Publication du whitepaper |
| **03/01/2009** | Genesis Block |
| **22/05/2010** | Bitcoin Pizza Day (10k BTC) |
| **2011** | Parité BTC/USD (1 BTC = 1 $) |
| **2013** | Premier ATH (1 183 $) |
| **2014** | Chute Mt. Gox |
| **2017** | Deuxième ATH (19 783 $) |
| **2020** | Adoption institutionnelle (MicroStrategy, Square) |
| **2021** | Troisième ATH (69 000 $) + El Salvador |
| **2024** | ETF Bitcoin spot approuvés + 4e halving |

---

## Impact culturel et philosophique

### Le manifeste Cypherpunk
Bitcoin hérite d'un mouvement des années 90 :
- **Privacy** : droit à la vie privée
- **Cryptographie** : outil de liberté
- **Décentralisation** : résistance à la censure

### "Not your keys, not your coins"
Après Mt. Gox et FTX, la communauté apprend :
- Self-custody (contrôler ses propres clés)
- Méfiance envers les plateformes centralisées

### Bitcoin comme réserve de valeur
**Narratifs successifs :**
1. 2009-2013 : Monnaie électronique peer-to-peer
2. 2014-2017 : Or numérique
3. 2018-2020 : Hedge contre l'inflation
4. 2021-présent : Actif institutionnel

---

## Comparaison avec l'or

| Critère | Or | Bitcoin |
|---------|-----|---------|
| **Offre** | ~200 000 tonnes | 21 millions BTC |
| **Divisibilité** | Difficile | 8 décimales (satoshis) |
| **Portabilité** | Lourd | Wallet numérique |
| **Vérifiabilité** | Tests chimiques | Blockchain publique |
| **Inflation** | ~2 % /an (minage) | Décroissante (halvings) |
| **Censure** | Confiscation possible | Résistant (si self-custody) |

**Capitalisation :**
- Or : ~13 000 milliards $
- Bitcoin : ~1 300 milliards $ (~10 % de l'or)

**Projection :** Si Bitcoin atteint la capitalisation de l'or → 1 BTC = 600 000 $.

---

## Conclusion

Bitcoin a transformé une **idée abstraite** en un **actif de 1 000 milliards $** en 15 ans.

**Retenez :**
- Né d'une critique du système bancaire (2008)
- Résistant malgré hacks, crashes, interdictions
- Passe de "monnaie du dark web" à actif institutionnel
- 21 millions BTC max (rareté programmée)
- L'identité de Satoshi reste un mystère

**Prochaine étape :** Créer votre wallet et envoyer votre première transaction.
    `,
    quiz: [
      {
        question: "Quelle est la date de création du premier bloc Bitcoin (Genesis Block) ?",
        options: [
          "31 octobre 2008",
          "3 janvier 2009",
          "22 mai 2010",
          "28 novembre 2012"
        ],
        correctAnswer: 1
      },
      {
        question: "Combien de BTC ont été dépensés pour les 2 pizzas du Bitcoin Pizza Day ?",
        options: [
          "100 BTC",
          "1 000 BTC",
          "10 000 BTC",
          "100 000 BTC"
        ],
        correctAnswer: 2
      },
      {
        question: "Quelle est l'offre maximale de Bitcoin ?",
        options: [
          "10 millions",
          "21 millions",
          "100 millions",
          "Illimitée"
        ],
        correctAnswer: 1
      }
    ]
  },

  'metamask-tutorial': {
    id: 'metamask-tutorial',
    title: "Créer un wallet MetaMask (pas à pas)",
    category: 'Module 1 - Chapitre 2',
    objective: "Apprendre à créer et sécuriser son premier wallet crypto",
    content: `
# Créer un wallet MetaMask (Guide complet)

## Qu'est-ce qu'un wallet crypto ?

Un **wallet** (portefeuille) crypto est une application qui stocke vos **clés privées** et vous permet d'interagir avec la blockchain.

**Attention :** Le wallet ne stocke PAS vos cryptos (elles sont sur la blockchain), il stocke vos **clés d'accès**.

**Analogie :** La blockchain = coffre-fort, vos clés privées = clé du coffre.

---

## Pourquoi MetaMask ?

**MetaMask** est le wallet le plus populaire (30+ millions d'utilisateurs).

**Avantages :**
✅ Gratuit et open-source
✅ Extension navigateur (Chrome, Firefox, Brave)
✅ Compatible avec Ethereum et toutes les blockchains EVM
✅ Intégration simple avec les dApps
✅ Interface user-friendly

**Alternatives :**
- **Phantom** (pour Solana)
- **Trust Wallet** (mobile)
- **Coinbase Wallet**
- **Rainbow Wallet**

---

## Installation (étape par étape)

### Étape 1 : Télécharger MetaMask

**Option 1 : Extension navigateur (recommandé)**

1. Allez sur **metamask.io**
2. Cliquez sur "Download"
3. Sélectionnez votre navigateur (Chrome/Firefox/Brave)
4. Ajoutez l'extension

**⚠️ ATTENTION : Utilisez UNIQUEMENT le site officiel metamask.io**
Il existe des faux sites et extensions frauduleuses.

**Option 2 : Application mobile**

- iOS : App Store → "MetaMask"
- Android : Play Store → "MetaMask"

---

### Étape 2 : Créer un nouveau wallet

1. Cliquez sur **"Créer un nouveau portefeuille"**
2. Lisez et acceptez les conditions d'utilisation
3. Choisissez si vous voulez partager des données anonymes (optionnel)

---

### Étape 3 : Créer un mot de passe

**Créez un mot de passe FORT :**
- Au moins 8 caractères
- Majuscules + minuscules + chiffres + symboles
- Exemple : `Cr!pt0_S3cur3_2024`

**⚠️ Ce mot de passe :**
- Déverrouille MetaMask sur VOTRE appareil
- N'est PAS votre seed phrase (voir étape suivante)
- Peut être changé plus tard

---

### Étape 4 : Sauvegarder votre seed phrase (CRUCIAL)

#### Qu'est-ce qu'une seed phrase ?

Une **seed phrase** (ou phrase de récupération) est une série de **12 mots** qui permet de restaurer votre wallet sur n'importe quel appareil.

**Exemple de seed phrase :**
```
witch collapse practice feed shame open despair
creek road again ice least
```

#### ⚠️ RÈGLES D'OR ⚠️

**À FAIRE :**
✅ Écrivez-la sur PAPIER (pas numérique)
✅ Vérifiez 2 fois l'orthographe
✅ Stockez dans un endroit sûr (coffre-fort, banque)
✅ Faites 2-3 copies (maison + parents + coffre)
✅ Considérez une plaque en métal (résistant au feu/eau)

**À NE JAMAIS FAIRE :**
❌ Screenshot ou photo
❌ Email ou cloud (Google Drive, iCloud...)
❌ Note sur téléphone/ordinateur
❌ Partager avec QUICONQUE (même "support MetaMask")
❌ Saisir sur un site web (phishing)

**Conséquence si perdue :** Perte DÉFINITIVE de tous vos fonds. MetaMask ne peut PAS récupérer votre seed phrase.

**Conséquence si volée :** Vol de TOUS vos fonds.

---

### Étape 5 : Vérifier votre seed phrase

MetaMask vous demande de **confirmer l'ordre des mots**.

1. Cliquez sur les mots dans le bon ordre
2. Validez

**Pourquoi ?** Pour vérifier que vous l'avez bien notée.

---

### Étape 6 : Félicitations ! 🎉

Votre wallet est créé.

**Vous verrez :**
- Votre **adresse publique** : `0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb`
- Votre **solde** : 0 ETH (pour l'instant)

---

## Comprendre les composantes du wallet

### 1. Adresse publique

**Exemple :** `0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb`

**C'est quoi ?**
- Votre "IBAN crypto"
- Vous pouvez la partager librement
- Les gens envoient des fonds VERS cette adresse

**Analogie :** Comme votre adresse email (publique).

### 2. Clé privée

**Exemple :** `0xe87f4c5c3f4b8c9d2a1e6f7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7`

**C'est quoi ?**
- Votre "mot de passe ultime"
- Permet de signer des transactions
- Permet de restaurer le wallet (alternative à la seed phrase)

**⚠️ NE JAMAIS LA PARTAGER**

**Différence seed phrase vs clé privée :**
- Seed phrase → génère toutes vos clés privées (multi-comptes)
- Clé privée → accès à UN SEUL compte

### 3. Seed phrase

**Exemple :** `witch collapse practice feed shame open despair creek road again ice least`

**C'est quoi ?**
- Génère votre clé privée
- Permet de restaurer TOUS vos comptes MetaMask
- **Master key**

---

## Sécuriser son wallet (checklist)

### Niveau 1 : Essentiel

✅ Seed phrase écrite sur papier
✅ Mot de passe fort
✅ Extension MetaMask épinglée (éviter les faux sites)
✅ Vérifier l'URL avant de connecter son wallet

### Niveau 2 : Recommandé

✅ Plusieurs copies de la seed phrase (lieux différents)
✅ Utiliser un gestionnaire de mots de passe (pour le mot de passe MetaMask)
✅ Activer l'authentification 2FA sur les exchanges
✅ Ne jamais cliquer sur des liens suspects (Discord, Twitter)

### Niveau 3 : Paranoïaque (mais sage)

✅ Seed phrase gravée sur plaque métallique (Cryptosteel)
✅ Wallet secondaire pour les tests (peu de fonds)
✅ Hardware wallet (Ledger, Trezor) pour les gros montants
✅ Ordinateur dédié crypto (sans autres activités)
✅ Vérifier les smart contracts avant d'interagir (Etherscan)

---

## Ajouter des fonds à votre wallet

### Méthode 1 : Acheter directement dans MetaMask

1. Cliquez sur "Acheter"
2. Choisissez un fournisseur (MoonPay, Transak...)
3. Suivez les étapes KYC (vérification d'identité)
4. Payez par carte bancaire

**Frais :** ~3-5 % (pratique mais cher)

### Méthode 2 : Acheter sur un exchange puis envoyer

1. **Achetez des ETH** sur Binance, Coinbase, Kraken
2. **Copiez votre adresse MetaMask** (clic sur le nom du compte)
3. **Retirez depuis l'exchange** vers votre adresse MetaMask
4. **Sélectionnez le réseau Ethereum (ERC-20)**

**⚠️ ATTENTION :** Vérifiez TOUJOURS le réseau. Envoyer sur le mauvais réseau = perte des fonds.

**Réseaux courants :**
- **Ethereum Mainnet** (le principal)
- **Polygon**
- **Arbitrum**
- **Optimism**
- **Binance Smart Chain** (BNB Chain)

---

## Utiliser MetaMask

### Envoyer des cryptos

1. Cliquez sur "Envoyer"
2. Entrez l'adresse du destinataire
3. Montant à envoyer
4. **Gas fees** (frais de transaction) :
   - Lent (~10 min) : 10 gwei
   - Moyen (~3 min) : 30 gwei
   - Rapide (<1 min) : 50+ gwei
5. Confirmez

**⚠️ Vérifiez TOUJOURS l'adresse (copier-coller, puis re-vérifier)**

### Recevoir des cryptos

1. Cliquez sur votre nom de compte (copie l'adresse)
2. Partagez cette adresse
3. Attendez la confirmation (quelques minutes)

### Se connecter à une dApp

1. Allez sur une dApp (ex: Uniswap.org)
2. Cliquez sur "Connect Wallet"
3. Sélectionnez MetaMask
4. Approuvez la connexion

**⚠️ Vérifiez TOUJOURS l'URL du site avant de connecter**

---

## Pièges à éviter

### 1. Phishing

**Exemple :** Email "Your MetaMask account has been compromised, click here to secure it"

**Réponse :** MetaMask n'envoie JAMAIS d'emails. Supprimez immédiatement.

### 2. Faux sites

**Piège :** metamask.com (faux) vs metamask.io (vrai)

**Solution :** Toujours vérifier l'URL. Épingler MetaMask.

### 3. Approvals illimitées

Certaines dApps demandent un "approve" pour dépenser vos tokens.

**Piège :** Approuver un montant illimité

**Solution :** Limitez l'approval au montant exact (revoke.cash pour vérifier)

### 4. Dust attacks

**Piège :** Recevoir des tokens inconnus dans votre wallet

**Solution :** NE PAS interagir avec. C'est souvent du tracking ou une arnaque.

---

## Restaurer un wallet

Si vous changez d'ordinateur ou perdez l'accès :

1. Installez MetaMask
2. "Importer un portefeuille existant"
3. Entrez votre **seed phrase (12 mots)**
4. Créez un nouveau mot de passe
5. ✅ Votre wallet est restauré avec tous vos fonds

---

## Résumé de sécurité

| Élément | Partager ? | Sauvegarder ? |
|---------|-----------|--------------|
| **Adresse publique** | ✅ Oui | Pas nécessaire |
| **Mot de passe MetaMask** | ❌ Non | ⚠️ Oui (gestionnaire mdp) |
| **Seed phrase** | ❌❌❌ JAMAIS | ✅✅✅ Papier/métal |
| **Clé privée** | ❌❌❌ JAMAIS | ✅✅ Papier (backup) |

---

## Conclusion

Créer un wallet MetaMask est **facile**, mais le **sécuriser** demande de la rigueur.

**Retenez :**
- Seed phrase = clé ultime (à protéger à tout prix)
- Ne jamais la partager (même avec "support")
- Vérifier URLs avant de connecter son wallet
- Commencer avec de petits montants pour tester

**Prochaine étape :** Envoyer et recevoir vos premières cryptos.
    `,
    quiz: [
      {
        question: "Combien de mots comporte une seed phrase MetaMask ?",
        options: [
          "8 mots",
          "12 mots",
          "16 mots",
          "24 mots"
        ],
        correctAnswer: 1
      },
      {
        question: "Que se passe-t-il si vous perdez votre seed phrase ?",
        options: [
          "MetaMask peut la récupérer",
          "Vous pouvez la réinitialiser",
          "Perte définitive de tous vos fonds",
          "Vous pouvez contacter le support"
        ],
        correctAnswer: 2
      },
      {
        question: "Où devez-vous sauvegarder votre seed phrase ?",
        options: [
          "Screenshot sur votre téléphone",
          "Google Drive",
          "Email",
          "Papier dans un endroit sûr"
        ],
        correctAnswer: 3
      }
    ]
  },

  'send-receive': {
    id: 'send-receive',
    title: "Envoyer & recevoir des cryptos",
    category: 'Module 1 - Chapitre 2',
    objective: "Maîtriser les transactions crypto de base",
    content: `
# Envoyer & Recevoir des Cryptos

## Recevoir des cryptos

### Étape 1 : Obtenir votre adresse de réception

**Sur MetaMask :**
1. Ouvrez MetaMask
2. Cliquez sur le nom de votre compte (en haut)
3. Votre adresse est automatiquement copiée

**Format d'adresse (Ethereum) :**
\`0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb\`

**Autres blockchains :**
- **Bitcoin** : \`1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa\`
- **Solana** : \`8FE27ioQh3T7o22QsYVT5Re8NnHFqmFNbdqwiF3ywuZQ\`

### Étape 2 : Partager votre adresse

**Méthodes sûres :**
✅ Copier-coller
✅ QR code (pratique pour mobile)
✅ ENS (.eth) : \`alice.eth\` au lieu de \`0x742d35...\`

**⚠️ Précautions :**
- Vérifiez les premiers et derniers caractères
- Utilisez un QR code pour éviter les erreurs de frappe
- Méfiez-vous des malwares qui changent l'adresse dans le presse-papier

### Étape 3 : Attendre la confirmation

**Délais selon la blockchain :**
| Blockchain | Temps moyen | Confirmations |
|------------|-------------|---------------|
| **Bitcoin** | 10-60 min | 6 blocs |
| **Ethereum** | 1-5 min | 12 blocs |
| **Polygon** | <30 sec | 128 blocs |
| **Solana** | <1 sec | 32 slots |
| **Binance SC** | ~3 sec | 15 blocs |

**Pourquoi attendre plusieurs confirmations ?**
- Chaque bloc = sécurité supplémentaire
- Protection contre les attaques de double dépense
- Plus le montant est élevé, plus il faut attendre de confirmations

**Analogie :** C'est comme attendre que de la colle sèche. Plus elle sèche, plus c'est solide.

---

## Envoyer des cryptos

### Étape 1 : Obtenir l'adresse du destinataire

**Vérifications OBLIGATOIRES :**
✅ L'adresse est sur la BONNE blockchain (ETH ≠ BTC ≠ SOL)
✅ Vérifiez les 4 premiers ET 4 derniers caractères
✅ Double-vérification (copier-coller ≠ saisie manuelle)

**⚠️ ERREUR FRÉQUENTE :**
Envoyer des USDT sur Ethereum vers une adresse Binance Smart Chain → **Fonds perdus**

**Solution :** Toujours faire un test avec un petit montant d'abord.

### Étape 2 : Saisir le montant

**Options :**
- Montant exact (ex: 0.5 ETH)
- "Max" (envoyer tout, SAUF les gas fees)

**⚠️ Attention :**
Gardez toujours un peu d'ETH (ou autre coin natif) pour payer les gas fees futurs.

**Exemple :**
- Vous avez : 1 ETH
- Vous envoyez : 0.999 ETH (pas 1 ETH !)
- Vous gardez : 0.001 ETH pour les prochaines transactions

### Étape 3 : Choisir les gas fees (frais de transaction)

Les **gas fees** rémunèrent les validateurs/mineurs pour inclure votre transaction dans un bloc.

**Facteurs influençant les frais :**
1. **Congestion du réseau** : Plus le réseau est utilisé, plus c'est cher
2. **Urgence** : Vous pouvez payer plus pour être prioritaire
3. **Complexité** : Un swap Uniswap coûte plus cher qu'un simple transfert

**Exemple Ethereum (en gwei) :**
- **Lent** (10-20 min) : 10-20 gwei (~1-2 $)
- **Moyen** (2-5 min) : 30-50 gwei (~3-5 $)
- **Rapide** (<1 min) : 100+ gwei (~10-20 $)

**⚠️ En période de bull run, les frais peuvent atteindre 100-500 $ sur Ethereum !**

**Solutions pour réduire les frais :**
1. **Utiliser un Layer 2** (Polygon, Arbitrum, Optimism) : frais <0.10 $
2. **Choisir une blockchain moins chère** (Solana, BNB Chain)
3. **Transférer pendant les heures creuses** (week-end, nuit US)
4. **Vérifier les gas fees** sur ethgasstation.info avant de transférer

### Étape 4 : Confirmer la transaction

**Sur MetaMask :**
1. Vérifiez ENCORE l'adresse de destination
2. Vérifiez le montant
3. Vérifiez le réseau (Ethereum Mainnet, Polygon, etc.)
4. Cliquez sur "Confirmer"

**⚠️ DERNIÈRE CHANCE DE VÉRIFIER**
Une fois confirmée, la transaction est **IRRÉVERSIBLE**.

### Étape 5 : Suivre la transaction

**Blockchain explorers :**
- **Ethereum** : etherscan.io
- **Bitcoin** : blockchain.com
- **Polygon** : polygonscan.com
- **Solana** : solscan.io

**Informations visibles :**
- Hash de transaction (ID unique)
- Statut (Pending / Success / Failed)
- Montant
- Gas fees payés
- Nombre de confirmations

**Exemple d'URL :**
\`https://etherscan.io/tx/0x1234abcd...\`

**États possibles :**
- ⏳ **Pending** : En attente de validation
- ✅ **Success** : Transaction confirmée
- ❌ **Failed** : Échec (gas insuffisant, erreur de smart contract)

---

## Comprendre les gas fees en détail

### Calcul du coût total

**Formule :**
\`\`\`
Coût total = Gas Limit × Gas Price
\`\`\`

**Exemple :**
- Gas Limit : 21 000 (transfert simple ETH)
- Gas Price : 50 gwei
- Coût : 21 000 × 50 = 1 050 000 gwei = 0.00105 ETH (~3.15 $ si 1 ETH = 3000 $)

### Gas Limit vs Gas Used

**Gas Limit :**
- Montant MAX de gas que vous autorisez
- Si dépassé → transaction échoue
- Vous payez quand même le gas utilisé jusqu'à l'échec

**Gas Used :**
- Montant RÉEL de gas consommé
- Toujours ≤ Gas Limit

**Exemple :**
- Vous définissez Gas Limit à 100 000
- Transaction utilise 75 000
- Vous payez seulement pour 75 000

### Optimiser les gas fees

**1. Choisir le bon moment**

Utilisez **Ethereum Gas Tracker** (etherscan.io/gastracker) :
- **Rouge** (100+ gwei) : Évitez si possible
- **Orange** (50-100 gwei) : Acceptable
- **Vert** (<50 gwei) : Bon moment

**2. Utiliser des Layer 2**

| Réseau | Coût transfert | Coût swap |
|--------|----------------|-----------|
| **Ethereum L1** | 3-20 $ | 50-200 $ |
| **Polygon** | <0.01 $ | 0.10-0.50 $ |
| **Arbitrum** | 0.10-1 $ | 1-5 $ |
| **Optimism** | 0.10-1 $ | 1-5 $ |
| **Solana** | <0.001 $ | 0.001-0.01 $ |

**3. Grouper les transactions**

Au lieu de 10 transferts de 100 $, faites 1 transfert de 1000 $.

**4. Utiliser des DEX aggregators**

Des outils comme **1inch** trouvent le chemin le moins cher pour swapper.

---

## Réseaux et compatibilité

### Réseau principal vs Testnets

**Mainnet (réseau principal) :**
- Cryptos réelles
- Transactions irréversibles
- Coûts réels

**Testnet (réseau de test) :**
- Cryptos gratuites (faucets)
- Pour tester sans risque
- Exemples : Goerli, Sepolia (Ethereum), Devnet (Solana)

### Réseaux compatibles EVM

**EVM (Ethereum Virtual Machine) :**
Blockchains qui utilisent le même code qu'Ethereum.

**Avantages :**
- Même adresse sur tous les réseaux EVM
- Compatible avec MetaMask
- Smart contracts portables

**Réseaux EVM populaires :**
- Polygon
- Binance Smart Chain
- Avalanche C-Chain
- Fantom
- Arbitrum
- Optimism

**⚠️ ATTENTION :**
Même adresse ≠ mêmes fonds. Vos ETH sur Ethereum ≠ vos ETH sur Polygon.

---

## Erreurs courantes et solutions

### 1. Mauvais réseau

**Problème :** Envoyer des USDT Ethereum vers une adresse Binance Smart Chain

**Conséquence :** Fonds bloqués ou perdus

**Solution :**
- Vérifier le réseau AVANT d'envoyer
- Faire un test avec 1 $ d'abord
- Utiliser des bridges si besoin (exemple : Polygon Bridge)

### 2. Gas insuffisant

**Problème :** Transaction échoue avec "Out of gas"

**Conséquence :** Vous payez les gas fees mais la transaction échoue

**Solution :**
- Augmenter le Gas Limit (MetaMask le calcule automatiquement)
- Ne pas toucher au Gas Limit sauf si vous savez ce que vous faites

### 3. Adresse invalide

**Problème :** Saisie manuelle avec une faute de frappe

**Conséquence :** Fonds envoyés dans le vide (adresse inexistante) ou à quelqu'un d'autre

**Solution :**
- TOUJOURS copier-coller
- Vérifier les 4 premiers et 4 derniers caractères
- Utiliser ENS (.eth) pour éviter les erreurs

### 4. Nonce coincé

**Problème :** Une transaction bloquée empêche les suivantes

**Solution (MetaMask) :**
1. Settings → Advanced → Customize nonce
2. Annuler la transaction bloquée
3. Renvoyer avec un gas price plus élevé

### 5. Token invisible

**Problème :** Vous avez reçu un token mais il n'apparaît pas dans MetaMask

**Solution :**
1. Cliquez sur "Import tokens"
2. Entrez l'adresse du contrat (trouvable sur Etherscan)
3. Le token apparaît

---

## Sécurité : Checklist avant chaque transaction

**Avant de cliquer sur "Confirmer" :**

✅ **Adresse de destination**
- Vérifiez les 4 premiers et 4 derniers caractères
- Si ENS (.eth), vérifiez qu'il résout vers la bonne adresse

✅ **Réseau**
- Ethereum Mainnet ? Polygon ? BSC ?
- Correspond au réseau du destinataire ?

✅ **Montant**
- Correct ? (vigilance sur les décimales)
- Gardez assez pour les futurs gas fees ?

✅ **Gas fees**
- Raisonnables ? (pas 100 $ pour envoyer 50 $)
- Urgent ou peut attendre ?

✅ **Smart contract**
- Si interaction avec un contrat, vérifiez sur Etherscan
- Code audité ? Projet connu ?

---

## Conclusion

Envoyer et recevoir des cryptos est **simple** mais demande de la **vigilance**.

**Règles d'or :**
1. **Toujours faire un test avec un petit montant**
2. **Vérifier 3 fois l'adresse de destination**
3. **Confirmer le bon réseau**
4. **Optimiser les gas fees (heures creuses, L2)**
5. **Les transactions sont IRRÉVERSIBLES**

**Prochaine étape :** Explorer les parcours avancés (trading, DeFi, NFTs...).
    `,
    quiz: [
      {
        question: "Que se passe-t-il si vous envoyez des cryptos sur le mauvais réseau ?",
        options: [
          "Elles reviennent automatiquement",
          "Vous pouvez les récupérer en contactant le support",
          "Fonds bloqués ou perdus définitivement",
          "Elles sont converties automatiquement"
        ],
        correctAnswer: 2
      },
      {
        question: "Combien de confirmations sont recommandées pour Bitcoin ?",
        options: [
          "1 bloc",
          "3 blocs",
          "6 blocs",
          "12 blocs"
        ],
        correctAnswer: 2
      },
      {
        question: "Quelle est la meilleure façon de réduire les gas fees sur Ethereum ?",
        options: [
          "Envoyer plus d'argent",
          "Utiliser un Layer 2 comme Polygon",
          "Utiliser Bitcoin à la place",
          "Attendre que les fees augmentent"
        ],
        correctAnswer: 1
      }
    ]
  }
};

// English version
export const module1Chapter2LessonsEn: Record<string, Lesson> = {
  'bitcoin-story': {
    id: 'bitcoin-story',
    title: "The History of Bitcoin",
    category: 'Module 1 - Chapter 2',
    objective: "Discover the genesis and evolution of Bitcoin",
    content: `# The History of Bitcoin\n\n[English content would go here - similar structure to French version]`,
    quiz: module1Chapter2Lessons['bitcoin-story'].quiz
  },
  // Add other English translations
};
