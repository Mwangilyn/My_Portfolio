import { Terminal, Shield, Database, Server, Activity } from "lucide-react";

interface Tool {
  name: string;
  category: string;
  icon: string;
}

const tools: Tool[] = [
  { name: "Splunk", category: "SIEM & Monitoring", icon: "📊" },
  { name: "Snort", category: "IDS/IPS", icon: "🚨" },
  { name: "Wireshark", category: "Network Analysis", icon: "🔍" },
  { name: "Nmap", category: "Scanning", icon: "🎯" },
  { name: "Nessus", category: "Vulnerability Assessment", icon: "🛡️" },
  { name: "Kali Linux", category: "Operating System", icon: "🐉" },
  { name: "Ubuntu", category: "Operating System", icon: "🖥️" },
  { name: "Windows Server", category: "Operating System", icon: "🪟" },
  { name: "VirtualBox", category: "Virtualization", icon: "📦" },
  { name: "Metasploitable", category: "Testing Environment", icon: "⚡" },
  { name: "Nikto", category: "Web Scanning", icon: "🌐" },
];

const categoryIcons: Record<string, any> = {
  "SIEM & Monitoring": Activity,
  "IDS/IPS": Shield,
  "Network Analysis": Terminal,
  "Scanning": Database,
  "Vulnerability Assessment": Shield,
  "Operating System": Server,
  "Virtualization": Database,
  "Testing Environment": Terminal,
  "Web Scanning": Activity,
};

const Tools = () => {
  const categories = Array.from(new Set(tools.map(t => t.category)));

  return (
    <section id="tools" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Tools & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional toolkit for comprehensive security operations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {categories.map((category) => {
            const Icon = categoryIcons[category] || Terminal;
            const categoryTools = tools.filter(t => t.category === category);
            
            return (
              <div 
                key={category} 
                className="mb-8 card-gradient p-6 rounded-xl border border-border hover:border-secondary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/30">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {categoryTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="group px-4 py-2 bg-background/50 hover:bg-secondary/10 border border-border hover:border-secondary/50 rounded-lg transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-2xl mr-2">{tool.icon}</span>
                      <span className="font-mono text-sm group-hover:text-secondary transition-colors">
                        {tool.name}
                      </span>
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

export default Tools;