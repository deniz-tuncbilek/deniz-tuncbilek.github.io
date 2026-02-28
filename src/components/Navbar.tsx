import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Menu, X } from "lucide-react";

const navItems = [
{ label: "About", href: "#about" },
{ label: "Experience", href: "#experience" },
{ label: "Projects", href: "#projects" },
{ label: "Education", href: "#education" },
{ label: "Certifications", href: "#certifications" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"}`
      }>

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
          <span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
          <Button key={item.href} variant="nav" size="sm" asChild>
              <a href={item.href} className="text-sm">{item.label}</a>
            </Button>
          )}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="heroOutline" size="sm" className="ml-2">
            <Download className="h-3.5 w-3.5" />
            Resume
          </Button>
        </div>

        {/* Mobile toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 pt-2 space-y-1">
          {navItems.map((item) =>
        <a
          key={item.href}
          href={item.href}
          onClick={() => setMobileOpen(false)}
          className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">

              {item.label}
            </a>
        )}
          <div className="flex gap-2 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /></a>
            </Button>
            <Button variant="heroOutline" size="sm">
              <Download className="h-3.5 w-3.5" />
              Resume
            </Button>
          </div>
        </div>
      }
    </nav>);

};

export default Navbar;