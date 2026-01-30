import { Quiz } from "@/components/learning/quiz"

export function WhyTradeBinaryQuiz() {
  const questions = [
    {
      question: "When is it possible to trade currencies?",
      options: ["Round the clock", "9:00 - 17:00", "9:00 - 18:00"],
      correctAnswer: 0,
      explanation:
        "Binary Options trading is available round the clock, allowing you to trade at any time that suits your schedule.",
    },
    {
      question: "Currency fluctuations can be used to:",
      options: ["Incur losses", "Make a profit", "Wait"],
      correctAnswer: 1,
      explanation:
        "Currency fluctuations create opportunities to make profits by correctly predicting price movements.",
    },
    {
      question: "What is the recommended trading amount in Binary Options?",
      options: ["500 USD", "250 USD", "100 USD"],
      correctAnswer: 1,
      explanation:
        "Starting with $250 is recommended as it provides enough capital to manage trades while keeping risk manageable.",
    },
  ]

  return <Quiz questions={questions} />
}
