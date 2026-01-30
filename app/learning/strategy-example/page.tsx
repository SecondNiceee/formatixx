"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { StrategyExampleContent } from "@/components/learning/strategy-example-content"
import { StrategyExampleQuiz } from "@/components/learning/strategy-example-quiz"

export default function StrategyExamplePage() {
  return (
    <LessonLayout
      title="Example"
      category="Winning Strategies"
      nextLesson={{
        title: "Buying and Selling",
        href: "/learning/buying-and-selling",
      }}
      ContentComponent={StrategyExampleContent}
      QuizComponent={StrategyExampleQuiz}
    />
  )
}
