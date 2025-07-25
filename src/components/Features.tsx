import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  RefreshCw, 
  Layers, 
  Webhook, 
  Monitor 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "One-Command Setup",
    description: "Connect any local port to HTTPS with a single CLI command. No configuration required.",
    badge: "Instant",
    color: "terminal-green"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Token-based authentication, password protection, and end-to-end encryption.",
    badge: "Secure",
    color: "primary"
  },
  {
    icon: Globe,
    title: "Persistent URLs",
    description: "Keep the same custom subdomain across sessions. Your tunnel, your URL.",
    badge: "Persistent",
    color: "neon-cyan"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor requests, latency, errors, and traffic patterns with detailed insights.",
    badge: "Analytics",
    color: "cyber-purple"
  },
  {
    icon: Layers,
    title: "Auto-scaling Proxy",
    description: "Handle traffic spikes automatically with our distributed proxy network.",
    badge: "Scalable",
    color: "terminal-green"
  },
  {
    icon: RefreshCw,
    title: "Webhook Replay",
    description: "Capture and replay webhook requests for debugging and testing workflows.",
    badge: "Debug",
    color: "primary"
  },
  {
    icon: Monitor,
    title: "Cross-Platform CLI",
    description: "Native binaries for Windows, macOS, and Linux. Perfect for CI/CD pipelines.",
    badge: "Universal",
    color: "neon-cyan"
  },
  {
    icon: Webhook,
    title: "API Integration",
    description: "Programmatic tunnel management with comprehensive REST API and webhooks.",
    badge: "API-First",
    color: "cyber-purple"
  }
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(217_91%_60%/0.03)_25%,hsl(217_91%_60%/0.03)_50%,transparent_50%,transparent_75%,hsl(217_91%_60%/0.03)_75%)] bg-[length:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <Layers className="w-3 h-3 mr-1" />
            Core Features
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Everything you need for{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              secure tunneling
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From instant setup to enterprise-grade security, our platform provides 
            all the tools developers need for reliable local-to-web connectivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-card backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-glow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg bg-${feature.color}/10 border border-${feature.color}/20`}>
                      <Icon className={`w-6 h-6 text-${feature.color}`} />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`bg-${feature.color}/10 text-${feature.color} border-${feature.color}/20 text-xs`}
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to supercharge your development workflow?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="text-terminal-green border-terminal-green/30">
              Free Tier Available
            </Badge>
            <Badge variant="outline" className="text-neon-cyan border-neon-cyan/30">
              No Credit Card Required
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;