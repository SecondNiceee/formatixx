"use client"

import { Quiz } from "./quiz"

const quizQuestions = [
  {
    question: "What is the approximate daily trading volume of the binary options market?",
    options: ["$200 billion", "$7 trillion", "$500 million"],
    correctAnswer: 1,
  },
  {
    question: "When is the binary options market open?",
    options: ["9 AM - 5 PM weekdays", "24 hours a day, 5 days a week", "Only during business hours"],
    correctAnswer: 1,
  },
  {
    question: "Which market typically offers higher leverage for retail traders?",
    options: ["Stock market", "Binary Options market", "Both offer the same"],
    correctAnswer: 1,
  },
]

export function StocksVsBinaryQuiz() {
  return <Quiz questions={quizQuestions} lessonTitle="Investing in Stocks vs Binary Options" />
}
