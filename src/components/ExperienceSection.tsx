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
    title: "Senior Technology Strategy Consultant",
    company: "Infrastructure & Digital Advisory",
    dates: "2021 — Present",
    highlights: [
      { text: "Leading AI integration strategy for critical infrastructure modernization programs", icon: Cpu },
      { text: "Driving governance frameworks for cloud adoption across enterprise portfolios", icon: Shield },
      { text: "Managing cross-functional teams of 15+ engineers and analysts", icon: Users },
      { text: "Delivering data-driven insights that reduced project delivery timelines by 30%", icon: BarChart3 },
    ],
  },
  {
    title: "Digital Transformation Lead",
    company: "Public Sector Technology Group",
    dates: "2018 — 2021",
    highlights: [
      { text: "Spearheaded digital twin implementation for transportation infrastructure", icon: Globe },
      { text: "Built analytics platforms processing 2M+ data points daily", icon: BarChart3 },
      { text: "Established technology standards adopted across 12 regional agencies", icon: Shield },
      { text: "Grew engineering team from 4 to 18 while maintaining delivery velocity", icon: TrendingUp },
    ],
  },
  {
    title: "Infrastructure Engineer",
    company: "Engineering Solutions Corp",
    dates: "2014 — 2018",
    highlights: [
      { text: "Designed and delivered critical infrastructure assessment tools", icon: Cpu },
      { text: "Implemented data pipelines for real-time asset condition monitoring", icon: BarChart3 },
      { text: "Led adoption of cloud-native architecture for legacy systems", icon: Globe },
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
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative pl-8 md:pl-20">
                  {/* Dot */}
                  <div className="absolute left-0 md:left-8 top-6 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />

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
