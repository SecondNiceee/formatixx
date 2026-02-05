"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { VolumeIndicatorContent } from "@/components/learning/volume-indicator-content"
import { VolumeIndicatorQuiz } from "@/components/learning/volume-indicator-quiz"

export default function VolumeIndicatorPage() {
  return (
    <LessonLayout
      title="Volume Indicator"
      category="Your Trading Toolkit"
      nextLesson={{
        title: "Moving Average",
        href: "/learning/moving-average",
      }}
      ContentComponent={VolumeIndicatorContent}
      QuizComponent={VolumeIndicatorQuiz}
    />
  )
}
