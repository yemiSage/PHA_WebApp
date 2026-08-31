"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.documentElement.style.overflow;

    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      desktopQuery.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header className={`site-header ${menuOpen ? "site-header--open" : ""}`} aria-label="Main navigation">
      <Link className="site-header__logo" href="/" aria-label="Product Hub Africa home">
        <Image src="/assets/header-logo.png" width={102} height={43} alt="Product Hub Africa" loading="eager" />
      </Link>
      <nav
        className="site-header__nav"
        id="primary-navigation"
        aria-label="Primary"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) setMenuOpen(false);
        }}
      >
        <Link href="/#programmes" onClick={() => setMenuOpen(false)}>Programmes <Image src="/assets/down.svg" width={20} height={20} alt="" aria-hidden="true" /></Link>
        <Link href="/talent-pool" onClick={() => setMenuOpen(false)}>Talent Pool</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About us</Link>
        <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        <Button href="/#community" size="small" className="site-header__mobile-cta">Join our community</Button>
      </nav>
      <Button href="/#community" size="small" arrow className="site-header__cta">Join our community</Button>
      <button
        className="site-header__toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span />
      </button>
    </header>
  );
}
