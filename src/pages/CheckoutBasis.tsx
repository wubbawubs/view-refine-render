import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CheckoutBasis = () => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'quarterly' | 'biannual'>('monthly');

  const plans = {
    monthly: {
      price: 99,
      total: 99,
      period: "per maand",
      description: "Maandelijks opzegbaar",
      discount: undefined
    },
    quarterly: {
      price: 89.10, // 99 * 0.9
      total: 267.30, // 99 * 3 * 0.9
      period: "per maand",
      description: "3 maanden vooruit betalen - 10% korting",
      discount: "10% KORTING"
    },
    biannual: {
      price: 82.50, // 99 * 5 / 6
      total: 495, // 99 * 5
      period: "per maand",
      description: "6 maanden voor de prijs van 5 - 1 maand gratis",
      discount: "1 MAAND GRATIS"
    }
  };

  const handleMollieCheckout = async () => {
    // Mollie integration will be implemented here
    console.log(`Processing payment for ${selectedPlan} plan: €${plans[selectedPlan].total}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-kk-gray-100/20 to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Terug naar dashboard
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-kk-gradient flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-kk-h1 font-bold bg-kk-gradient bg-clip-text text-transparent">
                KlikKlaar Basis
              </h1>
            </div>
            <p className="text-kk-body text-muted-foreground max-w-2xl mx-auto">
              Complete SEO optimalisatie en deployment voor jouw website. Alles wat je nodig hebt om online succesvol te zijn.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Plan Selection */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-6">Kies je betaalperiode</h2>
              
              {Object.entries(plans).map(([key, plan]) => (
                <Card 
                  key={key}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedPlan === key 
                      ? 'ring-2 ring-kk-orange border-kk-orange/20 bg-kk-orange/5' 
                      : 'hover:border-kk-orange/30'
                  }`}
                  onClick={() => setSelectedPlan(key as typeof selectedPlan)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            selectedPlan === key 
                              ? 'bg-kk-orange border-kk-orange' 
                              : 'border-gray-300'
                          }`}>
                            {selectedPlan === key && (
                              <div className="w-full h-full rounded-full bg-white scale-50"></div>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-kk-orange">
                              €{plan.price.toFixed(2)}
                            </span>
                            <span className="text-muted-foreground">{plan.period}</span>
                            {plan.discount && (
                              <Badge variant="secondary" className="bg-kk-gradient text-white">
                                {plan.discount}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                        {key !== 'monthly' && (
                          <p className="text-sm font-medium text-kk-orange mt-1">
                            Totaal: €{plan.total.toFixed(2)}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Plan Features */}
            <div>
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>KlikKlaar Basis</span>
                    <Badge variant="outline">€99/maand</Badge>
                  </CardTitle>
                  <CardDescription>
                    Complete SEO optimalisatie en website deployment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Volledige SEO optimalisatie",
                    "Website deployment en hosting",
                    "Maandelijkse updates en onderhoud",
                    "Dashboard toegang en analytics",
                    "Technische support",
                    "SSL certificaat inbegrepen",
                    "Mobile responsive design",
                    "Google Search Console setup"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-kk-gradient flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}

                  <div className="pt-6 space-y-4">
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium mb-2">Prijzen zijn exclusief BTW</p>
                      <p>• Maandelijks opzegbaar</p>
                      <p>• Geen setup kosten</p>
                      <p>• 30 dagen geld terug garantie</p>
                    </div>

                    <Button 
                      onClick={handleMollieCheckout}
                      className="w-full bg-kk-gradient hover:opacity-90 text-white font-medium py-6 text-lg"
                      size="lg"
                    >
                      Start met KlikKlaar Basis
                      <span className="ml-2">€{plans[selectedPlan].price.toFixed(2)}/maand</span>
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Veilig betalen met Mollie • Alle betaalmethoden geaccepteerd
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBasis;