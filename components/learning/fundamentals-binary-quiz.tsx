"use client"

import { Quiz } from "./quiz"

const quizQuestions = [
  {
    question: "What typically happens to a currency when its central bank raises interest rates?",
    options: ["It weakens", "It strengthens", "Nothing happens"],
    correctAnswer: 1,
  },
  {
    question: "What does GDP measure?",
    options: ["Total value of goods and services produced", "Total number of employees", "Total currency in circulation"],
    correctAnswer: 0,
  },
  {
    question: "What does 'hawkish' central bank policy typically indicate?",
    options: ["Plans to lower interest rates", "Plans to raise interest rates", "No change in policy"],
    correctAnswer: 1,
  },
]

export function FundamentalsBinaryQuiz() {
  return <Quiz questions={quizQuestions} lessonTitle="Following the Fundamentals" />
}
