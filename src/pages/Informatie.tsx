import { Info, Building, Settings, Globe, Target } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const Informatie = () => {
  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      <Sidebar />
      
      <main className="flex-1 px-8 py-6 overflow-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div>
            <h1 className="text-kk-h1 text-foreground mb-1">Informatie & Instellingen</h1>
            <p className="text-kk-label text-muted-foreground">
              Bedrijfsgegevens en configuratie van de optimalisatie-engine
            </p>
          </div>
          
          <div className="flex gap-3 items-center">
            <ThemeToggle />
            <Button className="bg-kk-gradient text-white hover:opacity-90">
              Wijzigingen opslaan
            </Button>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* Business Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5" />
                Bedrijfsinformatie
              </CardTitle>
              <CardDescription>
                Deze informatie wordt gebruikt voor lokale SEO optimalisatie
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="business-name">Bedrijfsnaam</Label>
                  <Input id="business-name" placeholder="KlikKlaar Kapsalon" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-type">Bedrijfstype</Label>
                  <Input id="business-type" placeholder="Kapsalon" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Adres</Label>
                  <Input id="address" placeholder="Hoofdstraat 123, 1621 AA Hoorn" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <Input id="phone" placeholder="+31 229 123456" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Bedrijfsomschrijving</Label>
                <Textarea 
                  id="description" 
                  placeholder="Korte beschrijving van uw bedrijf en diensten..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* SEO Engine Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Optimalisatie-engine
              </CardTitle>
              <CardDescription>
                Configureer hoe de automatische SEO optimalisaties werken
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Automatische optimalisaties</Label>
                  <p className="text-sm text-muted-foreground">
                    Sta toe dat KlikKlaar automatisch SEO-verbeteringen doorvoert
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Content generatie</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatisch genereren van meta descriptions en alt-teksten
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Wekelijkse rapporten</Label>
                  <p className="text-sm text-muted-foreground">
                    Ontvang wekelijks een samenvatting van optimalisaties
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Target Keywords */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Doelzoekwoorden
              </CardTitle>
              <CardDescription>
                Primaire zoekwoorden waar u op wilt ranken
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="primary-keywords">Primaire zoekwoorden (gescheiden door komma's)</Label>
                <Input 
                  id="primary-keywords" 
                  placeholder="kapper hoorn, kapsalon hoorn, haar knippen hoorn"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location-keywords">Locatie zoekwoorden</Label>
                <Input 
                  id="location-keywords" 
                  placeholder="hoorn, west-friesland, noord-holland"
                />
              </div>
            </CardContent>
          </Card>

          {/* Website Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Website instellingen
              </CardTitle>
              <CardDescription>
                Technische instellingen voor uw website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="website-url">Website URL</Label>
                  <Input id="website-url" placeholder="https://www.uwbedrijf.nl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="google-analytics">Google Analytics ID</Label>
                  <Input id="google-analytics" placeholder="G-XXXXXXXXXX" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Informatie;