"use client"

import { Card } from "@/components/ui/card"
import {
  BookOpen,
  ArrowUpDown,
  DollarSign,
  Scale,
  TrendingUp,
  TrendingDown,
  Shield,
  Target,
  Lightbulb,
} from "lucide-react"

export function BinaryOptionsBasicsLessonContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-blue-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-blue-500" />
          </div>
          <h2 className="text-xl font-bold text-white">BINARY OPTIONS TERMINOLOGY</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed">
          To navigate the binary options market successfully, you need to understand its unique language. These terms
          form the foundation of trading communication and analysis.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">ESSENTIAL TERMS</h2>

        <div className="space-y-4">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <ArrowUpDown className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-semibold text-white">Currency Pair</h3>
            </div>
            <p className="text-white/70 text-sm">
              Two currencies quoted against each other, like EUR/USD. The first currency is the base currency, the
              second is the quote currency.
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-white">Pip (Point in Percentage)</h3>
            </div>
            <p className="text-white/70 text-sm">
              The smallest price move in a currency pair. For most pairs, it's the fourth decimal place (0.0001). For
              JPY pairs, it's the second decimal place (0.01).
            </p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-white">Spread</h3>
            </div>
            <p className="text-white/70 text-sm">
              The difference between the bid (sell) and ask (buy) price. This is essentially the broker's commission for
              executing your trade.
            </p>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-yellow-500" />
              <h3 className="text-lg font-semibold text-white">Leverage</h3>
            </div>
            <p className="text-white/70 text-sm">
              The ability to control a large position with a relatively small amount of capital. For example, 100:1
              leverage means you can control $100,000 with just $1,000.
            </p>
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-cyan-500" />
              <h3 className="text-lg font-semibold text-white">Margin</h3>
            </div>
            <p className="text-white/70 text-sm">
              The amount of money required in your account to open and maintain a leveraged position. It's like a good
              faith deposit.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">POSITION TYPES</h2>

        <div className="space-y-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-white">Long Position</h3>
            </div>
            <p className="text-white/70 text-sm">
              Buying a currency pair because you believe the base currency will strengthen against the quote currency.
              "Going long" means buying.
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold text-white">Short Position</h3>
            </div>
            <p className="text-white/70 text-sm">
              Selling a currency pair because you believe the base currency will weaken against the quote currency.
              "Going short" means selling.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">RISK MANAGEMENT ORDERS</h2>

        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold text-white">Stop Loss</h3>
            </div>
            <p className="text-white/70 text-sm">
              An order placed to automatically close a position at a specified price to limit potential losses. This is
              your safety net.
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-white">Take Profit</h3>
            </div>
            <p className="text-white/70 text-sm">
              An order to automatically close a position when it reaches a specified profit level. Lock in your gains
              automatically.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-purple-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-purple-500" />
          </div>
          <h2 className="text-xl font-bold text-white">WHY TERMINOLOGY MATTERS</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed">
          Understanding these terms isn't just about sounding professional - it's about being able to analyze market
          conditions, understand trading strategies, and manage your risk effectively.
        </p>
        <p className="text-white/80 text-base leading-relaxed mt-4">
          Think of binary options terminology as your trading toolkit. The better you understand each tool, the more
          effective you'll be at using them to achieve your trading goals.
        </p>
      </Card>
    </div>
  )
}
