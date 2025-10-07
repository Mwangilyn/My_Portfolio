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
}

const projects: Project[] = [
  {
    title: "Intrusion Detection Lab using Snort",
    description: "Set up Snort IDS on Kali Linux to monitor suspicious traffic from a simulated attack on Metasploitable2. Created and tuned custom Snort rules to detect brute force attempts and port scans.",
    tools: ["Snort", "Kali Linux", "Metasploitable2", "Wireshark"],
    impact: "Demonstrated ability to detect and log malicious behavior in real time.",
    icon: Shield,
  },
  {
    title: "Network Vulnerability Assessment",
    description: "Scanned a virtual network for open ports and vulnerabilities using Nmap and Nikto. Analyzed results to identify outdated software and misconfigurations.",
    tools: ["Nmap", "Nikto", "Kali Linux"],
    impact: "Strengthened understanding of network hardening techniques.",
    icon: Terminal,
  },
  {
    title: "SIEM Analysis using Splunk",
    description: "Created dashboards to monitor and visualize log data from Windows Server and Ubuntu systems. Simulated brute force login attempts and analyzed log patterns.",
    tools: ["Splunk", "Windows Server", "Ubuntu"],
    impact: "Gained real-world experience in log correlation and security alerting.",
    icon: Activity,
  },
  {
    title: "Packet Sniffing and Analysis with Wireshark",
    description: "Captured and analyzed HTTP, DNS, and FTP traffic on a test network. Identified potential data leakage and suspicious communications.",
    tools: ["Wireshark", "Windows", "Ubuntu"],
    impact: "Improved traffic analysis skills and understanding of normal vs. abnormal behavior.",
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
                className="card-gradient border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <ExternalLink className={`w-5 h-5 transition-all duration-300 ${hoveredIndex === index ? 'text-primary translate-x-1 -translate-y-1' : 'text-muted-foreground'}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
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