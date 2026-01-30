"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

export interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

interface QuizProps {
  questions: QuizQuestion[]
}

export function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [wrongAnswer, setWrongAnswer] = useState(false)

  const handleAnswerSelect = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    const correct = selectedAnswer === questions[currentQuestion].correctAnswer
    setIsCorrect(correct)
    setShowResult(true)

    if (!correct) {
      setWrongAnswer(true)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setIsCorrect(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setIsCorrect(false)
    setQuizCompleted(false)
    setWrongAnswer(false)
  }

  const question = questions[currentQuestion]

  if (wrongAnswer) {
    return (
      <Card className="border-2 border-red-500/50 bg-[#1a0f2e]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl">
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <XCircle className="w-16 h-16 text-red-500 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-2">
            Oops, <span className="text-red-500">wrong</span> answer!
          </h3>
          <p className="text-red-400 mt-4 mb-8">
            To complete this lesson you need to answer all {questions.length} questions correctly.
          </p>
          <Button
            onClick={handleRestart}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Restart
          </Button>
        </div>
      </Card>
    )
  }

  if (quizCompleted) {
    return (
      <Card className="border-2 border-green-500/50 bg-[#1a0f2e]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl">
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-2">Congratulations!</h3>
          <p className="text-green-400 mt-4 mb-8">You have successfully completed this lesson!</p>
          <Button
            onClick={handleRestart}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Take Again
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl">
      <div className="flex gap-2 mb-6">
        {questions.map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors",
              index < currentQuestion ? "bg-green-500" : index === currentQuestion ? "bg-purple-500" : "bg-white/20",
            )}
          />
        ))}
      </div>

      <div className="mb-6">
        <p className="text-white/60 text-sm mb-2">
          Question {currentQuestion + 1}/{questions.length}
        </p>
        <h3 className="text-xl font-semibold text-white">{question.question}</h3>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const label = String.fromCharCode(65 + index) // A, B, C, D
          const isSelected = selectedAnswer === index
          const isCorrectAnswer = index === question.correctAnswer
          
          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              type="button"
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left cursor-pointer select-none",
                "active:scale-[0.98]",
                // Default state
                !isSelected && !showResult && "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10",
                // Selected state (before submit)
                isSelected && !showResult && "border-purple-500 bg-purple-500/30 shadow-lg shadow-purple-500/20 scale-[1.01]",
                // After submit - correct answer
                showResult && isCorrectAnswer && "border-green-500 bg-green-500/30 shadow-lg shadow-green-500/20",
                // After submit - wrong selected answer
                showResult && isSelected && !isCorrectAnswer && "border-red-500 bg-red-500/30 shadow-lg shadow-red-500/20",
                // Disabled state
                showResult && "cursor-default"
              )}
            >
              <span
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-200",
                  // Default state
                  !isSelected && !showResult && "bg-white/10 text-white",
                  // Selected state (before submit)
                  isSelected && !showResult && "bg-purple-500 text-white scale-110",
                  // After submit - correct answer
                  showResult && isCorrectAnswer && "bg-green-500 text-white",
                  // After submit - wrong selected answer
                  showResult && isSelected && !isCorrectAnswer && "bg-red-500 text-white",
                )}
              >
                {label}
              </span>
              <span className={cn(
                "text-white transition-all duration-200",
                isSelected && !showResult && "font-medium"
              )}>{option}</span>
            </button>
          )
        })}
      </div>

      {showResult && question.explanation && (
        <div className="mb-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <p className="text-blue-300 text-sm leading-relaxed">{question.explanation}</p>
        </div>
      )}

      {!showResult ? (
        <Button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="w-full bg-[#3a2a5c] hover:bg-[#4a3a6c] text-white py-3 rounded-xl font-semibold disabled:opacity-50"
        >
          Check Answer
        </Button>
      ) : (
        <Button
          onClick={handleNext}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold"
        >
          {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Lesson"}
        </Button>
      )}
    </Card>
  )
}
