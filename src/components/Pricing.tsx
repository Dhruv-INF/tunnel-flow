import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Free",
    icon: Zap,
    price: "Free",
    description: "Perfect for trying out tunnel sharing",
    color: "terminal-green",
    features: [
      "1 tunnel at a time",
      "Basic visitor logs",
      "Community support",
      "HTTPS tunnels"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Pro",
    icon: Crown,
    price: "$5",
    period: "/month",
    description: "For regular tunnel sharing",
    color: "primary",
    features: [
      "5 tunnels at a time",
      "Detailed visitor analytics",
      "Email support",
      "Custom subdomains"
    ],
    cta: "Upgrade to Pro",
    popular: true
  }
];

const Pricing = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <Crown className="w-3 h-3 mr-1" />
            Pricing Plans
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Choose your{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              tunneling
            </span>{" "}
            plan
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include core tunneling features 
            with enterprise-grade security.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative p-8 bg-gradient-card backdrop-blur border-border/50 hover:border-${plan.color}/50 transition-all duration-300 group ${
                  plan.popular ? 'ring-2 ring-primary/20 shadow-glow' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-accent text-background px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="text-center space-y-2">
                    <div className={`inline-flex p-3 rounded-full bg-${plan.color}/10 border border-${plan.color}/20`}>
                      <Icon className={`w-6 h-6 text-${plan.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center space-y-1">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-4xl font-bold text-${plan.color}`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground">{plan.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-${plan.color}/10 border border-${plan.color}/20 flex items-center justify-center`}>
                          <Check className={`w-3 h-3 text-${plan.color}`} />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className={`w-full ${!plan.popular ? `border-${plan.color}/30 text-${plan.color} hover:bg-${plan.color}/10` : ''}`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-${plan.color}/5 rounded-lg blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300`} />
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 space-y-6">
          <p className="text-muted-foreground">
            All plans include 99.9% uptime SLA, global CDN, and 24/7 monitoring
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-terminal-green border-terminal-green/30">
              ✓ 14-day free trial
            </Badge>
            <Badge variant="outline" className="text-primary border-primary/30">
              ✓ Cancel anytime
            </Badge>
            <Badge variant="outline" className="text-neon-cyan border-neon-cyan/30">
              ✓ No setup fees
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;