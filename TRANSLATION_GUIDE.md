# Translation Guide for Learning Sections

## Overview
This guide explains how to properly translate a complete learning section with all its content, quizzes, buttons, error messages, and navigation elements across all supported languages (English, Spanish, Portuguese, Arabic).

## Languages Supported
- **en** - English
- **es** - Spanish  
- **pt** - Portuguese
- **ar** - Arabic

---

## Step 1: Add Translations to `lib/i18n/translations.ts`

### Structure for Each Lesson
For each lesson section in every language, add this structure under `t.learning.lessons`:

```typescript
lessonNameHere: {
  title: "Translated Title",
  sections: {
    // Main content sections with translated text
    intro: "Introduction title",
    content1: "First content paragraph",
    content2: "Second content paragraph",
    // ... add all content fields
  },
  quiz: {
    // All quiz questions and options
    q1: "Question 1 text",
    q1o1: "Option A for question 1",
    q1o2: "Option B for question 1", 
    q1o3: "Option C for question 1",
    q1a: "Explanation for question 1",
    // Repeat for q2, q3, etc.
  }
}
```

### Add Common UI Text Translations
In each language section, add these common buttons/messages:

```typescript
// Add these to each language's main object (en, es, pt, ar)
common: {
  backToLearning: "Back to Learning",
  testYourKnowledge: "Test Your Knowledge",
  checkAnswer: "Check Answer",
  nextQuestion: "Next Question",
  completeLesson: "Complete Lesson",
  nextLesson: "Next:",
  wrongAnswer: "Oops, wrong answer!",
  wrongAnswerDesc: "To complete this lesson you need to answer all",
  questionsCorrectly: "questions correctly.",
  restart: "Restart",
  congratulations: "Congratulations!",
  completedLesson: "You have successfully completed this lesson!",
  takeAgain: "Take Again",
  category: "Category Name"
}
```

---

## Step 2: Update Quiz Component (`components/learning/quiz.tsx`)

Add language support to the Quiz component:

```typescript
"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
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
  const { t } = useLanguage()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [wrongAnswer, setWrongAnswer] = useState(false)

  // ... rest of component logic ...

  if (wrongAnswer) {
    return (
      <Card className="border-2 border-red-500/50 bg-[#1a0f2e]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl">
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <XCircle className="w-16 h-16 text-red-500 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-2">
            {t.common.wrongAnswer}
          </h3>
          <p className="text-red-400 mt-4 mb-8">
            {t.common.wrongAnswerDesc} {questions.length} {t.common.questionsCorrectly}
          </p>
          <Button
            onClick={handleRestart}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            {t.common.restart}
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
          <h3 className="text-2xl font-bold text-white mb-2">{t.common.congratulations}</h3>
          <p className="text-green-400 mt-4 mb-8">{t.common.completedLesson}</p>
          <Button
            onClick={handleRestart}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            {t.common.takeAgain}
          </Button>
        </div>
      </Card>
    )
  }

  // In the main quiz card, update button text:
  return (
    <Card className="...">
      {/* ... existing code ... */}
      
      {!showResult ? (
        <Button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="w-full bg-[#3a2a5c] hover:bg-[#4a3a6c] text-white py-3 rounded-xl font-semibold disabled:opacity-50"
        >
          {t.common.checkAnswer}
        </Button>
      ) : (
        <Button
          onClick={handleNext}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold"
        >
          {currentQuestion < questions.length - 1 ? t.common.nextQuestion : t.common.completeLesson}
        </Button>
      )}
    </Card>
  )
}
```

---

## Step 3: Update Lesson Layout (`components/learning/lesson-layout.tsx`)

Add language support to navigation and headers:

```typescript
"use client"

import type React from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/sections/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, ArrowLeft, ArrowRight } from "lucide-react"

interface LessonLayoutProps {
  title: string
  category: string
  description?: string
  nextLesson?: {
    title: string
    href: string
  }
  ContentComponent: React.ComponentType
  QuizComponent: React.ComponentType
}

export function LessonLayout({
  title,
  category,
  description,
  nextLesson,
  ContentComponent,
  QuizComponent,
}: LessonLayoutProps) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* ... background code ... */}

      <main className="relative z-10 px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <Link href="/learning">
            <Button variant="ghost" className="mb-6 text-white/60 hover:text-white hover:bg-white/5">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.common.backToLearning}
            </Button>
          </Link>

          {/* ... title card ... */}

          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-purple-500" />
              </div>
              <h2 className="text-xl font-bold text-white">{t.common.testYourKnowledge}</h2>
            </div>
            <QuizComponent />
          </div>

          {nextLesson && (
            <div className="mt-8">
              <Link href={nextLesson.href}>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                  {t.common.nextLesson} {nextLesson.title}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
```

