import { Quiz } from "@/components/learning/quiz"

export function RSIQuiz() {
  const questions = [
    {
      question: "What does an RSI reading above 70 typically indicate?",
      options: [
        "The asset is oversold",
        "The asset is overbought and may correct",
        "The trend is neutral",
        "It's the best time to buy",
      ],
      correctAnswer: 1,
      explanation:
        "An RSI reading above 70 indicates the asset is overbought, suggesting it may be due for a price correction or pullback.",
    },
    {
      question: "What is bullish divergence?",
      options: [
        "Price makes higher highs, RSI makes lower highs",
        "Price makes lower lows, RSI makes higher lows",
        "Both price and RSI move together",
        "RSI stays above 70",
      ],
      correctAnswer: 1,
      explanation:
        "Bullish divergence occurs when price makes lower lows while RSI makes higher lows, signaling potential upward reversal.",
    },
    {
      question: "What does the RSI centerline (50) represent?",
      options: [
        "Overbought condition",
        "Oversold condition",
        "Support/resistance and trend indicator",
        "Market manipulation",
      ],
      correctAnswer: 2,
      explanation:
        "The RSI centerline at 50 acts as a support/resistance level and helps identify the overall trend direction.",
    },
  ]

  return <Quiz questions={questions} />
}
