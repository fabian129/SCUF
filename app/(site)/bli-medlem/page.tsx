"use client";

import { MembershipForm } from "@/components/forms/MembershipForm";
import { Check } from "lucide-react";

export default function BliMedlemPage() {
    return (
        <main className="min-h-screen bg-neutral-light/50 py-12 md:py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-scuf-green/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-scuf-yellow/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

                    {/* Left Col: Benefits & Pitch */}
                    <div className="space-y-8 sticky top-32">
                        <div className="inline-block px-4 py-1 rounded-full bg-scuf-green/10 text-scuf-green font-bold mb-2">
                            Bli medlem gratis
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-scuf-dark leading-tight">
                            Gå med i <br /> gemenskapen.
                        </h1>
                        <p className="text-xl text-scuf-dark/70 leading-relaxed">
                            Som medlem i SCUF får du inte bara nya vänner. Du får också en starkare röst i samhället och massor av förmåner. Och det bästa? Det kostar 0 kr.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {[
                                "Tidningen Glutenfritt mat & bak hem i brevlådan",
                                "Rabatt på massor av glutenfria produkter",
                                "Inbjudningar till läger och aktiviteter",
                                "Möjlighet att påverka och engagera dig",
                                "Ett välkomstpaket (för nya medlemmar)"
                            ].map((benefit, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-medium text-scuf-dark">
                                    <div className="w-6 h-6 rounded-full bg-scuf-green text-white flex items-center justify-center shadow-sm">
                                        <Check size={14} strokeWidth={4} />
                                    </div>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Col: The Form */}
                    <div>
                        <MembershipForm />
                    </div>

                </div>

            </div>
        </main>
    );
}
