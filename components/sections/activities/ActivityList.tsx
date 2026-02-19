"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import type { Event } from "@/lib/queries/event";

// Design decision stays in code — categories map to colors, not stored in Sanity
const CATEGORY_COLORS: Record<string, string> = {
  Läger: "bg-scuf-green",
  Träff: "bg-scuf-yellow",
  Möte: "bg-scuf-red",
  Resa: "bg-blue-500",
};

const FILTERS = ["Alla", "Läger", "Träff", "Resa", "Möte"];

interface ActivityListProps {
  events: Event[]
}

export function ActivityList({ events }: ActivityListProps) {
  const [activeFilter, setActiveFilter] = useState("Alla");

  const filteredEvents = activeFilter === "Alla"
    ? events
    : events.filter(e => e.category === activeFilter);

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

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredEvents.map((event) => {
              const colorClass = CATEGORY_COLORS[event.category] ?? "bg-scuf-dark"
              // Show free-text dateDisplay if set, otherwise format ISO date
              const displayDate = event.dateDisplay
                ?? new Date(event.date).toLocaleDateString("sv-SE")

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={event._id}
                  className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all group"
                >
                  {/* Image / color header */}
                  <div className={`h-48 relative overflow-hidden ${!event.image ? colorClass : ""}`}>
                    {event.image && (
                      <Image
                        src={urlFor(event.image).width(600).height(400).url()}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {/* Date overlay */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="bg-black/40 backdrop-blur-sm text-white text-xl font-extrabold px-3 py-1 rounded-xl drop-shadow">
                        {displayDate}
                      </span>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-scuf-dark shadow-sm">
                        {event.category}
                      </span>
                    </div>
                    {/* Fullbokad badge */}
                    {event.status === "Fullbokad" && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-scuf-dark/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                          Fullbokat
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-scuf-dark mb-4 group-hover:text-scuf-green transition-colors">
                      {event.title}
                    </h2>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-scuf-dark/70 font-medium">
                        <MapPin size={18} className="text-scuf-green" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-3 text-scuf-dark/70 font-medium">
                        <span className="w-4 h-4 rounded-full bg-scuf-yellow flex items-center justify-center text-[10px] font-bold text-scuf-dark">kr</span>
                        {event.price}
                      </div>
                      {event.status && event.status !== "Fullbokad" && (
                        <div className="flex items-center gap-2 text-scuf-green font-medium text-sm">
                          <span className="w-2 h-2 rounded-full bg-scuf-green" />
                          {event.status}
                        </div>
                      )}
                    </div>

                    <Link href={`/aktiviteter/${event.slug.current}`}>
                      <Button variant="outline" className="w-full rounded-xl border-2 font-bold group-hover:bg-scuf-dark group-hover:text-white group-hover:border-scuf-dark transition-all">
                        Läs mer & Anmäl <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredEvents.length === 0 && (
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
