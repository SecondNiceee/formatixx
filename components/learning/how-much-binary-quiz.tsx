import { Quiz } from "@/components/learning/quiz"

export function HowMuchBinaryQuiz() {
  const questions = [
    {
      question: "How much is normal to make in interest per day in Binary Options?",
      options: ["1-3%", "5-10%", "30-50%"],
      correctAnswer: 0,
      explanation:
        "Skilled day traders typically make around 1-3% profit per day, which is a realistic and sustainable target.",
    },
    {
      question: "What's the recommended approach for beginners?",
      options: ["Start with large investments", "Start small and learn gradually", "Invest all savings immediately"],
      correctAnswer: 1,
      explanation:
        "Starting small allows you to learn the fundamentals without risking too much capital while building your skills.",
    },
    {
      question: "Which is more important for long-term success?",
      options: [
        "Making quick profits",
        "Consistent strategy and risk management",
        "Following market rumors",
      ],
      correctAnswer: 1,
      explanation:
        "Consistent strategy and proper risk management are the foundations of long-term trading success, not quick gains or rumors.",
    },
  ]

  return <Quiz questions={questions} />
}
