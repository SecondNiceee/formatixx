"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { FromSimContent } from "@/components/learning/from-sim-content"
import { FromSimQuiz } from "@/components/learning/from-sim-quiz"

export default function FromSimPage() {
  return (
    <LessonLayout
      title="From Simulator to Real Trading Platforms"
      category="Level Up"
      nextLesson={{
        title: "Continue Learning",
        href: "/learning",
      }}
      ContentComponent={FromSimContent}
      QuizComponent={FromSimQuiz}
    />
  )
}
