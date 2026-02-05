import { Quiz } from "@/components/learning/quiz"

export function VolumeIndicatorQuiz() {
  const questions = [
    {
      question: "What does high volume during a price increase typically indicate?",
      options: [
        "Weak buying interest",
        "Strong confirmation of the uptrend",
        "Imminent price reversal",
        "Market manipulation",
      ],
      correctAnswer: 1,
      explanation:
        "High volume during a price increase confirms strong buying interest and validates the uptrend's strength.",
    },
    {
      question: "When should you be cautious about a breakout?",
      options: [
        "When it occurs with high volume",
        "When it occurs with low volume",
        "When volume is increasing",
        "Volume doesn't matter for breakouts",
      ],
      correctAnswer: 1,
      explanation:
        "Low volume breakouts often fail because they lack the conviction of market participants to sustain the move.",
    },
    {
      question: "What does 'climax volume' often signal?",
      options: [
        "Continuation of the current trend",
        "Good time to add to position",
        "Potential exhaustion and reversal",
        "Market stability",
      ],
      correctAnswer: 2,
      explanation:
        "Climax volume often indicates exhaustion of the current trend and potential reversal as extreme participation peaks.",
    },
  ]

  return <Quiz questions={questions} />
}
