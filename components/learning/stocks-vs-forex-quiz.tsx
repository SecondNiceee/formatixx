import { Quiz } from "@/components/learning/quiz"

export function StocksVsForexQuiz() {
  const questions = [
    {
      question: "When is the Forex market open?",
      options: ["9 AM - 5 PM weekdays", "24 hours, 5 days", "Business hours only", "Weekends only"],
      correctAnswer: 1,
      explanation:
        "The Forex market operates 24 hours a day, 5 days a week, unlike stock markets with set business hours.",
    },
    {
      question: "Which market has higher daily trading volume?",
      options: ["Stock market", "Forex market", "Both equal", "Depends on the day"],
      correctAnswer: 1,
      explanation: "Forex is the largest financial market with over $7 trillion traded daily.",
    },
    {
      question: "How many major currency pairs do most traders focus on?",
      options: ["Hundreds", "50-100", "7-8", "Just 1"],
      correctAnswer: 2,
      explanation:
        "Most Forex traders focus on 7-8 major currency pairs that account for the majority of trading volume.",
    },
    {
      question: "Which market typically offers higher leverage?",
      options: ["Stock market", "Forex market", "Both equal", "Neither offers leverage"],
      correctAnswer: 1,
      explanation:
        "Forex typically offers higher leverage (50:1, 100:1 or more) compared to stocks (2:1 for day trading).",
    },
  ]

  return <Quiz questions={questions} />
}
