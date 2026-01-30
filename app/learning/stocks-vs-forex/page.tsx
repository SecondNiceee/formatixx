"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { StocksVsForexContent } from "@/components/learning/stocks-vs-forex-content"
import { StocksVsForexQuiz } from "@/components/learning/stocks-vs-forex-quiz"

export default function StocksVsForexPage() {
  return (
    <LessonLayout
      title="Investing in Stocks vs Forex"
      category="The Money Makers"
      nextLesson={{
        title: "Crude Oil Prices and Forex",
        href: "/learning/crude-oil-and-forex",
      }}
      ContentComponent={StocksVsForexContent}
      QuizComponent={StocksVsForexQuiz}
    />
  )
}
