"use client";

import { useTheme } from "next-themes";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { Sun, Moon, Globe, Download } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const t = useTranslations("nav");
  const { resolvedTheme, setTheme } = useTheme();
  const locale = useLocale();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const newLocale = locale === "en" ? "fr" : "en";
  const localeHref = `/${newLocale}${pathname === "/" ? "/" : pathname + "/"}`;

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 glass-strong rounded-2xl shadow-lg shadow-black/10 dark:shadow-black/20">
      <div className="flex items-center gap-5 px-4 py-2.5 md:px-5 md:gap-6">
        <a
          href="#"
          className="font-semibold text-sm gradient-text tracking-wide"
        >
          ZT
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#experience"
            className="nav-link text-[13px] text-[var(--text-muted)] tracking-wide"
          >
            {t("experience")}
          </a>
          <a
            href="#showcase"
            className="nav-link text-[13px] text-[var(--text-muted)] tracking-wide"
          >
            {t("showcase")}
          </a>
          <a
            href="#education"
            className="nav-link text-[13px] text-[var(--text-muted)] tracking-wide"
          >
            {t("education")}
          </a>
          <a
            href="#skills"
            className="nav-link text-[13px] text-[var(--text-muted)] tracking-wide"
          >
            {t("skills")}
          </a>
          <a
            href="#contact"
            className="nav-link text-[13px] text-[var(--text-muted)] tracking-wide"
          >
            {t("contact")}
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 ml-auto md:ml-0">
          {/* PDF Download */}
          <a
            href="/cv-zakarya-tolba-2026.pdf"
            download="CV Zakarya TOLBA 2026.pdf"
            className="p-2 rounded-lg hover:bg-[var(--glass-bg-hover)] transition-colors"
            title={t("downloadCV")}
          >
            <Download className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </a>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-[var(--glass-bg-hover)] transition-colors"
              aria-label={t("toggleTheme")}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              )}
            </button>
          )}

          {/* Language Toggle */}
          <a
            href={localeHref}
            className="p-2 rounded-lg hover:bg-[var(--glass-bg-hover)] transition-colors flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
              {newLocale.toUpperCase()}
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
