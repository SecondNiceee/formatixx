"use client"

import { Card } from "@/components/ui/card"
import { Users, Trophy, Eye, Copy, Briefcase, Lightbulb, BarChart3 } from "lucide-react"

export function SocialTradingLessonContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-blue-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <h2 className="text-xl font-bold text-white">WHAT IS SOCIAL TRADING?</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed">
          If you are too busy to follow the news and monitor the charts all day, it is possible to participate in Binary
          Options trading in an easier and less time-consuming way. Social Trading allows you to connect with
          experienced traders, see their performance statistics (including gain percentages), discuss their trading
          ideas, learn from their mistakes and copy their successful strategies. In essence, you make professionals work
          for you.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-green-500" />
          </div>
          <h2 className="text-xl font-bold text-white">ODDS OF SUCCESS</h2>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
            <span className="text-white/70">Winning the Powerball lottery</span>
            <span className="text-red-400 font-mono">1:175,000,000</span>
          </div>
          <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
            <span className="text-white/70">Winning an Oscar</span>
            <span className="text-red-400 font-mono">1:1,700,000</span>
          </div>
          <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
            <span className="text-white/70">Winning an Olympic gold medal</span>
            <span className="text-orange-400 font-mono">1:660,000</span>
          </div>
          <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
            <span className="text-white/70">Becoming a pro athlete</span>
            <span className="text-orange-400 font-mono">1:22,000</span>
          </div>
          <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
            <span className="text-white/70">Dating a millionaire</span>
            <span className="text-yellow-400 font-mono">1:215</span>
          </div>
          <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
            <span className="text-white/70">Being successful trading binary options</span>
            <span className="text-green-400 font-mono">1:12</span>
          </div>
          <div className="flex justify-between items-center bg-green-500/20 border border-green-500/30 rounded-lg p-3">
            <span className="text-white font-semibold">Being successful by copying PRO traders</span>
            <span className="text-green-400 font-bold font-mono">1:6</span>
          </div>
        </div>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">HOW COPY TRADING WORKS</h2>

        <div className="space-y-4">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-semibold text-white">STEP 1 - FOLLOW TOP TRADERS</h3>
            </div>
            <p className="text-white/70 text-sm">
              Discover traders you want to follow and add to your watch list. View their past performance stats, read
              status updates on their strategies, see their live positions, analyze results and communicate with them.
              You can literally tap into the wisdom of the crowd.
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Copy className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-white">STEP 2 - COPY THEIR TRADES & STRATEGIES</h3>
            </div>
            <p className="text-white/70 text-sm">
              If you are satisfied with the results and trading style, you can copy their trades with one click of a
              button. The best part is that all trades will be made proportionally to your account size - if the PRO
              trader deposits 10% of his account into the position (which might be $10,000), then a position will also
              be opened with 10% of YOUR account (which might be just $100), thus significantly lowering the exposure to
              risk.
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-white">STEP 3 - MAKE PROFESSIONALS WORK FOR YOU</h3>
            </div>
            <p className="text-white/70 text-sm">
              Now you can sit back and watch how experienced traders do the work for you. Your task is to carefully
              analyze their results and learn as much as possible from their trades. The ultimate goal of social trading
              is to build a portfolio of the best traders.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border border-yellow-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
          </div>
          <h2 className="text-xl font-bold text-white">5 TIPS FROM PROFESSIONALS</h2>
        </div>
        <ul className="space-y-4 text-white/80">
          <li className="flex items-start gap-3">
            <span className="text-yellow-500 font-bold min-w-6">1.</span>
            <div>
              <strong className="text-white">BE CAREFUL WITH FIGURES THAT LOOK TOO POSITIVE</strong>
              <p className="text-sm text-white/60 mt-1">
                A positive profit margin does not always point to lasting success, so it is important to investigate how
                well the trader managed over a longer time frame. Test first with a virtual trading account.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-500 font-bold min-w-6">2.</span>
            <div>
              <strong className="text-white">ALLOCATE A MAXIMUM OF 20% PER TRADE</strong>
              <p className="text-sm text-white/60 mt-1">
                It's wise not to put all of your money in one trade. Diversify risk by only trading 5-20% of your total
                deposit.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-500 font-bold min-w-6">3.</span>
            <div>
              <strong className="text-white">TALK WITH A PRO</strong>
              <p className="text-sm text-white/60 mt-1">
                Try to start a conversation with an experienced trader. Ask what amount they recommend for you to copy
                their trades, what stop loss they recommend, and any other questions you may have.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-500 font-bold min-w-6">4.</span>
            <div>
              <strong className="text-white">AVOID "YOUNG ACCOUNTS" OR NEW ACCOUNTS</strong>
              <p className="text-sm text-white/60 mt-1">
                If you want your investments to be safe, it is recommended to copy traders with at least 1 year of
                experience.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-500 font-bold min-w-6">5.</span>
            <div>
              <strong className="text-white">CHECK THE RESULTS FREQUENTLY</strong>
              <p className="text-sm text-white/60 mt-1">
                Sometimes traders lose control by opening too many positions at once. Regularly follow all portfolios to
                be sure that your traders cut losses short and let profits run. Also remember to set up Copy-Stop-Loss
                orders.
              </p>
            </div>
          </li>
        </ul>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-purple-500" />
          </div>
          <h2 className="text-xl font-bold text-white">COPY TRADING EXAMPLE</h2>
        </div>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          The proportion between transferred funds to the particular trader and the initial capital of the trader is
          $5:$1,000 or 1:200. If the trader invests $200 or 20% in a transaction, then $5 will be invested from your
          account by copying his behavior, which is 20% of your $25.
        </p>
        <p className="text-white/80 text-base leading-relaxed">
          Naturally, if the trader you copy earns, you also earn a profit. Therefore, if the trader earns $20 when
          investing $200 (which is 10%), then you earn $0.50 when investing $5.
        </p>
      </Card>

      <Card className="border border-green-500/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <p className="text-white/80 text-base leading-relaxed">
          You must have traders with different risk appetites and various currency pairs or commodities traded so you
          don't have all your eggs in one basket. Diversification is key to long-term success in copy trading.
        </p>
      </Card>
    </div>
  )
}
