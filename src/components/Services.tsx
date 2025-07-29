import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision into reality?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Lehitgashem */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm">

            
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-card-foreground">Lehitgashem</CardTitle>
              <div className="text-3xl font-bold text-pink-500">$800</div>
              <p className="text-lg text-muted-foreground">Ideation enrichment</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/3157c3c2-1b89-4f5e-95e2-dfc8624e01d7.png" 
                  alt="Artist painting a bird - representing creative vision and breakthrough"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-card-foreground">
                Get unstuck on your business or passion project with deep personal elicitation, 
                first-principle engineering, and rapid prototyping and testing.
              </p>
              
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">What you get:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Two intensive coaching sessions</li>
                  <li>• Deep elicitation of your vision and blocks</li>
                  <li>• Value and opportunity canvassing</li>
                  <li>• Testable rapid prototype to challenge assumptions and gain new insight</li>
                  <li>• Repeat cycles as needed until breakthrough</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium text-card-foreground">Perfect for:</span>{" "}
                  <span className="text-muted-foreground">
                    Entrepreneurs, creators, and leaders who know they have potential but feel stuck translating vision into reality.
                  </span>
                </p>
                <p className="text-sm">
                  <span className="font-medium text-card-foreground">Timeline:</span>{" "}
                  <span className="text-muted-foreground">2 weeks per cycle</span>
                </p>
              </div>
              
              <Button className="w-full" asChild>
                <a 
                  href="https://calendly.com/joelaustin/30min?month=2025-07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Schedule 1-1
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Card 2: AI Enablement */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-card-foreground">AI Enablement</CardTitle>
              <div className="text-3xl font-bold text-pink-500">From $2,400 +</div>
              <p className="text-lg text-muted-foreground">Custom workflow optimization and generative AI automations.</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-card-foreground">
                From simple productivity hacks to enterprise AI infrastructure - turning AI into your competitive advantage.
              </p>
              
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Services include:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Team GPT Assistance and Support ($200/month)</li>
                  <li>• Custom RAG Applications ($10K-25K)</li>
                  <li>• Enterprise AI Infrastructure (Custom quote)</li>
                  <li>• Full productization and white-labeling (Custom quote)</li>
                </ul>
              </div>
              
              <div>
                <p className="text-sm">
                  <span className="font-medium text-card-foreground">Perfect for:</span>{" "}
                  <span className="text-muted-foreground">
                    Businesses ready to transform operations with AI or create new revenue streams through AI services.
                  </span>
                </p>
              </div>
              
              <Button className="w-full" asChild>
                <a 
                  href="https://calendly.com/joelaustin/30min?month=2025-07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  AI Services site coming soon! →
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Call-to-action section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Ready to bring your vision into reality?
          </h3>
          <Button size="lg" className="px-8" asChild>
            <a 
              href="https://calendly.com/joelaustin/30min?month=2025-07" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Schedule a 1-1 session
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;