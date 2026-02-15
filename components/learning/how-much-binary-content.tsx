"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export function HowMuchBinaryContent() {
  const { t } = useLanguage()
  const s = t.learning.lessons.howMuchBinary.sections

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">{s.intro}</h2>
        <p className="text-white/80 leading-relaxed mb-4">{s.subtitle}</p>
        <p className="text-white/80 leading-relaxed mb-4">{s.content1}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">{s.startWith}</h3>
        <p className="text-white/80 leading-relaxed mb-4">{s.startWithContent}</p>

        <div className="bg-[#1a0f2e]/60 border border-purple-500/30 rounded-xl p-4 my-4">
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span>
                {s.example1} <span className="text-purple-400 font-semibold">{s.example1Value}</span> that's around
                {" "}
                <span className="text-green-400 font-semibold">{s.example1Result}</span> {s.example1Text}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span>
                {s.example2} <span className="text-purple-400 font-semibold">{s.example2Value}</span> and 1-3% per day totals to
                {" "}
                <span className="text-green-400 font-semibold">{s.example2Result}</span> {s.example2Text}
              </span>
            </li>
          </ul>
        </div>

        <p className="text-white/80 leading-relaxed">{s.startContentEnd}</p>
        <p className="text-white/60 italic mt-2">{s.note}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">{s.isItEasy}</h3>
      </section>
    </div>
  )
}
