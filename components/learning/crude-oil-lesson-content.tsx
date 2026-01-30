"use client"

import { Card } from "@/components/ui/card"
import { Fuel, TrendingUp, TrendingDown, DollarSign, AlertTriangle, Lightbulb } from "lucide-react"

export function CrudeOilLessonContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-orange-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
            <Fuel className="w-5 h-5 text-orange-500" />
          </div>
          <h2 className="text-xl font-bold text-white">OIL: THE WORLD'S MOST IMPORTANT COMMODITY</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Crude oil is often called "black gold" because of its massive impact on the global economy. As the world's
          primary energy source, oil prices affect everything from transportation costs to manufacturing, making them a
          crucial factor in binary options trading.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Understanding the relationship between oil prices and currency values can give binary options traders a
          significant edge in predicting market movements.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">HOW OIL AFFECTS BINARY OPTIONS MARKETS</h2>

        <div className="space-y-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-white">Oil-Exporting Nations</h3>
            </div>
            <p className="text-white/70 text-sm">
              Countries that export oil (Canada, Norway, Russia, Saudi Arabia, etc.) typically see their currencies
              strengthen when oil prices rise. Higher oil prices mean more revenue from exports, boosting their
              economies. The Canadian dollar (CAD) and Norwegian krone (NOK) are particularly sensitive to oil price
              movements.
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold text-white">Oil-Importing Nations</h3>
            </div>
            <p className="text-white/70 text-sm">
              Countries that import most of their oil (Japan, many European nations) can see their currencies weaken
              when oil prices rise. Higher oil costs increase import bills and can hurt economic growth, leading to
              currency depreciation.
            </p>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <h3 className="text-lg font-semibold text-white">Inflation Impact</h3>
            </div>
            <p className="text-white/70 text-sm">
              Rising oil prices can fuel inflation as transportation and manufacturing costs increase. This may prompt
              central banks to raise interest rates, which typically strengthens the currency. However, if inflation
              becomes too high, it can damage economic growth and weaken the currency.
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-white">USD Correlation</h3>
            </div>
            <p className="text-white/70 text-sm">
              Since oil is priced in U.S. dollars globally, there's often an inverse relationship between USD strength
              and oil prices. A stronger dollar makes oil more expensive for countries using other currencies, which can
              reduce demand and push prices down.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">KEY CURRENCY PAIRS TO WATCH</h2>

        <div className="space-y-3">
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">USD/CAD (U.S. Dollar / Canadian Dollar)</h3>
            <p className="text-white/60 text-sm">
              Known as the "Loonie," this pair has a strong inverse correlation with oil prices. When oil rises, CAD
              typically strengthens (USD/CAD falls).
            </p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">USD/NOK (U.S. Dollar / Norwegian Krone)</h3>
            <p className="text-white/60 text-sm">
              Norway is a major oil exporter. Rising oil prices generally strengthen the NOK against the USD.
            </p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">USD/RUB (U.S. Dollar / Russian Ruble)</h3>
            <p className="text-white/60 text-sm">
              Russia's economy heavily depends on oil exports. Oil price movements significantly impact the ruble's
              value.
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
        <ul className="space-y-3 text-white/80">
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong>Monitor oil price trends:</strong> Keep an eye on WTI (West Texas Intermediate) and Brent Crude
              benchmarks
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong>Trade CAD pairs:</strong> USD/CAD moves inversely to oil prices. Rising oil = CAD strength
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong>Watch OPEC announcements:</strong> Production decisions by OPEC+ significantly impact oil prices
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              <strong>Consider geopolitical events:</strong> Conflicts in oil-producing regions can cause price spikes
            </span>
          </li>
        </ul>
      </Card>

      <Card className="border border-green-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <p className="text-white/80 text-base leading-relaxed">
          Oil prices don't just affect commodity traders - they're a crucial indicator for binary options traders. By
          understanding how oil movements impact different currencies, you can identify trading opportunities and better
          manage your positions in commodity-linked currency pairs.
        </p>
      </Card>
    </div>
  )
}
