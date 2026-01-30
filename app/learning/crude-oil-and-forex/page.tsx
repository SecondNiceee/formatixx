"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { CrudeOilAndForexContent } from "@/components/learning/crude-oil-and-forex-content"
import { CrudeOilAndForexQuiz } from "@/components/learning/crude-oil-and-forex-quiz"

export default function CrudeOilAndForexPage() {
  return (
    <LessonLayout
      title="Crude Oil Prices and Forex"
      category="The Money Makers"
      nextLesson={{
        title: "Navigating The Charts",
        href: "/learning/navigating-the-charts",
      }}
      ContentComponent={CrudeOilAndForexContent}
      QuizComponent={CrudeOilAndForexQuiz}
    />
  )
}
