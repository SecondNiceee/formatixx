"use client"

import { Quiz } from "./quiz"

const quizQuestions = [
  {
    question: "What typically happens to the Canadian dollar when oil prices rise?",
    options: ["It weakens", "It strengthens", "No effect"],
    correctAnswer: 1,
  },
  {
    question: "Why do oil-importing nations see their currencies weaken when oil prices rise?",
    options: ["They celebrate too much", "Higher import costs hurt economic growth", "They start exporting oil"],
    correctAnswer: 1,
  },
  {
    question: "What is the nickname for the USD/CAD currency pair?",
    options: ["The Cable", "The Loonie", "The Fiber"],
    correctAnswer: 1,
  },
]

export function CrudeOilBinaryQuiz() {
  return <Quiz questions={quizQuestions} lessonTitle="Crude Oil Prices and Binary Options" />
}
