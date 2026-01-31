"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Scale, BarChart3 } from "lucide-react"

const indicators = [
  {
    icon: DollarSign,
    title: "Interest Rates",
    description: "Central banks set interest rates to control inflation and economic growth. Higher rates typically attract foreign investment, strengthening the currency. Lower rates have the opposite effect.",
  },
  {
    icon: BarChart3,
    title: "GDP (Gross Domestic Product)",
    description: "GDP measures the total value of goods and services produced in a country. Strong GDP growth indicates a healthy economy and often strengthens the currency.",
  },
  {
    icon: Users,
    title: "Employment Data",
    description: "Employment reports like the U.S. Non-Farm Payrolls show job creation and unemployment rates. Strong employment data signals economic strength and can boost currency values.",
  },
  {
    icon: TrendingUp,
    title: "Inflation Rates",
    description: "Measured by CPI (Consumer Price Index) and PPI (Producer Price Index). Moderate inflation is healthy, but high inflation can weaken a currency while deflation can signal economic problems.",
  },
  {
    icon: Scale,
    title: "Trade Balance",
    description: "The difference between a country's exports and imports. A positive trade balance (more exports) typically strengthens the currency as foreign buyers need to purchase the local currency.",
  },
]

export function FundamentalsBinaryContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">FUNDAMENTAL ANALYSIS</h2>
        <p className="text-white/70 leading-relaxed mb-4">
          Fundamental analysis is the study of economic, social, and political forces that affect currency supply and demand. It's about understanding the "why" behind price movements.
        </p>
        <p className="text-white/70 leading-relaxed">
          While technical analysis focuses on price charts and patterns, fundamental analysis looks at the bigger picture - the health of economies and the factors that drive them.
        </p>
      </section>

      {/* Key Economic Indicators */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">KEY ECONOMIC INDICATORS</h2>
        <div className="space-y-4">
          {indicators.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="bg-purple-900/20 border-purple-500/30 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-purple-400" />
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

      {/* Central Bank Policy */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">CENTRAL BANK POLICY</h2>
        <Card className="bg-[#1a1035] border-purple-500/30 p-6">
          <p className="text-white/70 leading-relaxed mb-4">
            Central banks like the Federal Reserve (U.S.), European Central Bank (ECB), and Bank of England (BoE) have enormous influence over currency values through monetary policy decisions.
          </p>
          <div className="space-y-3">
            <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
              <h4 className="text-green-400 font-semibold mb-1">Hawkish Policy</h4>
              <p className="text-white/60 text-sm">Indicates plans to raise interest rates to combat inflation. Typically strengthens the currency.</p>
            </div>
            <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
              <h4 className="text-red-400 font-semibold mb-1">Dovish Policy</h4>
              <p className="text-white/60 text-sm">Signals plans to lower rates or maintain accommodative policy to stimulate growth. Often weakens the currency.</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Putting It All Together */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">PUTTING IT ALL TOGETHER</h2>
        <Card className="bg-[#1a1035] border-purple-500/30 p-6">
          <p className="text-white/70 leading-relaxed mb-4">
            Successful binary options traders use an economic calendar to track when important data releases and central bank meetings are scheduled. These events can create significant market volatility and trading opportunities.
          </p>
          <div className="bg-purple-600/20 rounded-lg p-4 border border-purple-500/30">
            <p className="text-purple-300 font-medium">
              Remember: Markets often move on expectations. The actual data matters less than whether it beats or misses market expectations. A "good" economic report can cause a currency to fall if traders were expecting even better results.
            </p>
          </div>
        </Card>
      </section>
    </div>
  )
}
