'use client'

import { motion } from 'framer-motion'
import { photos } from '@/lib/data'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'

export function Gallery() {
    return (
        <section id="gallery" className="py-32 px-4 bg-background overflow-hidden relative">
            <div className="max-w-6xl mx-auto space-y-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-light tracking-widest uppercase text-foreground">
                        Captured <span className="font-serif italic font-normal text-primary lowercase text-6xl">Moments</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-50" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                            whileHover={{ y: -10 }}
                            className="relative group cursor-pointer"
                        >
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div className="overflow-hidden rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] aspect-[3/4] border-8 border-white bg-white transform transition-transform duration-500 hover:rotate-2">
                                        <div className="relative w-full h-full opacity-90 group-hover:opacity-100 transition-opacity">
                                            <Image
                                                src={photo.src}
                                                alt={photo.alt}
                                                fill
                                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                            />
                                        </div>
                                        {/* Polaroid Text */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-white pt-2 pb-4 text-center">
                                            <p className="font-handwriting text-black font-semibold font-serif italic text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                                                {photo.caption}
                                            </p>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none">
                                    <div className="relative aspect-[3/2] w-full h-[80vh]">
                                        <Image
                                            src={photo.src}
                                            alt={photo.alt}
                                            fill
                                            className="object-contain rounded-lg shadow-2xl"
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
