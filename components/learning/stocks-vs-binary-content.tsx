"use client"

import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const differences = [
  {
    category: "Market Size & Liquidity",
    binary: "The largest financial market in the world, with over $7 trillion in daily trading volume. Extremely liquid with tight spreads.",
    stocks: "Global stock markets combined trade around $200 billion daily. Individual stocks can have varying liquidity levels.",
  },
  {
    category: "Trading Hours",
    binary: "Open 24 hours a day, 5 days a week. Trade anytime from Sunday evening to Friday evening.",
    stocks: "Limited to stock exchange hours (typically 9:30 AM - 4:00 PM local time). Extended hours trading available but with less liquidity.",
  },
  {
    category: "Number of Options",
    binary: "Focus on major currency pairs (EUR/USD, GBP/USD, USD/JPY, etc.). Around 30-40 pairs commonly traded.",
    stocks: "Thousands of stocks to choose from across multiple exchanges worldwide. Can be overwhelming for beginners.",
  },
  {
    category: "Leverage",
    binary: "Typically offers higher leverage (50:1 to 500:1 depending on regulations). Control larger positions with less capital.",
    stocks: "Generally lower leverage (2:1 to 4:1 for most retail traders). More capital required for larger positions.",
  },
  {
    category: "Profit Direction",
    binary: "Equally easy to profit from rising or falling markets. Every trade involves buying one currency and selling another.",
    stocks: "Traditionally easier to profit from rising prices (going long). Short selling stocks can be more complex and restricted.",
  },
  {
    category: "Minimum Capital",
    binary: "Can start with as little as $100-$500 due to high leverage. Micro and mini accounts available.",
    stocks: "Pattern day trading rules in the U.S. require $25,000 minimum. Can start with less for swing trading or investing.",
  },
]

const binaryBenefits = [
  "24-hour trading flexibility",
  "Lower starting capital requirements",
  "Higher leverage opportunities",
  "Focus on fewer, more liquid instruments",
]

const stockBenefits = [
  "To invest in specific companies",
  "Long-term wealth building through dividends",
  "More choices and variety",
  "Traditional business investing approach",
]

export function StocksVsBinaryContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">STOCKS VS BINARY OPTIONS: WHAT'S THE DIFFERENCE?</h2>
        <p className="text-white/70 leading-relaxed">
          Both stock and binary options markets offer opportunities for profit, but they operate quite differently. Understanding these differences will help you choose the market that best fits your trading style and goals.
        </p>
      </section>

      {/* Key Differences */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">KEY DIFFERENCES</h2>
        <div className="space-y-4">
          {differences.map((item, index) => (
            <Card key={index} className="bg-purple-900/20 border-purple-500/30 p-5 overflow-hidden">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">{item.category}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">Binary Options</h4>
                  <p className="text-white/60 text-sm">{item.binary}</p>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">Stocks</h4>
                  <p className="text-white/60 text-sm">{item.stocks}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Which Is Better */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">WHICH IS BETTER FOR YOU?</h2>
        <Card className="bg-purple-900/20 border-purple-500/30 p-6">
          <p className="text-white/70 leading-relaxed mb-6">
            Neither market is inherently "better" - it depends on your circumstances and preferences:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-5">
              <h4 className="text-green-400 font-semibold mb-3">Choose Binary Options if you want:</h4>
              <ul className="space-y-2">
                {binaryBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-white/60 text-sm">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-5">
              <h4 className="text-blue-400 font-semibold mb-3">Choose Stocks if you want:</h4>
              <ul className="space-y-2">
                {stockBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-white/60 text-sm">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Remember */}
      <section>
        <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 p-6">
          <p className="text-purple-300 font-medium">
            Remember: Many successful traders eventually participate in both markets. You don't have to choose just one - you can diversify your trading across multiple asset classes as you gain experience!
          </p>
        </Card>
      </section>
    </div>
  )
}
