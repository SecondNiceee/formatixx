"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { SocialTradingBinaryContent } from "@/components/learning/social-trading-binary-content"
import { SocialTradingBinaryQuiz } from "@/components/learning/social-trading-binary-quiz"

export default function SocialTradingBinaryPage() {
  return (
    <LessonLayout
      title="Social Trading (Copy Trading)"
      category="Getting Started"
      nextLesson={{
        title: "Basics",
        href: "/learning/basics-binary",
      }}
      ContentComponent={SocialTradingBinaryContent}
      QuizComponent={SocialTradingBinaryQuiz}
    />
  )
}
