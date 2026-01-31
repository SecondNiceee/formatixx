import { Quiz } from "@/components/learning/quiz"

export function FromSimQuiz() {
  const questions = [
    {
      question: "Which trading platform is considered the most popular worldwide for binary options trading?",
      options: ["TradingView", "Quotex", "cTrader", "NinjaTrader"],
      correctAnswer: 1,
      explanation:
        "Quotex is the most popular binary options trading platform worldwide, known for its reliability and extensive technical indicators.",
    },
    {
      question: "What is the most important factor when choosing a binary options broker?",
      options: [
        "The size of welcome bonuses",
        "Regulation by reputable financial authorities",
        "The number of available currency pairs",
        "Social media follower count",
      ],
      correctAnswer: 1,
      explanation:
        "Regulation by reputable authorities (like FCA, ASIC, or CySEC) is the most important factor. It ensures your funds are protected, and the broker operates with transparency and accountability.",
    },
    {
      question: "What should you do before depositing real money on a new trading platform?",
      options: [
        "Immediately deposit the maximum amount",
        "Skip the demo and start trading live",
        "Practice on their demo account for 1-2 weeks",
        "Only read the promotional materials",
      ],
      correctAnswer: 2,
      explanation:
        "Even if you've practiced on other simulators, you should spend 1-2 weeks on the new platform's demo account to familiarize yourself with its unique features, interface, and order execution process.",
    },
  ]

  return <Quiz questions={questions} />
}
