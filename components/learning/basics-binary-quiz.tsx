"use client"

import { Quiz } from "./quiz"
import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"

export function BasicsBinaryQuiz() {
  const { language } = useLanguage()
  const t = translations[language]
  const quiz = t.learning.moneyMakers.basics.quiz

  const quizQuestions = [
    {
      question: quiz.q1,
      options: [quiz.q1o1, quiz.q1o2, quiz.q1o3],
      correctAnswer: 1,
      explanation: quiz.q1a,
    },
    {
      question: quiz.q2,
      options: [quiz.q2o1, quiz.q2o2, quiz.q2o3],
      correctAnswer: 1,
      explanation: quiz.q2a,
    },
    {
      question: quiz.q3,
      options: [quiz.q3o1, quiz.q3o2, quiz.q3o3],
      correctAnswer: 1,
      explanation: quiz.q3a,
    },
  ]

  return <Quiz questions={quizQuestions} />
}
