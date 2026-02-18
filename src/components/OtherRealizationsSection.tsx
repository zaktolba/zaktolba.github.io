"use client";

import { useState } from "react";
import { Play, ShieldCheck, Eye, ChevronDown } from "lucide-react";

interface OtherProject {
  key: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  icon: "play" | "shield" | "eye";
}

interface OtherRealizationsSectionProps {
  projects: OtherProject[];
  extraProjects: OtherProject[];
  addMediaLabel: string;
  showMoreLabel: string;
  showLessLabel: string;
}

const iconMap = {
  play: Play,
  shield: ShieldCheck,
  eye: Eye,
};

function ProjectCard({
  project,
  addMediaLabel,
}: {
  project: OtherProject;
  addMediaLabel: string;
}) {
  const Icon = iconMap[project.icon];
  return (
    <div className="glass-card rounded-3xl overflow-hidden">
      <div
        className="media-placeholder aspect-[4/3] rounded-b-none relative"
        style={{ background: project.gradient }}
      >
        <div className="text-center">
          <Icon className="w-8 h-8 text-[var(--text-muted)] mx-auto mb-2" />
          <p className="text-xs text-[var(--text-muted)]">{addMediaLabel}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
        <p className="text-sm md:text-base text-[var(--text-secondary)] mt-2 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span key={tag} className="skill-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OtherRealizationsSection({
  projects,
  extraProjects,
  addMediaLabel,
  showMoreLabel,
  showLessLabel,
}: OtherRealizationsSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.key} className="scroll-reveal">
            <ProjectCard project={project} addMediaLabel={addMediaLabel} />
          </div>
        ))}
      </div>

      {/* Expandable extra projects */}
      {extraProjects.length > 0 && (
        <>
          <div
            className="expand-grid mt-6"
            style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {extraProjects.map((project) => (
                  <ProjectCard
                    key={project.key}
                    project={project}
                    addMediaLabel={addMediaLabel}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 mx-auto flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            {expanded ? showLessLabel : showMoreLabel}
            <ChevronDown
              className="w-4 h-4 transition-transform duration-300"
              style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
        </>
      )}
    </>
  );
}
