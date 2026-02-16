"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/sections/header"
import { Card } from "@/components/ui/card"
import { ChevronRight, DollarSign, Rocket, BarChart3, TrendingUp, Shield, Trophy, Target } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { useProtectedRoute } from "@/hooks/use-protected-route"

// This function creates learning topics with translations
const getLearningTopics = (t: any) => [
  {
    id: 1,
    title: t.learning.section1.title || "Getting Started",
    subtitle: t.learning.section1.subtitle || "Your Trading Journey",
    icon: Rocket,
    lessons: [
      { title: t.common.whyTradeBinary, href: "/learning/why-trade-binary" },
      { title: t.common.howMuchBinary, href: "/learning/how-much-binary" },
      { title: t.common.whenToTrade, href: "/learning/when-to-trade-binary" },
      { title: `${t.common.socialTrading} (${t.common.copyTrading})`, href: "/learning/social-trading-binary" },
    ],
  },
  {
    id: 2,
    title: t.learning.section2.title || "The Money Makers",
    subtitle: t.learning.section2.subtitle || "What Moves Markets",
    icon: DollarSign,
    lessons: [
      { title: "Basics", href: "/learning/basics-binary" },
      { title: "The Language of Binary Options", href: "/learning/language-binary" },
      { title: "Following the Fundamentals", href: "/learning/fundamentals-binary" },
      { title: "Gold Prices and Binary Options", href: "/learning/gold-binary" },
      { title: "Investing in Stocks vs Binary Options", href: "/learning/stocks-vs-binary" },
      { title: "Crude Oil Prices and Binary Options", href: "/learning/crude-oil-binary" },
    ],
  },
  {
    id: 3,
    title: t.learning.section3.title || "Reading the Market",
    subtitle: t.learning.section3.subtitle || "Master the Charts",
    icon: BarChart3,
    lessons: [
      { title: "Navigating The Charts", href: "/learning/navigating-the-charts" },
      { title: "Bulls and Bears", href: "/learning/bulls-and-bears" },
      { title: "Understanding Trends", href: "/learning/understanding-trends" },
      { title: "Support And Resistance", href: "/learning/support-and-resistance" },
      { title: "Chart Patterns", href: "/learning/chart-patterns" },
      { title: "Candlestick Patterns", href: "/learning/candlestick-patterns" },
    ],
  },
  {
    id: 4,
    title: "Your Trading Toolkit",
    subtitle: "Essential Indicators",
    icon: TrendingUp,
    lessons: [
      { title: "Volume Indicator", href: "/learning/volume-indicator" },
      { title: "Moving Average", href: "/learning/moving-average" },
      { title: "Relative Strength Index", href: "/learning/rsi" },
    ],
  },
  {
    id: 5,
    title: "Winning Strategies",
    subtitle: "Trade Like a Pro",
    icon: Trophy,
    lessons: [
      { title: "Top Down Trading Strategy", href: "/learning/top-down-trading" },
      { title: "Example", href: "/learning/strategy-example" },
    ],
  },
  {
    id: 6,
    title: "Execute & Profit",
    subtitle: "Making Your Move",
    icon: Target,
    lessons: [
      { title: "Buying and Selling", href: "/learning/buying-and-selling" },
      { title: "Pick Your Trading Style", href: "/learning/pick-trading-style" },
    ],
  },
  {
    id: 7,
    title: "Protect Your Capital",
    subtitle: "Stay in the Game",
    icon: Shield,
    lessons: [{ title: "Risk Management", href: "/learning/risk-management" }],
  },
  {
    id: 8,
    title: "Level Up",
    subtitle: "Beyond the Basics",
    icon: BarChart3,
    lessons: [
      { title: "Smart Portfolios", href: "/learning/smart-portfolios" },
      { title: "Trading Cryptocurrencies", href: "/learning/trading-cryptocurrencies" },
      { title: "Are You Ready For Real Trading?", href: "/learning/ready-for-real-trading" },
      { title: "From Sim", href: "/learning/from-sim" },
    ],
  },
]

export default function LearningPage() {
  const { t } = useLanguage()
  // useProtectedRoute("Please login to access learning materials") // Temporarily disabled for public access

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]" />

      {/* Background chart images */}
      <div className="absolute inset-0 opacity-30">
        <Image src="/chart-bg-1.png" alt="" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 opacity-20">
        <Image src="/chart-bg-2.png" alt="" fill className="object-cover mix-blend-screen" />
      </div>

      <Header />

      {/* Main content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          {/* Page header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Learning Center</h1>
            <p className="text-white/60 text-lg">Master Binary Options trading step by step</p>
          </div>

          {/* Topics grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getLearningTopics(t).map((topic) => {
              const Icon = topic.icon
              return (
                <Card
                  key={topic.id}
                  className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/40 backdrop-blur-xl hover:border-[#5F0BE8]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(95,11,232,0.3)] p-6 rounded-2xl"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">{topic.title}</h2>
                      <p className="text-white/60 text-sm">{topic.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {topic.lessons.map((lesson, idx) => (
                      <Link
                        key={idx}
                        href={lesson.href}
                        className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                          lesson.comingSoon
                            ? "opacity-50 cursor-not-allowed hover:bg-white/5"
                            : "hover:bg-purple-600/10 group"
                        }`}
                        onClick={(e) => {
                          if (lesson.comingSoon) {
                            e.preventDefault()
                          }
                        }}
                      >
                        <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                          {idx + 1}. {lesson.title}
                        </span>
                        <div className="flex items-center gap-2">
                          {lesson.comingSoon && (
                            <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded">
                              Coming Soon
                            </span>
                          )}
                          <ChevronRight
                            className={`w-4 h-4 transition-all ${
                              lesson.comingSoon ? "text-white/30" : "text-purple-500 group-hover:translate-x-1"
                            }`}
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
