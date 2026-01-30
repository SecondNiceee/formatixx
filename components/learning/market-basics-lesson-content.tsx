"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Building2, Globe, Users, Scale, Lightbulb, BarChart3 } from "lucide-react"

export function MarketBasicsLessonContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-blue-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-blue-500" />
          </div>
          <h2 className="text-xl font-bold text-white">WHAT MOVES THE MARKETS?</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed">
          Understanding what drives currency prices is essential for successful binary options trading. Markets don't
          move randomly - they respond to fundamental forces that shape the global economy.
        </p>
        <p className="text-white/80 text-base leading-relaxed mt-4">
          At the heart of binary options trading is the relationship between different countries' economies. Currency
          values fluctuate based on economic indicators, central bank policies, and market sentiment.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">KEY MARKET MOVERS</h2>

        <div className="space-y-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-white">1. Economic Data</h3>
            </div>
            <p className="text-white/70 text-sm">
              Reports like GDP, employment figures, and inflation rates directly impact currency values. Strong economic
              data typically strengthens a currency, while weak data can cause depreciation.
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-white">2. Central Bank Policies</h3>
            </div>
            <p className="text-white/70 text-sm">
              Interest rate decisions and monetary policy statements from central banks like the Federal Reserve, ECB,
              and Bank of England are among the most powerful market movers.
            </p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-white">3. Geopolitical Events</h3>
            </div>
            <p className="text-white/70 text-sm">
              Political instability, elections, trade wars, and international relations can create significant
              volatility in currency markets as traders assess risk.
            </p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-semibold text-white">4. Market Sentiment</h3>
            </div>
            <p className="text-white/70 text-sm">
              The overall mood of traders - whether risk-on (optimistic) or risk-off (cautious) - influences which
              currencies strengthen or weaken during different market conditions.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-cyan-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <Scale className="w-5 h-5 text-cyan-500" />
          </div>
          <h2 className="text-xl font-bold text-white">SUPPLY AND DEMAND</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed">
          Like any market, binary options operate on the principle of supply and demand. When demand for a currency
          increases (more buyers than sellers), its value rises. When supply exceeds demand (more sellers than buyers),
          its value falls.
        </p>
      </Card>

      <Card className="border border-purple-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-purple-500" />
          </div>
          <h2 className="text-xl font-bold text-white">REMEMBER</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed">
          Every binary options transaction involves buying one currency and selling another simultaneously. This is why
          currencies are always quoted in pairs, like EUR/USD or GBP/JPY.
        </p>
      </Card>
    </div>
  )
}
