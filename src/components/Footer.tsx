import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Terminal, 
  Globe, 
  Shield, 
  Zap,
  Mail
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">Tunnel Flow</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              The next-generation tunneling platform for developers. 
              Secure, fast, and reliable local-to-web connectivity.
            </p>
            
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                API Documentation
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                CLI Reference
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Integrations
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Tutorials
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Community
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Status Page
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Report Issue
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Security
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Tunnel Flow. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <Badge variant="outline" className="text-terminal-green border-terminal-green/30">
                <Shield className="w-3 h-3 mr-1" />
                SOC 2 Compliant
              </Badge>
              <Badge variant="outline" className="text-primary border-primary/30">
                <Globe className="w-3 h-3 mr-1" />
                99.9% Uptime
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span>hello@tunnel-flow.dev</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;