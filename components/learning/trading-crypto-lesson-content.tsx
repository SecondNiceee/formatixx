"use client"

import { Card } from "@/components/ui/card"
import { Bitcoin, Clock, TrendingUp, Newspaper, Droplets, AlertTriangle, Shield } from "lucide-react"

export function TradingCryptoLessonContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-orange-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
            <Bitcoin className="w-5 h-5 text-orange-500" />
          </div>
          <h2 className="text-xl font-bold text-white">What Are Cryptocurrency Pairs?</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Cryptocurrency trading shares many similarities with binary options trading. Instead of trading traditional
          currency pairs like EUR/USD, you trade crypto pairs like BTC/USD (Bitcoin against US Dollar) or ETH/BTC
          (Ethereum against Bitcoin).
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Crypto pairs work the same way as binary options pairs - when you go long on BTC/USD, you're buying Bitcoin
          and selling US Dollars. When you go short, you're selling Bitcoin and buying US Dollars. The same technical
          analysis tools you use for binary options apply to crypto markets.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">Key Differences from Binary Options</h2>

        <div className="space-y-4">
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-cyan-500" />
              <h3 className="text-lg font-semibold text-white">24/7 Market</h3>
            </div>
            <p className="text-white/70 text-sm">
              Unlike binary options which have trading sessions, crypto markets never close. They trade 24 hours a day,
              7 days a week, including weekends and holidays. This means opportunities and risks exist around the clock.
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold text-white">Higher Volatility</h3>
            </div>
            <p className="text-white/70 text-sm">
              Cryptocurrencies are significantly more volatile than major binary options pairs. Bitcoin can move 5-10%
              in a single day, while EUR/USD rarely moves more than 1%. This means larger profit potential but also
              greater risk.
            </p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Newspaper className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-semibold text-white">Different Market Drivers</h3>
            </div>
            <p className="text-white/70 text-sm">
              Crypto prices are driven by technology updates, regulatory news, adoption rates, and market sentiment
              rather than traditional economic indicators like GDP or interest rates. Stay informed about blockchain
              developments and regulatory changes.
            </p>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Droplets className="w-5 h-5 text-yellow-500" />
              <h3 className="text-lg font-semibold text-white">Liquidity Variations</h3>
            </div>
            <p className="text-white/70 text-sm">
              Major cryptocurrencies like Bitcoin and Ethereum have good liquidity, but smaller altcoins can have wide
              spreads and slippage. Always check liquidity before trading less popular crypto pairs.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">Popular Crypto Trading Pairs</h2>

        <div className="space-y-3">
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">BTC/USD - Bitcoin vs US Dollar</h3>
            <p className="text-white/60 text-sm">The most traded crypto pair, high liquidity, good for beginners</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">ETH/USD - Ethereum vs US Dollar</h3>
            <p className="text-white/60 text-sm">
              Second largest crypto, often follows Bitcoin but with unique movements
            </p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">BTC/EUR - Bitcoin vs Euro</h3>
            <p className="text-white/60 text-sm">
              Popular in European markets, provides diversification from USD pairs
            </p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-1">ETH/BTC - Ethereum vs Bitcoin</h3>
            <p className="text-white/60 text-sm">
              Pure crypto pair, useful for trading altcoin strength against Bitcoin
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-green-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <Shield className="w-5 h-5 text-green-500" />
          </div>
          <h2 className="text-xl font-bold text-white">Risk Management for Crypto Trading</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Due to higher volatility, risk management is even more critical in crypto trading. Use smaller position sizes
          compared to binary options - if you typically risk 2% per binary options trade, consider risking only 1% per
          crypto trade.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Always use stop losses and be prepared for sudden price swings. Crypto markets can gap significantly during
          low-liquidity periods or major news events. Never risk more than you can afford to lose, and consider crypto
          as a smaller portion of your overall trading portfolio.
        </p>
      </Card>

      <Card className="border border-red-500/50 bg-red-500/10 p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <h2 className="text-lg font-bold text-red-400">Important Warning</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed">
          Cryptocurrency trading carries significantly higher risk than traditional binary options due to extreme
          volatility and regulatory uncertainty. Only trade crypto with capital you can afford to lose entirely. Start
          with small positions and gradually increase as you gain experience with crypto market dynamics.
        </p>
      </Card>
    </div>
  )
}
