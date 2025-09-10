import { User, CreditCard, Settings, Shield, Bell } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const Account = () => {
  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      <Sidebar />
      
      <main className="flex-1 px-8 py-6 overflow-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div>
            <h1 className="text-kk-h1 text-foreground mb-1">Account</h1>
            <p className="text-kk-label text-muted-foreground">
              Beheer uw account instellingen en abonnement
            </p>
          </div>
          
          <div className="flex gap-3 items-center">
            <ThemeToggle />
            <Button className="bg-kk-gradient text-white hover:opacity-90">
              Wijzigingen opslaan
            </Button>
          </div>
        </div>

        {/* Account Sections */}
        <div className="space-y-8">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profiel informatie
              </CardTitle>
              <CardDescription>
                Uw persoonlijke account gegevens
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Voornaam</Label>
                  <Input id="first-name" placeholder="Jan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Achternaam</Label>
                  <Input id="last-name" placeholder="Janssen" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mailadres</Label>
                  <Input id="email" type="email" placeholder="jan@voorbeeld.nl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <Input id="phone" placeholder="+31 6 12345678" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subscription */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Abonnement
              </CardTitle>
              <CardDescription>
                Uw huidige abonnement en facturatie
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">KlikKlaar Pro</span>
                    <Badge variant="secondary" className="bg-[hsl(var(--kk-violet))]/10 text-[hsl(var(--kk-violet))]">
                      Actief
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">€49,99 per maand</p>
                  <p className="text-xs text-muted-foreground">Volgende betaling: 15 oktober 2025</p>
                </div>
                <Button variant="outline">Wijzig abonnement</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-card border rounded-lg">
                  <div className="text-lg font-bold text-foreground">Onbeperkt</div>
                  <div className="text-sm text-muted-foreground">Optimalisaties</div>
                </div>
                <div className="text-center p-3 bg-card border rounded-lg">
                  <div className="text-lg font-bold text-foreground">5</div>
                  <div className="text-sm text-muted-foreground">Websites</div>
                </div>
                <div className="text-center p-3 bg-card border rounded-lg">
                  <div className="text-lg font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notificaties
              </CardTitle>
              <CardDescription>
                Configureer wanneer u meldingen wilt ontvangen
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>E-mail notificaties</Label>
                  <p className="text-sm text-muted-foreground">
                    Ontvang updates over nieuwe optimalisaties
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Wekelijkse rapporten</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatische SEO prestatie samenvatting
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Marketing e-mails</Label>
                  <p className="text-sm text-muted-foreground">
                    Tips, updates en aanbiedingen van KlikKlaar
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Beveiliging
              </CardTitle>
              <CardDescription>
                Account beveiliging en wachtwoord instellingen
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Twee-factor authenticatie</Label>
                  <p className="text-sm text-muted-foreground">
                    Extra beveiliging voor uw account
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Instellen
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Wachtwoord wijzigen</Label>
                  <p className="text-sm text-muted-foreground">
                    Laatst gewijzigd: 3 maanden geleden
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Wijzigen
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Account verwijderen</Label>
                  <p className="text-sm text-muted-foreground">
                    Permanent verwijderen van uw account en gegevens
                  </p>
                </div>
                <Button variant="destructive" size="sm">
                  Verwijderen
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Account;