"use client"

import { Card } from "@/components/ui/card"
import { Fuel, TrendingDown, TrendingUp, DollarSign } from "lucide-react"

const impacts = [
  {
    icon: TrendingUp,
    title: "Oil-Exporting Nations",
    description: "Countries that export oil (Canada, Norway, Russia, Saudi Arabia, etc.) typically see their currencies strengthen when oil prices rise. Higher oil prices mean more revenue from exports, boosting their economies. The Canadian dollar (CAD) and Norwegian krone (NOK) are particularly sensitive to oil price movements.",
  },
  {
    icon: TrendingDown,
    title: "Oil-Importing Nations",
    description: "Countries that import most of their oil (Japan, many European nations) can see their currencies weaken when oil prices rise. Higher oil costs increase import bills and can hurt economic growth, leading to currency depreciation.",
  },
  {
    icon: Fuel,
    title: "Inflation Impact",
    description: "Rising oil prices can fuel inflation as transportation and manufacturing costs increase. This may prompt central banks to raise interest rates, which typically strengthens the currency. However, if inflation becomes too high, it can damage economic growth and weaken the currency.",
  },
  {
    icon: DollarSign,
    title: "USD Correlation",
    description: "Since oil is priced in U.S. dollars globally, there's often an inverse relationship between USD strength and oil prices. A stronger dollar makes oil more expensive for countries using other currencies, which can reduce demand and push prices down.",
  },
]

const currencyPairs = [
  {
    pair: "USD/CAD",
    name: "U.S. Dollar / Canadian Dollar",
    description: 'Known as the "Loonie," this pair has a strong inverse correlation with oil prices. When oil rises, CAD typically strengthens (USD/CAD falls).',
    color: "green",
  },
  {
    pair: "USD/NOK",
    name: "U.S. Dollar / Norwegian Krone",
    description: "Norway is a major oil exporter. Rising oil prices generally strengthen the NOK against the USD.",
    color: "blue",
  },
  {
    pair: "USD/RUB",
    name: "U.S. Dollar / Russian Ruble",
    description: "Russia's economy heavily depends on oil exports. Oil price movements significantly impact the ruble's value.",
    color: "purple",
  },
]

const strategies = [
  "Monitor oil price trends: Keep an eye on WTI (West Texas Intermediate) and Brent Crude benchmarks",
  "Trade CAD pairs: USD/CAD moves inversely to oil prices. Rising oil = CAD strength",
  "Watch OPEC announcements: Production decisions by OPEC+ significantly impact oil prices",
  "Consider geopolitical events: Conflicts in oil-producing regions can cause price spikes",
]

export function CrudeOilBinaryContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">OIL: THE WORLD'S MOST IMPORTANT COMMODITY</h2>
        <p className="text-white/70 leading-relaxed mb-4">
          Crude oil is often called "black gold" because of its massive impact on the global economy. As the world's primary energy source, oil prices affect everything from transportation costs to manufacturing, making them a crucial factor in binary options trading.
        </p>
        <p className="text-white/70 leading-relaxed">
          Understanding the relationship between oil prices and currency values can give binary options traders a significant edge in predicting market movements.
        </p>
      </section>

      {/* How Oil Affects Markets */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">HOW OIL AFFECTS BINARY OPTIONS MARKETS</h2>
        <div className="space-y-4">
          {impacts.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="bg-purple-900/20 border-purple-500/30 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-600/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-orange-400" />
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

      {/* Key Currency Pairs */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">KEY CURRENCY PAIRS TO WATCH</h2>
        <div className="space-y-4">
          {currencyPairs.map((item, index) => (
            <Card key={index} className="bg-purple-900/20 border-purple-500/30 p-5">
              <div className="flex items-start gap-4">
                <div className={`px-3 py-1 rounded-lg bg-${item.color}-600/20 border border-${item.color}-500/30`}>
                  <span className={`text-${item.color}-400 font-bold`}>{item.pair}</span>
                </div>
                <div>
                  <h4 className="text-white/80 text-sm mb-1">{item.name}</h4>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Trading Strategies */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">TRADING STRATEGIES</h2>
        <Card className="bg-[#1a1035] border-purple-500/30 p-6">
          <ul className="space-y-3">
            {strategies.map((strategy, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">{index + 1}.</span>
                <span className="text-white/70">{strategy}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Key Takeaway */}
      <section>
        <Card className="bg-[#1a1520] border-orange-500/30 p-6">
          <p className="text-white/70 leading-relaxed">
            Oil prices don't just affect commodity traders - they're a crucial indicator for binary options traders. By understanding how oil movements impact different currencies, you can identify trading opportunities and better manage your positions in commodity-linked currency pairs.
          </p>
        </Card>
      </section>
    </div>
  )
}
