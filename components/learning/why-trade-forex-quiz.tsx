import { Quiz } from "@/components/learning/quiz"

export function WhyTradeForexQuiz() {
  const questions = [
    {
      question: "How much is traded daily in the Forex market?",
      options: ["$1 trillion", "$3 trillion", "$7 trillion", "$10 trillion"],
      correctAnswer: 2,
      explanation: "The Forex market sees over $7 trillion traded daily, making it the largest financial market.",
    },
    {
      question: "When is the Forex market open?",
      options: ["9 AM - 5 PM weekdays", "24 hours, 7 days", "24 hours, 5 days", "Business hours only"],
      correctAnswer: 2,
      explanation: "The Forex market operates 24 hours a day, 5 days a week from Sunday evening to Friday afternoon.",
    },
    {
      question: "What advantage does high liquidity provide?",
      options: [
        "Higher profits guaranteed",
        "Tight spreads and less slippage",
        "No risk of losses",
        "Automatic winning trades",
      ],
      correctAnswer: 1,
      explanation:
        "High liquidity means you can enter and exit positions quickly with tight spreads and minimal slippage.",
    },
    {
      question: "Can you profit when currency prices fall?",
      options: ["No, only when prices rise", "Yes, by selling first", "Only with special accounts", "Not in Forex"],
      correctAnswer: 1,
      explanation: "In Forex, you can sell a currency pair first and buy it back later, profiting from falling prices.",
    },
  ]

  return <Quiz questions={questions} />
}
