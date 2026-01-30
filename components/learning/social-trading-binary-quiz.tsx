import { Quiz } from "@/components/learning/quiz"

export function SocialTradingBinaryQuiz() {
  const questions = [
    {
      question: "What is social trading (copy trading)?",
      options: [
        "Copying trades from successful traders automatically",
        "Trading only on social media platforms",
        "Trading with friends only",
      ],
      correctAnswer: 0,
      explanation:
        "Social trading allows you to automatically copy trades from successful traders, learning from their strategies.",
    },
    {
      question: "What's the main benefit of copy trading for beginners?",
      options: [
        "Learning from experienced traders while earning",
        "Guaranteed profits with no risk",
        "No need to understand trading at all",
      ],
      correctAnswer: 0,
      explanation:
        "Copy trading allows beginners to learn from experienced traders while potentially earning profits, though it's not guaranteed.",
    },
    {
      question: "What should you check when choosing a trader to copy?",
      options: [
        "Only their total profit",
        "Their track record, risk management, and consistency",
        "How many followers they have",
      ],
      correctAnswer: 1,
      explanation:
        "When choosing a trader to copy, it's important to check their track record over time, risk management practices, and consistency - not just total profits.",
    },
  ]

  return <Quiz questions={questions} />
}
