import { Lesson } from '@/types/course';

export const module1Chapter1Lessons: Record<string, Lesson> = {
  'money-evolution': {
    id: 'money-evolution',
    title: "L'histoire de la monnaie",
    category: 'Module 1 - Chapitre 1',
    objective: "Comprendre l'évolution de la monnaie à travers les âges",
    content: "# L'histoire de la monnaie\n\nLa monnaie a évolué du troc aux cryptomonnaies en passant par les pièces, le papier et la monnaie fiduciaire.",
    quiz: [
      {
        question: "Quel est le principal problème du système de troc ?",
        options: ["Il est trop lent", "Il nécessite une double coïncidence des besoins", "Il est illégal", "Il est trop complexe"],
        correctAnswer: 1
      }
    ]
  },
  'what-is-fiat': {
    id: 'what-is-fiat',
    title: "La monnaie fiat et ses limites",
    category: 'Module 1 - Chapitre 1',
    objective: "Comprendre le fonctionnement de la monnaie fiat",
    content: "# La monnaie fiat\n\nLa monnaie fiat repose sur la confiance et présente des limites comme l'inflation.",
    quiz: []
  },
  'internet-evolution': {
    id: 'internet-evolution',
    title: "Du Web1 au Web3",
    category: 'Module 1 - Chapitre 1',
    objective: "Comprendre l'évolution d'Internet",
    content: "# Du Web1 au Web3\n\nÉvolution: Web1 (lecture) → Web2 (interaction) → Web3 (propriété).",
    quiz: []
  },
  'data-ownership': {
    id: 'data-ownership',
    title: "La donnée comme richesse",
    category: 'Module 1 - Chapitre 1',
    objective: "Comprendre la valeur de vos données",
    content: "# La donnée comme richesse\n\nVos données ont de la valeur. Le Web3 vous permet de les contrôler.",
    quiz: []
  },
  'web3-intro': {
    id: 'web3-intro',
    title: "Qu'est-ce que le Web3 ?",
    category: 'Module 1 - Chapitre 1',
    objective: "Définir le Web3",
    content: "# Le Web3\n\nLe Web3 est la nouvelle génération d'Internet basée sur la blockchain.",
    quiz: []
  },
  'decentralization': {
    id: 'decentralization',
    title: "Le pouvoir de la décentralisation",
    category: 'Module 1 - Chapitre 1',
    objective: "Comprendre la décentralisation",
    content: "# La décentralisation\n\nLa décentralisation élimine les points de contrôle centraux.",
    quiz: []
  },
  'blockchain-intro': {
    id: 'blockchain-intro',
    title: "C'est quoi une blockchain ?",
    category: 'Module 1 - Chapitre 1',
    objective: "Comprendre la blockchain",
    content: "# La blockchain\n\nUne base de données distribuée, sécurisée et immuable.",
    quiz: []
  },
  'consensus': {
    id: 'consensus',
    title: "Proof of Work / Proof of Stake",
    category: 'Module 1 - Chapitre 1',
    objective: "Comprendre les mécanismes de consensus",
    content: "# PoW vs PoS\n\nDeux mécanismes pour sécuriser la blockchain.",
    quiz: []
  }
};

export const module1Chapter1LessonsEn: Record<string, Lesson> = {
  'money-evolution': {
    id: 'money-evolution',
    title: "The History of Money",
    category: 'Module 1 - Chapter 1',
    objective: "Understand money evolution",
    content: "# History of Money\n\nFrom barter to cryptocurrencies.",
    quiz: module1Chapter1Lessons['money-evolution'].quiz
  }
};

// Export also in English
export const module1Chapter1LessonsEn: Record<string, Lesson> = {
  'money-evolution': {
    id: 'money-evolution',
    title: "The History of Money",
    category: 'Module 1 - Chapter 1',
    objective: "Understand the evolution of money through the ages",
    content: `
# The History of Money

## From Barter to Cryptocurrencies

Money has evolved through several major phases:

### 1. Barter (Prehistory - 3000 BC)
- Direct exchange of goods and services
- Problem: requires double coincidence of wants

### 2. Commodity Money (3000 BC - 600 BC)
- Shells, salt, livestock
- Recognized intrinsic value

### 3. Coins (600 BC - Present)
- Invented in Lydia (modern-day Turkey)
- Standardization and weight/purity guarantee

### 4. Paper Money (7th Century - Present)
- Invented in China under Tang Dynasty
- More practical than heavy coins

### 5. Modern Fiat Money (1971 - Present)
- Abandonment of gold standard
- Value based on trust

### 6. Digital Currency (2009 - Present)
- Bitcoin and cryptocurrencies
- Decentralization and programmability

## Key Points
- Money has always evolved to meet society's needs
- Each transition brought more efficiency
- Cryptos represent the next natural evolution
    `,
    quiz: module1Chapter1Lessons['money-evolution'].quiz
  },
  // Add other English translations as needed
};
