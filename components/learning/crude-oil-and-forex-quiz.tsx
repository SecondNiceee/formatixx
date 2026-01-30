import { Quiz } from "@/components/learning/quiz"

export function CrudeOilAndForexQuiz() {
  const questions = [
    {
      question: "Which currency is strongly influenced by oil prices?",
      options: ["EUR", "CAD", "CHF", "AUD"],
      correctAnswer: 1,
      explanation: "The Canadian dollar (CAD) is strongly influenced by oil prices as Canada is a major oil exporter.",
    },
    {
      question: "What happens to oil-exporting currencies when oil prices rise?",
      options: ["They weaken", "They strengthen", "No effect", "They become volatile"],
      correctAnswer: 1,
      explanation:
        "Oil-exporting countries benefit from higher oil prices, which typically strengthens their currencies.",
    },
    {
      question: "Which pair shows an inverse relationship with oil prices?",
      options: ["EUR/USD", "GBP/USD", "USD/CAD", "AUD/USD"],
      correctAnswer: 2,
      explanation: "USD/CAD typically moves inversely to oil prices - when oil rises, USD/CAD often falls.",
    },
    {
      question: "Which organization's decisions impact oil prices significantly?",
      options: ["IMF", "World Bank", "OPEC", "UN"],
      correctAnswer: 2,
      explanation:
        "OPEC (Organization of Petroleum Exporting Countries) decisions on production significantly impact oil prices.",
    },
  ]

  return <Quiz questions={questions} />
}
