"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { WhenToTradeBinaryContent } from "@/components/learning/when-to-trade-binary-content"
import { WhenToTradeBinaryQuiz } from "@/components/learning/when-to-trade-binary-quiz"

export default function WhenToTradeBinaryPage() {
  return (
    <LessonLayout
      title="When to Trade"
      category="Getting Started"
      nextLesson={{
        title: "Social Trading (Copy Trading)",
        href: "/learning/social-trading-binary",
      }}
      ContentComponent={WhenToTradeBinaryContent}
      QuizComponent={WhenToTradeBinaryQuiz}
    />
  )
}
