"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { GoldAndForexContent } from "@/components/learning/gold-and-forex-content"
import { GoldAndForexQuiz } from "@/components/learning/gold-and-forex-quiz"

export default function GoldAndForexPage() {
  return (
    <LessonLayout
      title="Gold Prices and Forex"
      category="The Money Makers"
      nextLesson={{
        title: "Investing in Stocks vs Forex",
        href: "/learning/stocks-vs-forex",
      }}
      ContentComponent={GoldAndForexContent}
      QuizComponent={GoldAndForexQuiz}
    />
  )
}
