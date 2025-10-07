import { Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-950/20 to-cyan-950/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="mb-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-glow-pulse"></span>
            Nairobi, Kenya
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-gradient">Lynette</span>
            <br />
            <span className="text-foreground">Njuguini Mwangi</span>
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-mono">
              Cybersecurity Analyst
            </span>
            <span className="px-4 py-2 bg-secondary/10 text-secondary border border-secondary/30 rounded-full text-sm font-mono">
              IT Support Technician
            </span>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Detail-oriented cybersecurity professional with hands-on experience in threat detection, 
            network monitoring, and vulnerability assessments. Committed to delivering secure IT 
            environments through continuous learning and innovation.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
            >
              View Projects
            </Button>
            <Button 
              onClick={() => scrollToSection('certifications')}
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              Certifications
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://github.com/Mwangilyn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300 glow-cyan"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/lynette-irungu-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300 glow-cyan"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('skills')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;