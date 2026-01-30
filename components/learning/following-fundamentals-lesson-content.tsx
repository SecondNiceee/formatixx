"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Percent, Users, DollarSign, Scale, Building2, Lightbulb } from "lucide-react"

export function FollowingFundamentalsLessonContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-blue-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-blue-500" />
          </div>
          <h2 className="text-xl font-bold text-white">FUNDAMENTAL ANALYSIS</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Fundamental analysis is the study of economic, social, and political forces that affect currency supply and
          demand. It's about understanding the "why" behind price movements.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          While technical analysis focuses on price charts and patterns, fundamental analysis looks at the bigger
          picture - the health of economies and the factors that drive them.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">KEY ECONOMIC INDICATORS</h2>

        <div className="space-y-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-white">Interest Rates</h3>
            </div>
            <p className="text-white/70 text-sm">
              Central banks set interest rates to control inflation and economic growth. Higher rates typically attract
              foreign investment, strengthening the currency. Lower rates have the opposite effect.
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-white">GDP (Gross Domestic Product)</h3>
            </div>
            <p className="text-white/70 text-sm">
              GDP measures the total value of goods and services produced in a country. Strong GDP growth indicates a
              healthy economy and often strengthens the currency.
            </p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-white">Employment Data</h3>
            </div>
            <p className="text-white/70 text-sm">
              Employment reports like the U.S. Non-Farm Payrolls show job creation and unemployment rates. Strong
              employment data signals economic strength and can boost currency values.
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold text-white">Inflation Rates</h3>
            </div>
            <p className="text-white/70 text-sm">
              Measured by CPI (Consumer Price Index) and PPI (Producer Price Index). Moderate inflation is healthy, but
              high inflation can weaken a currency while deflation can signal economic problems.
            </p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-semibold text-white">Trade Balance</h3>
            </div>
            <p className="text-white/70 text-sm">
              The difference between a country's exports and imports. A positive trade balance (more exports) typically
              strengthens the currency as foreign buyers need to purchase the local currency.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-cyan-500" />
          </div>
          <h2 className="text-xl font-bold text-white">CENTRAL BANK POLICY</h2>
        </div>
        <p className="text-white/70 text-sm mb-4">
          Central banks like the Federal Reserve (U.S.), European Central Bank (ECB), and Bank of England (BoE) have
          enormous influence over currency values through monetary policy decisions.
        </p>

        <div className="space-y-3">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">Hawkish Policy</h3>
            <p className="text-white/60 text-sm">
              Indicates plans to raise interest rates to combat inflation. Typically strengthens the currency.
            </p>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">Dovish Policy</h3>
            <p className="text-white/60 text-sm">
              Signals plans to lower rates or maintain accommodative policy to stimulate growth. Often weakens the
              currency.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-purple-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-purple-500" />
          </div>
          <h2 className="text-xl font-bold text-white">PUTTING IT ALL TOGETHER</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Successful binary options traders use an economic calendar to track when important data releases and central
          bank meetings are scheduled. These events can create significant market volatility and trading opportunities.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          <strong className="text-yellow-400">Remember:</strong> Markets often move on expectations. The actual data
          matters less than whether it beats or misses market expectations. A "good" economic report can cause a
          currency to fall if traders were expecting even better results.
        </p>
      </Card>
    </div>
  )
}
