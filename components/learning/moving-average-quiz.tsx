import { Quiz } from "@/components/learning/quiz"

export function MovingAverageQuiz() {
  const questions = [
    {
      question: "What does it mean when price is trading above the moving average?",
      options: ["The trend is bearish", "The trend is neutral", "The trend is bullish", "The market is ranging"],
      correctAnswer: 2,
      explanation:
        "When price trades above the moving average, it indicates bullish momentum and an uptrend in the market.",
    },
    {
      question: "What is a 'Golden Cross'?",
      options: [
        "When price crosses above the MA",
        "When a short-term MA crosses above a long-term MA",
        "When a short-term MA crosses below a long-term MA",
        "When two MAs are parallel",
      ],
      correctAnswer: 1,
      explanation:
        "A Golden Cross occurs when a short-term moving average crosses above a long-term moving average, signaling potential bullish momentum.",
    },
    {
      question: "Which moving average is more responsive to recent price changes?",
      options: [
        "Simple Moving Average (SMA)",
        "Exponential Moving Average (EMA)",
        "Both are equally responsive",
        "Neither responds to price changes",
      ],
      correctAnswer: 1,
      explanation:
        "The Exponential Moving Average (EMA) gives more weight to recent prices, making it more responsive to current price changes than the SMA.",
    },
  ]

  return <Quiz questions={questions} />
}
