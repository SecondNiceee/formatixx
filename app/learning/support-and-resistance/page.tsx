"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { SupportAndResistanceContent } from "@/components/learning/support-and-resistance-content"
import { SupportAndResistanceQuiz } from "@/components/learning/support-and-resistance-quiz"

export default function SupportAndResistancePage() {
  return (
    <LessonLayout
      title="Support And Resistance"
      category="Reading the Market"
      nextLesson={{
        title: "Chart Patterns",
        href: "/learning/chart-patterns",
      }}
      ContentComponent={SupportAndResistanceContent}
      QuizComponent={SupportAndResistanceQuiz}
    />
  )
}
