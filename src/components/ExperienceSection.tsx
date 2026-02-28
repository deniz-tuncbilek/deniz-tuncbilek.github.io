import ScrollReveal from "./ScrollReveal";
import { BarChart3, Users, Shield, Cpu, TrendingUp, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  highlights: { text: string; icon: LucideIcon }[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Manager",
    company: "KPMG Canada",
    dates: "Oct 2025 — Present",
    highlights: [
      { text: "Technology strategy and transformation, digital twins, AI, data analytics", icon: Cpu },
      { text: "Digital public sector and application managed services", icon: Globe },
      { text: "Leading cross-functional consulting teams on enterprise engagements", icon: Users },
    ],
  },
  {
    title: "Senior Consultant",
    company: "KPMG Canada",
    dates: "Oct 2023 — Sep 2025",
    highlights: [
      { text: "Delivered technology strategy and transformation consulting engagements", icon: BarChart3 },
      { text: "Drove digital transformation initiatives across public sector clients", icon: Shield },
      { text: "Contributed to AI and data analytics solution development", icon: Cpu },
    ],
  },
  {
    title: "Asset Integration Specialist",
    company: "BC Rapid Transit Company (SkyTrain)",
    dates: "2023",
    highlights: [
      { text: "Ensured capital replacement assets integration within budget, scope and timelines", icon: Shield },
      { text: "Managed integration activities and deliverables for SkyTrain infrastructure", icon: TrendingUp },
    ],
  },
  {
    title: "Implementation Consultant",
    company: "Fast Enterprises, LLC",
    dates: "2022 — 2023",
    highlights: [
      { text: "Implemented COTS software solutions for finance ministries and government agencies", icon: Globe },
      { text: "Delivered modern technology solutions for public sector clients", icon: BarChart3 },
    ],
  },
  {
    title: "Mechanical Engineer",
    company: "OSI Maritime Systems",
    dates: "2020 — 2021",
    highlights: [
      { text: "Integrated navigation systems and tactical solutions for NATO submarines and vessels", icon: Shield },
    ],
  },
  {
    title: "Mechanical Engineer",
    company: "Dynamic Attractions",
    dates: "2017 — 2020",
    highlights: [
      { text: "Design and commissioning of the world's most immersive mega-coaster", icon: Cpu },
      { text: "Engineered the world's first ever sideways drop ride system", icon: TrendingUp },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Career Timeline
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-primary/30 -translate-x-[0.5px]" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative pl-8 md:pl-20">
                  {/* Dot */}
                  <div className="absolute left-0 md:left-8 top-6 w-3 h-3 rounded-full bg-primary -translate-x-[5.5px]" />

                  <div className="card-elevated p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-sm text-primary/80">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{exp.dates}</span>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <h.icon className="h-4 w-4 text-primary/60 mt-0.5 shrink-0" />
                          {h.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
