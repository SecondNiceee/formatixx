"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Landmark, Globe, BarChart } from "lucide-react"

export function BasicsBinaryContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">WHAT MOVES THE MARKETS?</h2>
        <p className="text-white/70 leading-relaxed mb-4">
          Understanding what drives currency prices is essential for successful binary options trading. Markets don't move randomly - they respond to fundamental forces that shape the global economy.
        </p>
        <p className="text-white/70 leading-relaxed">
          At the heart of binary options trading is the relationship between different countries' economies. Currency values fluctuate based on economic indicators, central bank policies, and market sentiment.
        </p>
      </section>

      {/* Key Market Movers */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">KEY MARKET MOVERS</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-purple-900/20 border-purple-500/30 p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <BarChart className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Economic Data</h3>
                <p className="text-white/60 text-sm">
                  Reports like GDP, employment figures, and inflation rates directly impact currency values. Strong economic data typically strengthens a currency, while weak data can cause depreciation.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-purple-900/20 border-purple-500/30 p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <Landmark className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2. Central Bank Policies</h3>
                <p className="text-white/60 text-sm">
                  Interest rate decisions and monetary policy statements from central banks like the Federal Reserve, ECB, and Bank of England are among the most powerful market movers.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-purple-900/20 border-purple-500/30 p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Geopolitical Events</h3>
                <p className="text-white/60 text-sm">
                  Political instability, elections, trade wars, and international relations can create significant volatility in currency markets as traders assess risk.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-purple-900/20 border-purple-500/30 p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">4. Market Sentiment</h3>
                <p className="text-white/60 text-sm">
                  The overall mood of traders - whether risk-on (optimistic) or risk-off (cautious) - influences which currencies strengthen or weaken during different market conditions.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Supply and Demand */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">SUPPLY AND DEMAND</h2>
        <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 p-6">
          <p className="text-white/70 leading-relaxed mb-4">
            Like any market, binary options operate on the principle of supply and demand. When demand for a currency increases (more buyers than sellers), its value rises. When supply exceeds demand (more sellers than buyers), its value falls.
          </p>
          <div className="bg-purple-600/20 rounded-lg p-4 border border-purple-500/30">
            <p className="text-purple-300 font-medium">
              Remember: Every binary options transaction involves buying one currency and selling another simultaneously. This is why currencies are always quoted in pairs, like EUR/USD or GBP/JPY.
            </p>
          </div>
        </Card>
      </section>
    </div>
  )
}
