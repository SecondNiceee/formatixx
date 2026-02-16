"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { LessonLayout } from "@/components/learning/lesson-layout"
import { WhyTradeBinaryContent } from "@/components/learning/why-trade-binary-content"
import { WhyTradeBinaryQuiz } from "@/components/learning/why-trade-binary-quiz"

export default function WhyTradeBinaryPage() {
  const { t } = useLanguage()

  return (
    <LessonLayout
      title={t.common.whyTradeBinary}
      category={t.learning.section1.title}
      nextLesson={{
        title: t.common.howMuchBinary,
        href: "/learning/how-much-binary",
      }}
      ContentComponent={WhyTradeBinaryContent}
      QuizComponent={WhyTradeBinaryQuiz}
    />
  )
}
