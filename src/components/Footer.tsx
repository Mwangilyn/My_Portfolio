import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-gradient">Lynette Njuguini Mwangi</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Cybersecurity Analyst | IT Support Technician
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Nairobi, Kenya
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Mwangilyn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/lynette-irungu-"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> and cutting-edge tech
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Lynette Njuguini Mwangi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;