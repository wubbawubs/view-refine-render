import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

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
      price: 89.10,
      total: 267.30,
      period: "per maand",
      description: "3 maanden vooruit - 10% korting",
      discount: "10% KORTING"
    },
    biannual: {
      price: 82.50,
      total: 495,
      period: "per maand", 
      description: "6 maanden - 1 maand gratis",
      discount: "1 MAAND GRATIS"
    }
  };

  const handleMollieCheckout = async () => {
    console.log(`Processing payment for ${selectedPlan} plan: €${plans[selectedPlan].total}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-2">KlikKlaar Basis</h1>
            <p className="text-muted-foreground">
              Complete SEO optimalisatie voor jouw website
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {Object.entries(plans).map(([key, plan]) => (
              <Card 
                key={key}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedPlan === key 
                    ? 'ring-2 ring-kk-orange border-kk-orange/20' 
                    : 'hover:border-kk-orange/30'
                }`}
                onClick={() => setSelectedPlan(key as typeof selectedPlan)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedPlan === key 
                          ? 'bg-kk-orange border-kk-orange' 
                          : 'border-gray-300'
                      }`}>
                        {selectedPlan === key && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold">€{plan.price.toFixed(2)}</span>
                          <span className="text-muted-foreground">{plan.period}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </div>
                    </div>
                    {plan.discount && (
                      <Badge className="bg-kk-gradient text-white">
                        {plan.discount}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Inbegrepen:</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "SEO optimalisatie",
                  "Website deployment", 
                  "Maandelijkse updates",
                  "Dashboard toegang",
                  "Technische support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-kk-gradient flex items-center justify-center flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-white" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button 
              onClick={handleMollieCheckout}
              className="w-full bg-kk-gradient hover:opacity-90 text-white font-medium py-6 text-lg"
              size="lg"
            >
              Start voor €{plans[selectedPlan].price.toFixed(2)}/maand
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              Prijzen excl. BTW • Veilig betalen met Mollie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBasis;