"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, ListOrdered, CheckCircle2 } from "lucide-react"

export function BuyingSellingLessonContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">Understanding Buy and Sell Orders</h2>
        <p className="text-white/80 text-base leading-relaxed">
          In binary options trading, you always trade in pairs. When you buy (go long) a currency pair, you're buying
          the base currency and selling the quote currency. When you sell (go short), you're selling the base currency
          and buying the quote currency. Binary Options are unique because you can profit from both rising and falling
          markets.
        </p>
      </Card>

      <Card className="border border-green-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <h2 className="text-xl font-bold text-white">Buy (Long) Position</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          A buy order means you believe the base currency will strengthen against the quote currency:
        </p>
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-4">
          <p className="text-white font-semibold mb-2">Example: Buy EUR/USD at 1.1000</p>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              You're buying euros and selling dollars
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              You profit if EUR/USD rises to 1.1100 (base currency strengthens)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              You lose if EUR/USD falls to 1.0900 (base currency weakens)
            </li>
          </ul>
        </div>
      </Card>

      <Card className="border border-red-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
            <TrendingDown className="w-5 h-5 text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-white">Sell (Short) Position</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          A sell order means you believe the base currency will weaken against the quote currency:
        </p>
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4">
          <p className="text-white font-semibold mb-2">Example: Sell GBP/USD at 1.3000</p>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              You're selling pounds and buying dollars
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              You profit if GBP/USD falls to 1.2900 (base currency weakens)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              You lose if GBP/USD rises to 1.3100 (base currency strengthens)
            </li>
          </ul>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <ListOrdered className="w-5 h-5 text-purple-500" />
          </div>
          <h2 className="text-xl font-bold text-white">Types of Orders</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Different order types give you control over trade execution:
        </p>
        <div className="space-y-3">
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white font-semibold">Market Order</p>
            <p className="text-white/60 text-sm">Execute trade immediately at current price</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white font-semibold">Limit Order</p>
            <p className="text-white/60 text-sm">Buy below or sell above current price (better entry)</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white font-semibold">Stop Order</p>
            <p className="text-white/60 text-sm">Buy above or sell below current price (breakout entry)</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white font-semibold">Stop Loss</p>
            <p className="text-white/60 text-sm">Automatically close trade at predetermined loss level</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white font-semibold">Take Profit</p>
            <p className="text-white/60 text-sm">Automatically close trade at predetermined profit level</p>
          </div>
        </div>
      </Card>

      <Card className="border border-cyan-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">Executing a Trade</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">Step-by-step process for entering a trade:</p>
        <ol className="space-y-2 text-white/80">
          {[
            "Analyze the market and identify your trading opportunity",
            "Decide whether to buy or sell based on your analysis",
            "Calculate your position size based on risk management",
            "Set your stop loss level to limit potential losses",
            "Set your take profit level based on your risk-reward ratio",
            "Execute the trade using appropriate order type",
            "Monitor the trade and manage according to your plan",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </Card>

      <Card className="border border-green-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">Key Takeaways</h2>
        <ul className="space-y-3 text-white/80">
          {[
            "Buy when you expect the base currency to strengthen",
            "Sell when you expect the base currency to weaken",
            "Always use stop loss orders to protect your capital",
            "Choose the right order type for your trading strategy",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
