"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Quiz } from "@/components/learning/quiz"

export function WhyTradeBinaryQuiz() {
  const { t } = useLanguage()
  const q = t.learning.lessons.whyTradeBinary.quiz

  const questions = [
    {
      question: q.q1,
      options: [q.q1o1, q.q1o2, q.q1o3],
      correctAnswer: 0,
      explanation: q.q1a,
    },
    {
      question: q.q2,
      options: [q.q2o1, q.q2o2, q.q2o3],
      correctAnswer: 1,
      explanation: q.q2a,
    },
    {
      question: q.q3,
      options: [q.q3o1, q.q3o2, q.q3o3],
      correctAnswer: 1,
      explanation: q.q3a,
    },
  ]

  return <Quiz questions={questions} />
}
