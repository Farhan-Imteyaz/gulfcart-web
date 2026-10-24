"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { navGroups, navLinks } from "@/lib/nav";
import { CaretDownIcon } from "@phosphor-icons/react";
export default function Header() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenu(false);
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const active = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-500/20 bg-white/85 backdrop-blur ">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label={site.name}
        >
          <Image
            src="/heroimg/gulfcart-logo (1).webp"
            alt={site.name}
            width={140}
            height={32}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop */}
        <nav
          ref={navRef}
          aria-label="Main"
          className="hidden items-center gap-1 text-sm md:flex"
        >
          {navGroups.map((g) => {
            const isOpen = open === g.label;
            const current = g.items.some((i) => active(i.href));
            return (
              <div
                key={g.label}
                className="relative"
                onMouseEnter={() => setOpen(g.label)}
                onMouseLeave={() => setOpen(null)}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setOpen(isOpen ? null : g.label)}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 transition hover:bg-tile-hover hover:text-fg ${current || isOpen ? "text-fg" : "text-muted"}`}
                >
                  {g.label}
                  <CaretDownIcon
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="absolute left-0 top-full w-80 pt-2">
                    <ul className="rounded-2xl border border-gray-500/20 bg-white p-2 shadow-2xl shadow-brand-accent/10">
                      {g.items.map((i) => (
                        <li key={i.href}>
                          <Link
                            href={i.href}
                            className={`block rounded-xl px-3 py-2.5 transition hover:bg-tile-hover ${active(i.href) ? "bg-accent/[0.06]" : ""}`}
                          >
                            <span className="block font-medium text-fg">
                              {i.label}
                            </span>
                            {i.desc && (
                              <span className="block text-xs text-muted">
                                {i.desc}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg px-3 py-2 transition hover:bg-tile-hover hover:text-fg ${active(l.href) ? "text-fg" : "text-muted"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={site.demoPath}
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-white shadow-md shadow-brand-accent/25 transition hover:opacity-90 sm:inline-block"
          >
            Book a demo
          </Link>
          <button
            type="button"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            aria-controls="mobile-nav"
            onClick={() => setMenu((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-500/20 md:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d={
                  menu ? "M5 5l10 10M15 5L5 15" : "M3 5.5h14M3 10h14M3 14.5h14"
                }
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div
        id="mobile-nav"
        className={`overflow-y-auto border-gray-500/20 bg-white transition-[max-height] duration-300 md:hidden ${menu ? "max-h-[80vh] border-t" : "max-h-0"}`}
      >
        <nav
          aria-label="Mobile"
          className="container-px space-y-1 py-4 text-sm"
        >
          {navGroups.map((g) => (
            <details key={g.label} className="group rounded-xl">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 font-medium hover:bg-tile-hover">
                {g.label}
                <span className="text-muted transition-transform group-open:rotate-180">
                  <CaretDownIcon
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </span>
              </summary>
              <ul className="mb-2 ml-3 border-l border-gray-500/20 pl-2">
                {g.items.map((i) => (
                  <li key={i.href}>
                    <Link
                      href={i.href}
                      className={`block rounded-lg px-3 py-2.5 hover:bg-tile-hover ${active(i.href) ? "text-brand-accent" : "text-muted"}`}
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block rounded-xl px-3 py-3 font-medium hover:bg-tile-hover"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={site.demoPath}
            className="mt-3 block rounded-full bg-accent px-4 py-3 text-center font-medium text-white shadow-md shadow-brand-accent/25"
          >
            Book a demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
