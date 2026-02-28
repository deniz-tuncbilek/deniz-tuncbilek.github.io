import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import DotBackground from "./DotBackground";
import headshot from "@/assets/headshot.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DotBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col items-center gap-10"
        >
          {/* Mobile: photo + name/title inline row */}
          <div className="flex sm:hidden items-center gap-4 w-full">
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg bg-secondary">
                <img src={headshot} alt="Deniz Tuncbilek" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-3xl tracking-tight leading-[1.1] text-primary font-normal font-mono">
                Deniz Tuncbilek
              </h1>
              <div className="inline-flex items-center gap-2 mt-1 text-primary text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Manager at KPMG
              </div>
            </div>
          </div>

          {/* Tablet & Desktop: side-by-side layout */}
          <div className="hidden sm:flex flex-row items-center gap-10 md:gap-16">
            {/* Headshot */}
            <div className="shrink-0">
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg bg-secondary">
                <img src={headshot} alt="Deniz Tuncbilek" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Text content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Manager at KPMG Management Consulting
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-4 text-primary font-normal font-mono">
                Deniz Tuncbilek
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide mb-4">
                Technology Strategy & Transformation · Digital Twins & AI · Engineering
              </p>

              <p className="max-w-2xl text-muted-foreground/80 text-base leading-relaxed mb-8">
                Enthusiastic, detail-oriented leader with demonstrated analytical problem-solving skills. Strong team player managing cross-functional teams and delivering high-quality outcomes across technology strategy, digital transformation, and public sector innovation.
              </p>

              <div className="flex items-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile: remaining content below the header row */}
          <div className="sm:hidden text-center">
            <p className="text-lg text-muted-foreground font-light tracking-wide mb-4">
              Technology Strategy & Transformation · Digital Twins & AI · Engineering
            </p>

            <p className="max-w-2xl text-muted-foreground/80 text-base leading-relaxed mb-8">
              Enthusiastic, detail-oriented leader with demonstrated analytical problem-solving skills. Strong team player managing cross-functional teams and delivering high-quality outcomes across technology strategy, digital transformation, and public sector innovation.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { value: "8+", label: "Years Experience" },
            { value: "6+", label: "Organizations" },
            { value: "5", label: "Industries Served" },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;