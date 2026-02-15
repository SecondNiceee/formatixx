"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export function WhenToTradeBinaryContent() {
  const { t } = useLanguage()
  const s = t.learning.lessons.whenToTradeBinary.sections

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">{s.intro}</h2>
        <p className="text-white/80 leading-relaxed mb-4">{s.subtitle}</p>
        <p className="text-white/80 leading-relaxed mb-4">{s.content1}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">{s.windowOfOpportunity}</h3>
        <p className="text-white/80 leading-relaxed mb-4">{s.windowContent}</p>
        <div className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-4 my-4">
          <p className="text-purple-300 leading-relaxed">
            {s.overlap} <span className="font-semibold">{s.overlapTime}</span>{s.overlapEnd}
          </p>
        </div>
        <p className="text-white/80 leading-relaxed">{s.overlapDetail}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">{s.whatIsSession}</h3>
        <p className="text-white/80 leading-relaxed mb-4">{s.whatIsSessionContent}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">{s.binaryOptions}</h3>
        <p className="text-white/80 leading-relaxed mb-4">{s.binaryOptionsContent}</p>
        <p className="text-white/80 leading-relaxed">{s.offPeakContent}</p>
      </section>
    </div>
  )
}
