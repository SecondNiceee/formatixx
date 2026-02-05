import { Quiz } from "@/components/learning/quiz"

export function WhenToTradeBinaryQuiz() {
  const questions = [
    {
      question: "When is the Binary Options market open?",
      options: ["24 hours a day, 5 days a week", "9 AM to 5 PM only", "Only on weekends"],
      correctAnswer: 0,
      explanation:
        "The binary options market operates 24 hours a day, 5 days a week, from Sunday evening to Friday afternoon.",
    },
    {
      question: "Which trading session has the highest volume?",
      options: ["Asian session", "London session", "New York session"],
      correctAnswer: 1,
      explanation:
        "The London session, especially during its overlap with New York (8 am to 12 pm ET), has the highest trading volume.",
    },
    {
      question: "When do major market overlaps occur?",
      options: [
        "When Asian and European markets are open",
        "When European and US markets overlap",
        "During weekends",
      ],
      correctAnswer: 1,
      explanation:
        "The overlap between European (London) and US (New York) markets from 8 am to 12 pm ET is the most active trading period.",
    },
  ]

  return <Quiz questions={questions} />
}
