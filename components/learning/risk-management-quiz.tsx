"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react"

interface RiskManagementQuizProps {
  onBack: () => void
}

const quizQuestions = [
  {
    question: "What is the golden rule of risk management?",
    options: [
      "Never risk more than 5% per trade",
      "Never risk more than 1-2% of your account on a single trade",
      "Always risk at least 10% to make significant profits",
      "Risk percentage doesn't matter",
    ],
    correctAnswer: 1,
    explanation:
      "The golden rule is to never risk more than 1-2% of your account on a single trade. This protects your capital and allows you to survive losing streaks.",
  },
  {
    question: "What is the minimum recommended risk-reward ratio?",
    options: ["1:1", "1:2", "2:1", "5:1"],
    correctAnswer: 1,
    explanation:
      "A minimum risk-reward ratio of 1:2 (risk $100 to make $200) ensures that your winning trades outweigh losing trades over time.",
  },
  {
    question: "With a $10,000 account and 1% risk, what is your maximum loss per trade?",
    options: ["$10", "$100", "$1,000", "$2,000"],
    correctAnswer: 1,
    explanation:
      "1% of $10,000 is $100, so your maximum loss per trade should be $100 when risking 1% of your account.",
  },
]

export function RiskManagementQuiz({ onBack }: RiskManagementQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return

    setSelectedAnswer(answerIndex)
    setShowExplanation(true)

    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setQuizComplete(false)
  }

  if (quizComplete) {
    const percentage = (score / quizQuestions.length) * 100

    return (
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]" />

        <main className="relative z-10 px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
          <div className="mx-auto max-w-2xl">
            <Button onClick={onBack} variant="ghost" className="mb-6 text-white/60 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Lesson
            </Button>

            <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/40 backdrop-blur-xl p-8 rounded-2xl text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Quiz Complete!</h2>
              <div className="text-6xl font-bold text-purple-500 mb-4">
                {score}/{quizQuestions.length}
              </div>
              <p className="text-xl text-white/80 mb-8">You scored {percentage.toFixed(0)}%</p>

              {percentage >= 70 ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <p className="text-white">Great job! You've mastered this lesson.</p>
                </div>
              ) : (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-6">
                  <p className="text-white">Keep practicing to improve your understanding.</p>
                </div>
              )}

              <div className="flex gap-4">
                <Button onClick={handleRestart} variant="outline" className="flex-1 bg-transparent">
                  Retake Quiz
                </Button>
                <Button onClick={onBack} className="flex-1 bg-purple-600 hover:bg-purple-700">
                  Back to Lesson
                </Button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]
  const isCorrect = selectedAnswer === question.correctAnswer

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]" />

      <main className="relative z-10 px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="mx-auto max-w-2xl">
          <Button onClick={onBack} variant="ghost" className="mb-6 text-white/60 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lesson
          </Button>

          <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/40 backdrop-blur-xl p-8 rounded-2xl">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white/60">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
                <span className="text-white/60">
                  Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">{question.question}</h2>

            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => {
                let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all "

                if (showExplanation) {
                  if (index === question.correctAnswer) {
                    buttonClass += "border-green-500 bg-green-500/10 text-white"
                  } else if (index === selectedAnswer) {
                    buttonClass += "border-red-500 bg-red-500/10 text-white"
                  } else {
                    buttonClass += "border-white/10 bg-white/5 text-white/60"
                  }
                } else {
                  buttonClass +=
                    index === selectedAnswer
                      ? "border-purple-500 bg-purple-500/10 text-white"
                      : "border-white/10 bg-white/5 text-white hover:border-purple-500/50 hover:bg-purple-500/5"
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={buttonClass}
                    disabled={showExplanation}
                  >
                    <div className="flex items-center gap-3">
                      {showExplanation && index === question.correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      )}
                      {showExplanation && index === selectedAnswer && index !== question.correctAnswer && (
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      )}
                      <span>{option}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            {showExplanation && (
              <div
                className={`p-4 rounded-lg border-2 mb-6 ${
                  isCorrect ? "border-green-500/30 bg-green-500/10" : "border-red-500/30 bg-red-500/10"
                }`}
              >
                <p className="text-white font-semibold mb-2">{isCorrect ? "Correct!" : "Incorrect"}</p>
                <p className="text-white/80">{question.explanation}</p>
              </div>
            )}

            {showExplanation && (
              <Button onClick={handleNext} className="w-full bg-purple-600 hover:bg-purple-700">
                {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "Complete Quiz"}
              </Button>
            )}
          </Card>
        </div>
      </main>
    </div>
  )
}
