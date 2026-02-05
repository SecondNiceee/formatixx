"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { MovingAverageContent } from "@/components/learning/moving-average-content"
import { MovingAverageQuiz } from "@/components/learning/moving-average-quiz"

export default function MovingAveragePage() {
  return (
    <LessonLayout
      title="Moving Average"
      category="Your Trading Toolkit"
      nextLesson={{
        title: "Relative Strength Index (RSI)",
        href: "/learning/rsi",
      }}
      ContentComponent={MovingAverageContent}
      QuizComponent={MovingAverageQuiz}
    />
  )
}
