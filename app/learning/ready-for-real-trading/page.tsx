"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { ReadyForRealTradingContent } from "@/components/learning/ready-for-real-trading-content"
import { ReadyForRealTradingQuiz } from "@/components/learning/ready-for-real-trading-quiz"

export default function ReadyForRealTradingPage() {
  return (
    <LessonLayout
      title="Are You Ready For Real Trading?"
      category="Level Up"
      nextLesson={{
        title: "From Sim",
        href: "/learning/from-sim",
      }}
      ContentComponent={ReadyForRealTradingContent}
      QuizComponent={ReadyForRealTradingQuiz}
    />
  )
}
