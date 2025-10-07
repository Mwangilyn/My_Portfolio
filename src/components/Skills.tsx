import { useEffect, useRef, useState } from "react";
import { Shield, Network, Search, Laptop } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "Threat Detection", level: 85, category: "Security Analysis" },
  { name: "Traffic Analysis", level: 80, category: "Security Analysis" },
  { name: "Incident Response", level: 75, category: "Security Analysis" },
  { name: "Security Monitoring", level: 85, category: "Security Analysis" },
  { name: "Network Scanning", level: 90, category: "Vulnerability Assessment" },
  { name: "Security Auditing", level: 80, category: "Vulnerability Assessment" },
  { name: "Firewall Management", level: 75, category: "Network Security" },
  { name: "System Security", level: 80, category: "Network Security" },
  { name: "Technical Reporting", level: 85, category: "Professional Skills" },
  { name: "Problem Solving", level: 90, category: "Professional Skills" },
];

const categoryIcons: Record<string, any> = {
  "Security Analysis": Shield,
  "Vulnerability Assessment": Search,
  "Network Security": Network,
  "Professional Skills": Laptop,
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive cybersecurity capabilities with measurable proficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            const categorySkills = skills.filter(s => s.category === category);
            
            return (
              <div 
                key={category} 
                className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">{skill.name}</span>
                        <span className="text-primary font-semibold text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;