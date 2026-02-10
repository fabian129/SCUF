"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function ChildrenHero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-neutral-cream">
            {/* S1 Full Background Shapes - More colorful and playful */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-scuf-green/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-scuf-yellow/30 rounded-full blur-3xl opacity-80" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-scuf-red/10 rounded-full blur-3xl" />

                {/* Floating "Confetti" or shapes */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute top-1/4 left-10 w-16 h-16 rounded-full border-4 border-scuf-green opacity-20"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className="absolute bottom-1/4 right-10 w-20 h-20 rounded-3xl bg-scuf-yellow opacity-20 rotate-12"
                />
            </div>

            <div className="container px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className="space-y-6"
                >
                    <div className="inline-block px-6 py-2 rounded-full bg-scuf-yellow text-scuf-dark font-extrabold tracking-wide text-lg shadow-sm transform -rotate-2">
                        🎈 För dig som är barn
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-scuf-dark leading-tight">
                        Välkommen till <span className="text-scuf-green inline-block relative">
                            SCUF!
                            <svg className="absolute w-[120%] h-4 -bottom-1 -left-2 text-scuf-red -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-scuf-dark/80 max-w-[500px] mx-auto lg:mx-0 font-medium leading-relaxed">
                        Här hittar du massor av skoj, kompisar och tips. Att ha celiaki ska inte vara tråkigt!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                        <Button size="lg" className="bg-scuf-red hover:bg-scuf-red/90 text-white border-b-4 border-red-700 active:border-b-0 active:translate-y-1 transition-all text-xl px-10 py-8 h-auto rounded-3xl shadow-xl">
                            Vad är celiaki? 🧐
                        </Button>
                        <Button variant="ghost" className="text-xl text-scuf-green hover:bg-scuf-green/10 rounded-3xl px-8 py-4 h-auto">
                            Se våra läger ⛺
                        </Button>
                    </div>
                </motion.div>

                {/* Visual - Playful composition */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block h-[500px]"
                >
                    {/* Main "Blob" Image Container */}
                    <div className="absolute inset-0 bg-white rounded-[4rem] shadow-2xl overflow-hidden border-8 border-white transform rotate-3">
                        <Image
                            src="https://loremflickr.com/800/1000/kids,playing,balloons"
                            alt="Barn som leker"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Sticker 1 */}
                    <Link href="/bli-medlem" className="absolute -top-6 -right-6 z-10">
                        <motion.div
                            className="bg-scuf-green text-white p-6 rounded-full shadow-lg font-bold text-lg rotate-12 border-4 border-white cursor-pointer"
                            whileHover={{ scale: 1.1, rotate: 0 }}
                        >
                            Bli medlem idag
                        </motion.div>
                    </Link>

                    {/* Sticker 2 */}
                    <motion.div
                        className="absolute bottom-10 -left-10 bg-scuf-yellow text-scuf-dark p-4 rounded-2xl shadow-lg border-4 border-white -rotate-6"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    >
                        <span className="text-2xl mr-2">🍪</span>
                        <span className="font-bold">Mums!</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
