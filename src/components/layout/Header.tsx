"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";

const BOOKING_URL = "https://timma.no/salong/Rebel";

const navLinks = [
  { href: "/tjenester", label: "Tjenester" },
  { href: "/om", label: "Om" },
  { href: "/galleri", label: "Galleri" },
  { href: "/kurs", label: "Kurs" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-200
        ${isScrolled ? "bg-deep/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/logo.png"
              alt="Rebel Barber"
              width={120}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm uppercase tracking-wider text-heading hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Button
              href={BOOKING_URL}
              external
              size="sm"
              className="hidden sm:inline-flex"
            >
              Book time
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-10 p-2 text-heading"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Lukk meny" : "Åpne meny"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`
                    block h-0.5 w-full bg-current transform transition-transform
                    ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}
                  `}
                />
                <span
                  className={`
                    block h-0.5 w-full bg-current transition-opacity
                    ${isMobileMenuOpen ? "opacity-0" : ""}
                  `}
                />
                <span
                  className={`
                    block h-0.5 w-full bg-current transform transition-transform
                    ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}
                  `}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed inset-0 bg-deep z-40
          transition-all duration-300
          ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div className="container h-full flex flex-col justify-center">
          <ul className="space-y-6 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-2xl font-heading text-heading hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-6">
              <Button href={BOOKING_URL} external size="lg" fullWidth>
                Book time
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
