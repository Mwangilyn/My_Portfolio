import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:lynette.mwangi@example.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your message will be sent via your default email application.",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 z-50 animate-glow-pulse group"
        size="icon"
      >
        {isOpen ? (
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-card border border-border rounded-xl shadow-2xl z-50 animate-slide-in-right overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-secondary to-primary p-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Get in Touch
            </h3>
            <p className="text-sm text-white/90 mt-1">
              Send me a message about opportunities
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="bg-background border-border"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="bg-background border-border"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your inquiry..."
                rows={4}
                required
                className="bg-background border-border resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 group"
            >
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              Send Message
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactChat;
