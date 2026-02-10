"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock Data
const ACTIVITIES = [
    {
        id: 1,
        title: "Sommarläger 2026",
        date: "14-20 Juni",
        location: "Båstad",
        category: "Läger",
        imageColor: "bg-scuf-green",
        price: "500 kr",
        spots: "Få platser kvar"
    },
    {
        id: 2,
        title: "Pizzakväll i Malmö",
        date: "25 Mars",
        location: "Malmö",
        category: "Träff",
        imageColor: "bg-scuf-yellow",
        price: "Gratis",
        spots: "Öppen anmälan"
    },
    {
        id: 3,
        title: "Årsmöte SCUF Väst",
        date: "10 April",
        location: "Göteborg / Digitalt",
        category: "Möte",
        imageColor: "bg-scuf-red",
        price: "Gratis",
        spots: null
    },
    {
        id: 4,
        title: "Skidresa till Åre",
        date: "Sportlovet v.7",
        location: "Åre",
        category: "Resa",
        imageColor: "bg-blue-500",
        price: "1500 kr",
        spots: "Fullbokad"
    },
    {
        id: 5,
        title: "Digital Fika: Nya diagnoser",
        date: "5 Maj",
        location: "Zoom",
        category: "Träff",
        imageColor: "bg-purple-500",
        price: "Gratis",
        spots: "Öppen anmälan"
    },
];

const FILTERS = ["Alla", "Läger", "Träff", "Resa", "Möte"];

export function ActivityList() {
    const [activeFilter, setActiveFilter] = useState("Alla");

    const filteredActivities = activeFilter === "Alla"
        ? ACTIVITIES
        : ACTIVITIES.filter(a => a.category === activeFilter);

    return (
        <section className="py-24 bg-neutral-light min-h-screen">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-scuf-dark mb-4">På gång i SCUF</h1>
                    <p className="text-xl text-scuf-dark/60 max-w-2xl mx-auto">
                        Här hittar du allt från stora läger till lokala fikamys. Häng med!
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full font-bold text-sm transition-all border-2 
                        ${activeFilter === filter
                                    ? "bg-scuf-dark text-white border-scuf-dark shadow-lg scale-105"
                                    : "bg-white text-scuf-dark border-transparent hover:border-scuf-dark/10"}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* List Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredActivities.map((activity) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={activity.id}
                                className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                            >
                                {/* Image Placeholder Area */}
                                <div className={`h-48 ${activity.imageColor} relative p-6 flex flex-col justify-between`}>
                                    <div className="flex justify-between items-start">
                                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-scuf-dark shadow-sm">
                                            {activity.category}
                                        </span>
                                        {activity.spots === "Fullbokad" && (
                                            <span className="bg-scuf-dark/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                Fullbokat
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-white leading-tight drop-shadow-md">
                                        {activity.date}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h2 className="text-2xl font-bold text-scuf-dark mb-4 group-hover:text-scuf-green transition-colors">
                                        {activity.title}
                                    </h2>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3 text-scuf-dark/70 font-medium">
                                            <MapPin size={18} className="text-scuf-green" />
                                            {activity.location}
                                        </div>
                                        <div className="flex items-center gap-3 text-scuf-dark/70 font-medium">
                                            <span className="w-4 h-4 rounded-full bg-scuf-yellow flex items-center justify-center text-[10px] font-bold text-scuf-dark">$</span>
                                            {activity.price}
                                        </div>
                                    </div>

                                    <Button variant="outline" className="w-full rounded-xl border-2 font-bold group-hover:bg-scuf-dark group-hover:text-white group-hover:border-scuf-dark transition-all">
                                        Läs mer & Anmäl <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredActivities.length === 0 && (
                    <div className="text-center py-20 text-scuf-dark/40 flex flex-col items-center gap-4">
                        <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mb-2">
                            <Calendar size={40} className="text-scuf-dark/20" />
                        </div>
                        <p className="text-xl font-bold">Inga aktiviteter hittades just nu.</p>
                        <p className="text-sm">Testa att välja en annan kategori!</p>
                    </div>
                )}

            </div>
        </section>
    );
}
