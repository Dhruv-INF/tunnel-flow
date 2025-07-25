import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Zap, Globe, BarChart } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install CLI",
    description: "Download our lightweight CLI tool with a single command",
    command: "npm install -g tunnel-flow",
    icon: Download,
    color: "terminal-green"
  },
  {
    number: "02", 
    title: "Connect Tunnel",
    description: "Expose your local port with enterprise-grade security",
    command: "tunnel connect 3000 --auth token",
    icon: Zap,
    color: "primary"
  },
  {
    number: "03",
    title: "Get HTTPS URL",
    description: "Receive your persistent custom subdomain instantly",
    command: "✓ https://yourname.tunnel-flow.dev",
    icon: Globe,
    color: "neon-cyan"
  },
  {
    number: "04",
    title: "Monitor & Scale",
    description: "Track analytics and handle traffic spikes automatically",
    command: "tunnel dashboard --live",
    icon: BarChart,
    color: "cyber-purple"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <Zap className="w-3 h-3 mr-1" />
            How It Works
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            From localhost to{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              production
            </span>{" "}
            in seconds
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined workflow gets you from local development to secure 
            public access in under 30 seconds.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
                )}
                
                <Card className="p-8 bg-gradient-card backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full bg-${step.color}/10 border border-${step.color}/20`}>
                          <Icon className={`w-6 h-6 text-${step.color}`} />
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`text-${step.color} border-${step.color}/30 font-mono`}
                        >
                          {step.number}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      
                      {index === steps.length - 1 && (
                        <Button variant="hero" className="mt-4">
                          Start Free Trial
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>

                    {/* Right Side - Command */}
                    <div className="relative">
                      <div className="bg-card/50 backdrop-blur border border-terminal-green/30 rounded-lg p-6 font-mono">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-destructive"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
                          </div>
                          <span className="text-muted-foreground text-sm">terminal</span>
                        </div>
                        <div className={`text-${step.color} text-sm flex items-center gap-2`}>
                          <span className="text-muted-foreground">$</span>
                          {step.command}
                        </div>
                      </div>
                      
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-${step.color}/5 rounded-lg blur-xl -z-10 group-hover:bg-${step.color}/10 transition-all duration-300`} />
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-card/50 backdrop-blur border border-border/50 rounded-full p-2 pr-6">
            <Button variant="hero" size="sm" className="rounded-full">
              Get Started
            </Button>
            <span className="text-sm text-muted-foreground">
              No credit card required • Free forever plan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;