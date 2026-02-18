"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface ExpandableExperienceProps {
  logo: ReactNode;
  role: string;
  company: string;
  date: string;
  summary: string;
  details?: string;
  tags: string[];
  expandable?: boolean;
  expandLabel?: string;
  closeLabel?: string;
}

export function ExpandableExperience({
  logo,
  role,
  company,
  date,
  summary,
  details,
  tags,
  expandable = false,
  expandLabel = "Click for details",
  closeLabel = "Close",
}: ExpandableExperienceProps) {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleClick = () => {
    if (expandable) setExpanded(!expanded);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (expandable && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <>
      <div className="relative mb-10 scroll-reveal">
        <div className="timeline-dot" />
        <div
          className={`glass-card rounded-2xl p-5 md:p-6 ${expandable ? "cursor-pointer group" : ""}`}
          onClick={handleClick}
          role={expandable ? "button" : undefined}
          tabIndex={expandable ? 0 : undefined}
          onKeyDown={expandable ? handleKeyDown : undefined}
          aria-expanded={expandable ? expanded : undefined}
        >
          <div className="flex items-start gap-3.5">
            {/* Logo spot */}
            <div className="logo-spot mt-0.5">{logo}</div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2.5">
                <div>
                  <h3 className="text-base md:text-lg font-semibold leading-snug">
                    {role}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--company-text)" }}>
                    {company}
                  </p>
                </div>
                <span className="text-xs text-[var(--text-muted)] font-mono whitespace-nowrap mt-1">
                  {date}
                </span>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {summary}
              </p>

              {/* Expand indicator */}
              {expandable && !expanded && (
                <div className="flex items-center gap-1.5 mt-3 opacity-50 group-hover:opacity-90 transition-opacity">
                  <ChevronDown className="w-3.5 h-3.5 text-[var(--company-text)]" />
                  <span
                    className="text-xs"
                    style={{ color: "var(--company-text)" }}
                  >
                    {expandLabel}
                  </span>
                </div>
              )}

              {/* Inline expanded content (desktop only) */}
              {expandable && details && (
                <div
                  className="expand-grid"
                  style={{
                    gridTemplateRows:
                      expanded && !isMobile ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 mt-4 border-t border-[var(--glass-border)]">
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {details}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((t) => (
                  <span key={t} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Modal / Bottom Sheet */}
      {expandable && expanded && isMobile && (
        <div
          className="fixed inset-0 z-50 flex items-end"
          onClick={() => setExpanded(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="relative w-full glass-strong rounded-t-3xl p-6 pb-10 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag indicator */}
            <div className="w-10 h-1 rounded-full bg-[var(--glass-border-hover)] mx-auto mb-6" />

            <div className="flex items-start gap-3.5 mb-5">
              <div className="logo-spot">{logo}</div>
              <div>
                <h3 className="text-lg font-semibold leading-snug">{role}</h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--company-text)" }}
                >
                  {company}
                </p>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  {date}
                </span>
              </div>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
              {details || summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((t) => (
                <span key={t} className="skill-tag">
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={() => setExpanded(false)}
              className="w-full glass-card rounded-xl py-3 text-sm text-center text-[var(--text-secondary)]"
            >
              {closeLabel}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
