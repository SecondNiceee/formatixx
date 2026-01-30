"use client"

import { Card } from "@/components/ui/card"
import { LineChart, BarChart3, CandlestickChart, Clock, Move } from "lucide-react"

export function NavigatingChartsLessonContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">UNDERSTANDING TRADING CHARTS</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Charts are the primary tool for technical analysis in binary options trading. They display price movements
          over time, helping traders identify patterns, trends, and potential trading opportunities.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Learning to read charts is like learning a new language - once you understand the basics, you'll be able to
          interpret market sentiment and make informed trading decisions.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">TYPES OF CHARTS</h2>

        <div className="space-y-4">
          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <LineChart className="w-4 h-4 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">1. Line Charts</h3>
            </div>
            <p className="text-white/70 text-sm">
              The simplest chart type, connecting closing prices with a continuous line. Best for getting a quick
              overview of price direction but lacks detail about price movements within each period.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">2. Bar Charts</h3>
            </div>
            <p className="text-white/70 text-sm">
              Each bar shows four key prices: open, high, low, and close (OHLC). The vertical line represents the
              trading range, with horizontal ticks showing opening (left) and closing (right) prices.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <CandlestickChart className="w-4 h-4 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">3. Candlestick Charts</h3>
            </div>
            <p className="text-white/70 text-sm">
              The most popular chart type among traders. Each candlestick displays OHLC data with a visual "body"
              (difference between open and close) and "wicks" (high and low). Green/white candles show price increases,
              red/black show decreases.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-cyan-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <Clock className="w-5 h-5 text-cyan-500" />
          </div>
          <h2 className="text-xl font-bold text-white">TIMEFRAMES</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Charts can display different timeframes, from 1-minute intervals to monthly views. Each timeframe offers
          different perspectives:
        </p>
        <div className="space-y-3">
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white font-semibold">Short-term (1m-15m)</p>
            <p className="text-white/60 text-sm">For day traders and scalpers looking for quick trades</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white font-semibold">Medium-term (1h-4h)</p>
            <p className="text-white/60 text-sm">For swing traders holding positions for days or weeks</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white font-semibold">Long-term (Daily-Monthly)</p>
            <p className="text-white/60 text-sm">For position traders and investors with a broader perspective</p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Move className="w-5 h-5 text-purple-500" />
          </div>
          <h2 className="text-xl font-bold text-white">READING THE AXES</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white font-semibold">Vertical (Y) Axis</p>
            <p className="text-white/60 text-sm">
              Shows the price level. The scale adjusts automatically to fit the price range displayed.
            </p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white font-semibold">Horizontal (X) Axis</p>
            <p className="text-white/60 text-sm">Represents time, moving from left (past) to right (present/future).</p>
          </div>
        </div>
      </Card>

      <Card className="border border-green-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-lg font-bold text-green-400 mb-2">Pro Tip</h2>
        <p className="text-white/80 text-base leading-relaxed">
          Most trading platforms allow you to zoom in and out on charts and switch between timeframes instantly.
          Practice navigating different timeframes to understand how the same market can look different depending on
          your perspective.
        </p>
      </Card>
    </div>
  )
}
