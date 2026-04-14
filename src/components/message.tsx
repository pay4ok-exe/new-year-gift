"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import confetti from "canvas-confetti";
import { useState } from "react";

function TheaterTickets() {
  return (
    <div className="mt-16 space-y-6">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-light text-center text-foreground tracking-widest uppercase"
      >
        A Special{" "}
        <span className="font-serif italic text-primary font-normal capitalize">
          Surprise
        </span>
      </motion.h3>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        {[1, 2].map((n) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, y: 20, rotate: n === 1 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: n === 1 ? -2 : 2 }}
            viewport={{ once: true }}
            transition={{ delay: n * 0.15, type: "spring" }}
            className="relative w-72 md:w-80 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
          >
            {/* Left notch */}
            <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black" />
            {/* Right notch */}
            <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black" />
            {/* Dashed separator */}
            <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-white/15" />

            <div className="p-6 pb-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🎭</span>
                <span className="text-xs tracking-[0.25em] text-zinc-400 uppercase">Theatre</span>
              </div>
              <p className="text-xl font-bold text-white tracking-wider">ТЕАТР</p>
              <p className="text-sm text-zinc-400 mt-1">For Two ❤️</p>
            </div>

            <div className="px-6 pt-3 pb-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Guest</p>
                  <p className="text-sm font-semibold text-white mt-1">
                    {n === 1 ? "Ademi 💛" : "Ospan ❤️"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Seat</p>
                  <p className="text-lg font-bold text-primary mt-1">
                    {n === 1 ? "A1" : "A2"}
                  </p>
                </div>
              </div>
            </div>

            {/* Shimmer overlay */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: n * 0.5, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
            />
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-zinc-500 text-sm italic mt-4"
      >
        Бірге баруға болатын жерлер — шексіз ❤️
      </motion.p>
    </div>
  );
}

export function Message() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#FFC0CB", "#FFD700", "#FFFFFF"],
        ticks: 200,
      });
    }
  };

  return (
    <section className="py-32 px-4 bg-background min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="max-w-3xl mx-auto w-full text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-widest uppercase">
            One Last{" "}
            <span className="font-serif italic text-primary font-normal capitalize">
              Letter
            </span>
          </h2>
        </motion.div>

        <motion.div layout className="relative perspective-1000">
          {!isOpen ? (
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Button
                onClick={handleOpen}
                size="lg"
                className="text-xl md:text-2xl px-16 py-8 rounded-full bg-white text-black hover:bg-gray-100 shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 border-none font-serif italic"
              >
                💌 Open Love Letter
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <Card className="bg-[#fffcf7] text-black border-none shadow-[0_20px_60px_rgba(0,0,0,0.5)] max-w-2xl mx-auto transform rotate-1">
                <CardContent className="p-10 md:p-16 space-y-8 text-left relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    <p className="text-lg md:text-xl font-serif leading-[1.8] text-gray-800">
                      Жаным (Ademi),
                    </p>
                    <p className="text-lg md:text-xl font-serif leading-[1.8] text-gray-800">
                      кешірші соңғы моменттердегі заттарды қосып үлгермедім —
                      бірақ сен маған күн сайын қуаныш сыйлайсың, осыны айтқым келіп еді.
                    </p>
                    <p className="text-lg md:text-xl font-serif leading-[1.8] text-gray-800">
                      қасымда всегда болғаныңнан соң,
                      <br />
                      әрбір моментте сеніменмін
                      <br />
                      және осылай әрқашан жалғасқанын қалаймын. ❤️
                    </p>
                    <p className="text-lg md:text-xl font-serif leading-[1.8] text-gray-800">
                      Сен менің 365 күнімнің ең жарық бөлігісің.
                      Сенімен болған әр сәт — ең қымбат естелігім.
                    </p>
                    <div className="pt-8 border-t border-gray-200">
                      <p className="text-lg font-serif italic text-pink-600">
                        Forever Yours,
                      </p>
                      <p className="text-2xl font-bold font-serif text-gray-900 mt-2">
                        Ospan ❤️
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>

        {/* Theater tickets section */}
        <TheaterTickets />
      </div>
    </section>
  );
}
