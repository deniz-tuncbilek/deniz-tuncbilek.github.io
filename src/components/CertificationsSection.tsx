import ScrollReveal from "./ScrollReveal";
import { BadgeCheck } from "lucide-react";

const certifications = [
  { title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", year: "" },
  { title: "Google Project Management: Professional Certificate", org: "Google", year: "" },
  { title: "Assessing, Combining, and Visualizing Data for Advisory", org: "KPMG", year: "" },
  { title: "Project Management for AI", org: "", year: "" },
  { title: "Leadership Milestone Programs: Leading Others", org: "KPMG", year: "" },
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
                  {cert.org && <p className="text-xs text-muted-foreground mt-1">{cert.org}</p>}
                  {cert.year && <p className="text-xs text-muted-foreground/60 font-mono mt-0.5">{cert.year}</p>}
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
