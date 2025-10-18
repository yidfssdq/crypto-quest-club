import { Lesson } from '@/types/course';
import { fundamentalLessonsEn } from './fundamentalCoursesEn';

// English translations for all lessons
export const enLessons: Record<string, Lesson> = {
  ...fundamentalLessonsEn,
  // BASICS
  '6-rules-of-trading': {
    id: '6-rules-of-trading',
    title: 'The 6 Golden Rules of Trading',
    category: 'basics',
    objective: 'Master fundamental principles for successful trading',
    content: `These 6 rules form the foundation of every successful trader. Follow them religiously and you'll significantly increase your chances of success.

**1. Always have a trading plan**

Never enter a position without knowing exactly why, at what price to enter, where to place your stop-loss and where to take profits. A detailed plan eliminates emotional decisions.

**2. Manage your risk (Risk Management)**

As seen before, never risk more than 1-2% of your capital per trade. This rule alone can make the difference between survival and bankruptcy.

**3. Keep a trading journal**

Record ALL your trades: entry, exit, reason, emotions felt, result. This journal is your best learning source. You'll quickly see your error patterns.

**4. Control your emotions**

Fear and greed are your worst enemies. Stick to your plan, even when it's difficult. A good trader is disciplined, not emotional.

**5. Never trade with money you need**

Only use money you can afford to lose. Trading with "urgent" money creates unbearable stress leading to bad decisions.

**6. Learn continuously**

Markets evolve. What worked yesterday may not work tomorrow. Stay humble, keep learning, testing, adapting. The best traders are perpetual students.`,
    quiz: [
      {
        question: 'What is the first thing to do before entering a position?',
        options: ['Buy immediately', 'Have a clear trading plan', 'Ask for opinions on Twitter'],
        correctAnswer: 1
      },
      {
        question: 'Why keep a trading journal?',
        options: ['It\'s legally required', 'To identify mistakes and improve', 'To impress friends'],
        correctAnswer: 1
      },
      {
        question: 'What is a trader\'s worst enemy?',
        options: ['Transaction fees', 'Emotions (fear and greed)', 'Lack of Internet'],
        correctAnswer: 1
      },
      {
        question: 'What should a trading journal contain?',
        options: ['Only winning trades', 'All trades with entry, exit, reason and emotions', 'Only monthly results'],
        correctAnswer: 1
      },
      {
        question: 'Why should you never trade with money you need?',
        options: ['It creates stress leading to bad decisions', 'It\'s illegal', 'Platforms forbid it'],
        correctAnswer: 0
      }
    ]
  },
  'type-of-trader': {
    id: 'type-of-trader',
    title: 'Different Types of Traders',
    category: 'basics',
    objective: 'Identify your trading style to maximize success',
    content: `Not all traders are the same. Understanding different styles helps you find what best fits your personality and schedule.

**The Scalper**

Makes dozens or hundreds of trades per day, with positions lasting seconds to minutes. Seeks small, quick, repeated profits. Requires extreme focus, excellent internet and lots of screen time.

**The Day Trader**

Opens and closes all positions within the same day. Never keeps positions overnight. Requires several hours per day and good mastery of short-term technical analysis.

**The Swing Trader**

Keeps positions from days to weeks. Seeks to capture "swings" or significant price movements. Ideal if you have a full-time job as it doesn't require constant monitoring.

**The Position Trader (or Long-term Investor)**

Keeps positions for months or years. Based primarily on fundamental analysis and macroeconomic trends. Least stressful but requires patience.

**The Algorithmic Trader**

Uses robots and algorithms to trade automatically according to predefined rules. Requires programming skills.

**Which style suits you?**

Ask yourself: how much time can I dedicate to trading daily? What's my stress tolerance? Do I prefer quick action or patience? Your answers determine your optimal style.`,
    quiz: [
      {
        question: 'What is the main characteristic of a scalper?',
        options: ['Keeps positions for months', 'Makes dozens of trades per day', 'Only trades Bitcoin'],
        correctAnswer: 1
      },
      {
        question: 'Which style suits best if you have a full-time job?',
        options: ['Scalping', 'Day Trading', 'Swing Trading'],
        correctAnswer: 2
      },
      {
        question: 'What does a Day Trader do at end of day?',
        options: ['Keeps all positions open', 'Closes all positions', 'Doubles positions'],
        correctAnswer: 1
      },
      {
        question: 'How long does a Position Trader keep positions?',
        options: ['Few minutes', 'One day only', 'Months or even years'],
        correctAnswer: 2
      },
      {
        question: 'Which trading type requires programming skills?',
        options: ['Day Trading', 'Algorithmic Trading', 'Swing Trading'],
        correctAnswer: 1
      }
    ]
  },
  'what-is-leverage-in-trading': {
    id: 'what-is-leverage-in-trading',
    title: 'What is Leverage in Trading?',
    category: 'basics',
    objective: 'Understand leverage and its risks',
    content: `Leverage is a powerful but extremely dangerous tool. Understanding how it works is crucial before using it.

**What is Leverage?**

Leverage allows you to trade with more money than you actually have. For example, with x10 leverage, if you have €100, you can trade as if you had €1000.

**How does it work?**

The exchange temporarily "lends" you money to amplify your position. If price moves in your favor, your gains are multiplied. But attention: your losses are also multiplied.

**Concrete example**

Without leverage:
- Capital: €100
- BTC Price: €40,000
- You buy: 0.0025 BTC
- Price rises to €42,000 (+5%)
- Your gain: €5 (new total: €105)

With x10 leverage:
- Capital: €100
- Equivalent position: €1000
- You control: 0.025 BTC
- Price rises to €42,000 (+5%)
- Your gain: €50 (new total: €150) 🎉

But if price drops 5%:
- Without leverage: €5 loss (remains €95)
- With x10 leverage: €50 loss (remains €50) 😱

**Dangers of Leverage**

With high leverage, just 10% move against you can liquidate your entire position. Liquidation means the exchange automatically closes your position and you lose all invested capital.

**Golden Rule**

If you're a beginner, DO NOT use leverage. Once experienced, limit yourself to x2 or x3 maximum. Leverages x50 or x100 are beginner traps.

**Cross vs Isolated Margin**

In Cross mode, all your capital can be used to maintain the position. In Isolated mode, only capital allocated to this specific position is at risk. Always prefer Isolated mode.`,
    quiz: [
      {
        question: 'What is x10 leverage?',
        options: ['You trade with 10 times your capital', 'You earn €10 per trade', 'You can make 10 trades'],
        correctAnswer: 0
      },
      {
        question: 'With x5 leverage, if price drops 20%, what happens?',
        options: ['You lose €20', 'You get liquidated (total loss)', 'You double your money'],
        correctAnswer: 1
      },
      {
        question: 'Which margin mode is recommended to limit risks?',
        options: ['Cross Margin', 'Isolated Margin', 'Full Margin'],
        correctAnswer: 1
      },
      {
        question: 'What leverage level is recommended for beginners?',
        options: ['x50 or x100 to maximize gains', 'x10 minimum', 'No leverage, or maximum x2-x3'],
        correctAnswer: 2
      },
      {
        question: 'What happens during liquidation?',
        options: ['You win a bonus', 'Exchange closes your position and you lose invested capital', 'Your position automatically doubles'],
        correctAnswer: 1
      },
      {
        question: 'What\'s the difference between Cross Margin and Isolated Margin?',
        options: ['In Cross all capital can be used, in Isolated only allocated capital is at risk', 'Cross is safer than Isolated', 'There is no difference'],
        correctAnswer: 0
      }
    ]
  },

  'trading-plan': {
    id: 'trading-plan',
    title: 'Creating a Trading Plan',
    category: 'basics',
    objective: 'Learn to build a solid trading plan',
    content: `A trading plan is your roadmap to success. Without it, you're just gambling.

**What is a Trading Plan?**

It's a written document defining your approach to trading: your strategy, risk management rules, goals, and trading psychology.

**Essential Components**

**1. Your Goals**
- Monthly profit target (realistic!)
- Maximum acceptable loss
- Number of trades per week/month
- Trading style (scalping, swing, position)

**2. Your Strategy**
Which setups will you trade? RSI oversold + support tested 3 times? Resistance breakout?

Define precisely your entry criteria, stop-loss placement, take-profit targets.

**3. Risk Management**
- Maximum risk per trade (1-2%)
- Maximum simultaneous open positions
- Maximum daily/weekly loss
- Position sizing method

**4. Trading Schedule**
When will you trade? Which sessions (Asian, European, American)? Which days?

**5. Trading Journal**
How will you document your trades? What will you record?

**Example Simple Plan**

Goals: +5% monthly, max 10% monthly loss
Strategy: Breakouts on 4H timeframe
Entry: Price breaks resistance + RSI > 50 + increased volume
Stop-loss: Just below resistance
Risk: 2% per trade max
Trading: Monday-Friday, European session only
Journal: Google Sheets with all entries/exits

**Why It Works**

A written plan eliminates emotional decisions. When you feel FOMO or fear, you just follow your plan.`,
    quiz: [
      {
        question: 'What is the main purpose of a trading plan?',
        options: ['To impress others', 'To have a structured approach and eliminate emotions', 'To comply with regulations'],
        correctAnswer: 1
      },
      {
        question: 'What should a trading plan contain?',
        options: ['Only entry strategy', 'Goals, strategy, risk management, schedule, journal', 'Just profit targets'],
        correctAnswer: 1
      },
      {
        question: 'How specific should entry conditions be?',
        options: ['Very vague', 'Extremely precise and detailed', 'It doesn\'t matter'],
        correctAnswer: 1
      },
      {
        question: 'Should a trading plan be written?',
        options: ['No, just remember it', 'Yes, in a document you can refer to', 'Only if you want'],
        correctAnswer: 1
      },
      {
        question: 'Can you modify your trading plan?',
        options: ['Never', 'Yes, based on analysis and reflection, not emotions', 'Every day'],
        correctAnswer: 1
      }
    ]
  },

  'risk-management': {
    id: 'risk-management',
    title: 'Risk Management in Trading',
    category: 'basics',
    objective: 'Learn to protect your capital and avoid unnecessary losses',
    content: `Risk management is the cornerstone of successful trading. Without a solid risk management strategy, even the best traders lose their capital.

**Why is Risk Management crucial?**

Trading isn't just about gains, but especially protecting your capital. A trader who doesn't manage risks can be right 90% of the time and lose everything in a few bad trades. Golden rule: "Never risk more than you can afford to lose."

**The 2% Rule**

One fundamental trading rule: never risk more than 2% of total capital on a single trade. For example, if you have €1000, you shouldn't risk more than €20 per position. This lets you sustain several consecutive losses without destroying your account.

**Stop-Loss: Your Best Friend**

Stop-loss is an automatic order closing your position if price reaches a certain loss level. It's your safety net. Define your stop-loss BEFORE entering a position is essential. Never move it to avoid exiting a losing trade - that's the hope trap ruining many traders.

**The Risk/Reward Ratio**

Always aim for minimum 1:2 or 1:3 ratio (risk:reward). If you risk €20, aim for at least €40 potential gain. This means even with 40% success rate, you can be profitable long-term.

**Concrete example of well-managed trade**

Imagine you have €1000 and want to buy Bitcoin:
- Capital: €1000
- Maximum risk (2%): €20
- Entry price: €40,000
- Stop-loss: €39,600 (€400/BTC loss)
- You can buy: €20 ÷ €400 = 0.05 BTC
- Take profit: €41,200 (€1200/BTC gain = €60 for you)
- R:R Ratio = 60:20 = 1:3 ✅

**Mistakes to avoid**

Never average down (buying more when it drops to "recover"), never trade with money you need, never ignore your stop-loss, and above all, never trade emotionally.`,
    quiz: [
      {
        question: 'What does the "2% rule" mean?',
        options: ['Never risk more than 2% of capital per trade', 'Always risk 20% minimum', 'Bet 2% of portfolio on each crypto'],
        correctAnswer: 0
      },
      {
        question: 'What does a stop-loss do?',
        options: ['It buys more cryptos', 'It automatically sells at a loss', 'It blocks fees'],
        correctAnswer: 1
      },
      {
        question: 'What is the recommended minimum Risk/Reward ratio?',
        options: ['1:1', '1:2 or more', '3:1'],
        correctAnswer: 1
      },
      {
        question: 'What to do if your trade is losing and approaching stop-loss?',
        options: ['Move stop-loss further to avoid loss', 'Buy more to average down', 'Let stop-loss trigger as planned'],
        correctAnswer: 2
      },
      {
        question: 'With €2000 capital, what maximum should you risk per trade with 2% rule?',
        options: ['€20', '€40', '€100'],
        correctAnswer: 1
      },
      {
        question: 'Why is it important to define stop-loss BEFORE entering position?',
        options: ['To increase potential gains', 'To avoid emotional decisions in case of loss', 'To pay less fees'],
        correctAnswer: 1
      }
    ]
  },

  'trading-terms': {
    id: 'trading-terms',
    title: 'Essential Trading Terminology',
    category: 'basics',
    objective: 'Understand key trading terms',
    content: `Mastering trading vocabulary is essential to understand analyses and discussions.

**Market Terms**

**Bull Market (Bullish)**: Rising market, prices going up 📈
**Bear Market (Bearish)**: Falling market, prices going down 📉
**Sideways/Range**: Market without clear direction, oscillating between support and resistance

**Order Types**

**Long**: Buying expecting price to rise
**Short**: Selling expecting price to fall (without owning the asset)
**Market Order**: Buy/sell immediately at current price
**Limit Order**: Buy/sell at a specific price
**Stop-Loss**: Automatic sale if price reaches a loss level
**Take-Profit**: Automatic sale when profit target is reached

**Analysis Terms**

**Support**: Price level where buyers are strong enough to stop decline
**Resistance**: Price level where sellers are strong enough to stop rise
**Breakout**: When price breaks through support or resistance
**Pullback/Retracement**: Temporary price reversal in a trend
**Consolidation**: Period where price moves sideways after strong movement

**Indicators**

**Volume**: Amount of assets traded in a period
**Volatility**: Measure of price variation amplitude
**Liquidity**: Ease of buying/selling an asset without affecting price
**Slippage**: Difference between expected and actual execution price

**Trading Styles**

**Scalping**: Very short-term trading (seconds to minutes)
**Day Trading**: Closing all positions before day end
**Swing Trading**: Keeping positions days to weeks
**HODLing**: Buying and holding long-term (months/years)

**Crypto-Specific Terms**

**FOMO**: Fear Of Missing Out - buying under peer pressure
**FUD**: Fear, Uncertainty, Doubt - negative rumors
**ATH**: All-Time High - highest historical price
**ATL**: All-Time Low - lowest historical price
**Pump**: Rapid price surge
**Dump**: Rapid price crash
**Whale**: Investor holding huge amounts of crypto`,
    quiz: [
      {
        question: 'What does "Long" mean?',
        options: ['Keeping position for long time', 'Buying expecting price to rise', 'Selling an asset'],
        correctAnswer: 1
      },
      {
        question: 'What is a Bull Market?',
        options: ['Rising market', 'Falling market', 'Sideways market'],
        correctAnswer: 0
      },
      {
        question: 'What does ATH mean?',
        options: ['All-Time High', 'Always Trade High', 'Average Trading Hour'],
        correctAnswer: 0
      },
      {
        question: 'What is FOMO?',
        options: ['Technical indicator', 'Fear Of Missing Out', 'Trading strategy'],
        correctAnswer: 1
      },
      {
        question: 'What does slippage mean?',
        options: ['Difference between expected and actual execution price', 'Trading fee', 'Type of order'],
        correctAnswer: 0
      },
      {
        question: 'What is a Whale in crypto?',
        options: ['Fast trader', 'Investor holding huge amounts', 'Type of blockchain'],
        correctAnswer: 1
      }
    ]
  },

  'dictionary': {
    id: 'dictionary',
    title: 'Complete Trading Dictionary',
    category: 'basics',
    objective: 'Reference guide for all trading terms',
    content: `Your complete reference guide for trading and crypto terminology.

**A**
**Altcoin**: Any cryptocurrency other than Bitcoin
**API**: Application Programming Interface - to connect trading bots
**Arbitrage**: Profiting from price differences between exchanges
**Ask**: Sell price (also called "offer")

**B**
**Bearish**: Negative, expecting price to fall
**Bid**: Buy price
**Blockchain**: Distributed ledger technology
**Bullish**: Positive, expecting price to rise

**C**
**Candlestick**: Chart showing open, high, low, close
**CEX**: Centralized Exchange (Binance, Coinbase...)
**Cold Wallet**: Offline crypto storage
**Cross**: Leverage mode using all available capital

**D**
**DEX**: Decentralized Exchange
**DCA**: Dollar Cost Averaging - regular buying
**Dead Cat Bounce**: Temporary rise in downtrend

**E**
**EMA**: Exponential Moving Average
**Exchange**: Platform for trading cryptocurrencies

**F**
**Fiat**: Traditional currency (EUR, USD...)
**Fill**: Order execution
**FOMO**: Fear Of Missing Out
**FUD**: Fear, Uncertainty, Doubt

**G**
**Gas Fees**: Transaction fees on blockchain
**HODL**: Hold On for Dear Life - keep long term

**I**
**ICO**: Initial Coin Offering
**Isolated**: Margin mode limiting risk to allocated amount

**K**
**KYC**: Know Your Customer - identity verification

**L**
**Leverage**: Trading with borrowed funds
**Liquidation**: Forced position closure
**Long**: Buy position

**M**
**Margin**: Borrowed funds for trading
**Market Cap**: Total value of all coins
**Moon**: Massive price increase

**O**
**Order Book**: List of buy/sell orders
**OTC**: Over The Counter - large off-exchange trades

**P**
**P2P**: Peer to Peer trading
**Paper Trading**: Practice with fake money
**Pump and Dump**: Manipulative price scheme

**R**
**ROI**: Return On Investment
**Resistance**: Price ceiling

**S**
**Satoshi**: Smallest Bitcoin unit (0.00000001 BTC)
**SMA**: Simple Moving Average
**Spread**: Difference between bid and ask
**Stablecoin**: Crypto pegged to fiat (USDT, USDC)
**Short**: Sell position
**Support**: Price floor

**T**
**TA**: Technical Analysis
**Take Profit**: Profit-taking order
**Timeframe**: Chart period (1m, 5m, 1H, 4H, 1D...)

**V**
**Volatility**: Price variation amplitude
**Volume**: Trading quantity

**W**
**Wallet**: Crypto storage
**Whale**: Large holder
**Whitepaper**: Project technical document`,
    quiz: [
      {
        question: 'What does HODL mean?',
        options: ['Hold On for Dear Life', 'High Order Digital Ledger', 'Help Our Decentralized Life'],
        correctAnswer: 0
      },
      {
        question: 'What is an Altcoin?',
        options: ['Alternative Bitcoin', 'Any cryptocurrency other than Bitcoin', 'Fake cryptocurrency'],
        correctAnswer: 1
      },
      {
        question: 'What is DCA?',
        options: ['Digital Coin Analysis', 'Dollar Cost Averaging', 'Decentralized Crypto Assets'],
        correctAnswer: 1
      },
      {
        question: 'What is a Satoshi?',
        options: ['Bitcoin creator', 'Smallest Bitcoin unit', 'Japanese exchange'],
        correctAnswer: 1
      },
      {
        question: 'What does KYC mean?',
        options: ['Know Your Crypto', 'Keep Your Coins', 'Know Your Customer'],
        correctAnswer: 2
      }
    ]
  }
};
