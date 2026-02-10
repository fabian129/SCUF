"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { href: "/om-scuf", label: "Om SCUF" },
    { href: "/nyheter", label: "Nyheter" },
    { href: "/kunskap", label: "Kunskap" },
    { href: "/aktiviteter", label: "Aktiviteter" },
    { href: "/barn", label: "Barn", special: "s1" },
    { href: "/ungdomar", label: "Ungdomar", special: "s2" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <Link href="/" className="relative z-50">
                        {/* Logo Placeholder */}
                        <div className="flex items-center gap-2">
                            <Image
                                src="/assets/logo.svg"
                                alt="SCUF Logo"
                                width={100}
                                height={40}
                                className="w-auto h-8 md:h-10"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-bold transition-colors hover:text-scuf-green relative",
                                    pathname.startsWith(link.href) && link.href !== "/" || pathname === link.href
                                        ? "text-scuf-green"
                                        : "text-scuf-dark/80",
                                    link.special === "s1" && "text-scuf-green hover:text-scuf-green/80",
                                    link.special === "s2" && "text-scuf-dark hover:text-black"
                                )}
                            >
                                {link.label}
                                {(pathname.startsWith(link.href) && link.href !== "/" || pathname === link.href) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-scuf-green rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                        <Link href="/bli-medlem">
                            <Button size="sm" className="shadow-md shadow-scuf-green/20 hover:shadow-lg hover:shadow-scuf-green/30 transition-all hover:scale-105 font-bold">Bli medlem</Button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden relative z-50 p-2 text-scuf-dark"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-white pt-24 pb-8 px-6 lg:hidden flex flex-col"
                    >
                        <nav className="flex flex-col gap-6 text-2xl font-bold text-center">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "block py-3 text-3xl font-extrabold transition-colors",
                                        pathname.startsWith(link.href) && link.href !== "/" || pathname === link.href
                                            ? "text-scuf-green"
                                            : "text-scuf-dark hover:text-scuf-dark/70"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-8">
                                <Link href="/bli-medlem" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button size="lg" className="w-full text-lg">Bli medlem gratis</Button>
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
