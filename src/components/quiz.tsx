'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { quizQuestions } from '@/lib/data'
import confetti from 'canvas-confetti'

const questions = quizQuestions

export function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const handleAnswer = (index: number) => {
        if (index === questions[currentQuestion].correct) {
            setScore(score + 1)
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#FF69B4', '#FFD700', '#ffffff']
            })
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowResult(true)
            if (score + (index === questions[currentQuestion].correct ? 1 : 0) === questions.length) {
                confetti({
                    particleCount: 300,
                    spread: 100,
                    origin: { y: 0.6 },
                    colors: ['#FF69B4', '#FFD700', '#ffffff']
                })
            }
        }
    }

    const resetQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowResult(false)
    }

    return (
        <section className="py-32 px-4 bg-background flex items-center justify-center min-h-[70vh] relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-2xl w-full relative z-10">
                <h2 className="text-3xl md:text-5xl font-light text-center mb-16 text-foreground tracking-widest uppercase">
                    How Well Do You <span className="font-bold text-primary">Know Us?</span>
                </h2>

                <AnimatePresence mode='wait'>
                    {!showResult ? (
                        <motion.div
                            key={currentQuestion}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                        >
                            <Card className="bg-card/50 backdrop-blur-xl border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                                <CardContent className="p-8 md:p-12 space-y-8">
                                    <div className="flex justify-between text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase">
                                        <span>Question {currentQuestion + 1} / {questions.length}</span>
                                        <span>Score: {score}</span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-serif text-foreground leading-snug">
                                        {questions[currentQuestion].question}
                                    </h3>

                                    <div className="grid grid-cols-1 gap-4 mt-8">
                                        {questions[currentQuestion].options.map((option, idx) => (
                                            <Button
                                                key={idx}
                                                onClick={() => handleAnswer(idx)}
                                                variant="ghost"
                                                className="h-auto py-5 px-6 text-lg border border-white/5 bg-white/5 hover:bg-primary/20 hover:text-primary-foreground hover:border-primary/50 text-foreground/80 justify-start transition-all duration-300 rounded-xl"
                                            >
                                                <span className="mr-4 opacity-50">{String.fromCharCode(65 + idx)}.</span> {option}
                                            </Button>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center space-y-8 p-12 bg-card/30 backdrop-blur-xl rounded-3xl border border-white/10"
                        >
                            <h3 className="text-4xl md:text-5xl font-serif text-foreground">
                                Score: {score}/{questions.length}
                            </h3>
                            <p className="text-xl text-muted-foreground font-light">
                                {score === questions.length ? "You know my heart perfectly! ❤️" : "Let's make more memories to remember! 😉"}
                            </p>
                            <Button
                                onClick={resetQuiz}
                                size="lg"
                                className="bg-white text-black hover:bg-gray-200 rounded-full px-10 py-6 text-lg tracking-wider uppercase font-bold"
                            >
                                Play Again
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
