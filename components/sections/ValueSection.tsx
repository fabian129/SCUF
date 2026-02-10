"use client";

import { motion } from "framer-motion";
import { LucideIcon, Heart, Shield, Sparkles } from "lucide-react";

interface ValueCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    delay: number;
}

function ValueCard({ title, description, icon: Icon, color, delay }: ValueCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow relative overflow-hidden group"
        >
            <div
                className={`absolute top-0 right-0 w-32 h-32 bg-${color}/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110`}
                style={{ backgroundColor: `var(--${color})`, opacity: 0.1 }}
            />

            <div className="relative z-10">
                <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md"
                    style={{ backgroundColor: `var(--${color})` }}
                >
                    <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-scuf-dark mb-3">{title}</h3>
                <p className="text-scuf-dark/70 leading-relaxed font-medium">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export function ValueSection() {
    const values = [
        {
            title: "Frihet",
            description: "Lev utan hinder och påverka din vardag. Vi arbetar för ett samhälle där celiaki aldrig ska begränsa dig.",
            icon: Heart, // Placeholder for Freedom-like icon
            color: "scuf-green", // CSS variable name suffix
        },
        {
            title: "Trygghet",
            description: "Stöd från andra som förstår. Hos oss hittar du gemenskap, pålitlig kunskap och trygga mötesplatser.",
            icon: Shield,
            color: "scuf-red",
        },
        {
            title: "Lekfullhet",
            description: "Ha kul och träffa nya vänner! Vi anordnar läger och aktiviteter fyllda med glädje och gemenskap.",
            icon: Sparkles,
            color: "scuf-yellow",
        },
    ];

    return (
        <section className="py-24 bg-neutral-light relative">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-scuf-dark mb-6">
                        Mer än bara en diagnos
                    </h2>
                    <p className="text-lg text-scuf-dark/70">
                        SCUF bygger på tre grundstenar som genomsyrar allt vi gör – från sommarläger till påverkansarbete.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <ValueCard
                            key={value.title}
                            {...value}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
