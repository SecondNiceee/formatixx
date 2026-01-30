import { Quiz } from "@/components/learning/quiz"

export function FromSimQuiz() {
  const questions = [
    {
      question: "How should you start live trading?",
      options: [
        "Large positions for big profits",
        "Minimum account, smallest sizes",
        "Same as demo size",
        "Maximum leverage",
      ],
      correctAnswer: 1,
      explanation: "Start with the minimum account size and smallest position sizes to ease into live trading.",
    },
    {
      question: "What should you expect when trading with real money?",
      options: ["Same emotions as demo", "No emotions", "Stronger emotions like fear and greed", "Pure logic"],
      correctAnswer: 2,
      explanation:
        "Real money creates stronger emotions including fear, greed, and excitement that weren't present in demo.",
    },
    {
      question: "Should you change your strategy when going live?",
      options: [
        "Yes, completely different approach",
        "No, trade exactly as in demo",
        "Yes, more aggressive",
        "Yes, more conservative",
      ],
      correctAnswer: 1,
      explanation: "Trade exactly as you did in demo - don't change your proven strategy when going live.",
    },
    {
      question: "When should you increase position size?",
      options: [
        "Immediately if first trade wins",
        "After consistent profitability",
        "When you feel confident",
        "Never increase",
      ],
      correctAnswer: 1,
      explanation: "Only increase position size gradually after achieving consistent profitability with smaller sizes.",
    },
  ]

  return <Quiz questions={questions} />
}
