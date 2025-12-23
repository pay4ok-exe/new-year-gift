'use client'

import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

const milestones = [
    {
        date: 'The Beginning',
        title: 'First Date',
        description: 'The day my life changed forever. We sat at that coffee shop for hours.',
        emoji: '☕'
    },
    {
        date: 'Summer 2024',
        title: 'First Trip',
        description: 'Driving through the mountains, singing our favorite songs.',
        emoji: '🚗'
    },
    {
        date: 'Winter 2024',
        title: 'New Year',
        description: 'Watching fireworks and promising to be together forever.',
        emoji: '🎆'
    },
    {
        date: 'Today',
        title: 'Still Counting',
        description: 'Every day with you is a new favorite memory.',
        emoji: '♾️'
    }
]

export function Timeline() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    return (
        <section id="timeline" ref={containerRef} className="py-32 relative overflow-hidden bg-background text-foreground">
            {/* Central Line */}
            <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent origin-top transform -translate-x-1/2 opacity-50"
            />

            <div className="max-w-4xl mx-auto px-4 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-light text-center mb-24 text-foreground tracking-wide uppercase"
                >
                    Our <span className="text-primary font-bold">Story</span>
                </motion.h2>

                <div className="space-y-32">
                    {milestones.map((milestone, index) => (
                        <TimelineItem key={index} data={milestone} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function TimelineItem({ data, index }: { data: any, index: number }) {
    const isEven = index % 2 === 0

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8 md:gap-16`}
        >
            <div className="flex-1 text-right">
                {isEven && (
                    <div className="text-right">
                        <span className="text-primary text-sm font-bold tracking-widest uppercase block mb-3">{data.date}</span>
                        <h3 className="text-2xl font-serif mb-2 text-foreground">{data.title}</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">{data.description}</p>
                    </div>
                )}
            </div>

            <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-card border border-primary/30 rounded-full shadow-[0_0_20px_rgba(255,105,180,0.15)] group hover:scale-110 transition-transform duration-500">
                <span className="text-xl filter drop-shadow-md group-hover:animate-pulse">{data.emoji}</span>
            </div>

            <div className="flex-1">
                {!isEven && (
                    <div className="text-left">
                        <span className="text-primary text-sm font-bold tracking-widest uppercase block mb-3">{data.date}</span>
                        <h3 className="text-2xl font-serif mb-2 text-foreground">{data.title}</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">{data.description}</p>
                    </div>
                )}
            </div>
        </motion.div>
    )
}
