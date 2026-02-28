import ScrollReveal from "./ScrollReveal";
import { BadgeCheck } from "lucide-react";

const certifications = [
  { title: "AWS Solutions Architect – Professional", org: "Amazon Web Services", year: "2023" },
  { title: "Project Management Professional (PMP)", org: "PMI", year: "2022" },
  { title: "Google Cloud Professional Data Engineer", org: "Google Cloud", year: "2022" },
  { title: "Certified Scrum Master (CSM)", org: "Scrum Alliance", year: "2021" },
  { title: "Azure Fundamentals (AZ-900)", org: "Microsoft", year: "2021" },
  { title: "Lean Six Sigma Green Belt", org: "ASQ", year: "2019" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Certifications</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Professional Credentials
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="card-elevated p-5 flex items-start gap-3">
                <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground leading-snug">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cert.org}</p>
                  <p className="text-xs text-muted-foreground/60 font-mono mt-0.5">{cert.year}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
