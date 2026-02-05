"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react"

interface TradingStylesQuizProps {
  onBack: () => void
}

const quizQuestions = [
  {
    question: "Which trading style involves holding positions for days to weeks?",
    options: ["Scalping", "Day Trading", "Swing Trading", "Position Trading"],
    correctAnswer: 2,
    explanation:
      "Swing Trading involves holding positions for days to weeks, targeting 100-500 pips per trade on 4-hour to daily charts.",
  },
  {
    question: "What is the main characteristic of scalping?",
    options: [
      "Holding trades for months",
      "Quick trades lasting seconds to minutes",
      "Trading only once a week",
      "Never using stop losses",
    ],
    correctAnswer: 1,
    explanation:
      "Scalping involves very quick trades that last from seconds to a few minutes, targeting small profits of 5-20 pips.",
  },
  {
    question: "Which trading style is most suitable for someone with a full-time job?",
    options: ["Scalping", "Day Trading", "Swing or Position Trading", "All styles equally"],
    correctAnswer: 2,
    explanation:
      "Swing or Position Trading requires less time monitoring markets, making it ideal for part-time traders with other commitments.",
  },
]

export function TradingStylesQuiz({ onBack }: TradingStylesQuizProps) {
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
                <Button onClick={handleRestart} className="flex-1 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50">
                  Retake Quiz
                </Button>
                <Button onClick={onBack} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
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