---

## Step 4: Create Content Component (`components/learning/[lesson-name]-content.tsx`)

Template structure for lesson content:

```typescript
"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export function LessonNameContent() {
  const { t } = useLanguage()
  const s = t.learning.lessons.lessonNameHere.sections

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">{s.intro}</h2>
        <p className="text-white/80 leading-relaxed mb-4">{s.content1}</p>
        <p className="text-white/80 leading-relaxed">{s.content2}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">{s.sectionTitle}</h3>
        <p className="text-white/80 leading-relaxed">{s.sectionContent}</p>
      </section>

      {/* Add more sections as needed */}
    </div>
  )
}
```

---

## Step 5: Create Quiz Component (`components/learning/[lesson-name]-quiz.tsx`)

Template structure for lesson quiz:

```typescript
"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Quiz } from "@/components/learning/quiz"

export function LessonNameQuiz() {
  const { t } = useLanguage()
  const q = t.learning.lessons.lessonNameHere.quiz

  const questions = [
    {
      question: q.q1,
      options: [q.q1o1, q.q1o2, q.q1o3],
      correctAnswer: 0, // Index of correct answer
      explanation: q.q1a,
    },
    {
      question: q.q2,
      options: [q.q2o1, q.q2o2, q.q2o3],
      correctAnswer: 1,
      explanation: q.q2a,
    },
    // Add more questions as needed
  ]

  return <Quiz questions={questions} />
}
```

---

## Step 6: Update Lesson Page (`app/learning/[lesson-route]/page.tsx`)

Create the main lesson page:

```typescript
import { LessonLayout } from "@/components/learning/lesson-layout"
import { LessonNameContent } from "@/components/learning/[lesson-name]-content"
import { LessonNameQuiz } from "@/components/learning/[lesson-name]-quiz"

export const metadata = {
  title: "Lesson Title | FoMatrix Learning",
  description: "Learn about the lesson topic",
}

export default function LessonPage() {
  return (
    <LessonLayout
      title="Lesson Title"
      category="Section Category"
      description="Brief lesson description"
      nextLesson={{
        title: "Next Lesson Title",
        href: "/learning/next-lesson-route",
      }}
      ContentComponent={LessonNameContent}
      QuizComponent={LessonNameQuiz}
    />
  )
}
```

---

## Step 7: Add Common Lesson Title Translations

Add translated lesson titles to `t.common` for reuse on the learning hub page:

```typescript
// In lib/i18n/translations.ts, add to each language's common section:
common: {
  // ... existing common translations ...
  
  // Lesson titles for Getting Started section
  whyTradeBinary: "Why Trade Binary Options?",
  howMuchBinary: "How Much Can You Make Trading?",
  whenToTrade: "When to Trade",
  socialTrading: "Social Trading",
  copyTrading: "Copy Trading",
  
  // Lesson titles for other sections
  basics: "Basics",
  language: "The Language of Binary Options",
  fundamentals: "Following the Fundamentals",
  // ... add more as needed
}
```

This allows you to translate lesson titles once and reuse them everywhere.

## Step 8: Add Navigation Links to Learning Hub

Update `app/learning/page.tsx` to use translated lesson titles:

```typescript
"use client"

import { useLanguage } from "@/lib/i18n/language-context"

const getLearningTopics = (t: any) => [
  {
    id: 1,
    title: t.learning.section1.title,
    subtitle: t.learning.section1.subtitle,
    lessons: [
      { title: t.common.whyTradeBinary, href: "/learning/why-trade-binary" },
      { title: t.common.howMuchBinary, href: "/learning/how-much-binary" },
      { title: t.common.whenToTrade, href: "/learning/when-to-trade-binary" },
      { title: `${t.common.socialTrading} (${t.common.copyTrading})`, href: "/learning/social-trading-binary" },
    ],
  },
  // ... other sections
]

export default function LearningPage() {
  const { t } = useLanguage()
  const topics = getLearningTopics(t)
  // ... render topics with translated titles
}
```

