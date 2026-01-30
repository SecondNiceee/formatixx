"use client"

import { Quiz } from "./quiz"

const quizQuestions = [
  {
    question: "What is a pip in binary options trading?",
    options: ["A type of currency", "The smallest price move in a currency pair", "A trading platform"],
    correctAnswer: 1,
  },
  {
    question: "What does 'going long' mean?",
    options: ["Trading for a long time", "Buying a currency pair", "Selling a currency pair"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of a stop loss order?",
    options: ["To increase profits", "To limit potential losses", "To close winning trades"],
    correctAnswer: 1,
  },
]

export function LanguageBinaryQuiz() {
  return <Quiz questions={quizQuestions} lessonTitle="The Language of Binary Options" />
}
