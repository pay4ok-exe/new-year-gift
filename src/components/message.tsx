"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import confetti from "canvas-confetti";
import { useState } from "react";

export function Message() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#FFC0CB", "#FFD700", "#FFFFFF"], // Soft pink, gold, white
        ticks: 200,
      });
    }
  };

  return (
    <section className="py-32 px-4 bg-background min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Ambience */}
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
              Wish
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
                  {/* Paper Texture Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    <p className="text-lg md:text-xl font-serif leading-[1.8] text-gray-800">
                      "Жаным (Ademi), мен сені өте қатты жақсы көремін,"
                    </p>
                    <p className="text-lg md:text-xl font-serif leading-[1.8] text-gray-800">
                      Біз бір жылдан кейін қалай болғанымызды қарап, біз бірге
                      бөліскен барлық тамаша моменттерді қарап тұрмыз. Сен сенің
                      өміріңдегі сәулесің, шайқасыңдағы тыныштығың және ең үлкен
                      бақытыма себебің.
                    </p>
                    <p className="text-lg md:text-xl font-serif leading-[1.8] text-gray-800">
                      Мен сені әр күнде өте жақсы көремін, сенің үміттеріңді
                      қолдаймын және барлық уақытта сенің қасында боламын.
                      <br />
                      <br />
                      Осы жылдағы ең қуаныштысы ол сенімен танысқаным.
                    </p>
                    <div className="pt-8 border-t border-gray-200">
                      <p className="text-lg font-serif italic text-pink-600">
                        Forever Yours,
                      </p>
                      <p className="text-2xl font-bold font-serif text-gray-900 mt-2">
                        Me (Ospan) ❤️
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
      </div>
    </section>
  );
}
