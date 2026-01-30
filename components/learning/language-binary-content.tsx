"use client"

import { Card } from "@/components/ui/card"

const terms = [
  {
    term: "Currency Pair",
    description: "Two currencies quoted against each other, like EUR/USD. The first currency is the base currency, the second is the quote currency.",
  },
  {
    term: "Pip (Point in Percentage)",
    description: "The smallest price move in a currency pair. For most pairs, it's the fourth decimal place (0.0001). For JPY pairs, it's the second decimal place (0.01).",
  },
  {
    term: "Spread",
    description: "The difference between the bid (sell) and ask (buy) price. This is essentially the broker's commission for executing your trade.",
  },
  {
    term: "Leverage",
    description: "The ability to control a large position with a relatively small amount of capital. For example, 100:1 leverage means you can control $100,000 with just $1,000.",
  },
  {
    term: "Margin",
    description: "The amount of money required in your account to open and maintain a leveraged position. It's like a good faith deposit.",
  },
  {
    term: "Long Position",
    description: 'Buying a currency pair because you believe the base currency will strengthen against the quote currency. "Going long" means buying.',
  },
  {
    term: "Short Position",
    description: 'Selling a currency pair because you believe the base currency will weaken against the quote currency. "Going short" means selling.',
  },
  {
    term: "Stop Loss",
    description: "An order placed to automatically close a position at a specified price to limit potential losses. This is your safety net.",
  },
  {
    term: "Take Profit",
    description: "An order to automatically close a position when it reaches a specified profit level. Lock in your gains automatically.",
  },
]

export function LanguageBinaryContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">BINARY OPTIONS TERMINOLOGY</h2>
        <p className="text-white/70 leading-relaxed">
          To navigate the binary options market successfully, you need to understand its unique language. These terms form the foundation of trading communication and analysis.
        </p>
      </section>

      {/* Essential Terms */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">ESSENTIAL TERMS</h2>
        <div className="space-y-4">
          {terms.map((item, index) => (
            <Card key={index} className="bg-purple-900/20 border-purple-500/30 p-5">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">{item.term}</h3>
              <p className="text-white/60 text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Terminology Matters */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">WHY TERMINOLOGY MATTERS</h2>
        <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 p-6">
          <p className="text-white/70 leading-relaxed mb-4">
            Understanding these terms isn't just about sounding professional - it's about being able to analyze market conditions, understand trading strategies, and manage your risk effectively.
          </p>
          <p className="text-white/70 leading-relaxed">
            Think of binary options terminology as your trading toolkit. The better you understand each tool, the more effective you'll be at using them to achieve your trading goals.
          </p>
        </Card>
      </section>
    </div>
  )
}
