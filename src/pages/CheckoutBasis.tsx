import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { StickyCTA } from "@/components/ui/sticky-cta";
import { PaymentTrustBar } from "@/components/ui/payment-trust-bar";
import { FeaturesModal } from "@/components/ui/features-modal";

const CheckoutBasis = () => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'quarterly' | 'biannual'>('monthly');
  const [isLoading, setIsLoading] = useState(false);

  const plans = {
    monthly: {
      price: 99.00,
      total: 99.00,
      label: "Maandelijks",
      subtitle: "€ 99,00 / maand · Opzegbaar",
      description: "Opzeggen in 2 klikken, geen kleine lettertjes.",
      todayAmount: "€ 99,00"
    },
    quarterly: {
      price: 89.10,
      total: 267.30,
      label: "Per 3 maanden",
      subtitle: "€ 89,10 p/m · 10% korting · € 267,30 totaal",
      description: "10% korting",
      todayAmount: "€ 267,30"
    },
    biannual: {
      price: 82.50,
      total: 495.00,
      label: "Per 6 maanden",
      subtitle: "€ 82,50 p/m · 1 maand gratis · € 495,00 totaal",
      description: "1 maand gratis",
      todayAmount: "€ 495,00"
    }
  };

  const formatPrice = (price: number): string => {
    return price.toFixed(2).replace('.', ',');
  };

  const segmentedOptions = Object.entries(plans).map(([key, plan]) => ({
    value: key,
    label: plan.label,
    subtitle: plan.subtitle,
    description: plan.description.includes('korting') || plan.description.includes('gratis') ? plan.description : undefined,
  }));

  const handleMollieCheckout = async () => {
    setIsLoading(true);
    
    try {
      const plan = plans[selectedPlan];
      
      // Call your backend API to create Mollie payment
      const response = await fetch('/api/create-mollie-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: plan.total.toFixed(2),
          description: `KlikKlaar Basis - ${plan.label}`,
          planType: 'basis',
          billingPeriod: selectedPlan,
          price: plan.price
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Payment creation failed');
      }

      if (data.paymentUrl) {
        // Redirect to Mollie payment page
        window.location.href = data.paymentUrl;
      } else {
        throw new Error('No payment URL received');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Betaling mislukt",
        description: "Er is een fout opgetreden bij het verwerken van je betaling.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-kk-h1 mb-2">KlikKlaar Basis</h1>
            <p className="text-muted-foreground">
              Klik, Klaar, Gevonden. SEO zonder gedoe.
            </p>
          </div>

          {/* Plan Selection */}
          <div className="mb-6">
            <SegmentedControl
              options={segmentedOptions}
              value={selectedPlan}
              onValueChange={(value) => setSelectedPlan(value as typeof selectedPlan)}
            />
          </div>

          {/* Summary */}
          <div className="mb-8 p-4 rounded-lg bg-muted/50">
            <div className="text-sm">
              <span className="font-medium">Vandaag betaal je:</span>{" "}
              <span className="font-bold text-lg">{plans[selectedPlan].todayAmount} excl. btw</span>
            </div>
            {selectedPlan !== 'monthly' && (
              <p className="text-xs text-muted-foreground mt-1">
                Eenmalig vooruit, automatisch niet-verlengd.
              </p>
            )}
          </div>

          {/* Features */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Inbegrepen:</h3>
              <div className="space-y-3">
                {[
                  "SEO-optimalisaties automatisch",
                  "Snelle website-injectie (zonder gedoe)",
                  "Wekelijkse updates in dashboard",
                  "Rapporten en voortgang inzichtelijk",
                  "Technische support per e-mail"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-kk-gradient flex items-center justify-center flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-white" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <FeaturesModal>
                  <button className="text-sm text-kk-orange hover:underline">
                    Wat zit er precies in?
                  </button>
                </FeaturesModal>
              </div>
            </CardContent>
          </Card>

          {/* Main CTA */}
          <div className="space-y-4 mb-8">
            <Button 
              onClick={handleMollieCheckout}
              disabled={isLoading}
              className="w-full bg-kk-gradient hover:opacity-90 text-white font-medium py-6 text-lg"
              size="lg"
            >
              {isLoading ? "Bezig met verwerken..." : "Doorgaan naar betaling"}
            </Button>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-2">
                Door te starten ga je akkoord met de{" "}
                <button className="underline hover:no-underline">voorwaarden</button>.
              </p>
              <PaymentTrustBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBasis;