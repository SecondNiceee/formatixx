"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { LessonLayout } from "@/components/learning/lesson-layout"
import { SocialTradingBinaryContent } from "@/components/learning/social-trading-binary-content"
import { SocialTradingBinaryQuiz } from "@/components/learning/social-trading-binary-quiz"

export default function SocialTradingBinaryPage() {
  const { t } = useLanguage()

  return (
    <LessonLayout
      title={`${t.common.socialTrading} (${t.common.copyTrading})`}
      category={t.learning.section1.title}
      nextLesson={{
        title: t.common.basics,
        href: "/learning/basics-binary",
      }}
      ContentComponent={SocialTradingBinaryContent}
      QuizComponent={SocialTradingBinaryQuiz}
    />
  )
}
