import { useState } from "react";
import { ExternalLink, Terminal, Shield, Database, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  tools: string[];
  impact: string;
  icon: any;
  url?: string;
}

const projects: Project[] = [
  {
    title: "NetHunter Vigil",
    description: "TypeScript-based network monitoring and security vigilance tool. Real-time threat detection and network analysis application with modern web technologies.",
    tools: ["TypeScript", "React", "Network Security", "Real-time Monitoring"],
    impact: "Active development of comprehensive network security monitoring solution.",
    icon: Shield,
    url: "https://github.com/Mwangilyn/nethunter-vigil",
  },
  {
    title: "Penetration Test Reports",
    description: "Comprehensive repository of offensive security techniques and penetration testing scripts. Contains detailed documentation of security assessments and vulnerability testing methodologies.",
    tools: ["Penetration Testing", "Security Assessment", "Ethical Hacking"],
    impact: "Professional documentation of offensive security practices with explicit authorization requirements.",
    icon: Terminal,
    url: "https://github.com/Mwangilyn/Penetration-Test-Reports",
  },
  {
    title: "CTF Walkthroughs",
    description: "Detailed writeups and solutions for Capture The Flag challenges from platforms like TryHackMe and HackTheBox. Comprehensive documentation of problem-solving approaches and security techniques.",
    tools: ["CTF", "TryHackMe", "HackTheBox", "Security Analysis"],
    impact: "Educational resource demonstrating practical cybersecurity problem-solving skills.",
    icon: Activity,
    url: "https://github.com/Mwangilyn/CTF-Walkthroughs",
  },
  {
    title: "Intrusion Detection Lab using Snort",
    description: "Set up Snort IDS on Kali Linux to monitor suspicious traffic from simulated attacks. Created and tuned custom Snort rules to detect brute force attempts and port scans.",
    tools: ["Snort", "Kali Linux", "Metasploitable2", "Wireshark"],
    impact: "Demonstrated ability to detect and log malicious behavior in real time.",
    icon: Shield,
  },
  {
    title: "SIEM Analysis using Splunk",
    description: "Created dashboards to monitor and visualize log data from Windows Server and Ubuntu systems. Simulated brute force login attempts and analyzed log patterns.",
    tools: ["Splunk", "Windows Server", "Ubuntu"],
    impact: "Gained real-world experience in log correlation and security alerting.",
    icon: Database,
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Cybersecurity Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hands-on experience in threat detection, vulnerability assessment, and security monitoring
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.title}
                className="card-gradient border-border hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(280,85%,65%,0.3)] transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => project.url && window.open(project.url, '_blank')}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30 group-hover:bg-secondary/20 group-hover:animate-glow-pulse transition-all duration-300">
                      <Icon className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                    </div>
                    {project.url && (
                      <ExternalLink className={`w-5 h-5 transition-all duration-300 ${hoveredIndex === index ? 'text-secondary translate-x-1 -translate-y-1 animate-bounce-subtle' : 'text-muted-foreground'}`} />
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-secondary">Tools Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <Badge key={tool} variant="outline" className="border-primary/30 bg-primary/5">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <p className="text-sm italic text-muted-foreground">
                        <span className="font-semibold text-primary">Impact:</span> {project.impact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;