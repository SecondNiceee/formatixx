"use client"

import { Card } from "@/components/ui/card"
import { Shield, TrendingUp, DollarSign, Coins } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Safe-Haven Asset",
    description: "During times of economic uncertainty, geopolitical tension, or market volatility, investors flock to gold as a safe place to store wealth. This often coincides with weakness in riskier currencies.",
  },
  {
    icon: TrendingUp,
    title: "Inflation Hedge",
    description: "Gold is seen as a hedge against inflation. When inflation rises, currencies lose purchasing power, but gold often maintains or increases its value, making it attractive to investors.",
  },
  {
    icon: DollarSign,
    title: "USD Inverse Relationship",
    description: "Since gold is priced in U.S. dollars, a stronger dollar makes gold more expensive for holders of other currencies, typically pushing gold prices down. A weaker dollar has the opposite effect.",
  },
  {
    icon: Coins,
    title: "Commodity Currencies",
    description: 'Countries that export gold (like Australia, Canada, and South Africa) often see their currencies move in tandem with gold prices. Higher gold prices can strengthen these "commodity currencies."',
  },
]

const strategies = [
  {
    title: "Risk-Off Trades",
    description: "When gold prices surge due to uncertainty, consider shorting riskier currencies and going long on safe-havens like JPY or CHF.",
  },
  {
    title: "Commodity Currency Correlation",
    description: "Rising gold prices can signal opportunities to go long on AUD, CAD, or other commodity-linked currencies.",
  },
  {
    title: "USD Inverse Plays",
    description: "If you expect gold to rise, consider shorting USD against other major currencies.",
  },
]

export function GoldBinaryContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">GOLD AND BINARY OPTIONS: THE CONNECTION</h2>
        <p className="text-white/70 leading-relaxed mb-4">
          Gold has historically been viewed as a safe-haven asset and a store of value. Its relationship with currency markets, particularly the U.S. dollar, is crucial for binary options traders to understand.
        </p>
        <p className="text-white/70 leading-relaxed">
          Gold is typically priced in U.S. dollars, creating an inverse relationship: when the dollar strengthens, gold often becomes cheaper (and vice versa). This dynamic creates interesting trading opportunities.
        </p>
      </section>

      {/* Why Gold Matters */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">WHY GOLD MATTERS TO BINARY OPTIONS TRADERS</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {reasons.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="bg-purple-900/20 border-purple-500/30 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-600/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Trading Strategies */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">TRADING STRATEGIES</h2>
        <Card className="bg-[#1a1035] border-purple-500/30 p-6">
          <p className="text-white/70 leading-relaxed mb-4">
            Understanding gold's movements can inform your binary options trading decisions:
          </p>
          <div className="space-y-3">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-purple-600/20 rounded-lg p-4 border border-purple-500/30">
                <h4 className="text-purple-300 font-semibold mb-1">{strategy.title}</h4>
                <p className="text-white/60 text-sm">{strategy.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Key Takeaway */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">KEY TAKEAWAY</h2>
        <Card className="bg-[#1a1520] border-yellow-500/30 p-6">
          <p className="text-white/70 leading-relaxed">
            Gold isn't just a commodity - it's a barometer for global economic sentiment and risk appetite. By monitoring gold prices and understanding their relationship with currencies, you gain valuable insight into market dynamics and potential trading opportunities.
          </p>
        </Card>
      </section>
    </div>
  )
}
