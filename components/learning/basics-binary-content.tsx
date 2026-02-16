"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Landmark, Globe, BarChart } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"

export function BasicsBinaryContent() {
  const { language } = useLanguage()
  const t = translations[language]
  const content = t.learning.moneyMakers.basics.sections

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">{content.whatMovesMarkets}</h2>
        <p className="text-white/70 leading-relaxed mb-4">
          {content.intro1}
        </p>
        <p className="text-white/70 leading-relaxed">
          {content.intro2}
        </p>
      </section>

      {/* Key Market Movers */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">{content.keyMarketMovers}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-purple-900/20 border-purple-500/30 p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <BarChart className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{content.economicData}</h3>
                <p className="text-white/60 text-sm">
                  {content.economicDataDesc}
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-purple-900/20 border-purple-500/30 p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <Landmark className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{content.centralBankPolicies}</h3>
                <p className="text-white/60 text-sm">
                  {content.centralBankDesc}
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-purple-900/20 border-purple-500/30 p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{content.geopoliticalEvents}</h3>
                <p className="text-white/60 text-sm">
                  {content.geopoliticalDesc}
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-purple-900/20 border-purple-500/30 p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{content.marketSentiment}</h3>
                <p className="text-white/60 text-sm">
                  {content.sentimentDesc}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Supply and Demand */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">{content.supplyDemand}</h2>
        <Card className="bg-[#1a1035] border-purple-500/30 p-6">
          <p className="text-white/70 leading-relaxed mb-4">
            {content.supplyContent}
          </p>
          <div className="bg-purple-600/20 rounded-lg p-4 border border-purple-500/30">
            <p className="text-purple-300 font-medium">
              {content.remember}
            </p>
          </div>
        </Card>
      </section>
    </div>
  )
}
