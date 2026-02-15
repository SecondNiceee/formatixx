"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export function WhyTradeBinaryContent() {
  const { t } = useLanguage()
  const s = t.learning.lessons.whyTradeBinary.sections

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">{s.intro}</h2>
        <p className="text-white/80 leading-relaxed mb-4">{s.content1}</p>
        <p className="text-white/80 leading-relaxed mb-4">{s.content2}</p>
        <p className="text-white/80 leading-relaxed mb-4">{s.content3}</p>
        <div className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-4 my-6">
          <p className="text-purple-300 font-semibold text-center">{s.callout}</p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">{s.crisis}</h3>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
          {s.crisisItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <p className="text-white/80 leading-relaxed">{s.crisisContent}</p>
        <p className="text-purple-400 font-medium mt-2">{s.crisisProfit}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">{s.hammock}</h3>
        <p className="text-white/80 leading-relaxed">{s.hammockContent}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">{s.startWith}</h3>
        <p className="text-white/80 leading-relaxed mb-4">{s.startWithContent1}</p>
        <p className="text-white/80 leading-relaxed">{s.startWithContent2}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">{s.easyRules}</h3>
        <p className="text-white/80 leading-relaxed">{s.easyRulesContent}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">{s.sellAnytime}</h3>
        <p className="text-white/80 leading-relaxed">{s.sellAnytimeContent}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">{s.socialTrading}</h3>
        <p className="text-white/80 leading-relaxed">{s.socialTradingContent}</p>
      </section>
    </div>
  )
}
