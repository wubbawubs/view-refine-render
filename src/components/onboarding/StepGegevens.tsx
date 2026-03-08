import { useState } from "react";
import { ArrowLeft, ArrowRight, Building2, Globe, Mail, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ClientData {
  bedrijfsnaam: string;
  websiteUrl: string;
  email: string;
  klantNaam: string;
  locatie: string;
}

interface StepGegevensProps {
  onPrevious: () => void;
  onStartOnboarding: (data: ClientData) => void;
}

const StepGegevens = ({ onPrevious, onStartOnboarding }: StepGegevensProps) => {
  const [form, setForm] = useState<ClientData>({
    bedrijfsnaam: "",
    websiteUrl: "",
    email: "",
    klantNaam: "",
    locatie: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ClientData, string>>>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.bedrijfsnaam.trim()) newErrors.bedrijfsnaam = "Verplicht";
    if (!form.websiteUrl.trim()) newErrors.websiteUrl = "Verplicht";
    if (!form.email.trim()) newErrors.email = "Verplicht";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Ongeldig emailadres";
    if (!form.klantNaam.trim()) newErrors.klantNaam = "Verplicht";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onStartOnboarding(form);
    }
  };

  const updateField = (field: keyof ClientData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const fields: { key: keyof ClientData; label: string; icon: React.ReactNode; placeholder: string; hint: string; required: boolean; type?: string; colSpan?: boolean }[] = [
    { key: "bedrijfsnaam", label: "Bedrijfsnaam", icon: <Building2 className="w-4 h-4 text-muted-foreground" />, placeholder: "Bijv. Robaws", hint: "Naam van het bedrijf", required: true },
    { key: "websiteUrl", label: "Website URL", icon: <Globe className="w-4 h-4 text-muted-foreground" />, placeholder: "https://example.nl", hint: "De hoofdpagina URL van de website", required: true },
    { key: "email", label: "Klant Email", icon: <Mail className="w-4 h-4 text-muted-foreground" />, placeholder: "klant@example.nl", hint: "Emailadres voor account aanmaken", required: true, type: "email" },
    { key: "klantNaam", label: "Klant Naam", icon: <User className="w-4 h-4 text-muted-foreground" />, placeholder: "Bijv. Jan Jansen", hint: "Naam van de contactpersoon", required: true },
    { key: "locatie", label: "Locatie", icon: <MapPin className="w-4 h-4 text-muted-foreground" />, placeholder: "Bijv. Amsterdam", hint: "Stad of regio voor lokale SEO", required: false, colSpan: true },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-foreground">Klant Gegevens</h2>
        <p className="text-sm text-muted-foreground">Vul de basisinformatie in van de klant die je wilt onboarden.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        {fields.map(({ key, label, icon, placeholder, hint, required, type, colSpan }) => (
          <div key={key} className={`space-y-1.5 ${colSpan ? "md:col-span-2" : ""}`}>
            <Label htmlFor={key} className="flex items-center gap-1.5">
              {icon}
              {label} {required && <span className="text-[hsl(var(--kk-fuchsia))]">*</span>}
            </Label>
            <Input
              id={key}
              type={type || "text"}
              placeholder={placeholder}
              value={form[key]}
              onChange={(e) => updateField(key, e.target.value)}
              maxLength={key === "websiteUrl" || key === "email" ? 255 : 100}
              className={errors[key] ? "border-destructive focus-visible:ring-destructive" : ""}
            />
            {errors[key] ? (
              <p className="text-xs text-destructive">{errors[key]}</p>
            ) : (
              <p className="text-xs text-muted-foreground">{hint}</p>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border pt-4">
        <Button variant="outline" onClick={onPrevious} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Vorige
        </Button>
        <Button
          onClick={handleSubmit}
          className="gap-2 bg-gradient-to-r from-[hsl(var(--kk-violet))] to-[hsl(var(--kk-fuchsia))] hover:opacity-90 text-white border-0"
        >
          Start Onboarding
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default StepGegevens;
