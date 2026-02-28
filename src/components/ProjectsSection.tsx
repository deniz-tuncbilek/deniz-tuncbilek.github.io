import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Asset Intelligence",
    description: "Machine learning platform for predictive infrastructure assessment using computer vision and sensor data analytics.",
    tags: ["AI", "ML", "Computer Vision", "Python"],
  },
  {
    title: "Digital Twin Framework",
    description: "Real-time digital representation system for transportation infrastructure enabling scenario modeling and risk analysis.",
    tags: ["Digital Twins", "IoT", "Cloud", "Data"],
  },
  {
    title: "Cloud Migration Accelerator",
    description: "Automated assessment and migration toolkit for transitioning legacy government systems to cloud-native architectures.",
    tags: ["Cloud", "DevOps", "Infrastructure", "AWS"],
  },
  {
    title: "Data Governance Platform",
    description: "Enterprise data governance and quality management system serving 12 regional agencies with 2M+ daily data points.",
    tags: ["Data", "Governance", "Analytics", "SQL"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Selected Work
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-elevated p-6 h-full flex flex-col">
                <div className="w-full h-36 rounded-lg bg-secondary/80 border border-border/50 mb-5 flex items-center justify-center">
                  <span className="text-muted-foreground/30 text-sm font-mono">Preview</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="heroOutline" size="sm">
                    View Project <ArrowUpRight className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
