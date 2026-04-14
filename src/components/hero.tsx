"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToTimeline = () => {
    const timeline = document.getElementById("timeline");
    if (timeline) {
      timeline.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      <motion.div
        style={{ y, opacity }}
        className="z-10 text-center px-4 space-y-8 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="perspective-text"
        >
          <h1 className="text-5xl md:text-8xl font-bold text-foreground drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] tracking-tighter">
            I Love Ademi
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground font-light mt-6 tracking-[0.15em] uppercase">
            Today is 365 Days Since We Met
          </p>
          <p className="text-base md:text-xl text-pink-400 font-light mt-4 tracking-widest">
            15.04.2025 → 15.04.2026 ❤️
          </p>
        </motion.div>

        <motion.button
          onClick={scrollToTimeline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          whileHover={{ scale: 1.05, letterSpacing: "0.1em" }}
          className="group relative px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-foreground/80 text-sm md:text-base font-medium uppercase tracking-widest transition-all duration-300 hover:bg-white/10 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_30px_rgba(255,105,180,0.3)]"
        >
          Begin Our Journey ✨
        </motion.button>
      </motion.div>
    </section>
  );
}
