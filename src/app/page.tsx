import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { Timeline } from "@/components/timeline";
import { ReasonsDeck } from "@/components/reasons-deck";
import { Quiz } from "@/components/quiz";
import { Message } from "@/components/message";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Timeline />
      <Gallery />
      <ReasonsDeck />
      <Quiz />
      <Message />

      {/* Footer / Copyright */}
      <footer className="py-8 text-center text-zinc-600 text-sm">
        <p>Made with ❤️ for You • 2026</p>
      </footer>
    </main>
  );
}
