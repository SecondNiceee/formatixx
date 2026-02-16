"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { LessonLayout } from "@/components/learning/lesson-layout"
import { HowMuchBinaryContent } from "@/components/learning/how-much-binary-content"
import { HowMuchBinaryQuiz } from "@/components/learning/how-much-binary-quiz"

export default function HowMuchBinaryPage() {
  const { t } = useLanguage()

  return (
    <LessonLayout
      title={t.common.howMuchBinary}
      category={t.learning.section1.title}
      nextLesson={{
        title: t.common.whenToTrade,
        href: "/learning/when-to-trade-binary",
      }}
      ContentComponent={HowMuchBinaryContent}
      QuizComponent={HowMuchBinaryQuiz}
    />
  )
}
