"use client";

import { motion } from "framer-motion";
import { Users, History, Heart, Target } from "lucide-react";
import Image from "next/image";

export function AboutHero() {
    return (
        <section className="relative py-24 bg-scuf-green overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-white skew-x-12 translate-x-20" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-6 border border-white/20">
                        Om SCUF
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Det här är <span className="text-scuf-yellow">vi</span>
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
                        Svenska Celiakiungdomsförbundet (SCUF) är en ideell organisation för barn och unga som lever med celiaki. Vi arbetar för att alla med celiaki ska kunna leva ett fritt, tryggt och lekfullt liv – utan hinder eller utanförskap.
                    </p>
                </motion.div>
            </div>
        </section >
    );
}

export function AboutContent() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 space-y-24">

                {/* Intro & Vision */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-scuf-dark mb-6">Vår vision</h2>
                        <p className="text-xl font-medium text-scuf-green mb-6 leading-relaxed">
                            "Barn och unga med celiaki ska kunna leva sina liv på samma villkor som andra – utan att begränsas av sin diagnos."
                        </p>
                        <p className="text-scuf-dark/70 text-lg leading-relaxed mb-6">
                            SCUF skapar mötesplatser där barn och unga får träffa andra i samma situation, dela erfarenheter och bygga gemenskap. Tillsammans stärker vi ungas röst och arbetar för ett mer tillgängligt och inkluderande samhälle.
                        </p>
                        <p className="text-scuf-dark/70 text-lg leading-relaxed">
                            Våra medlemmar är mellan 0 och 29 år, och SCUF drivs av sina medlemmar – för medlemmar.
                        </p>
                    </div>
                    <div className="bg-neutral-light rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-scuf-yellow/20 rounded-full blur-3xl -mr-16 -mt-16" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-scuf-green/10 rounded-full blur-3xl -ml-16 -mb-16" />

                        <h3 className="text-2xl font-bold text-scuf-dark mb-6">Våra värderingar</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-scuf-green/20 flex items-center justify-center text-2xl">🕊️</div>
                                <div>
                                    <h4 className="font-bold text-scuf-dark">Frihet</h4>
                                    <p className="text-scuf-dark/70 text-sm">Vi vill att barn och unga med celiaki ska känna sig fria att leva sina liv fullt ut, utan att celiakin står i vägen.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-scuf-red/20 flex items-center justify-center text-2xl">❤️</div>
                                <div>
                                    <h4 className="font-bold text-scuf-dark">Trygghet</h4>
                                    <p className="text-scuf-dark/70 text-sm">SCUF är en trygg plats där erfarenhet, gemenskap och förståelse minskar oro och ensamhet.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-scuf-yellow/20 flex items-center justify-center text-2xl">🎈</div>
                                <div>
                                    <h4 className="font-bold text-scuf-dark">Lekfullhet</h4>
                                    <p className="text-scuf-dark/70 text-sm">Hos oss finns plats för glädje, energi och kreativitet. Vi tror på att ha roligt, testa idéer och skapa positiva upplevelser tillsammans.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vad vi gör */}
                <div>
                    <div className="text-center mb-12">
                        <span className="text-scuf-green font-bold tracking-widest uppercase text-sm">Verksamhet</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-scuf-dark mt-2">Vad vi gör</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6">🤝</div>
                            <h3 className="text-xl font-bold text-scuf-dark mb-3">Social verksamhet</h3>
                            <p className="text-scuf-dark/70">Genom läger, träffar och aktiviteter skapar vi trygga sammanhang där barn och unga med celiaki kan vara sig själva. Här får de nya vänner, positiva upplevelser och stärkt självkänsla.</p>
                        </div>
                        <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6">📢</div>
                            <h3 className="text-xl font-bold text-scuf-dark mb-3">Påverkansarbete</h3>
                            <p className="text-scuf-dark/70">SCUF arbetar för att barns och ungas perspektiv tas på allvar i frågor som rör celiaki. Vi sprider kunskap, delar erfarenheter och lyfter goda exempel för att påverka samhället i en mer tillgänglig riktning.</p>
                        </div>
                        <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6">🏗️</div>
                            <h3 className="text-xl font-bold text-scuf-dark mb-3">Förbundsuppbyggnad</h3>
                            <p className="text-scuf-dark/70">SCUF är ett medlemsdrivet förbund. Våra medlemmar är grunden i allt vi gör – utan dem finns inget SCUF. Genom engagemang, demokrati och delaktighet bygger vi organisationen tillsammans.</p>
                        </div>
                    </div>
                </div>

                {/* Parent Org */}
                <div className="bg-scuf-dark text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">SCUF och Svenska Celiakiförbundet</h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            SCUF är ungdomsförbund till Svenska Celiakiförbundet, som verkar för personer med celiaki i alla åldrar och har omkring 18 000 medlemmar.
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-scuf-green/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />
                </div>

            </div>
        </section>
    );
}

