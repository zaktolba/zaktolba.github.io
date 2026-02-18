"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, Eye } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  details: string[];
  tags: string[];
  backgroundGradient: string;
  closeLabel: string;
  addMediaLabel: string;
  mediaCount?: 1 | 2 | 6;
}

function MediaSlot({
  gradient,
  label,
  large,
  opacity = 1,
}: {
  gradient: string;
  label: string;
  large?: boolean;
  opacity?: number;
}) {
  return (
    <div
      className="media-placeholder rounded-2xl relative w-full h-full"
      style={{ background: gradient, opacity }}
    >
      <div className="text-center">
        <Eye
          className={`${large ? "w-10 h-10" : "w-6 h-6"} text-[var(--text-muted)] mx-auto ${large ? "mb-2" : "mb-1"}`}
        />
        <p className={`${large ? "text-xs" : "text-[10px]"} text-[var(--text-muted)]`}>
          {label}
        </p>
      </div>
    </div>
  );
}

export function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  details,
  tags,
  backgroundGradient,
  closeLabel,
  addMediaLabel,
  mediaCount = 6,
}: ProjectModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      style={{ animation: "overlay-enter 0.2s ease-out" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-strong rounded-3xl shadow-2xl"
        style={{ animation: "modal-enter 0.25s ease-out" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl glass hover:bg-[var(--glass-bg-hover)] transition-colors"
          aria-label={closeLabel}
        >
          <X className="w-4 h-4 text-[var(--text-secondary)]" />
        </button>

        {/* Media area */}
        <div className="p-3 pb-0">
          {mediaCount === 1 && (
            <div
              className="media-placeholder rounded-2xl relative aspect-video"
              style={{ background: backgroundGradient }}
            >
              <div className="text-center">
                <Eye className="w-10 h-10 text-[var(--text-muted)] mx-auto mb-2" />
                <p className="text-xs text-[var(--text-muted)]">{addMediaLabel}</p>
              </div>
            </div>
          )}

          {mediaCount === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div
                className="media-placeholder rounded-2xl relative aspect-[4/3]"
                style={{ background: backgroundGradient }}
              >
                <div className="text-center">
                  <Eye className="w-10 h-10 text-[var(--text-muted)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)]">{addMediaLabel}</p>
                </div>
              </div>
              <div
                className="media-placeholder rounded-2xl relative aspect-[4/3]"
                style={{ background: backgroundGradient, opacity: 0.7 }}
              >
                <div className="text-center">
                  <Eye className="w-10 h-10 text-[var(--text-muted)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)]">{addMediaLabel}</p>
                </div>
              </div>
            </div>
          )}

          {mediaCount === 6 && (
            <div className="flex flex-col gap-2 md:grid md:grid-cols-4 md:grid-rows-[1fr_1fr]" style={{ minHeight: "320px" }}>
              <div
                className="md:col-span-2 md:row-span-2 media-placeholder rounded-2xl relative aspect-video md:aspect-auto min-h-[160px]"
                style={{ background: backgroundGradient }}
              >
                <div className="text-center">
                  <Eye className="w-10 h-10 text-[var(--text-muted)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)]">{addMediaLabel}</p>
                </div>
              </div>
              <div
                className="media-placeholder rounded-2xl relative aspect-video md:aspect-auto"
                style={{ background: backgroundGradient, opacity: 0.75 }}
              >
                <div className="text-center">
                  <Eye className="w-6 h-6 text-[var(--text-muted)] mx-auto mb-1" />
                  <p className="text-[10px] text-[var(--text-muted)]">{addMediaLabel}</p>
                </div>
              </div>
              <div className="hidden md:flex"><MediaSlot gradient={backgroundGradient} label={addMediaLabel} opacity={0.6} /></div>
              <div className="hidden md:flex"><MediaSlot gradient={backgroundGradient} label={addMediaLabel} opacity={0.5} /></div>
              <div className="hidden md:flex"><MediaSlot gradient={backgroundGradient} label={addMediaLabel} opacity={0.4} /></div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:px-8 md:py-6">
          <h3 className="text-xl md:text-2xl font-semibold pr-8">{title}</h3>
          <p className="text-sm md:text-base text-[var(--text-secondary)] mt-3 leading-relaxed">
            {description}
          </p>
          {details.length > 0 && (
            <div className="mt-5 space-y-3">
              {details.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-sm text-[var(--text-tertiary)] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-5">
            {tags.map((tag) => (
              <span key={tag} className="skill-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
