"use client"

import { Card } from "@/components/ui/card"
import { PieChart, Link2, Scale, Clock, Shield, Lightbulb } from "lucide-react"

export function SmartPortfoliosLessonContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">What is Portfolio Diversification?</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Portfolio diversification is the practice of spreading your investments across different assets, markets, and
          trading instruments to reduce risk. Instead of putting all your capital into one trade or one currency pair,
          you distribute it strategically.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          A smart portfolio combines multiple elements: different currency pairs, various timeframes, and even different
          asset classes like binary options, commodities, and indices. This approach protects you from major losses if
          one position moves against you.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">Key Principles of Smart Portfolios</h2>

        <div className="space-y-4">
          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Link2 className="w-4 h-4 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">1. Asset Correlation</h3>
            </div>
            <p className="text-white/70 text-sm">
              Choose assets that don't move in the same direction. If EUR/USD and GBP/USD are highly correlated, having
              both doesn't provide true diversification. Consider pairs from different regions and with different
              economic drivers.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Scale className="w-4 h-4 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">2. Position Sizing</h3>
            </div>
            <p className="text-white/70 text-sm">
              Don't allocate equal amounts to every trade. Risk more on high-probability setups and less on experimental
              trades. A common approach is limiting each position to 1-2% of your total capital.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Clock className="w-4 h-4 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">3. Time Diversification</h3>
            </div>
            <p className="text-white/70 text-sm">
              Combine different trading timeframes - some swing trades (days to weeks), some day trades (hours), and
              perhaps long-term positions (weeks to months). This balances short-term opportunities with long-term
              stability.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">4. Risk Balance</h3>
            </div>
            <p className="text-white/70 text-sm">
              Your total portfolio risk should never exceed 5-10% of your capital at any given time. If you have 5
              positions open, each should risk no more than 1-2% so your combined exposure stays manageable.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-cyan-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <PieChart className="w-5 h-5 text-cyan-500" />
          </div>
          <h2 className="text-xl font-bold text-white">Sample Portfolio Structure</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Here's an example of a balanced binary options trading portfolio:
        </p>
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
            <span className="text-white font-medium">Major Pairs (EUR/USD, USD/JPY)</span>
            <span className="text-purple-400 font-bold">40% allocation</span>
          </div>
          <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
            <span className="text-white font-medium">Minor Pairs (EUR/GBP, AUD/NZD)</span>
            <span className="text-blue-400 font-bold">30% allocation</span>
          </div>
          <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
            <span className="text-white font-medium">Exotic Pairs (USD/TRY, EUR/ZAR)</span>
            <span className="text-orange-400 font-bold">15% allocation</span>
          </div>
          <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
            <span className="text-white font-medium">Gold/Commodities</span>
            <span className="text-yellow-400 font-bold">15% allocation</span>
          </div>
        </div>
        <p className="text-white/60 text-sm mt-4">
          This structure balances liquidity, volatility, and opportunity. Majors provide stability, minors offer good
          opportunities with moderate risk, exotics add high-reward potential, and commodities hedge against currency
          risks.
        </p>
      </Card>

      <Card className="border border-green-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="w-5 h-5 text-green-400" />
          <h2 className="text-lg font-bold text-green-400">Pro Tip</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed">
          Rebalance your portfolio regularly. As some positions grow and others shrink, your allocation percentages will
          shift. Review your portfolio weekly and adjust position sizes to maintain your target allocation. This
          disciplined approach helps lock in profits and control risk.
        </p>
      </Card>
    </div>
  )
}
