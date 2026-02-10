"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Placeholder data
const NEWS_ITEMS = [
    {
        id: 1,
        tag: "Läger",
        tagColor: "bg-scuf-green/10 text-scuf-green",
        title: "Anmälan till Sommarlägret 2026 är öppen!",
        date: "15 Juni - 20 Juni",
        location: "Sjöudden, Växjö",
        image: "https://loremflickr.com/800/600/summer,camp",
        slug: "/nyheter/sommarlager-2026"
    },
    {
        id: 2,
        tag: "Recept",
        tagColor: "bg-scuf-yellow/20 text-yellow-700",
        title: "Månadens godaste glutenfria kanelbullar",
        date: "Publicerad: 2 dagar sen",
        image: "https://loremflickr.com/800/600/pastry",
        slug: "/nyheter/recept-kanelbullar"
    },
    {
        id: 3,
        tag: "Nyhet",
        tagColor: "bg-scuf-red/10 text-scuf-red",
        title: "Ny medlemsförmån: Rabatt på Fria Bröd",
        date: "Publicerad: Idag",
        image: "https://loremflickr.com/800/600/bakery",
        slug: "/nyheter/medlemsforman"
    }
];

export function NewsSection() {
    return (
        <section className="py-24 bg-neutral-light/50">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-scuf-dark">
                            Händer på SCUF
                        </h2>
                        <p className="text-scuf-dark/60 text-lg">
                            De senaste nyheterna, aktiviteterna och tipsen.
                        </p>
                    </div>
                    <Link href="/nyheter">
                        <Button variant="outline" className="hidden md:flex group">
                            Alla nyheter
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {NEWS_ITEMS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-neutral-100 flex flex-col h-full cursor-pointer"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 w-full relative overflow-hidden bg-neutral-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Top Right Tag */}
                                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${item.tagColor} backdrop-blur-sm shadow-sm z-10`}>
                                    {item.tag}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-xs font-medium text-scuf-dark/40 mb-3 flex items-center gap-2">
                                    {item.location ? <MapPin size={12} /> : <Calendar size={12} />}
                                    {item.location || item.date}
                                </div>

                                <h3 className="text-xl font-bold text-scuf-dark mb-4 leading-tight group-hover:text-scuf-green transition-colors">
                                    {item.title}
                                </h3>

                                <div className="mt-auto pt-4 flex items-center text-scuf-green font-bold text-sm">
                                    Läs mer
                                    <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Button Bottom */}
                <div className="mt-8 md:hidden text-center">
                    <Link href="/nyheter">
                        <Button variant="outline" className="w-full">
                            Alla nyheter
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
