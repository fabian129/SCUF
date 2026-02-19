"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Tent } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { HomePage } from "@/lib/queries/homePage";

interface AboutSectionProps {
    page: HomePage
}

export function AboutSection({ page }: AboutSectionProps) {
    const badge = page.aboutBadge ?? 'Vad gör vi?'
    const headline = page.aboutHeadline ?? 'Vi finns här för dig – hela vägen'
    const body = page.aboutBody ?? 'Svenska Celiakiungdomsförbundet (SCUF) är en ideell organisation som drivs av och för unga. Vi vet hur det är att leva med celiaki, och vi vet att det blir både roligare och lättare när man gör det tillsammans.'
    const bullets = page.aboutBullets ?? [
        'Ingen medlemsavgift (0 kr)',
        'För alla mellan 0 och 29 år',
        'Aktiviteter över hela Sverige',
    ]

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-scuf-green/10 text-scuf-green text-sm font-bold tracking-wide">
                            {badge}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-scuf-dark leading-tight">
                            {headline}
                        </h2>

                        <p className="text-lg text-scuf-dark/70 leading-relaxed">
                            {body}
                        </p>

                        {bullets.length > 0 && (
                            <ul className="space-y-4">
                                {bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-center gap-3 text-scuf-dark font-medium">
                                        <div className="w-6 h-6 rounded-full bg-scuf-green/20 flex items-center justify-center text-scuf-green">✓</div>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <Link href="/om-scuf">
                            <Button variant="link" className="p-0 text-scuf-green font-bold text-lg hover:no-underline group">
                                Om SCUF
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Right: Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full min-h-[500px]">

                        {/* Block 1: Gemenskap */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:row-span-2 bg-neutral-light rounded-3xl p-8 relative overflow-hidden group min-h-[300px] flex flex-col justify-end"
                        >
                            <div className="absolute inset-0 bg-neutral-200 transition-transform duration-700 group-hover:scale-105">
                                <div className="w-full h-full flex items-center justify-center text-scuf-dark/20 font-bold text-4xl transform -rotate-12 select-none">
                                    Gemenskap
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="relative z-10 text-white">
                                <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <Users className="text-white" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Gemenskap</h3>
                                <p className="text-white/90 text-sm">Träffa vänner som förstår precis hur det är.</p>
                            </div>
                        </motion.div>

                        {/* Block 2: Kunskap */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-scuf-green rounded-3xl p-8 text-white relative overflow-hidden group min-h-[220px] flex flex-col justify-between"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                            <BookOpen size={32} className="mb-4" />
                            <div>
                                <h3 className="text-xl font-bold mb-1">Kunskap</h3>
                                <p className="text-white/80 text-sm">Vi sprider kunskap i skolor och vården.</p>
                            </div>
                        </motion.div>

                        {/* Block 3: Aktiviteter */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-scuf-yellow rounded-3xl p-8 text-scuf-dark relative overflow-hidden group min-h-[220px] flex flex-col justify-between"
                        >
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -ml-10 -mb-10" />
                            <Tent size={32} className="mb-4" />
                            <div>
                                <h3 className="text-xl font-bold mb-1">Aktiviteter</h3>
                                <p className="text-scuf-dark/80 text-sm">Läger, bakträffar och häng året om.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
