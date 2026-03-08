import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Rocket, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import OnboardingStepper from "@/components/onboarding/OnboardingStepper";
import StepKlantKiezen from "@/components/onboarding/StepKlantKiezen";
import StepGegevens from "@/components/onboarding/StepGegevens";
import StepDiscovery from "@/components/onboarding/StepDiscovery";
import StepSelectPages from "@/components/onboarding/StepSelectPages";
import StepSEOPlans from "@/components/onboarding/StepSEOPlans";
import StepReviewPlans from "@/components/onboarding/StepReviewPlans";
import StepOptimalisaties from "@/components/onboarding/StepOptimalisaties";
import StepReviewOpts from "@/components/onboarding/StepReviewOpts";
import StepToplayer from "@/components/onboarding/StepToplayer";

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
      case 4:
        return (
          <StepSelectPages
            onPrevious={() => setCurrentStep(3)}
            onContinue={() => setCurrentStep(5)}
          />
        );
      case 5:
        return (
          <StepSEOPlans
            onPrevious={() => setCurrentStep(4)}
            onContinue={() => setCurrentStep(6)}
          />
        );
      case 6:
        return (
          <StepReviewPlans
            onPrevious={() => setCurrentStep(5)}
            onContinue={() => setCurrentStep(7)}
          />
        );
      case 7:
        return (
          <StepOptimalisaties
            onPrevious={() => setCurrentStep(6)}
            onContinue={() => setCurrentStep(8)}
          />
        );
      case 8:
        return (
          <StepReviewOpts
            onPrevious={() => setCurrentStep(7)}
            onContinue={() => setCurrentStep(9)}
          />
        );
      case 9:
        return (
          <StepToplayer onPrevious={() => setCurrentStep(8)} />
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <Helmet>
        <title>SEO Onboarding | KlikKlaar</title>
      </Helmet>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Premium Header with KlikKlaar gradient */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl border border-border p-8 text-center"
        >
          {/* Gradient top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--kk-violet))] via-[hsl(var(--kk-fuchsia))] to-[hsl(var(--kk-orange))]" />
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--kk-violet)/0.06)] via-card to-[hsl(var(--kk-orange)/0.04)]" />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-[hsl(var(--kk-violet)/0.15)] to-[hsl(var(--kk-fuchsia)/0.1)]">
                <Rocket className="w-6 h-6 text-[hsl(var(--kk-violet))]" />
              </div>
              <h1 className="text-2xl font-bold text-foreground tracking-tight">
                SEO Onboarding
              </h1>
              {clientName && (
                <div className="flex items-center gap-1.5 bg-gradient-to-r from-[hsl(var(--kk-violet)/0.1)] to-[hsl(var(--kk-fuchsia)/0.1)] px-3 py-1 rounded-full border border-[hsl(var(--kk-violet)/0.2)]">
                  <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--kk-fuchsia))]" />
                  <span className="text-sm font-medium text-[hsl(var(--kk-violet))]">{clientName}</span>
                </div>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              Onboard nieuwe klanten of beheer bestaande klanten
            </p>
          </div>
        </motion.div>

        {/* Stepper */}
        <div className="px-2">
          <OnboardingStepper currentStep={currentStep} />
        </div>

        {/* Step content with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 md:p-8 shadow-sm"
          >
            {/* Subtle gradient top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--kk-violet))] via-[hsl(var(--kk-fuchsia))] to-[hsl(var(--kk-orange))] opacity-40" />
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
};

export default Onboarding;
