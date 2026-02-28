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

        <div className="max-w-3xl">

          {/* Bio */}
          <ScrollReveal className="md:col-span-3" delay={0.2}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Manager at KPMG Canada's Management Consulting practice, specializing in
                technology strategy and transformation, digital twins, AI, data analytics, and
                digital public sector solutions.
              </p>
              <p>
                With a mechanical engineering foundation and a Master's in Computer Science from
                the University of Pennsylvania, my work sits at the intersection of engineering
                rigor and strategic vision.
              </p>
              <p>
                My career spans diverse industries — from designing immersive theme park attractions
                and integrating NATO naval systems, to implementing government software solutions
                and leading digital transformation initiatives.
              </p>
              <p>
                I'm an enthusiastic, detail-oriented professional with strong analytical
                problem-solving skills and a passion for delivering high-quality outcomes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: MapPin, label: "Location", value: "Victoria, BC" },
                { icon: Building2, label: "Current Role", value: "Manager, KPMG Canada" },
                { icon: GraduationCap, label: "Education", value: "M.S. Computer Science, UPenn" },
                { icon: Cpu, label: "Interests", value: "AI, Digital Twins, Cloud" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-primary/70 border border-primary/50">
                  <item.icon className="h-4 w-4 text-primary-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-primary-foreground/70">{item.label}</p>
                    <p className="text-sm text-primary-foreground font-medium">{item.value}</p>
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
