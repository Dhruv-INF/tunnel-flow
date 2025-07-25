import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, MapPin, Clock, Globe } from "lucide-react";

// Mock visitor data - in real app this would come from your backend
const mockVisitors = [
  {
    id: 1,
    ip: "192.168.1.100",
    location: "San Francisco, US",
    timestamp: "2 minutes ago",
    userAgent: "Chrome on Mac",
    url: "/api/users"
  },
  {
    id: 2,
    ip: "10.0.0.50",
    location: "London, UK", 
    timestamp: "5 minutes ago",
    userAgent: "Firefox on Windows",
    url: "/"
  },
  {
    id: 3,
    ip: "203.45.67.89",
    location: "Tokyo, JP",
    timestamp: "12 minutes ago",
    userAgent: "Safari on iPhone",
    url: "/products"
  }
];

const VisitorData = () => {
  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <Eye className="w-3 h-3 mr-1" />
            Visitor Tracking
          </Badge>
          
          <h2 className="text-3xl lg:text-4xl font-bold">
            See who visits your{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              tunnel
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track visitors to your shared localhost with simple analytics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 bg-gradient-card backdrop-blur border-border/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Recent Visitors</h3>
              <Badge variant="outline" className="text-terminal-green border-terminal-green/30">
                {mockVisitors.length} visitors today
              </Badge>
            </div>

            <div className="space-y-4">
              {mockVisitors.map((visitor) => (
                <div 
                  key={visitor.id}
                  className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Globe className="w-4 h-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm text-foreground">{visitor.ip}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{visitor.userAgent}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {visitor.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {visitor.timestamp}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="font-mono text-xs">
                    {visitor.url}
                  </Badge>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-border/50">
              <p className="text-sm text-muted-foreground text-center">
                💡 <strong>Tip:</strong> All visitor data is stored securely and only visible to you. 
                IP addresses are anonymized for privacy.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisitorData;