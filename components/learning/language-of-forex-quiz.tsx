import { Quiz } from "@/components/learning/quiz"

export function LanguageOfForexQuiz() {
  const questions = [
    {
      question: "In the pair EUR/USD, which is the base currency?",
      options: ["USD", "EUR", "Both equally", "Neither"],
      correctAnswer: 1,
      explanation: "The first currency in a pair is always the base currency. Here, EUR is the base currency.",
    },
    {
      question: "What is a pip in most currency pairs?",
      options: ["0.1", "0.01", "0.001", "0.0001"],
      correctAnswer: 3,
      explanation: "For most currency pairs, a pip is 0.0001, representing the fourth decimal place.",
    },
    {
      question: "How many units are in a standard lot?",
      options: ["1,000", "10,000", "100,000", "1,000,000"],
      correctAnswer: 2,
      explanation: "A standard lot represents 100,000 units of the base currency.",
    },
    {
      question: "What is the spread?",
      options: [
        "The difference between bid and ask prices",
        "The profit you make",
        "The commission fee",
        "The leverage ratio",
      ],
      correctAnswer: 0,
      explanation: "The spread is the difference between the bid (sell) price and ask (buy) price.",
    },
  ]

  return <Quiz questions={questions} />
}
