"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-scuf-dark text-white pt-12 md:pt-24 pb-10 rounded-t-[2rem] md:rounded-t-[3rem] mt-12 relative overflow-hidden">
            {/* Background Sparkle */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-scuf-green/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-scuf-yellow/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand & Intro */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/assets/logo.svg"
                                alt="SCUF Logo"
                                width={100}
                                height={40}
                                className="w-auto h-10 brightness-0 invert"
                            />
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Vi är intresseorganisationen för barn och unga mellan 0–29 år med celiaki. Tillsammans skapar vi gemenskap och sprider kunskap.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-scuf-green transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-scuf-green transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Snabblänkar */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Hitta snabbt</h3>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><Link href="/om-scuf" className="hover:text-scuf-green transition-colors">Om SCUF</Link></li>
                            <li><Link href="/medlemskap" className="hover:text-scuf-green transition-colors">Medlemsförmåner</Link></li>
                            <li><Link href="/aktiviteter" className="hover:text-scuf-green transition-colors">Kalender</Link></li>
                            <li><Link href="/kunskap" className="hover:text-scuf-green transition-colors">Om Celiaki</Link></li>
                            <li><Link href="/kontakt" className="hover:text-scuf-green transition-colors">Kontakta oss</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Kontakt */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Kontakt</h3>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-scuf-green mt-0.5" />
                                <a href="mailto:info@scuf.se" className="hover:text-white transition-colors">info@scuf.se</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-scuf-green mt-0.5" />
                                <a href="tel:0812345678" className="hover:text-white transition-colors">08-123 456 78</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-scuf-green mt-0.5" />
                                <span>Norr Mälarstrand 24<br />112 20 Stockholm</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: CTA */}
                    <div className="bg-white/5 p-6 rounded-2xl">
                        <h3 className="font-bold text-lg mb-2">Inte medlem än?</h3>
                        <p className="text-sm text-white/60 mb-6">
                            Det är helt gratis att vara medlem i SCUF för dig mellan 0–29 år.
                        </p>
                        <Link href="/bli-medlem">
                            <Button className="w-full bg-scuf-green hover:bg-scuf-green/90 text-white font-bold shadow-lg shadow-scuf-green/20 transition-all hover:scale-105">
                                Bli medlem nu
                            </Button>
                        </Link>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
                    <p>© {currentYear} Svenska Celiakiungdomsförbundet. Alla rättigheter reserverade.</p>
                    <div className="flex gap-6">
                        <Link href="/integritetspolicy" className="hover:text-white transition-colors">Integritetspolicy</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