const STATS = [
    { label: "Grundades", value: "1975", icon: History },
    { label: "Medlemmar", value: "18 000+", icon: Users },
    { label: "Ideella", value: "100+", icon: Heart },
    { label: "Läger/år", value: "10+", icon: Target },
];

export function AboutStats() {
    return (
        <section className="py-12 bg-white -mt-12 relative z-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-neutral-100">
                    {STATS.map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="w-12 h-12 mx-auto bg-neutral-light rounded-full flex items-center justify-center text-scuf-green mb-4 group-hover:scale-110 transition-transform group-hover:bg-scuf-green group-hover:text-white">
                                <stat.icon size={24} />
                            </div>
                            <div className="text-3xl font-extrabold text-scuf-dark">{stat.value}</div>
                            <div className="text-sm font-bold text-scuf-dark/50 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function OrganizationMap() {
    return (
        <section className="py-20 bg-neutral-light/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-scuf-dark mb-6">Hela Sverige är vårt fikarum.</h2>
                        <p className="text-lg text-scuf-dark/70 mb-6 leading-relaxed">
                            SCUF finns där du finns. Vi är uppdelade i flera medlemsföreningar som ordnar lokala aktiviteter – från pizzakvällar i Malmö till skidresor i Åre.
                        </p>
                        <ul className="space-y-4">
                            {["SCUF Väst", "SCUF Stockholm", "SCUF Syd", "SCUF Mitt", "SCUF Norr"].map((region) => (
                                <li key={region} className="flex items-center gap-3 font-bold text-scuf-dark p-3 bg-white rounded-xl shadow-sm border border-neutral-200/50">
                                    <span className="w-3 h-3 rounded-full bg-scuf-green" />
                                    {region}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-3xl shadow-lg rotate-2 border-4 border-white">
                        {/* Placeholder for Map Image */}
                        <div className="bg-neutral-100 w-full aspect-square rounded-2xl overflow-hidden relative border border-neutral-200">
                            <Image
                                src="https://loremflickr.com/800/800/map,sweden"
                                alt="Sverigekarta"
                                fill
                                className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <span className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full font-extrabold text-scuf-dark shadow-lg">
                                    📍 Hitta din förening
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function TeamSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-scuf-green font-bold tracking-widest uppercase text-sm">Vilka är vi?</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-scuf-dark mt-2">
                        Möt styrelsen
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="group text-center">
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-neutral-100 border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={`https://loremflickr.com/400/400/portrait,business,${i}`}
                                    alt="Porträtt"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-scuf-dark mb-1">Namn Efternamn</h3>
                            <p className="text-scuf-green font-medium mb-3">Roll / Titel</p>
                            <p className="text-sm text-scuf-dark/60 leading-relaxed px-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ContactSection() {
    return (
        <section className="py-24 bg-neutral-light relative">
            {/* Decorative Wave Top (Simplified) */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-white rounded-b-[50%] scale-x-150 translate-y-[-50%] z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-scuf-dark mb-12 text-center">Kontakt</h2>

                    <div className="grid md:grid-cols-2 gap-12 text-lg">
                        {/* Left Column */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-bold text-scuf-dark/70 uppercase tracking-wider text-sm mb-2">Besöksadress</h3>
                                <p className="font-medium text-scuf-dark">
                                    Tegelviksgatan 40<br />
                                    116 41 Stockholm
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-scuf-dark/70 uppercase tracking-wider text-sm mb-2">E-post</h3>
                                <a href="mailto:info@scuf.se" className="font-medium text-scuf-green hover:underline">
                                    info@scuf.se
                                </a>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-bold text-scuf-dark/70 uppercase tracking-wider text-sm mb-2">Organisationsnummer</h3>
                                <p className="font-medium text-scuf-dark">815201-3861</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-scuf-dark/70 uppercase tracking-wider text-sm mb-2">Bankgironummer</h3>
                                <p className="font-medium text-scuf-dark">5770-1732</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-scuf-dark/70 uppercase tracking-wider text-sm mb-2">Swishnummer</h3>
                                <p className="font-medium text-scuf-dark">123 588 56 45</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
