"use client"

import { Card } from "@/components/ui/card"
import { Coins, Shield, TrendingUp, DollarSign, Globe, Lightbulb } from "lucide-react"

export function GoldLessonContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-yellow-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <Coins className="w-5 h-5 text-yellow-500" />
          </div>
          <h2 className="text-xl font-bold text-white">GOLD AND BINARY OPTIONS: THE CONNECTION</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Gold has historically been viewed as a safe-haven asset and a store of value. Its relationship with currency
          markets, particularly the U.S. dollar, is crucial for binary options traders to understand.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Gold is typically priced in U.S. dollars, creating an inverse relationship: when the dollar strengthens, gold
          often becomes cheaper (and vice versa). This dynamic creates interesting trading opportunities.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">WHY GOLD MATTERS TO BINARY OPTIONS TRADERS</h2>

        <div className="space-y-4">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-yellow-500" />
              <h3 className="text-lg font-semibold text-white">Safe-Haven Asset</h3>
            </div>
            <p className="text-white/70 text-sm">
              During times of economic uncertainty, geopolitical tension, or market volatility, investors flock to gold
              as a safe place to store wealth. This often coincides with weakness in riskier currencies.
            </p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-white">Inflation Hedge</h3>
            </div>
            <p className="text-white/70 text-sm">
              Gold is seen as a hedge against inflation. When inflation rises, currencies lose purchasing power, but
              gold often maintains or increases its value, making it attractive to investors.
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-white">USD Inverse Relationship</h3>
            </div>
            <p className="text-white/70 text-sm">
              Since gold is priced in U.S. dollars, a stronger dollar makes gold more expensive for holders of other
              currencies, typically pushing gold prices down. A weaker dollar has the opposite effect.
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-white">Commodity Currencies</h3>
            </div>
            <p className="text-white/70 text-sm">
              Countries that export gold (like Australia, Canada, and South Africa) often see their currencies move in
              tandem with gold prices. Higher gold prices can strengthen these "commodity currencies."
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-purple-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-purple-500" />
          </div>
          <h2 className="text-xl font-bold text-white">TRADING STRATEGIES</h2>
        </div>
        <p className="text-white/70 text-sm mb-4">
          Understanding gold's movements can inform your binary options trading decisions:
        </p>
        <ul className="space-y-3 text-white/80">
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong>Risk-Off Trades:</strong> When gold prices surge due to uncertainty, consider shorting riskier
              currencies and going long on safe-havens like JPY or CHF.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong>Commodity Currency Correlation:</strong> Rising gold prices can signal opportunities to go long on
              AUD, CAD, or other commodity-linked currencies.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong>USD Inverse Plays:</strong> If you expect gold to rise, consider shorting USD against other major
              currencies.
            </span>
          </li>
        </ul>
      </Card>

      <Card className="border border-green-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-3">KEY TAKEAWAY</h2>
        <p className="text-white/80 text-base leading-relaxed">
          Gold isn't just a commodity - it's a barometer for global economic sentiment and risk appetite. By monitoring
          gold prices and understanding their relationship with currencies, you gain valuable insight into market
          dynamics and potential trading opportunities.
        </p>
      </Card>
    </div>
  )
}
