"use client";

import { useState } from "react";
import { Eye, ChevronDown, ChevronRight } from "lucide-react";
import { ProjectModal } from "./ProjectModal";

interface ShowcaseProject {
  key: string;
  title: string;
  description: string;
  details: string[];
  tags: string[];
  gradient: string;
  clickable?: boolean;
  mediaCount?: 1 | 2 | 6;
}

interface ShowcaseSectionProps {
  projects: ShowcaseProject[];
  extraProjects: ShowcaseProject[];
  addMediaLabel: string;
  closeLabel: string;
  seeDetailsLabel: string;
  showMoreLabel: string;
  showLessLabel: string;
}

function ProjectCard({
  project,
  addMediaLabel,
  seeDetailsLabel,
  onClick,
  featured,
}: {
  project: ShowcaseProject;
  addMediaLabel: string;
  seeDetailsLabel: string;
  onClick?: () => void;
  featured?: boolean;
}) {
  const isClickable = project.clickable !== false;
  return (
    <div
      className={`glass-card rounded-3xl overflow-hidden ${featured ? "mb-6" : ""} ${isClickable ? "cursor-pointer group" : ""}`}
      onClick={isClickable ? onClick : undefined}
    >
      <div
        className={`media-placeholder ${featured ? "aspect-video" : "aspect-[4/3]"} rounded-b-none relative`}
        style={{ background: project.gradient }}
      >
        <div className="text-center">
          <Eye
            className={`${featured ? "w-10 h-10" : "w-8 h-8"} text-[var(--text-muted)] mx-auto mb-2`}
          />
          <p className="text-xs text-[var(--text-muted)]">{addMediaLabel}</p>
        </div>
      </div>
      <div className={featured ? "p-6 md:p-8" : "p-6"}>
        <h3
          className={`${featured ? "text-xl md:text-2xl" : "text-lg md:text-xl"} font-semibold`}
        >
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-[var(--text-secondary)] mt-2 leading-relaxed">
          {project.description}
        </p>
        <div className={`flex flex-wrap gap-2 ${featured ? "mt-4" : "mt-3"}`}>
          {project.tags.map((tag) => (
            <span key={tag} className="skill-tag">
              {tag}
            </span>
          ))}
        </div>
        {isClickable && (
          <div className="flex items-center gap-1 mt-4 opacity-40 group-hover:opacity-80 transition-opacity">
            <span className="text-xs gradient-text font-medium">{seeDetailsLabel}</span>
            <ChevronRight className="w-3 h-3 text-[var(--text-muted)]" />
          </div>
        )}
      </div>
    </div>
  );
}

export function ShowcaseSection({
  projects,
  extraProjects,
  addMediaLabel,
  closeLabel,
  seeDetailsLabel,
  showMoreLabel,
  showLessLabel,
}: ShowcaseSectionProps) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const allProjects = [...projects, ...extraProjects];
  const activeProject = allProjects.find((p) => p.key === activeKey);

  const featured = projects[0];
  const grid = projects.slice(1);

  return (
    <>
      {/* Featured — first project */}
      {featured && (
        <div className="scroll-reveal">
          <ProjectCard
            project={featured}
            addMediaLabel={addMediaLabel}
            seeDetailsLabel={seeDetailsLabel}
            onClick={() => setActiveKey(featured.key)}
            featured
          />
        </div>
      )}

      {/* 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {grid.map((project) => (
          <div key={project.key} className="scroll-reveal">
            <ProjectCard
              project={project}
              addMediaLabel={addMediaLabel}
              seeDetailsLabel={seeDetailsLabel}
              onClick={() => setActiveKey(project.key)}
            />
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
                    seeDetailsLabel={seeDetailsLabel}
                    onClick={() => setActiveKey(project.key)}
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

      {/* Modal */}
      {activeProject && activeProject.clickable !== false && (
        <ProjectModal
          isOpen={!!activeKey}
          onClose={() => setActiveKey(null)}
          title={activeProject.title}
          description={activeProject.description}
          details={activeProject.details}
          tags={activeProject.tags}
          backgroundGradient={activeProject.gradient}
          closeLabel={closeLabel}
          addMediaLabel={addMediaLabel}
          mediaCount={activeProject.mediaCount}
        />
      )}
    </>
  );
}
