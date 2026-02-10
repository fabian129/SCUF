"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const ACTIVITIES = [
    {
        id: 1,
        title: "Sommarläger",
        date: "Juni 2025",
        color: "bg-scuf-green",
        rotate: "rotate-2",
        description: "Bada, grilla och träffa nya kompisar!"
    },
    {
        id: 2,
        title: "Julbaket",
        date: "December 2024",
        color: "bg-scuf-red",
        rotate: "-rotate-2",
        description: "Vi bakar supergoda pepparkakor."
    },
    {
        id: 3,
        title: "Hästromp",
        date: "April 2025",
        color: "bg-scuf-yellow",
        rotate: "rotate-1",
        description: "En heldag i stallet för alla!"
    },
    {
        id: 4,
        title: "Tivoli-dag",
        date: "Maj 2025",
        color: "bg-blue-400",
        rotate: "-rotate-3",
        description: "Åk karusell tills du blir snurrig!"
    }
];

export function ChildrenActivities() {
    const containerRef = useRef(null);

    const scroll = (direction: "left" | "right") => {
        // Logic would go here for real carousel, keeping it simple for now
    };

    return (
        <section className="py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <div className="inline-block px-4 py-1 rounded-full bg-scuf-dark/5 text-scuf-dark font-bold text-sm mb-4">
                            📸 Bildgalleriet
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-scuf-dark leading-tight">
                            Kolla vad kul vi har!
                        </h2>
                        <p className="text-xl text-scuf-dark/60 mt-4 font-medium">
                            På SCUF händer det alltid grejer. Häng med du också!
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Button size="icon" variant="outline" className="rounded-full w-12 h-12 border-2" onClick={() => scroll("left")}>
                            <ArrowLeft />
                        </Button>
                        <Button size="icon" variant="outline" className="rounded-full w-12 h-12 border-2" onClick={() => scroll("right")}>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>

                {/* Carousel / Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8" ref={containerRef}>
                    {ACTIVITIES.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                            className={`bg-white p-4 pb-8 rounded-sm shadow-xl ${activity.rotate} transition-transform duration-300 cursor-pointer group`}
                        >
                            {/* "Polaroid" Image Area */}
                            <div className={`aspect-square w-full ${activity.color} mb-6 flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                                <Camera className="text-white/50 w-16 h-16 group-hover:scale-110 transition-transform duration-500" />

                                {/* Tape effect */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm rotate-1 shadow-sm" />
                            </div>

                            <div className="text-center px-2">
                                <h3 className="font-extrabold text-xl text-scuf-dark font-handwriting">
                                    {activity.title}
                                </h3>
                                <p className="text-scuf-dark/50 text-sm font-bold mt-1 uppercase tracking-wide">
                                    {activity.date}
                                </p>
                                <p className="text-scuf-dark/80 mt-3 font-medium text-sm leading-relaxed">
                                    {activity.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button size="lg" className="bg-scuf-yellow text-scuf-dark hover:bg-scuf-yellow/90 text-lg px-8 py-6 h-auto rounded-full font-bold shadow-lg shadow-scuf-yellow/20">
                        Se alla våra aktiviteter 📅
                    </Button>
                </div>

            </div>
        </section>
    );
}
