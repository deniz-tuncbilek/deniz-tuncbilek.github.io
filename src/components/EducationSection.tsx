import ScrollReveal from "./ScrollReveal";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Computer and Information Technology",
    institution: "University of Pennsylvania",
    gpa: "",
    focus: ["Computer Science", "Software Engineering", "Data Structures"],
  },
  {
    degree: "Bachelor of Engineering, Mechanical Engineering",
    institution: "University of Victoria",
    gpa: "",
    focus: ["Mechanical Design", "Systems Engineering", "Project Management"],
  },
  {
    degree: "High School Diploma — Mathematics and Sciences",
    institution: "Üsküdar Amerikan Lisesi (Üsküdar American Academy)",
    gpa: "",
    focus: ["Mathematics", "Sciences"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Academic Background
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-elevated p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-sm text-primary/80 mb-1">{edu.institution}</p>
                    {edu.gpa && <p className="text-xs text-muted-foreground font-mono">GPA: {edu.gpa}</p>}

                    <div className="flex items-center gap-2 mt-4">
                      <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                      <div className="flex flex-wrap gap-2">
                        {edu.focus.map((f) => (
                          <span key={f} className="px-2.5 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground border border-border/50">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
