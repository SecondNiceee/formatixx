import { Quiz } from "@/components/learning/quiz"

export function SupportAndResistanceQuiz() {
  const questions = [
    {
      question: "What is a support level?",
      options: [
        "A price ceiling",
        "A price floor where buying interest is strong",
        "A random price level",
        "The highest price ever",
      ],
      correctAnswer: 1,
      explanation: "Support is a price level where buying interest is strong enough to prevent further price declines.",
    },
    {
      question: "What happens when resistance is broken?",
      options: ["It disappears forever", "It often becomes support", "It doubles in strength", "Nothing happens"],
      correctAnswer: 1,
      explanation: "When price breaks above resistance, that level often becomes support in a role reversal.",
    },
    {
      question: "What makes a support/resistance level stronger?",
      options: ["It's a round number", "It's been tested multiple times", "Recent price level", "All of the above"],
      correctAnswer: 3,
      explanation:
        "Multiple factors strengthen support/resistance: multiple tests, round numbers, and psychological significance.",
    },
    {
      question: "Where should you place a stop loss when buying at support?",
      options: ["Above resistance", "Below support", "At support", "No stop needed"],
      correctAnswer: 1,
      explanation:
        "When buying at support, place your stop loss below the support level to limit losses if support breaks.",
    },
  ]

  return <Quiz questions={questions} />
}
