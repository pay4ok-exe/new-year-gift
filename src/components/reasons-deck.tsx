'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'

import { reasons } from '@/lib/data'

export function ReasonsDeck() {
    const [index, setIndex] = useState(0)

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % reasons.length)
    }

    return (
        <section className="py-32 px-4 bg-background flex flex-col items-center justify-center min-h-[80vh] overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <h2 className="text-3xl md:text-5xl font-light text-center mb-16 text-foreground tracking-widest uppercase relative z-10">
                Why I <span className="text-primary font-serif italic normal-case">Love</span> You
            </h2>

            <div className="relative w-full max-w-sm aspect-[3/4]">
                <AnimatePresence mode='popLayout'>
                    <motion.div
                        key={index}
                        initial={{ scale: 0.9, opacity: 0, y: 50, rotate: -5 }}
                        animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
                        exit={{ scale: 1.1, opacity: 0, y: -50, rotate: 5 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                        onClick={nextCard}
                        className="absolute inset-0 cursor-pointer"
                        style={{ zIndex: 10 }}
                    >
                        <Card className="w-full h-full bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(255,105,180,0.2)] transition-all duration-500 rounded-3xl group">
                            <div className="absolute top-6 right-6 text-white/20 font-serif text-4xl">"</div>
                            <p className="text-2xl md:text-3xl font-serif text-foreground/90 leading-relaxed italic group-hover:scale-105 transition-transform duration-500">
                                {reasons[index]}
                            </p>
                            <div className="absolute bottom-6 text-indigo-200/40 text-xs tracking-[0.2em] uppercase">
                                Tap to Reveal Next
                            </div>
                        </Card>
                    </motion.div>
                </AnimatePresence>

                {/* Stack effect background cards */}
                <div className="absolute inset-0 translate-y-3 scale-95 bg-white/5 backdrop-blur-md rounded-3xl border border-white/5 -z-10 shadow-lg" />
                <div className="absolute inset-0 translate-y-6 scale-90 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/5 -z-20 shadow-lg" />
            </div>
        </section>
    )
}
