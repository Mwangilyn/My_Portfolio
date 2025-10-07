import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import certDeloitte from "@/assets/cert-deloitte.jpg";
import certTelstra from "@/assets/cert-telstra.jpg";
import certNYJobs from "@/assets/cert-nyjobs.jpg";

interface Certification {
  title: string;
  issuer: string;
  skills: string[];
  status: string;
  url?: string;
  image?: string;
}

const certifications: Certification[] = [
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte (via Forage)",
    skills: [
      "Cybersecurity practical tasks",
      "Real-world security scenarios",
      "Industry best practices",
    ],
    status: "Certified",
    image: certDeloitte,
  },
  {
    title: "Cybersecurity Job Simulation",
    issuer: "Telstra (via Forage)",
    skills: [
      "Responding to a malware attack",
      "Analysing the attack",
      "Technical mitigation of malware attacks",
      "Incident Postmortem",
    ],
    status: "Certified",
    image: certTelstra,
  },
  {
    title: "Cybersecurity Job Simulation",
    issuer: "NY Jobs CEO Council (via Forage)",
    skills: [
      "Design a phishing email simulation",
      "Interpret phishing simulation results",
      "Security awareness training",
    ],
    status: "Certified",
    image: certNYJobs,
  },
  {
    title: "Introduction to Cybersecurity Awareness",
    issuer: "HP LIFE Foundation",
    skills: [
      "Identify typical threats to online data and information",
      "Implement basic measures to protect your sensitive data",
      "Understand widely used cybersecurity terms",
    ],
    status: "Certified",
    url: "#",
  },
  {
    title: "AI for Business Professionals",
    issuer: "HP LIFE Foundation",
    skills: [
      "The role of AI in modern business and professional development",
      "Differences between standalone AI tools and integrated AI features",
      "How to craft effective prompts for tools like ChatGPT and Canva",
      "Creating plans to integrate AI into daily work with measurable goals",
      "Using AI ethically with privacy, transparency, and fairness",
    ],
    status: "Certified",
    url: "#",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "Moringa School",
    skills: [
      "Comprehensive coursework in networking",
      "Security principles and best practices",
      "Linux basics and system administration",
      "Threat detection and incident response",
    ],
    status: "Completed",
  },
];

const futureCertifications = [
  { title: "CompTIA Security+", status: "Planned" },
  { title: "IBM Cybersecurity Analyst", status: "Planned" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications & Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Continuous learning and professional development in cybersecurity
          </p>
        </div>

        {/* Current Certifications */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {certifications.map((cert, idx) => (
            <Card
              key={`${cert.title}-${idx}`}
              className="card-gradient border-border hover:border-secondary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30 group-hover:bg-secondary/20 transition-colors">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1 group-hover:text-secondary transition-colors">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary/10 text-primary border-primary/30">
                      {cert.status}
                    </Badge>
                    {cert.url && (
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {cert.image && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="mb-4 cursor-pointer overflow-hidden rounded-lg border border-border hover:border-secondary/50 transition-all">
                        <img 
                          src={cert.image} 
                          alt={`${cert.title} certificate`}
                          className="w-full h-auto hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} certificate`}
                        className="w-full h-auto"
                      />
                    </DialogContent>
                  </Dialog>
                )}
                <ul className="space-y-2">
                  {cert.skills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Goals */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="text-gradient">Future Goals</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {futureCertifications.map((cert) => (
              <div
                key={cert.title}
                className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/5 border border-primary/20 group-hover:bg-primary/10 transition-colors">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{cert.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;