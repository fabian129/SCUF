"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, User, Mail, Calendar, MapPin, Heart, Phone } from "lucide-react";

export function MembershipForm() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-100">
            {/* Progress Bar */}
            <div className="h-2 bg-neutral-100 w-full">
                <motion.div
                    className="h-full bg-scuf-green"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                />
            </div>

            <div className="p-6 md:p-12">
                <AnimatePresence mode="wait">

                    {/* STEP 1: Personal Info */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-extrabold text-scuf-dark">Välkommen! 👋</h2>
                                <p className="text-scuf-dark/60">Kul att du vill bli medlem. Vi börjar med det grundläggande.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-scuf-dark ml-1">Förnamn</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 text-scuf-dark/30" size={20} />
                                        <input type="text" className="w-full pl-10 pr-4 py-3 bg-neutral-light rounded-xl border-transparent focus:border-scuf-green focus:ring-0 transition-colors" placeholder="T.ex. Kim" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-scuf-dark ml-1">Efternamn</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 text-scuf-dark/30" size={20} />
                                        <input type="text" className="w-full pl-10 pr-4 py-3 bg-neutral-light rounded-xl border-transparent focus:border-scuf-green focus:ring-0 transition-colors" placeholder="Andersson" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-scuf-dark ml-1">Personnummer</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 text-scuf-dark/30" size={20} />
                                    <input type="text" className="w-full pl-10 pr-4 py-3 bg-neutral-light rounded-xl border-transparent focus:border-scuf-green focus:ring-0 transition-colors" placeholder="ÅÅÅÅMMDD-XXXX" />
                                </div>
                                <p className="text-xs text-scuf-dark/40 ml-1">Vi behöver detta för att verifiera din ålder (0-29 år).</p>
                            </div>

                            <Button onClick={nextStep} className="w-full h-12 text-lg rounded-xl mt-4">
                                Gå vidare <ChevronRight className="ml-2" />
                            </Button>
                        </motion.div>
                    )}

                    {/* STEP 2: Contact Info */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-extrabold text-scuf-dark">Kontakt 📬</h2>
                                <p className="text-scuf-dark/60">Så att we kan skicka medlemskort och inbjudningar.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-scuf-dark ml-1">E-postadress</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 text-scuf-dark/30" size={20} />
                                        <input type="email" className="w-full pl-10 pr-4 py-3 bg-neutral-light rounded-xl border-transparent focus:border-scuf-green focus:ring-0 transition-colors" placeholder="kim@exempel.se" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-scuf-dark ml-1">Telefonnummer</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-scuf-dark/30" size={20} />
                                        <input type="tel" className="w-full pl-10 pr-4 py-3 bg-neutral-light rounded-xl border-transparent focus:border-scuf-green focus:ring-0 transition-colors" placeholder="070-123 45 67" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-scuf-dark ml-1">Gatuadress</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 text-scuf-dark/30" size={20} />
                                    <input type="text" className="w-full pl-10 pr-4 py-3 bg-neutral-light rounded-xl border-transparent focus:border-scuf-green focus:ring-0 transition-colors" placeholder="Storgatan 12" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-scuf-dark ml-1">Postnummer</label>
                                    <input type="text" className="w-full px-4 py-3 bg-neutral-light rounded-xl border-transparent focus:border-scuf-green focus:ring-0 transition-colors" placeholder="123 45" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-scuf-dark ml-1">Ort</label>
                                    <input type="text" className="w-full px-4 py-3 bg-neutral-light rounded-xl border-transparent focus:border-scuf-green focus:ring-0 transition-colors" placeholder="Staden" />
                                </div>
                            </div>

                            <Button onClick={nextStep} className="w-full h-12 text-lg rounded-xl mt-4">
                                Nästan klara... <ChevronRight className="ml-2" />
                            </Button>
                            <button onClick={() => setStep(1)} className="w-full text-sm text-scuf-dark/40 hover:text-scuf-dark mt-2">
                                Gå tillbaka
                            </button>
                        </motion.div>
                    )}

                    {/* STEP 3: Confirm */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-8 space-y-6"
                        >
                            <div className="w-24 h-24 bg-scuf-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="text-scuf-green w-12 h-12 animate-pulse" fill="currentColor" />
                            </div>

                            <h2 className="text-3xl font-extrabold text-scuf-dark">Allt ser bra ut! 🎉</h2>
                            <p className="text-lg text-scuf-dark/70 max-w-sm mx-auto">
                                Genom att klicka på knappen nedan blir du medlem i SCUF helt gratis.
                            </p>

                            <div className="bg-neutral-light p-4 rounded-xl text-left text-sm text-scuf-dark/60 max-w-sm mx-auto">
                                <p className="flex gap-2">
                                    <CheckCircle size={16} className="text-scuf-green shrink-0 mt-0.5" />
                                    Jag godkänner SCUF:s integritetspolicy och stadgar.
                                </p>
                            </div>

                            <Button className="w-full max-w-sm h-14 text-xl rounded-xl shadow-xl shadow-scuf-green/20 bg-scuf-green hover:bg-scuf-green/90">
                                Bli medlem nu! 🚀
                            </Button>
                            <button onClick={() => setStep(2)} className="w-full text-sm text-scuf-dark/40 hover:text-scuf-dark mt-2">
                                Ändra uppgifter
                            </button>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}
