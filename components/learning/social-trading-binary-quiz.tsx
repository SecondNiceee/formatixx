"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Quiz } from "@/components/learning/quiz"

export function SocialTradingBinaryQuiz() {
  const { t } = useLanguage()
  const q = t.learning.lessons.socialTradingBinary.quiz

  const questions = [
    {
      question: q.q1,
      options: [q.q1o1, q.q1o2, q.q1o3],
      correctAnswer: 1,
      explanation: q.q1a,
    },
    {
      question: q.q2,
      options: [q.q2o1, q.q2o2, q.q2o3],
      correctAnswer: 1,
      explanation: q.q2a,
    },
  ]

  return <Quiz questions={questions} />
}
