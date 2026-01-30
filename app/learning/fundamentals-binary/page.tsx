"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { FundamentalsBinaryContent } from "@/components/learning/fundamentals-binary-content"
import { FundamentalsBinaryQuiz } from "@/components/learning/fundamentals-binary-quiz"

export default function FundamentalsBinaryPage() {
  return (
    <LessonLayout
      title="Following the Fundamentals"
      category="What Moves Markets"
      description="Understanding fundamental analysis in binary options"
      ContentComponent={FundamentalsBinaryContent}
      QuizComponent={FundamentalsBinaryQuiz}
      nextLesson={{ title: "Gold Prices and Binary Options", href: "/learning/gold-binary" }}
    />
  )
}
