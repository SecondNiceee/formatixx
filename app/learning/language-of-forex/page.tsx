"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { LanguageOfForexContent } from "@/components/learning/language-of-forex-content"
import { LanguageOfForexQuiz } from "@/components/learning/language-of-forex-quiz"

export default function LanguageOfForexPage() {
  return (
    <LessonLayout
      title="The Language of Forex"
      category="The Money Makers"
      nextLesson={{
        title: "Following the Fundamentals",
        href: "/learning/following-fundamentals",
      }}
      ContentComponent={LanguageOfForexContent}
      QuizComponent={LanguageOfForexQuiz}
    />
  )
}
