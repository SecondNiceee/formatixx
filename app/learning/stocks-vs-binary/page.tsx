"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { StocksVsBinaryContent } from "@/components/learning/stocks-vs-binary-content"
import { StocksVsBinaryQuiz } from "@/components/learning/stocks-vs-binary-quiz"

export default function StocksVsBinaryPage() {
  return (
    <LessonLayout
      title="Investing in Stocks vs Binary Options"
      category="What Moves Markets"
      description="Compare and choose the right market for you"
      ContentComponent={StocksVsBinaryContent}
      QuizComponent={StocksVsBinaryQuiz}
      nextLesson={{ title: "Crude Oil Prices and Binary Options", href: "/learning/crude-oil-binary" }}
    />
  )
}
