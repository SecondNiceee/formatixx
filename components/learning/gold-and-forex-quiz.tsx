import { Quiz } from "@/components/learning/quiz"

export function GoldAndForexQuiz() {
  const questions = [
    {
      question: "What is gold's reputation during economic uncertainty?",
      options: ["High risk asset", "Safe haven asset", "Speculative asset", "Worthless asset"],
      correctAnswer: 1,
      explanation: "Gold is considered a safe haven asset that investors turn to during times of economic uncertainty.",
    },
    {
      question: "What is the relationship between gold and the US dollar?",
      options: ["Direct correlation", "Inverse relationship", "No relationship", "Random relationship"],
      correctAnswer: 1,
      explanation:
        "Gold and the US dollar typically have an inverse relationship - when one rises, the other tends to fall.",
    },
    {
      question: "What symbol represents gold in Forex?",
      options: ["GOLD/USD", "XAU/USD", "AU/USD", "GLD/USD"],
      correctAnswer: 1,
      explanation: "Gold is represented as XAU/USD in Forex trading, where XAU stands for one troy ounce of gold.",
    },
    {
      question: "Which factor does NOT typically affect gold prices?",
      options: ["Interest rates", "Inflation", "Weather patterns", "Geopolitical events"],
      correctAnswer: 2,
      explanation:
        "While interest rates, inflation, and geopolitical events affect gold, weather patterns typically do not.",
    },
  ]

  return <Quiz questions={questions} />
}
