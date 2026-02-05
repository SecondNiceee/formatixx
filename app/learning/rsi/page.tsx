"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { RSIContent } from "@/components/learning/rsi-content"
import { RSIQuiz } from "@/components/learning/rsi-quiz"

export default function RSIPage() {
  return (
    <LessonLayout
      title="Relative Strength Index (RSI)"
      category="Your Trading Toolkit"
      nextLesson={{
        title: "Volume Indicator",
        href: "/learning/volume-indicator",
      }}
      ContentComponent={RSIContent}
      QuizComponent={RSIQuiz}
    />
  )
}
