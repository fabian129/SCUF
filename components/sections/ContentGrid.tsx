"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Tent } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ContentGrid() {
    return (
        <section className="py-12 md:py-24 bg-neutral-light/30">
            <div className="container mx-auto px-4 md:px-6">

                <h2 className="text-3xl md:text-5xl font-bold text-scuf-dark mb-12 max-w-2xl">
                    Hela Sverige är vårt fikarum.
                </h2>

                <div className="grid md:grid-cols-2 gap-6 h-auto md:h-[600px]">

                    {/* Left: Gemenskap (Large Card) */}
                    <Link href="/bli-medlem" className="relative group overflow-hidden rounded-[2.5rem] shadow-xl md:row-span-2">
                        <div className="absolute inset-0 bg-neutral-300">
                            <Image
                                src="/assets/community-hands.jpg"
                                alt="Gemenskap"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="text-4xl font-extrabold mb-3">Gemenskap</h3>
                            <p className="text-xl text-white/90 font-medium">Träffa vänner som förstår precis hur det är.</p>
                        </div>
                    </Link>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6 h-full">

                        {/* Top: Kunskap (Green) */}
                        <Link href="/kunskap" className="flex-1 bg-scuf-green rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-lg transition-transform hover:-translate-y-1">
                            <BookOpen size={48} className="text-white mb-6" />
                            <h3 className="text-3xl font-extrabold text-white mb-2">Kunskap</h3>
                            <p className="text-white/90 text-lg font-medium">Vi sprider kunskap i skolor och vården.</p>

                            {/* Decorative Icon Background */}
                            <BookOpen className="absolute -bottom-4 -right-4 w-48 h-48 text-white/10 rotate-12" />
                        </Link>

                        {/* Bottom: Aktiviteter (Yellow) */}
                        <Link href="/aktiviteter" className="flex-1 bg-scuf-yellow rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-lg transition-transform hover:-translate-y-1">
                            <Tent size={48} className="text-scuf-dark mb-6" />
                            <h3 className="text-3xl font-extrabold text-scuf-dark mb-2">Aktiviteter</h3>
                            <p className="text-scuf-dark/80 text-lg font-medium">Läger, bakträffar och häng året om.</p>

                            {/* Decorative Icon Background */}
                            <Tent className="absolute -bottom-4 -right-4 w-48 h-48 text-scuf-dark/5 rotate-[-12deg]" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
