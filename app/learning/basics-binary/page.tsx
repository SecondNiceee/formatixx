"use client"

import { LessonLayout } from "@/components/learning/lesson-layout"
import { BasicsBinaryContent } from "@/components/learning/basics-binary-content"
import { BasicsBinaryQuiz } from "@/components/learning/basics-binary-quiz"

export default function BasicsBinaryPage() {
  return (
    <LessonLayout
      title="Basics"
      category="What Moves Markets"
      description="Understanding what moves the markets"
      ContentComponent={BasicsBinaryContent}
      QuizComponent={BasicsBinaryQuiz}
      nextLesson={{ title: "The Language of Binary Options", href: "/learning/language-binary" }}
    />
  )
}
