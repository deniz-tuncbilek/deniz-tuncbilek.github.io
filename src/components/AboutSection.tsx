import ScrollReveal from "./ScrollReveal";
import { MapPin, Building2, GraduationCap, Cpu } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Who I Am
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Photo placeholder */}
          <ScrollReveal className="md:col-span-2" delay={0.1}>
            <div className="aspect-[3/4] rounded-xl bg-secondary border border-border overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">JD</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal className="md:col-span-3" delay={0.2}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a technology strategy consultant and engineering professional with over a decade
                of experience leading digital transformation initiatives across infrastructure, public
                sector, and enterprise organizations.
              </p>
              <p>
                My work sits at the intersection of engineering rigor and strategic vision — translating
                complex technical landscapes into actionable roadmaps that drive measurable outcomes.
              </p>
              <p>
                I specialize in AI integration, cloud infrastructure modernization, and building the
                governance frameworks that make innovation sustainable at scale.
              </p>
              <p>
                Currently focused on applying artificial intelligence and digital twin technologies
                to transform how critical infrastructure is planned, built, and maintained.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: MapPin, label: "Location", value: "Washington, D.C." },
                { icon: Building2, label: "Current Role", value: "Technology Strategy Consultant" },
                { icon: GraduationCap, label: "Education", value: "M.S. Engineering" },
                { icon: Cpu, label: "Interests", value: "AI, Infrastructure, Digital Twins" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50">
                  <item.icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
