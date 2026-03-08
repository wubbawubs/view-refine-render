import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Rocket } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import OnboardingStepper from "@/components/onboarding/OnboardingStepper";
import StepKlantKiezen from "@/components/onboarding/StepKlantKiezen";
import StepGegevens from "@/components/onboarding/StepGegevens";
import StepDiscovery from "@/components/onboarding/StepDiscovery";
import StepSelectPages from "@/components/onboarding/StepSelectPages";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [clientName, setClientName] = useState("");

  const handleNewClient = () => {
    setCurrentStep(2);
  };

  const handleStartOnboarding = (data: { bedrijfsnaam: string; websiteUrl: string; email: string; klantNaam: string; locatie: string }) => {
    setClientName(data.bedrijfsnaam);
    setCurrentStep(3);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepKlantKiezen
            onNewClient={handleNewClient}
            onNextStep={() => setCurrentStep(2)}
          />
        );
      case 2:
        return (
          <StepGegevens
            onPrevious={() => setCurrentStep(1)}
            onStartOnboarding={handleStartOnboarding}
          />
        );
      case 3:
        return <StepDiscovery clientName={clientName} />;
      default:
        return (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg font-medium">Stap {currentStep} - Binnenkort beschikbaar</p>
            <p className="text-sm mt-2">Deze stap wordt nog gebouwd.</p>
          </div>
        );
    }
  };

  return (
    <DashboardLayout>
      <Helmet>
        <title>SEO Onboarding | KlikKlaar</title>
      </Helmet>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="rounded-xl border border-border bg-card p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Rocket className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">SEO Onboarding</h1>
            {clientName && (
              <span className="text-muted-foreground font-normal">- {clientName}</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            Onboard nieuwe klanten of beheer bestaande klanten
          </p>
        </div>

        {/* Stepper */}
        <OnboardingStepper currentStep={currentStep} />

        {/* Step content */}
        <div className="rounded-xl border border-border bg-card p-6">
          {renderStep()}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Onboarding;
