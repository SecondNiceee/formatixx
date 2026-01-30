"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { CrudeOilBinaryContent } from "@/components/learning/crude-oil-binary-content"
import { CrudeOilBinaryQuiz } from "@/components/learning/crude-oil-binary-quiz"

export default function CrudeOilBinaryPage() {
  return (
    <LessonLayout
      title="Crude Oil Prices and Binary Options"
      category="What Moves Markets"
      description="How oil impacts currency markets"
      ContentComponent={CrudeOilBinaryContent}
      QuizComponent={CrudeOilBinaryQuiz}
      nextLesson={{ title: "Navigating The Charts", href: "/learning/navigating-the-charts" }}
    />
  )
}
