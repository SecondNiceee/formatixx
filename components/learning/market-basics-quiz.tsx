"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react"
import Link from "next/link"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    id: 1,
    question: "What typically happens to a currency when its country releases strong economic data?",
    options: ["The currency weakens", "The currency strengthens", "Nothing happens"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Which institution's decisions are among the most powerful market movers?",
    options: ["Stock exchanges", "Central banks", "Trading platforms"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Why are currencies always quoted in pairs in binary options?",
    options: [
      "To make trading more complex",
      "Because you're always buying one currency and selling another",
      "It's just a tradition",
    ],
    correctAnswer: 1,
  },
]

export function MarketBasicsQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [completed, setCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    const correct = selectedAnswer === questions[currentQuestion].correctAnswer
    setIsCorrect(correct)
    setShowResult(true)

    if (!correct) {
      setTimeout(() => {
        setCurrentQuestion(0)
        setSelectedAnswer(null)
        setShowResult(false)
      }, 2000)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setCompleted(false)
  }

  if (completed) {
    return (
      <Card className="border-2 border-green-500/50 bg-[#1a0f2e]/60 backdrop-blur-sm p-8 rounded-2xl text-center">
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Congratulations!</h3>
        <p className="text-white/60 mb-6">You have successfully completed this lesson!</p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={handleRestart}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Restart Quiz
          </Button>
          <Link href="/learning">
            <Button className="bg-gradient-to-r from-[#5F0BE8] to-[#8B5CF6] hover:opacity-90">Back to Learning</Button>
          </Link>
        </div>
      </Card>
    )
  }

  return (
    <Card className="border border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <span className="text-white/60 text-sm">
          Question {currentQuestion + 1}/{questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index < currentQuestion ? "bg-green-500" : index === currentQuestion ? "bg-purple-500" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-4">{questions[currentQuestion].question}</h3>

      <div className="space-y-3 mb-6">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={showResult}
            className={`w-full p-4 rounded-xl text-left transition-all ${
              showResult
                ? index === questions[currentQuestion].correctAnswer
                  ? "bg-green-500/20 border-2 border-green-500"
                  : selectedAnswer === index
                    ? "bg-red-500/20 border-2 border-red-500"
                    : "bg-white/5 border border-white/10"
                : selectedAnswer === index
                  ? "bg-purple-500/20 border-2 border-purple-500"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
            }`}
          >
            <span className="text-white">{option}</span>
          </button>
        ))}
      </div>

      {showResult && (
        <div className={`flex items-center gap-2 mb-4 ${isCorrect ? "text-green-500" : "text-red-500"}`}>
          {isCorrect ? (
            <>
              <CheckCircle className="w-5 h-5" />
              <span>Correct! Well done!</span>
            </>
          ) : (
            <>
              <XCircle className="w-5 h-5" />
              <span>Incorrect. Restarting quiz...</span>
            </>
          )}
        </div>
      )}

      <div className="flex justify-end">
        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="bg-gradient-to-r from-[#5F0BE8] to-[#8B5CF6] hover:opacity-90"
          >
            Submit Answer
          </Button>
        ) : isCorrect ? (
          <Button onClick={handleNext} className="bg-gradient-to-r from-[#5F0BE8] to-[#8B5CF6] hover:opacity-90">
            {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Lesson"}
          </Button>
        ) : null}
      </div>
    </Card>
  )
}
