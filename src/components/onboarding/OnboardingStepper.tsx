import { cn } from "@/lib/utils";

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
    <div className="flex rounded-xl overflow-hidden border border-border bg-card">
      {STEPS.map((step) => {
        const isCompleted = step.number < currentStep;
        const isCurrent = step.number === currentStep;
        const isFuture = step.number > currentStep;

        return (
          <div
            key={step.number}
            className={cn(
              "flex-1 flex flex-col items-center gap-1 py-3 px-2 transition-colors",
              isCompleted && "bg-green-500 text-white",
              isCurrent && "bg-primary text-primary-foreground",
              isFuture && "bg-card text-muted-foreground"
            )}
          >
            <span
              className={cn(
                "w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold",
                isCompleted && "bg-white/20",
                isCurrent && "bg-white/20",
                isFuture && "bg-muted text-muted-foreground"
              )}
            >
              {step.number}
            </span>
            <span className="text-xs font-medium text-center leading-tight">
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default OnboardingStepper;
