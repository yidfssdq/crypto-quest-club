import { Lesson } from '@/types/course';

// Fundamental Analysis Category - English Lessons
export const fundamentalLessonsEn: Record<string, Lesson> = {
  'fundamental-analysis-basics': {
    id: 'fundamental-analysis-basics',
    title: 'Fundamental Analysis Basics',
    category: 'fundamental',
    objective: 'Understand fundamental analysis and its application in crypto',
    content: `**Introduction**

Fundamental analysis (FA) studies the economic, financial, and other factors influencing the value of a crypto asset. Unlike technical analysis, which relies on charts, FA seeks to understand a project's intrinsic value.

**Detailed Explanation**

**Project & Team**
Check the team behind the project, their experience and credibility. A solid team with a proven track record is essential.

**Whitepaper**
Understand the technology, the problem it solves, and token utility. The whitepaper is the founding document explaining the project's vision.

**Tokenomics**
Study the token supply, circulation, inflation, and its role. Tokenomics determines long-term potential value.

**Adoption & Community**
The more a project is adopted and supported, the higher its potential value. An active community is a sign of project health.

**Partnerships & Investors**
Strategic collaborations boost legitimacy. Renowned investors bring credibility and resources.

**Practical Application**

Analyze a recent crypto project and evaluate it based on team, technology, and adoption.

**Concrete Example**

Ethereum: strong ecosystem, massive adoption, active development → high fundamental value.

**Key Points Summary**

✓ FA = understanding intrinsic value
✓ Focus on team, technology, adoption, tokenomics
✓ Complete FA = better long-term investment decisions`,
    quiz: [
      {
        question: 'What is the difference between technical and fundamental analysis?',
        options: ['TA studies charts, FA studies intrinsic value', 'They are the same', 'TA is for long term'],
        correctAnswer: 0
      },
      {
        question: 'Why is the whitepaper important?',
        options: ['To know the price', 'To understand technology and vision', 'To see charts'],
        correctAnswer: 1
      },
      {
        question: 'What factors influence a project\'s adoption?',
        options: ['Only price', 'Community, utility, partnerships', 'Logo color'],
        correctAnswer: 1
      },
      {
        question: 'What does "tokenomics" mean?',
        options: ['Token economics and utility', 'Token price', 'Number of tokens'],
        correctAnswer: 0
      },
      {
        question: 'Why is analyzing the team important?',
        options: ['To know their age', 'To verify experience and credibility', 'It\'s not important'],
        correctAnswer: 1
      }
    ]
  },

  'interesting-site-links': {
    id: 'interesting-site-links',
    title: 'Interesting Site Links',
    category: 'fundamental',
    objective: 'Know the best tools to track the crypto market',
    content: `**Introduction**

Many websites and tools exist to track the crypto market and gather information. This lesson lists the most useful.

**Detailed Explanation**

**CoinMarketCap / CoinGecko**
Track prices, volumes, and market caps in real-time. Essential for any crypto trader.
- Real-time prices
- Market cap rankings
- Historical data
- Project links

**Messari.io**
In-depth analysis of projects and cryptocurrencies. Messari provides institutional-grade research.
- Detailed reports
- Advanced metrics
- Fundamental analysis

**Glassnode / CryptoQuant**
On-chain data and advanced metrics. Analyze blockchain movements.
- Exchange flows
- Whale behavior
- On-chain indicators

**TradingView**
Charts and technical indicators. The reference for technical analysis.
- Professional charts
- Customizable indicators
- Price alerts

**Reddit / Twitter**
Communities and real-time information. Follow discussions and important announcements.
- r/CryptoCurrency
- Official project accounts
- Crypto influencers

**Practical Application**

Create a list of favorites and set alerts for tracked projects.

**Concrete Example**

Track Ethereum on CoinGecko and set a price alert on TradingView.

**Key Points Summary**

✓ Essential sites: CoinMarketCap, CoinGecko, Messari
✓ Track on-chain data: Glassnode
✓ Stay informed via communities: Reddit, Twitter`,
    quiz: [
      {
        question: 'Which site is ideal for tracking crypto prices and volumes?',
        options: ['Facebook', 'CoinMarketCap', 'Instagram'],
        correctAnswer: 1
      },
      {
        question: 'Which platform provides detailed on-chain data?',
        options: ['Glassnode', 'Twitter', 'YouTube'],
        correctAnswer: 0
      },
      {
        question: 'Why is Twitter useful for crypto trading?',
        options: ['To see photos', 'To follow real-time announcements', 'To play games'],
        correctAnswer: 1
      },
      {
        question: 'What is the difference between CoinMarketCap and Messari?',
        options: ['Messari provides in-depth analysis', 'No difference', 'CoinMarketCap is paid'],
        correctAnswer: 0
      },
      {
        question: 'What is the purpose of price alerts?',
        options: ['A danger', 'Notification when price reaches a level', 'An error'],
        correctAnswer: 1
      }
    ]
  },

  'trading-sessions': {
    id: 'trading-sessions',
    title: 'WS / Asian / London Session',
    category: 'fundamental',
    objective: 'Understand the impact of trading sessions on volatility',
    content: `**Introduction**

Crypto markets are active 24/7, but some hours are more volatile depending on global financial sessions: Asia, London, Wall Street.

**Detailed Explanation**

**Asian Session (Tokyo, Singapore)**
0h-9h UTC, moderate volatility, often trend continuation.
- Calmer market
- Slow movements
- Ideal for careful scalping

**London Session**
8h-17h UTC, high liquidity, significant movements on BTC and ETH.
- High volatility
- Large volume
- Breakout opportunities

**Wall Street Session**
13h-22h UTC, maximum volatility, economic news strongly influences prices.
- Maximum volatility
- US news impact
- Overlap with London = best time

**Session Overlaps**
Times of greatest volatility = trading opportunities.
- London + Wall Street (13h-17h UTC) = best time
- More liquidity
- Larger movements

**Practical Application**

Analyze BTC trends during the London session and compare with Asia.

**Concrete Example**

BTC often stable during Asian Session, then moves sharply at London and Wall Street openings.

**Key Points Summary**

✓ Sessions determine volatility
✓ Overlaps = best liquidity and price movements
✓ Adapt strategy to session timing`,
    quiz: [
      {
        question: 'Which session usually has the highest volatility?',
        options: ['Asian Session', 'Wall Street Session', 'None'],
        correctAnswer: 1
      },
      {
        question: 'What are the Asian Session hours in UTC?',
        options: ['0h-9h', '13h-22h', '8h-17h'],
        correctAnswer: 0
      },
      {
        question: 'Why is session overlap important?',
        options: ['It\'s not important', 'More volatility and liquidity', 'Less movement'],
        correctAnswer: 1
      },
      {
        question: 'Which session is influenced by US economic news?',
        options: ['Asian Session', 'London Session', 'Wall Street Session'],
        correctAnswer: 2
      },
      {
        question: 'Which session is ideal for beginners seeking lower volatility?',
        options: ['Wall Street', 'Asian Session', 'London'],
        correctAnswer: 1
      }
    ]
  },

  'tokenomics': {
    id: 'tokenomics',
    title: 'Tokenomics',
    category: 'fundamental',
    objective: 'Understand token economics and value',
    content: `**Introduction**

Tokenomics studies the economics of tokens: creation, distribution, usage, and potential value.

**Detailed Explanation**

**Supply**
Max supply vs circulating supply.
- **Max Supply**: total number of tokens that will exist
- **Circulating Supply**: tokens currently in circulation
- **Total Supply**: tokens already created

**Inflation / Deflation**
Some tokens are regularly issued, others burned.
- **Inflationary**: new tokens created regularly
- **Deflationary**: tokens burned regularly
- Impact on value

**Token Utility**
Governance, staking, payments, NFTs.
- **Governance**: vote on decisions
- **Staking**: lock to earn rewards
- **Utility**: pay fees, services
- **Rewards**: incentives for users

**Rewards & Incentives**
Encourage adoption and staking.
- APY/APR staking
- Reward programs
- Fair distribution

**Practical Application**

Analyze a token to understand if it is inflationary or deflationary and its utility.

**Concrete Example**

BNB: limited supply, regular burns → deflationary effect → potential value increase.

**Key Points Summary**

✓ Understand supply and utility
✓ Study inflation/deflation mechanisms
✓ Check incentives for adoption`,
    quiz: [
      {
        question: 'What is a token\'s total supply?',
        options: ['Token price', 'Maximum number of tokens that will exist', 'Number of holders'],
        correctAnswer: 1
      },
      {
        question: 'What is the effect of regular token burns?',
        options: ['Increases supply', 'Reduces supply - deflationary effect', 'No effect'],
        correctAnswer: 1
      },
      {
        question: 'What roles can a token have?',
        options: ['Only payment', 'Governance, staking, utility, rewards', 'No role'],
        correctAnswer: 1
      },
      {
        question: 'What is tokenomics?',
        options: ['Token price', 'Token economics and mechanisms', 'Project logo'],
        correctAnswer: 1
      },
      {
        question: 'Why is token utility important?',
        options: ['It\'s not important', 'It determines demand and value', 'For design'],
        correctAnswer: 1
      }
    ]
  },

  'onchain-analysis': {
    id: 'onchain-analysis',
    title: 'On-chain Analysis',
    category: 'fundamental',
    objective: 'Use blockchain data to anticipate price movements',
    content: `**Introduction**

On-chain analysis examines data recorded on the blockchain to anticipate price movements.

**Detailed Explanation**

**Active wallets / inflows & outflows**
Analyze the number of active wallets and crypto flows.
- Increasing active wallets = growing interest
- Flows to exchanges = potential selling
- Flows from exchanges = accumulation

**Transactions & volumes**
Track the number and size of transactions.
- High volume = strong activity
- Large transactions = active whales
- Small transactions = retail

**Hodlers vs traders**
Distinguish long-term holders from traders.
- Long Term Holders (LTH) = stability
- Short Term Holders (STH) = volatility
- LTH/STH ratio = market sentiment

**Accumulation and distribution trends**
Identify if whales are accumulating or distributing.
- Accumulation = bullish signal
- Distribution = bearish signal
- Accumulation zones = potential supports

**Practical Application**

Use Glassnode to observe BTC held by whales to anticipate volatility.

**Concrete Example**

Large BTC transfer to an exchange → potential massive sell-off → price drop.

**Key Points Summary**

✓ On-chain = understand investor behavior
✓ Flows and wallets = anticipate movements
✓ Reliable data for strategic trading`,
    quiz: [
      {
        question: 'What does on-chain analysis measure?',
        options: ['Only price', 'Data recorded on the blockchain', 'Social media'],
        correctAnswer: 1
      },
      {
        question: 'Why follow whales?',
        options: ['It\'s not important', 'Their movements can influence the market', 'To know their identity'],
        correctAnswer: 1
      },
      {
        question: 'What is an active wallet?',
        options: ['A wallet making transactions', 'An empty wallet', 'A closed wallet'],
        correctAnswer: 0
      },
      {
        question: 'How to identify accumulation?',
        options: ['Rising price', 'Outflows from exchanges', 'Flows to exchanges'],
        correctAnswer: 1
      },
      {
        question: 'Which site provides this data?',
        options: ['Facebook', 'Glassnode', 'Instagram'],
        correctAnswer: 1
      }
    ]
  },

  'news-trading': {
    id: 'news-trading',
    title: 'News Trading',
    category: 'fundamental',
    objective: 'Profit from movements created by news',
    content: `**Introduction**

News trading involves trading based on news and economic or crypto announcements.

**Detailed Explanation**

**Types of news**
Regulations, partnerships, hacks, protocol updates.
- **Regulation**: laws, bans, acceptances
- **Partnerships**: institutional collaborations
- **Hacks**: security breaches
- **Updates**: hard forks, new features

**Market impact**
Strong immediate volatility.
- Positive news = rapid pump
- Negative news = rapid dump
- Extreme volatility = opportunities and risks

**Strategies**
Rapid scalping, stop-loss protection, follow economic calendar.
- Enter quickly after announcement
- Strict stop-loss mandatory
- Quick take profit
- Don't hold during news

**Practical Application**

React to a SEC announcement or a major hard fork.

**Concrete Example**

Ethereum adoption announced by a large company → rapid price increase.

**Key Points Summary**

✓ News trading = short-term opportunities
✓ Requires vigilance and speed
✓ Stop-loss is essential`,
    quiz: [
      {
        question: 'What news can influence crypto prices?',
        options: ['Only weather', 'Regulations, partnerships, hacks', 'Nothing influences'],
        correctAnswer: 1
      },
      {
        question: 'What is scalping?',
        options: ['Long-term holding', 'Rapid trading on small movements', 'Doing nothing'],
        correctAnswer: 1
      },
      {
        question: 'Why use stop-loss in news trading?',
        options: ['It\'s not useful', 'To protect from extreme volatility', 'To earn more'],
        correctAnswer: 1
      },
      {
        question: 'Difference between positive and negative news?',
        options: ['None', 'Positive = rise, Negative = fall', 'It\'s random'],
        correctAnswer: 1
      },
      {
        question: 'What tool tracks crypto news quickly?',
        options: ['CryptoPanic', 'A paper newspaper', 'Radio'],
        correctAnswer: 0
      }
    ]
  },

  'economic-calendar': {
    id: 'economic-calendar',
    title: 'Economic Calendar',
    category: 'fundamental',
    objective: 'Anticipate events that influence the market',
    content: `**Introduction**

An economic calendar tracks events that influence financial markets and indirectly the crypto market.

**Detailed Explanation**

**Main indicators**
Inflation, interest rates, unemployment, GDP.
- **Interest Rates**: major impact on all markets
- **Inflation**: determines monetary policy
- **Unemployment**: economic health
- **GDP**: economic growth

**Calendar**
Schedule of releases.
- Dates and times of announcements
- Expected impact (low/medium/high)
- Forecasts vs actual results
- Historical data

**Crypto impact**
Central bank announcements influence BTC/ETH.
- Rate increase = crypto drop generally
- Rate decrease = crypto rise generally
- High inflation = interest in BTC
- Economic crisis = volatility

**Practical Application**

Plan trading around important economic releases.

**Concrete Example**

FED rate announcement → high BTC/USD volatility.

**Key Points Summary**

✓ Follow key economic events
✓ Understand potential crypto impact
✓ Adjust strategy based on calendar`,
    quiz: [
      {
        question: 'What does an economic calendar show?',
        options: ['Holidays', 'Important economic releases', 'Weather'],
        correctAnswer: 1
      },
      {
        question: 'Which indicators influence BTC/ETH?',
        options: ['Only number of tweets', 'Interest rates, inflation, unemployment', 'None'],
        correctAnswer: 1
      },
      {
        question: 'Which release often creates strong volatility?',
        options: ['FED rate announcement', 'Weather forecast', 'Sports results'],
        correctAnswer: 0
      },
      {
        question: 'Why plan trading around economic calendar?',
        options: ['It\'s not useful', 'To anticipate volatility', 'To get bored'],
        correctAnswer: 1
      },
      {
        question: 'Which tool provides real-time calendar updates?',
        options: ['Investing.com', 'A paper agenda', 'Phone'],
        correctAnswer: 0
      }
    ]
  },

  'whale-watching': {
    id: 'whale-watching',
    title: 'Whale Watching',
    category: 'fundamental',
    objective: 'Anticipate movements by following large holders',
    content: `**Introduction**

Whale watching tracks large crypto holders (whales) to anticipate market trends.

**Detailed Explanation**

**Large transfers**
To/from exchanges.
- **To exchange**: potential selling = bearish
- **From exchange**: accumulation = bullish
- **Between wallets**: reorganization
- **Significant amount**: >1000 BTC or equivalent

**Accumulation vs distribution**
Identify if whales are buying or selling.
- **Accumulation**: progressive buying, bullish
- **Distribution**: progressive selling, bearish
- **Redistribution**: trend change
- **Consolidation**: neutral phase

**Alerts for significant moves**
Get real-time notifications.
- Whale Alert (Twitter/Telegram)
- Glassnode alerts
- Exchange whale alerts
- Customizable thresholds

**Practical Application**

Use Whale Alert to get notifications of large BTC/ETH movements.

**Concrete Example**

A whale transfers 10,000 BTC to an exchange → potential massive sell-off → price drop.

**Key Points Summary**

✓ Whale watching = advanced volatility indicator
✓ Track transfers to anticipate moves
✓ Complements technical analysis`,
    quiz: [
      {
        question: 'What is a whale in crypto?',
        options: ['A sea animal', 'A large crypto holder', 'A small investor'],
        correctAnswer: 1
      },
      {
        question: 'Why follow transfers to exchanges?',
        options: ['Out of curiosity', 'It indicates potential selling', 'It\'s not important'],
        correctAnswer: 1
      },
      {
        question: 'What is accumulation?',
        options: ['Progressive selling', 'Progressive buying', 'Doing nothing'],
        correctAnswer: 1
      },
      {
        question: 'Which tool tracks whales?',
        options: ['Whale Alert', 'Facebook', 'Snapchat'],
        correctAnswer: 0
      },
      {
        question: 'Why is whale watching useful for trading?',
        options: ['It\'s not useful', 'To anticipate large market movements', 'For fun'],
        correctAnswer: 1
      }
    ]
  }
};
