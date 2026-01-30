"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { GoldBinaryContent } from "@/components/learning/gold-binary-content"
import { GoldBinaryQuiz } from "@/components/learning/gold-binary-quiz"

export default function GoldBinaryPage() {
  return (
    <LessonLayout
      title="Gold Prices and Binary Options"
      category="What Moves Markets"
      description="Understanding the relationship between gold and currencies"
      ContentComponent={GoldBinaryContent}
      QuizComponent={GoldBinaryQuiz}
      nextLesson={{ title: "Investing in Stocks vs Binary Options", href: "/learning/stocks-vs-binary" }}
    />
  )
}
