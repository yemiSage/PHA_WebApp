"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

const navigationItems = [
  { href: "/programmes", label: "Programs", route: "/programmes" },
  { href: "/#programmes", label: "Courses", route: "/courses" },
  { href: "/talent-pool", label: "Talent Pool", route: "/talent-pool" },
  { href: "/about", label: "About us", route: "/about" },
  { href: "/contact", label: "Contact Us", route: "/contact" },
] as const;

function preferredScrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
      <Link
        className="site-header__logo"
        href="/"
        aria-label="Product Hub Africa home"
        onClick={(event) => {
          setMenuOpen(false);

          if (pathname === "/") {
            event.preventDefault();
            window.history.pushState(null, "", "/");
            window.scrollTo({ top: 0, left: 0, behavior: preferredScrollBehavior() });
          }
        }}
      >
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
        {navigationItems.map((item) => {
          const active = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              className={active ? "site-header__link--active" : undefined}
              href={item.href}
              aria-current={active ? "page" : undefined}
              key={item.label}
              onClick={(event) => {
                setMenuOpen(false);

                if (pathname === "/" && item.href.startsWith("/#")) {
                  event.preventDefault();
                  const target = document.querySelector<HTMLElement>(item.href.slice(1));
                  window.history.pushState(null, "", item.href);

                  if (target) {
                    const headerBottom = event.currentTarget.closest("header")?.getBoundingClientRect().bottom ?? 0;
                    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerBottom - 20;
                    window.scrollTo({ top: targetTop, behavior: preferredScrollBehavior() });
                  }
                }
              }}
            >
              {item.label}
            </Link>
          );
        })}
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

