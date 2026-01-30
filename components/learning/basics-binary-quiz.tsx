"use client"

import { Quiz } from "./quiz"

const quizQuestions = [
  {
    question: "What typically happens to a currency when its country releases strong economic data?",
    options: ["The currency weakens", "The currency strengthens", "Nothing happens"],
    correctAnswer: 1,
  },
  {
    question: "Which institution's decisions are among the most powerful market movers?",
    options: ["Stock exchanges", "Central banks", "Trading platforms"],
    correctAnswer: 1,
  },
  {
    question: "Why are currencies always quoted in pairs in binary options?",
    options: [
      "To make trading more complex",
      "Because you're always buying one currency and selling another",
      "It's just a tradition",
    ],
    correctAnswer: 1,
  },
]

export function BasicsBinaryQuiz() {
  return <Quiz questions={quizQuestions} lessonTitle="Basics" />
}
