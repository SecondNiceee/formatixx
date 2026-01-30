"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { LanguageBinaryContent } from "@/components/learning/language-binary-content"
import { LanguageBinaryQuiz } from "@/components/learning/language-binary-quiz"

export default function LanguageBinaryPage() {
  return (
    <LessonLayout
      title="The Language of Binary Options"
      category="What Moves Markets"
      description="Master the terminology of currency trading"
      ContentComponent={LanguageBinaryContent}
      QuizComponent={LanguageBinaryQuiz}
      nextLesson={{ title: "Following the Fundamentals", href: "/learning/fundamentals-binary" }}
    />
  )
}
