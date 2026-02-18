import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Navigation } from "@/components/Navigation";
import { ExpandableExperience } from "@/components/ExpandableExperience";
import { JsonLd } from "@/components/JsonLd";
import Image from "next/image";
import profileImg from "@/profile.jpg";
import {
  Glasses,
  Smartphone,
  Globe,
  Camera,
  Code,
  ShoppingBag,
  GraduationCap,
  BookOpen,
  Award,
  Eye,
  Play,
  ShieldCheck,
} from "lucide-react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <>
      <JsonLd />

      {/* ── Animated Background ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg-base)] transition-colors duration-300">
        <div className="absolute top-[-20%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-[var(--orb-purple)] blur-[120px] animate-[float-1_20s_ease-in-out_infinite]" />
        <div className="absolute top-[30%] right-[-15%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-[var(--orb-blue)] blur-[120px] animate-[float-2_25s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] left-[25%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-[var(--orb-pink)] blur-[120px] animate-[float-3_22s_ease-in-out_infinite]" />
        <div className="absolute top-[55%] left-[-8%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] rounded-full bg-[var(--orb-cyan)] blur-[100px] animate-[float-2_18s_ease-in-out_infinite_reverse]" />
      </div>

      {/* ── Navigation ── */}
      <Navigation />

      <main>
        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            {/* Profile Photo — replace inner div with <Image src="/profile.jpg" alt="Zakarya Tolba" width={112} height={112} className="object-cover w-full h-full" /> */}
            <div className="w-28 h-28 rounded-full mx-auto mb-8 glass-strong overflow-hidden ring-2 ring-[var(--glass-border)]">
              <Image src={profileImg} alt="Zakarya Tolba" width={112} height={112} className="object-cover w-full h-full" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Zakarya <span className="gradient-text">TOLBA</span>
            </h1>

            <p className="text-lg md:text-2xl text-[var(--text-secondary)] mt-4 font-light tracking-wide">
              {t("hero.subtitle")}
            </p>

            <p className="text-sm md:text-base text-[var(--text-tertiary)] mt-6 max-w-lg mx-auto leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex gap-3 justify-center mt-8">
              <a
                href="#contact"
                className="glass-card px-5 py-2.5 rounded-xl text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                {t("hero.cta")}
              </a>
              <a
                href="#showcase"
                className="glass-card px-5 py-2.5 rounded-xl text-sm font-medium"
              >
                <span className="gradient-text">{t("hero.ctaWork")}</span>
              </a>
            </div>

            <div className="mt-16 animate-gentle-bounce opacity-20">
              <svg
                className="w-5 h-5 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            EXPERIENCE & PROJECTS
        ════════════════════════════════════════ */}
        <section
          id="experience"
          className="max-w-4xl mx-auto px-6 py-24 md:py-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {t("experience.title")}{" "}
            <span className="gradient-text">
              {t("experience.titleAccent")}
            </span>
          </h2>
          <p className="text-[var(--text-tertiary)] text-sm md:text-base mb-14">
            {t("experience.subtitle")}
          </p>

          <div className="relative pl-14">
            <div className="timeline-line" />

            {/* Novelab — expandable */}
            <ExpandableExperience
              logo={
                /* Replace with: <Image src="/logos/novelab.png" alt="Novelab" width={20} height={20} /> */
                <Glasses className="w-5 h-5 text-[var(--text-muted)]" />
              }
              role={t("experience.novelab.role")}
              company={t("experience.novelab.company")}
              date={t("experience.novelab.date")}
              summary={t("experience.novelab.summary")}
              details={t("experience.novelab.details")}
              tags={[
                "Swift",
                "SwiftUI",
                "RealityKit",
                "Reality Composer Pro",
                "TypeScript",
                "React Native",
                "Horizon Worlds",
                "VR/AR Testing",
                "Fastlane",
                "AppKit",
              ]}
              expandable
              expandLabel={t("experience.expandLabel")}
              closeLabel={t("experience.closeLabel")}
            />

            {/* Seven Circles — expandable */}
            <ExpandableExperience
              logo={
                /* Replace with: <Image src="/logos/seven-circles.png" alt="Seven Circles" width={20} height={20} /> */
                <Smartphone className="w-5 h-5 text-[var(--text-muted)]" />
              }
              role={t("experience.sevenCircles.role")}
              company={t("experience.sevenCircles.company")}
              date={t("experience.sevenCircles.date")}
              summary={t("experience.sevenCircles.summary")}
              details={t("experience.sevenCircles.details")}
              tags={[
                "Swift",
                "SwiftUI",
                "UIKit",
                "CoreData",
                "SwiftCharts",
                "Beta Software",
                "GitLab CI",
                "Fastlane",
              ]}
              expandable
              expandLabel={t("experience.expandLabel")}
              closeLabel={t("experience.closeLabel")}
            />

            {/* BO INFOCOM */}
            <ExpandableExperience
              logo={
                <Globe className="w-5 h-5 text-[var(--text-muted)]" />
              }
              role={t("experience.boInfocom.role")}
              company={t("experience.boInfocom.company")}
              date={t("experience.boInfocom.date")}
              summary={t("experience.boInfocom.description")}
              tags={[
                "Symfony 5",
                "PHP",
                "Nextcloud API",
                "Namebay",
                "Stripe",
                "Zimbra",
              ]}
            />

            {/* Y'Menu */}
            <ExpandableExperience
              logo={
                <Camera className="w-5 h-5 text-[var(--text-muted)]" />
              }
              role={t("experience.ymenu.role")}
              company={t("experience.ymenu.company")}
              date={t("experience.ymenu.date")}
              summary={t("experience.ymenu.description")}
              tags={[
                "Swift",
                "SwiftUI",
                "ARKit 4",
                "Photogrammetry",
                "Meshroom",
                "Reality Composer",
              ]}
            />

            {/* NOMENDUM */}
            <ExpandableExperience
              logo={
                <Code className="w-5 h-5 text-[var(--text-muted)]" />
              }
              role={t("experience.nomendum.role")}
              company={t("experience.nomendum.company")}
              date={t("experience.nomendum.date")}
              summary={t("experience.nomendum.description")}
              tags={["React Native", "JavaScript"]}
            />

            {/* Shok'o */}
            <ExpandableExperience
              logo={
                <ShoppingBag className="w-5 h-5 text-[var(--text-muted)]" />
              }
              role={t("experience.shoko.role")}
              company={t("experience.shoko.company")}
              date={t("experience.shoko.date")}
              summary={t("experience.shoko.description")}
              tags={["Swift", "MVVM", "RxSwift"]}
            />
          </div>
        </section>

        {/* ════════════════════════════════════════
            visionOS SHOWCASE
        ════════════════════════════════════════ */}
        <section
          id="showcase"
          className="max-w-5xl mx-auto px-6 py-24 md:py-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {t("showcase.title")}{" "}
            <span className="gradient-text">
              {t("showcase.titleAccent")}
            </span>
          </h2>
          <p className="text-[var(--text-tertiary)] text-sm md:text-base mb-14">
            {t("showcase.subtitle")}
          </p>

          {/* Featured — Vehicle Showcase */}
          <div className="glass-card rounded-3xl overflow-hidden mb-6 scroll-reveal">
            <div
              className="media-placeholder aspect-video rounded-b-none relative"
              style={{ background: "var(--showcase-vehicle)" }}
            >
              {/* Replace with: <Image src="/images/vehicle-showcase.jpg" alt="Vehicle Showcase" fill className="object-cover" /> */}
              {/* Or: <video src="/videos/vehicle-showcase.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" /> */}
              <div className="text-center">
                <Eye className="w-10 h-10 text-[var(--text-muted)] mx-auto mb-2" />
                <p className="text-xs text-[var(--text-muted)]">
                  {t("showcase.addMedia")}
                </p>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold">
                {t("showcase.vehicleShowcase.title")}
              </h3>
              <p className="text-sm md:text-base text-[var(--text-secondary)] mt-2 leading-relaxed">
                {t("showcase.vehicleShowcase.description")}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["visionOS", "RealityKit", "Reality Composer Pro", "SwiftUI"].map(
                  (tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Turbine Viewer */}
            <div className="glass-card rounded-3xl overflow-hidden scroll-reveal">
              <div
                className="media-placeholder aspect-[4/3] rounded-b-none relative"
                style={{ background: "var(--showcase-turbine)" }}
              >
                <div className="text-center">
                  <Eye className="w-8 h-8 text-[var(--text-muted)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)]">
                    {t("showcase.addMedia")}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold">
                  {t("showcase.turbineViewer.title")}
                </h3>
                <p className="text-sm md:text-base text-[var(--text-secondary)] mt-2 leading-relaxed">
                  {t("showcase.turbineViewer.description")}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["visionOS", "RealityKit", "SwiftUI"].map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ceramics Viewer */}
            <div className="glass-card rounded-3xl overflow-hidden scroll-reveal">
              <div
                className="media-placeholder aspect-[4/3] rounded-b-none relative"
                style={{ background: "var(--showcase-ceramics)" }}
              >
                <div className="text-center">
                  <Eye className="w-8 h-8 text-[var(--text-muted)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)]">
                    {t("showcase.addMedia")}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold">
                  {t("showcase.ceramicsViewer.title")}
                </h3>
                <p className="text-sm md:text-base text-[var(--text-secondary)] mt-2 leading-relaxed">
                  {t("showcase.ceramicsViewer.description")}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["visionOS", "RealityKit", "Reality Composer Pro", "SwiftUI"].map(
                    (tag) => (
                      <span key={tag} className="skill-tag">
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════
            OTHER REALIZATIONS
        ════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {t("otherRealizations.title")}{" "}
            <span className="gradient-text">
              {t("otherRealizations.titleAccent")}
            </span>
          </h2>
          <p className="text-[var(--text-tertiary)] text-sm mb-14">
            {t("otherRealizations.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Goetia Academy */}
            <div className="glass-card rounded-3xl overflow-hidden scroll-reveal">
              <div
                className="media-placeholder aspect-[4/3] rounded-b-none relative"
                style={{ background: "var(--showcase-goetia)" }}
              >
                <div className="text-center">
                  <Play className="w-8 h-8 text-[var(--text-muted)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)]">
                    {t("showcase.addMedia")}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold">
                  {t("showcase.goetiaAcademy.title")}
                </h3>
                <p className="text-sm md:text-base text-[var(--text-secondary)] mt-2 leading-relaxed">
                  {t("showcase.goetiaAcademy.description")}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    "TypeScript",
                    "Horizon Worlds",
                    "Meta Quest",
                    "Mobile",
                  ].map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Spirit Sling XR */}
            <div className="glass-card rounded-3xl overflow-hidden scroll-reveal">
              <div
                className="media-placeholder aspect-[4/3] rounded-b-none relative"
                style={{ background: "var(--showcase-spiritsling)" }}
              >
                <div className="text-center">
                  <ShieldCheck className="w-8 h-8 text-[var(--text-muted)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)]">
                    {t("showcase.addMedia")}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold">
                  {t("showcase.spiritSling.title")}
                </h3>
                <p className="text-sm md:text-base text-[var(--text-secondary)] mt-2 leading-relaxed">
                  {t("showcase.spiritSling.description")}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["VR/AR Testing", "QA", "Mixed Reality"].map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            EDUCATION
        ════════════════════════════════════════ */}
        <section
          id="education"
          className="max-w-4xl mx-auto px-6 py-24 md:py-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {t("education.title")}
            <span className="gradient-text">
              {t("education.titleAccent")}
            </span>
          </h2>
          <p className="text-[var(--text-tertiary)] text-sm md:text-base mb-14">
            {t("education.subtitle")}
          </p>

          <div className="space-y-5">
            {/* Master's */}
            <article className="glass-card rounded-2xl p-5 md:p-6 scroll-reveal">
              <div className="flex items-start gap-3.5">
                <div className="logo-spot mt-0.5">
                  {/* Replace with: <Image src="/logos/ynov.png" alt="YNOV" width={20} height={20} /> */}
                  <GraduationCap className="w-5 h-5 text-[var(--text-muted)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">
                        {t("education.masters.title")}
                      </h3>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--company-text)" }}
                      >
                        {t("education.masters.school")}
                      </p>
                      <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                        {t("education.masters.details")}
                      </p>
                    </div>
                    <time className="text-xs text-[var(--text-muted)] font-mono whitespace-nowrap">
                      {t("education.masters.date")}
                    </time>
                  </div>
                </div>
              </div>
            </article>

            {/* Bachelor's */}
            <article className="glass-card rounded-2xl p-5 md:p-6 scroll-reveal">
              <div className="flex items-start gap-3.5">
                <div className="logo-spot mt-0.5">
                  <GraduationCap className="w-5 h-5 text-[var(--text-muted)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">
                        {t("education.bachelors.title")}
                      </h3>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--company-text)" }}
                      >
                        {t("education.bachelors.school")}
                      </p>
                      <p className="text-xs text-[var(--text-muted)] mt-2">
                        {t("education.bachelors.details")}
                      </p>
                    </div>
                    <time className="text-xs text-[var(--text-muted)] font-mono whitespace-nowrap">
                      {t("education.bachelors.date")}
                    </time>
                  </div>
                </div>
              </div>
            </article>

            {/* BTS */}
            <article className="glass-card rounded-2xl p-5 md:p-6 scroll-reveal">
              <div className="flex items-start gap-3.5">
                <div className="logo-spot mt-0.5">
                  {/* Replace with: <Image src="/logos/icof.png" alt="ICOF" width={20} height={20} /> */}
                  <BookOpen className="w-5 h-5 text-[var(--text-muted)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">
                        {t("education.bts.title")}
                      </h3>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--company-text)" }}
                      >
                        {t("education.bts.school")}
                      </p>
                      <p className="text-xs text-[var(--text-muted)] mt-2">
                        {t("education.bts.details")}
                      </p>
                    </div>
                    <time className="text-xs text-[var(--text-muted)] font-mono whitespace-nowrap">
                      {t("education.bts.date")}
                    </time>
                  </div>
                </div>
              </div>
            </article>

            {/* High School */}
            <article className="glass-card rounded-2xl p-5 md:p-6 scroll-reveal">
              <div className="flex items-start gap-3.5">
                <div className="logo-spot mt-0.5">
                  <Award className="w-5 h-5 text-[var(--text-muted)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">
                        {t("education.highSchool.title")}{" "}
                        <span className="text-[var(--text-tertiary)] font-normal">
                          {t("education.highSchool.honors")}
                        </span>
                      </h3>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--company-text)" }}
                      >
                        {t("education.highSchool.school")}
                      </p>
                    </div>
                    <time className="text-xs text-[var(--text-muted)] font-mono whitespace-nowrap">
                      {t("education.highSchool.date")}
                    </time>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SKILLS
        ════════════════════════════════════════ */}
        <section
          id="skills"
          className="max-w-4xl mx-auto px-6 py-24 md:py-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {t("skills.title")}{" "}
            <span className="gradient-text">{t("skills.titleAccent")}</span>
          </h2>
          <p className="text-[var(--text-tertiary)] text-sm md:text-base mb-14">
            {t("skills.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 scroll-reveal">
              <h3
                className="text-sm md:text-base font-semibold mb-4 tracking-wide"
                style={{ color: "var(--company-text)" }}
              >
                {t("skills.apple")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Swift",
                  "SwiftUI",
                  "UIKit",
                  "AppKit",
                  "CoreData",
                  "SwiftCharts",
                  "Combine",
                ].map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 scroll-reveal">
              <h3 className="text-sm md:text-base font-semibold text-blue-500/70 dark:text-blue-400/70 mb-4 tracking-wide">
                {t("skills.xr")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "visionOS",
                  "RealityKit",
                  "Reality Composer Pro",
                  "ARKit",
                  "Photogrammetry",
                  "VR/AR Testing",
                ].map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 scroll-reveal">
              <h3 className="text-sm md:text-base font-semibold text-cyan-600/70 dark:text-cyan-400/70 mb-4 tracking-wide">
                {t("skills.crossPlatform")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Native",
                  "TypeScript",
                  "JavaScript",
                  "Symfony",
                  "PHP",
                  "HTML/CSS",
                  "Flutter",
                ].map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 scroll-reveal">
              <h3 className="text-sm md:text-base font-semibold text-pink-600/70 dark:text-pink-400/70 mb-4 tracking-wide">
                {t("skills.tools")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Xcode",
                  "Git",
                  "Fastlane",
                  "GitLab CI",
                  "Azure DevOps",
                  "Apple Certificates Management",
                  "MVVM"
                ].map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Interests ── */}
        <section className="max-w-4xl mx-auto px-6 pb-24 md:pb-32">
          <div className="glass-card rounded-2xl p-6 scroll-reveal">
            <h3 className="text-sm font-semibold text-[var(--text-secondary)] mb-3 tracking-wide">
              {t("interests.title")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Sandbox & VR",
                "Cycling",
                "Electronic Music",
                "New Mobile Technologies",
                "AI",
                "IoT",
                "Software & Hardware News",
              ].map((i) => (
                <span key={i} className="skill-tag">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CONTACT
        ════════════════════════════════════════ */}
        <section
          id="contact"
          className="max-w-4xl mx-auto px-6 py-24 md:py-32"
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 text-center scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {t("contact.title")}{" "}
              <span className="gradient-text">
                {t("contact.titleAccent")}
              </span>
            </h2>
            <p className="text-[var(--text-tertiary)] text-sm md:text-base mb-10">
              {t("contact.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+33631991872"
                className="glass-card rounded-xl px-5 py-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-2.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                +33 6 31 99 18 72
              </a>

              <a
                href="mailto:zakarya.tolba@icloud.com"
                className="glass-card rounded-xl px-5 py-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-2.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                zakarya.tolba@icloud.com
              </a>
            </div>

            <div className="flex gap-3 justify-center mt-8">
              <a
                href="https://www.linkedin.com/in/zakarya-tolba-ᯅ-2ab535153/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/zaktolba"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
                aria-label="GitHub"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 text-[var(--text-muted)] text-xs tracking-wide">
        {t("footer.copyright")}
      </footer>
    </>
  );
}
