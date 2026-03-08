import { useState } from "react";
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

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">Klant Gegevens</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="bedrijfsnaam">Bedrijfsnaam *</Label>
          <Input
            id="bedrijfsnaam"
            placeholder="Bijv. Robaws"
            value={form.bedrijfsnaam}
            onChange={(e) => updateField("bedrijfsnaam", e.target.value)}
            maxLength={100}
          />
          {errors.bedrijfsnaam ? (
            <p className="text-xs text-destructive">{errors.bedrijfsnaam}</p>
          ) : (
            <p className="text-xs text-muted-foreground">Naam van het bedrijf</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="websiteUrl">Website URL *</Label>
          <Input
            id="websiteUrl"
            placeholder="https://example.nl"
            value={form.websiteUrl}
            onChange={(e) => updateField("websiteUrl", e.target.value)}
            maxLength={255}
          />
          {errors.websiteUrl ? (
            <p className="text-xs text-destructive">{errors.websiteUrl}</p>
          ) : (
            <p className="text-xs text-muted-foreground">De hoofdpagina URL van de website</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Klant Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="klant@example.nl"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            maxLength={255}
          />
          {errors.email ? (
            <p className="text-xs text-destructive">{errors.email}</p>
          ) : (
            <p className="text-xs text-muted-foreground">Emailadres voor account aanmaken</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="klantNaam">Klant Naam *</Label>
          <Input
            id="klantNaam"
            placeholder="Bijv. Jan Jansen"
            value={form.klantNaam}
            onChange={(e) => updateField("klantNaam", e.target.value)}
            maxLength={100}
          />
          {errors.klantNaam ? (
            <p className="text-xs text-destructive">{errors.klantNaam}</p>
          ) : (
            <p className="text-xs text-muted-foreground">Naam van de contactpersoon</p>
          )}
        </div>

        <div className="space-y-1.5 md:col-span-2">
          <Label htmlFor="locatie">Locatie (optioneel)</Label>
          <Input
            id="locatie"
            placeholder="Bijv. Amsterdam"
            value={form.locatie}
            onChange={(e) => updateField("locatie", e.target.value)}
            maxLength={100}
          />
          <p className="text-xs text-muted-foreground">Stad of regio voor lokale SEO</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border pt-4">
        <Button variant="outline" onClick={onPrevious}>
          ⬅ Vorige
        </Button>
        <Button onClick={handleSubmit}>
          Start Onboarding
        </Button>
      </div>
    </div>
  );
};

export default StepGegevens;
