"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { timelineEvents, TimelineEvent } from "@/lib/data";
import Image from "next/image";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { cn } from "@/lib/utils";

export function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-background text-foreground"
    >
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
          {timelineEvents.map((milestone, index) => (
            <TimelineItem key={index} data={milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ data, index }: { data: TimelineEvent; index: number }) {
  const isEven = index % 2 === 0;
  const hasImages = data.images && data.images.length > 0;
  const displayImages = hasImages ? data.images : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex items-start gap-8 md:gap-16"
    >
      {/* Text Section - Left for even, Right for odd */}
      <div
        className={cn("flex-1", isEven ? "text-right" : "text-left order-3")}
      >
        <div className={cn("space-y-4", isEven ? "text-right" : "text-left")}>
          <div>
            <span className="text-primary text-sm font-bold tracking-widest uppercase block mb-3">
              {data.date}
            </span>
            <h3 className="text-2xl font-serif mb-2 text-foreground">
              {data.title}
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* Center Timeline Dot */}
      <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-card border border-primary/30 rounded-full shadow-[0_0_20px_rgba(255,105,180,0.15)] group hover:scale-110 transition-transform duration-500 flex-shrink-0 order-2">
        <span className="text-xl filter drop-shadow-md group-hover:animate-pulse">
          {data.emoji}
        </span>
      </div>

      {/* Photos Section - Right for even, Left for odd */}
      <div
        className={cn("flex-1", isEven ? "text-left" : "text-right order-1")}
      >
        {hasImages && (
          <div
            className={cn(
              "flex flex-wrap gap-3 mt-4",
              isEven ? "justify-start" : "justify-end"
            )}
          >
            {displayImages.map((img: string, imgIndex: number) => (
              <ImageZoom
                key={imgIndex}
                backdropClassName={cn(
                  '[&_[data-rmiz-modal-overlay="visible"]]:bg-black/80'
                )}
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 border-white/20 hover:border-primary/50 transition-all group"
              >
                <Image
                  src={img}
                  alt={`${data.title} ${imgIndex + 1}`}
                  width={128}
                  height={128}
                  className={cn(
                    "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 cursor-zoom-in rounded-lg",
                    data.isBlurred && "blur-sm"
                  )}
                  unoptimized
                />
              </ImageZoom>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
