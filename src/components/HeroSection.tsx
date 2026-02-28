import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import DotBackground from "./DotBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DotBackground />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Currently exploring AI applications in infrastructure
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-6 text-primary font-normal font-mono">Deniz Tuncbilek

          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground font-light tracking-wide mb-4">
            Technology Strategy · Digital Transformation · AI & Infrastructure
          </p>

          <p className="max-w-2xl mx-auto text-muted-foreground/80 text-base leading-relaxed mb-10">Technology leader and strategist driving digital transformation across criticalinfrastructure, public sector, and enterprise environments. Building the bridge between emerging technology and operational excellence.



          </p>

          <div className="flex items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto">

          {[
          { value: "12+", label: "Years Experience" },
          { value: "30+", label: "Projects Delivered" },
          { value: "5", label: "Industries Served" }].
          map((metric) =>
          <div key={metric.label} className="text-center">
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
            </div>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2">

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>

            <ChevronDown className="h-5 w-5 text-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;