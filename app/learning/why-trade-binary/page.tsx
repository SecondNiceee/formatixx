"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { WhyTradeBinaryContent } from "@/components/learning/why-trade-binary-content"
import { WhyTradeBinaryQuiz } from "@/components/learning/why-trade-binary-quiz"

export default function WhyTradeBinaryPage() {
  return (
    <LessonLayout
      title="Why Trade Binary Options?"
      category="Getting Started"
      nextLesson={{
        title: "How Much Can You Make Trading?",
        href: "/learning/how-much-binary",
      }}
      ContentComponent={WhyTradeBinaryContent}
      QuizComponent={WhyTradeBinaryQuiz}
    />
  )
}
