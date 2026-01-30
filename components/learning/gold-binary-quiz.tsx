"use client"

import { Quiz } from "./quiz"

const quizQuestions = [
  {
    question: "What typically happens to gold prices when the U.S. dollar strengthens?",
    options: ["Gold prices increase", "Gold prices decrease", "No effect on gold prices"],
    correctAnswer: 1,
  },
  {
    question: "Why is gold considered a safe-haven asset?",
    options: ["It's easy to trade", "Investors seek it during times of uncertainty", "It always increases in value"],
    correctAnswer: 1,
  },
  {
    question: "Which currencies are often called 'commodity currencies' due to their relationship with gold?",
    options: ["EUR and GBP", "USD and JPY", "AUD and CAD"],
    correctAnswer: 2,
  },
]

export function GoldBinaryQuiz() {
  return <Quiz questions={quizQuestions} lessonTitle="Gold Prices and Binary Options" />
}
