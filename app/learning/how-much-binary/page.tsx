"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { HowMuchBinaryContent } from "@/components/learning/how-much-binary-content"
import { HowMuchBinaryQuiz } from "@/components/learning/how-much-binary-quiz"

export default function HowMuchBinaryPage() {
  return (
    <LessonLayout
      title="How Much Can You Make Trading?"
      category="Getting Started"
      nextLesson={{
        title: "When to Trade",
        href: "/learning/when-to-trade-binary",
      }}
      ContentComponent={HowMuchBinaryContent}
      QuizComponent={HowMuchBinaryQuiz}
    />
  )
}
