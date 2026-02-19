"use client";

import { motion } from "framer-motion";
import {
    BookOpen, GraduationCap, Plane, Utensils,
    ChevronRight, HeartHandshake, Stethoscope,
    LucideIcon
} from "lucide-react";
import Link from "next/link";
import type { KnowledgeCategory } from "@/lib/queries/knowledgeCategory";

// Icon registry — design stays in code, icon name string comes from Sanity
const ICON_MAP: Record<string, LucideIcon> = {
    BookOpen,
    GraduationCap,
    Plane,
    Utensils,
    Stethoscope,
    HeartHandshake,
}

// Color theme map — design stays in code, theme name comes from Sanity
const COLOR_MAP: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600",
    orange: "bg-orange-100 text-orange-600",
    green: "bg-scuf-green/10 text-scuf-green",
    yellow: "bg-scuf-yellow/30 text-yellow-700",
    purple: "bg-purple-100 text-purple-600",
    pink: "bg-pink-100 text-pink-600",
}

interface CategoryGridProps {
    categories: KnowledgeCategory[]
}

export function CategoryGrid({ categories }: CategoryGridProps) {
    if (!categories || categories.length === 0) return null

    return (
        <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {categories.map((cat) => {
                        const Icon = ICON_MAP[cat.icon] ?? BookOpen
                        const colorClass = COLOR_MAP[cat.colorTheme] ?? COLOR_MAP.blue

                        return (
                            <Link href={`/kunskap/${cat.slug.current}`} key={cat._id}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="group h-full p-8 rounded-3xl border border-neutral-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${colorClass} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-scuf-dark mb-3 group-hover:text-scuf-green transition-colors flex items-center gap-2">
                                        {cat.title}
                                        <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-scuf-green" />
                                    </h3>
                                    <p className="text-scuf-dark/60 leading-relaxed font-medium">
                                        {cat.description}
                                    </p>
                                </motion.div>
                            </Link>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
}
