"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { BasicsBinaryContent } from "@/components/learning/basics-binary-content"
import { BasicsBinaryQuiz } from "@/components/learning/basics-binary-quiz"
import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"

export default function BasicsBinaryPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <LessonLayout
      title={t.learning.moneyMakers.basics.title}
      category={t.learning.section2.subtitle}
      description={t.learning.moneyMakers.basics.sections.intro1}
      ContentComponent={BasicsBinaryContent}
      QuizComponent={BasicsBinaryQuiz}
      nextLesson={{ title: t.common.language, href: "/learning/language-binary" }}
    />
  )
}
