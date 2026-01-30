"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, Layers, Percent, ArrowUpDown, DollarSign, CheckCircle2 } from "lucide-react"

export function StocksVsBinaryOptionsLessonContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">STOCKS VS BINARY OPTIONS: WHAT'S THE DIFFERENCE?</h2>
        <p className="text-white/80 text-base leading-relaxed">
          Both stock and binary options markets offer opportunities for profit, but they operate quite differently.
          Understanding these differences will help you choose the market that best fits your trading style and goals.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">KEY DIFFERENCES</h2>

        <div className="space-y-4">
          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-semibold text-white">Market Size & Liquidity</h3>
            </div>
            <div className="space-y-2 text-white/70 text-sm">
              <p>
                <span className="text-purple-400 font-semibold">Binary Options:</span> The largest financial market in
                the world, with over $7 trillion in daily trading volume. Extremely liquid with tight spreads.
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Stocks:</span> Global stock markets combined trade around
                $200 billion daily. Individual stocks can have varying liquidity levels.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-cyan-500" />
              <h3 className="text-lg font-semibold text-white">Trading Hours</h3>
            </div>
            <div className="space-y-2 text-white/70 text-sm">
              <p>
                <span className="text-purple-400 font-semibold">Binary Options:</span> Open 24 hours a day, 5 days a
                week. Trade anytime from Sunday evening to Friday evening.
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Stocks:</span> Limited to stock exchange hours (typically
                9:30 AM - 4:00 PM local time). Extended hours trading available but with less liquidity.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-white">Number of Options</h3>
            </div>
            <div className="space-y-2 text-white/70 text-sm">
              <p>
                <span className="text-purple-400 font-semibold">Binary Options:</span> Focus on major currency pairs
                (EUR/USD, GBP/USD, USD/JPY, etc.). Around 30-40 pairs commonly traded.
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Stocks:</span> Thousands of stocks to choose from across
                multiple exchanges worldwide. Can be overwhelming for beginners.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <Percent className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-white">Leverage</h3>
            </div>
            <div className="space-y-2 text-white/70 text-sm">
              <p>
                <span className="text-purple-400 font-semibold">Binary Options:</span> Typically offers higher leverage
                (50:1 to 500:1 depending on regulations). Control larger positions with less capital.
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Stocks:</span> Generally lower leverage (2:1 to 4:1 for
                most retail traders). More capital required for larger positions.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <ArrowUpDown className="w-5 h-5 text-pink-500" />
              <h3 className="text-lg font-semibold text-white">Profit Direction</h3>
            </div>
            <div className="space-y-2 text-white/70 text-sm">
              <p>
                <span className="text-purple-400 font-semibold">Binary Options:</span> Equally easy to profit from
                rising or falling markets. Every trade involves buying one currency and selling another.
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Stocks:</span> Traditionally easier to profit from rising
                prices (going long). Short selling stocks can be more complex and restricted.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-white">Minimum Capital</h3>
            </div>
            <div className="space-y-2 text-white/70 text-sm">
              <p>
                <span className="text-purple-400 font-semibold">Binary Options:</span> Can start with as little as
                $100-$500 due to high leverage. Micro and mini accounts available.
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Stocks:</span> Pattern day trading rules in the U.S.
                require $25,000 minimum. Can start with less for swing trading or investing.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">WHICH IS BETTER FOR YOU?</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Neither market is inherently "better" - it depends on your circumstances and preferences:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Choose Binary Options if you want:</h3>
            <ul className="space-y-2">
              {[
                "24-hour trading flexibility",
                "Lower starting capital requirements",
                "Higher leverage opportunities",
                "Focus on fewer, more liquid instruments",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Choose Stocks if you want:</h3>
            <ul className="space-y-2">
              {[
                "To invest in specific companies",
                "Long-term wealth building through dividends",
                "More choices and variety",
                "Traditional business investing approach",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      <Card className="border border-green-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <p className="text-white/80 text-base leading-relaxed">
          <span className="text-green-400 font-semibold">Remember:</span> Many successful traders eventually participate
          in both markets. You don't have to choose just one - you can diversify your trading across multiple asset
          classes as you gain experience!
        </p>
      </Card>
    </div>
  )
}
