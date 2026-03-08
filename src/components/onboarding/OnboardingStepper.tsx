import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export interface OnboardingStep {
  number: number;
  label: string;
}

const STEPS: OnboardingStep[] = [
  { number: 1, label: "Klant Kiezen" },
  { number: 2, label: "Gegevens" },
  { number: 3, label: "Discovery" },
  { number: 4, label: "Select Pages" },
  { number: 5, label: "SEO Plans" },
  { number: 6, label: "Review Plans" },
  { number: 7, label: "Optimalisaties" },
  { number: 8, label: "Review Opts" },
  { number: 9, label: "Toplayer" },
];

interface OnboardingStepperProps {
  currentStep: number;
}

const OnboardingStepper = ({ currentStep }: OnboardingStepperProps) => {
  return (
    <div className="relative">
      {/* Progress bar behind */}
      <div className="absolute top-5 left-0 right-0 h-0.5 bg-border mx-8 z-0" />
      <div
        className="absolute top-5 left-0 h-0.5 bg-primary mx-8 z-0 transition-all duration-500"
        style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
      />

      <div className="relative z-10 flex justify-between">
        {STEPS.map((step) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <div
              key={step.number}
              className="flex flex-col items-center gap-1.5"
            >
              <motion.div
                initial={false}
                animate={{
                  scale: isCurrent ? 1.15 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 border-2",
                  isCompleted &&
                    "bg-green-500 border-green-500 text-white shadow-md",
                  isCurrent &&
                    "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/30",
                  !isCompleted &&
                    !isCurrent &&
                    "bg-card border-border text-muted-foreground"
                )}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  step.number
                )}
              </motion.div>
              <span
                className={cn(
                  "text-[10px] font-medium text-center leading-tight max-w-[70px]",
                  isCurrent && "text-primary font-semibold",
                  isCompleted && "text-foreground",
                  !isCompleted && !isCurrent && "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnboardingStepper;
