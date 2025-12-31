"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { photos, timelineEvents } from "@/lib/data";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const currentPhoto = photos[currentIndex];
  const event = timelineEvents.find((e) => e.images.includes(currentPhoto.src));
  const isBlurred = event?.isBlurred || false;

  return (
    <section
      id="gallery"
      className="py-16 md:py-24 px-4 bg-background overflow-hidden relative"
    >
      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-2"
        >
          <h2 className="text-2xl md:text-4xl font-light tracking-widest uppercase text-foreground">
            Captured{" "}
            <span className="font-serif italic font-normal text-primary lowercase text-5xl">
              Moments
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-50" />
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div
                className={cn(
                  "overflow-hidden rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] aspect-[3/4] border-4 md:border-8 border-white bg-white transform transition-transform duration-500 hover:rotate-2 relative max-h-[70vh]",
                  isBlurred && "blur-sm"
                )}
              >
                <div className="relative w-full h-full opacity-90 group-hover:opacity-100 transition-opacity">
                  <ImageZoom
                    backdropClassName={cn(
                      '[&_[data-rmiz-modal-overlay="visible"]]:bg-black/80'
                    )}
                    className="w-full h-full"
                  >
                    <Image
                      src={currentPhoto.src}
                      alt={currentPhoto.alt}
                      width={800}
                      height={1067}
                      className={cn(
                        "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 cursor-zoom-in",
                        isBlurred && "blur-sm"
                      )}
                      unoptimized
                    />
                  </ImageZoom>
                </div>
                {/* Polaroid Text */}
                <div className="absolute bottom-0 left-0 right-0 bg-white pt-2 pb-4 text-center z-10">
                  <p className="font-handwriting text-black font-semibold font-serif italic text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                    {currentPhoto.caption}
                  </p>
                  {currentPhoto.eventDate && (
                    <p className="text-xs text-black/40 mt-1">
                      {currentPhoto.eventDate}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all flex items-center justify-center text-foreground z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all flex items-center justify-center text-foreground z-10"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-4 flex-wrap max-w-full">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>

          {/* Photo Counter */}
          <div className="text-center mt-2 text-muted-foreground text-sm">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      </div>
    </section>
  );
}
