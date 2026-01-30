"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { WhyTradeForexContent } from "@/components/learning/why-trade-forex-content"
import { WhyTradeForexQuiz } from "@/components/learning/why-trade-forex-quiz"

export default function WhyTradeForexPage() {
  return (
    <LessonLayout
      title="Why Trade Forex?"
      category="Getting Started"
      nextLesson={{
        title: "How Much Can You Make Trading?",
        href: "/learning/how-much-can-you-make",
      }}
      ContentComponent={WhyTradeForexContent}
      QuizComponent={WhyTradeForexQuiz}
    />
  )
}
