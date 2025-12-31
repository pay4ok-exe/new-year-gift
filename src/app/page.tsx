"use client";
import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { Timeline } from "@/components/timeline";
import { ReasonsDeck } from "@/components/reasons-deck";
import { Quiz } from "@/components/quiz";
import { Message } from "@/components/message";
import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <Snowfall
        color="rgba(255, 255, 255, 0.8)"
        snowflakeCount={100}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <Hero />
      <Timeline />
      <Gallery />
      <ReasonsDeck />
      <Quiz />
      <Message />

      <footer className="py-8 text-center text-zinc-600 text-sm">
        <p>Made with ❤️ for You • 2026</p>
      </footer>
    </main>
  );
}
