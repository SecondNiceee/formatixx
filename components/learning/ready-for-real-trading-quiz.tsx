import { Quiz } from "@/components/learning/quiz"

export function ReadyForRealTradingQuiz() {
  const questions = [
    {
      question: "How long should you be consistently profitable in demo before going live?",
      options: ["1 week", "1 month", "3+ months", "1 year"],
      correctAnswer: 2,
      explanation:
        "You should achieve consistent profitability for at least 3 months in demo trading before risking real money.",
    },
    {
      question: "What is the maximum risk per trade?",
      options: ["1-2%", "5-10%", "10-20%", "Whatever you feel comfortable with"],
      correctAnswer: 0,
      explanation:
        "Professional traders typically risk no more than 1-2% of their account per trade to preserve capital.",
    },
    {
      question: "What should you have before starting live trading?",
      options: ["Written trading plan", "Trading journal", "Emergency fund", "All of the above"],
      correctAnswer: 3,
      explanation: "You need a trading plan, journal, and financial safety net before starting live trading.",
    },
    {
      question: "What money should you use for trading?",
      options: ["Bill money", "Emergency fund", "Money you can afford to lose", "Borrowed money"],
      correctAnswer: 2,
      explanation: "Only trade with money you can afford to lose without affecting your financial stability.",
    },
  ]

  return <Quiz questions={questions} />
}
