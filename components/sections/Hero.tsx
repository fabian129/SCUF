"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { HomePage } from "@/lib/queries/homePage";
import type { SiteSettings } from "@/lib/queries/siteSettings";

interface HeroProps {
    page: HomePage
    settings: SiteSettings
}

export function Hero({ page, settings }: HeroProps) {
    const headline = page.heroHeadline ?? 'Tillsammans gör vi vardagen lite lättare'
    const subtext = page.heroSubtext ?? 'Svenska Celiakiungdomsförbundet är gemenskapen för dig mellan 0–29 år. Vi skapar mötesplatser, sprider kunskap och kämpar för att ingen ska behöva avstå mat eller aktiviteter.'
    const primaryLabel = page.heroPrimaryLabel ?? 'Bli medlem gratis'
    const primaryLink = page.heroPrimaryLink ?? '/bli-medlem'
    const secondaryLabel = page.heroSecondaryLabel ?? 'Läs mer om oss'
    const secondaryLink = page.heroSecondaryLink ?? '/om-scuf'
    const memberCount = settings.memberCount ?? '18 000+'

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-light">
            {/* Background shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-neutral-green/30 rounded-full blur-3xl" />
                <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-neutral-red/20 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-scuf-yellow/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center lg:text-left space-y-8"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm border border-neutral-green/20 text-scuf-dark text-sm font-bold tracking-wide mb-2">
                        👋 Välkommen till SCUF
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-scuf-dark leading-[1.1]">
                        {headline}
                    </h1>

                    <p className="text-lg md:text-xl text-scuf-dark/80 max-w-[600px] mx-auto lg:mx-0 leading-relaxed">
                        {subtext}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                        <Link href={primaryLink} className="w-full sm:w-auto">
                            <Button size="lg" className="w-full text-lg shadow-scuf-green/20">
                                {primaryLabel}
                            </Button>
                        </Link>
                        <Link href={secondaryLink} className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full text-lg">
                                {secondaryLabel}
                            </Button>
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-scuf-dark/60 font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-scuf-green" />
                            Frihet
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-scuf-red" />
                            Trygghet
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-scuf-yellow" />
                            Lekfullhet
                        </div>
                    </div>
                </motion.div>

                {/* Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block h-[600px]"
                >
                    <div className="relative w-full h-full">
                        <div className="absolute top-10 right-0 w-[90%] h-[80%] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-4 border-white transform rotate-2">
                            <Image
                                src="https://placehold.co/600x800/png?text=Gemenskap+hos+SCUF"
                                alt="Gemenskap hos SCUF"
                                fill
                                className="object-cover"
                                priority
                                unoptimized
                            />
                        </div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-0 right-10 bg-scuf-yellow p-6 rounded-full shadow-lg border-4 border-white"
                        >
                            <span className="text-3xl">✨</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 left-0 bg-white p-4 pr-8 rounded-2xl shadow-xl flex items-center gap-4 border border-neutral-100"
                        >
                            <div className="bg-scuf-green/10 p-3 rounded-full text-2xl">🎉</div>
                            <div>
                                <div className="font-bold text-scuf-dark">Gratis Medlemskap</div>
                                <div className="text-xs text-scuf-dark/60">Gå med {memberCount} andra</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Starburst CTA */}
            <Link href="/barn" className="absolute bottom-4 left-4 md:bottom-8 md:left-8 lg:left-[45%] lg:-translate-x-1/2 z-20 group">
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="relative w-48 h-48 flex items-center justify-center filter drop-shadow-xl cursor-pointer"
                >
                    <svg viewBox="0 0 100 100" className="absolute inset-0 text-scuf-red w-full h-full">
                        <path d="M50 0 L63 20 L85 10 L80 35 L100 50 L80 65 L85 90 L63 80 L50 100 L37 80 L15 90 L20 65 L0 50 L20 35 L15 10 L37 20 Z" fill="currentColor" />
                    </svg>
                    <span className="relative text-white font-black text-center text-xl leading-tight p-4 transform -rotate-6 uppercase">
                        Celiaki<br />för barn
                    </span>
                </motion.div>
            </Link>
        </section>
    );
}
