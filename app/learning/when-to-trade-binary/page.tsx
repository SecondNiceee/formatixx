"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { LessonLayout } from "@/components/learning/lesson-layout"
import { WhenToTradeBinaryContent } from "@/components/learning/when-to-trade-binary-content"
import { WhenToTradeBinaryQuiz } from "@/components/learning/when-to-trade-binary-quiz"

export default function WhenToTradeBinaryPage() {
  const { t } = useLanguage()

  return (
    <LessonLayout
      title={t.common.whenToTrade}
      category={t.learning.section1.title}
      nextLesson={{
        title: `${t.common.socialTrading} (${t.common.copyTrading})`,
        href: "/learning/social-trading-binary",
      }}
      ContentComponent={WhenToTradeBinaryContent}
      QuizComponent={WhenToTradeBinaryQuiz}
    />
  )
}
