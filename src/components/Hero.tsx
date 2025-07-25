import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Terminal, Zap, Shield, Globe } from "lucide-react";
import heroTerminal from "@/assets/hero-terminal.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(217_91%_60%/0.1),transparent_50%)]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-purple/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float animation-delay-1000" />
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-up">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              <Zap className="w-3 h-3 mr-1" />
              Next-Gen Tunneling Platform
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Secure{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Tunnel Flow
                </span>{" "}
                for Developers
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expose your localhost to the world with enterprise-grade security, 
                persistent URLs, and real-time analytics. The only tunneling solution 
                you'll ever need.
              </p>
            </div>

            {/* Terminal Command Preview */}
            <div className="bg-card/50 backdrop-blur border border-terminal-green/30 rounded-lg p-6 font-mono">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
                </div>
                <span className="text-muted-foreground text-sm">tunnel-flow</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="text-muted-foreground">$ npm install -g tunnel-flow</div>
                <div className="text-terminal-green">$ tunnel connect 3000</div>
                <div className="text-neon-cyan">✓ Tunnel active: https://arjun.tunnel-flow.dev</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Terminal className="w-5 h-5 mr-2" />
                Start Tunneling
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </Button>
              
              <Button variant="terminal" size="lg">
                <Globe className="w-5 h-5 mr-2" />
                View Documentation
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-terminal-green">&lt; 50ms</div>
                <div className="text-sm text-muted-foreground">Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-neon-cyan">50k+</div>
                <div className="text-sm text-muted-foreground">Developers</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-slide-up animation-delay-300">
            <div className="relative">
              <img 
                src={heroTerminal} 
                alt="Terminal Interface" 
                className="w-full h-auto rounded-2xl shadow-card border border-border/50"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card/80 backdrop-blur rounded-lg p-3 border border-terminal-green/30 animate-float">
                <Shield className="w-6 h-6 text-terminal-green" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card/80 backdrop-blur rounded-lg p-3 border border-neon-cyan/30 animate-float animation-delay-1000">
                <Zap className="w-6 h-6 text-neon-cyan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;