**Important**: Always use the `getLearningTopics(t)` function to ensure all titles are translated dynamically based on the current language selection.

---

## Translation Checklist - Complete

For each new lesson section, ensure you've translated:

### 1. Lesson Structure & Metadata
- [ ] **Lesson title** (add to `t.common.lessonName`)
- [ ] **Lesson subtitle** (if applicable)
- [ ] **Section category** (add to `t.common.categoryName`)
- [ ] **Metadata description** (in component files)

### 2. Content Component (`[lesson-name]-content.tsx`)
- [ ] **Main heading/intro** (`s.intro`)
- [ ] **All body content** (`s.content1`, `s.content2`, etc.)
- [ ] **Section headings** (`s.sectionTitle`, `s.subheading`, etc.)
- [ ] **Section descriptions** (`s.sectionContent`, etc.)
- [ ] **Call-out boxes** (`s.callout`, `s.highlight`, etc.)
- [ ] **Lists items** (`s.itemsList`, `s.benefit1`, `s.benefit2`, etc.)
- [ ] **Conclusion text** (any closing paragraphs)

### 3. Quiz Component (`[lesson-name]-quiz.tsx`)
- [ ] **Question text** (`q.q1`, `q.q2`, etc.)
- [ ] **All answer options** (`q.q1o1`, `q.q1o2`, `q.q1o3`, etc.)
- [ ] **Explanations** (`q.q1a`, `q.q2a`, etc.)

### 4. Common UI Elements
- [ ] **"Check Answer"** button
- [ ] **"Next Question"** button
- [ ] **"Complete Lesson"** button
- [ ] **"Question 1/2"** counter text
- [ ] **Error messages** ("Oops, wrong answer!")
- [ ] **Success messages** ("Congratulations!")
- [ ] **"Back to Learning"** link
- [ ] **"Test Your Knowledge"** header
- [ ] **"Next: [Lesson Name]"** navigation button

### 5. Learning Hub Page (`app/learning/page.tsx`)
- [ ] **Section titles** (`t.learning.section1.title`)
- [ ] **Section subtitles** (`t.learning.section1.subtitle`)
- [ ] **Lesson titles** in the lesson list (use `t.common.lessonName`)
- [ ] **Lesson with text in parentheses** (e.g., "Social Trading (Copy Trading)")

### 6. Translations Added to All 4 Languages
- [ ] **English** (en) - all keys added
- [ ] **Spanish** (es) - all keys added and translated
- [ ] **Portuguese** (pt) - all keys added and translated
- [ ] **Arabic** (ar) - all keys added and translated

### 7. Components Updated
- [ ] **Quiz component** - uses `useLanguage()` hook
- [ ] **LessonLayout component** - uses `useLanguage()` hook
- [ ] **Content component** - uses `useLanguage()` hook
- [ ] **Learning hub page** - uses `getLearningTopics(t)` function

### 8. Testing
- [ ] Language switcher changes all text in content
- [ ] Language switcher changes all quiz text
- [ ] Language switcher changes all buttons
- [ ] Language switcher changes lesson titles on hub page
- [ ] Language switcher changes "(Copy Trading)" text
- [ ] Error messages display in correct language
- [ ] Success messages display in correct language
- [ ] Next button shows correct next lesson name
- [ ] All sections translate properly when language changes

---

## Key Points to Remember

1. **Always use `useLanguage()` hook** in client components to access translations
2. **Never hardcode text** - always reference `t` object
3. **Add common UI text** (buttons, error messages) to `t.common` once, not per lesson
4. **Test all languages** when adding new content
5. **Keep consistent structure** across all lessons for maintainability
6. **Use descriptive translation keys** that explain the content's purpose

---

## Quick Reference: Translation Key Structure

```
t.learning.lessons.{lessonName}.sections.{fieldName}
t.learning.lessons.{lessonName}.quiz.{questionKey}
t.common.{buttonOrMessageName}
```

Example:
```typescript
t.learning.lessons.whyTradeBinary.sections.intro
t.learning.lessons.whyTradeBinary.quiz.q1
t.common.checkAnswer
```
