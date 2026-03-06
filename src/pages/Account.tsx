import { User, CreditCard, Settings, Shield, Bell, Globe, Save, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Account = () => {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const texts = {
    nl: {
      title: 'Account',
      subtitle: 'Beheer uw account instellingen en abonnement',
      save: 'Wijzigingen opslaan',
      profileInfo: 'Profiel informatie',
      profileInfoDesc: 'Uw persoonlijke account gegevens',
      firstName: 'Voornaam',
      lastName: 'Achternaam',
      email: 'E-mailadres',
      phone: 'Telefoonnummer',
      subscription: 'Abonnement',
      subscriptionDesc: 'Uw huidige abonnement en facturatie',
      notifications: 'Notificaties',
      notificationsDesc: 'Configureer wanneer u meldingen wilt ontvangen',
      security: 'Beveiliging',
      securityDesc: 'Account beveiliging en wachtwoord instellingen',
      language: 'Taal'
    },
    en: {
      title: 'Account',
      subtitle: 'Manage your account settings and subscription',
      save: 'Save Changes',
      profileInfo: 'Profile Information',
      profileInfoDesc: 'Your personal account details',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subscription: 'Subscription',
      subscriptionDesc: 'Your current subscription and billing',
      notifications: 'Notifications',
      notificationsDesc: 'Configure when you want to receive notifications',
      security: 'Security',
      securityDesc: 'Account security and password settings',
      language: 'Language'
    }
  };

  const t = texts[language];

  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:relative lg:block z-50 h-full transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar />
        {/* Mobile Close Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 lg:hidden text-sidebar-foreground hover:bg-sidebar-accent"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      <main className="flex-1 px-3 sm:px-4 lg:px-8 py-4 sm:py-6 overflow-x-hidden overflow-y-auto relative z-10 w-full min-w-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6 lg:mb-8 pb-3 sm:pb-4 border-b border-border">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden shrink-0 p-1.5"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-4 h-4" />
            </Button>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl lg:text-kk-h1 text-foreground mb-1 truncate">{t.title}</h1>
              <p className="text-xs sm:text-sm lg:text-kk-label text-muted-foreground truncate">
                {t.subtitle}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 items-center shrink-0 w-full sm:w-auto">
            <Select value={language} onValueChange={(value: 'nl' | 'en') => setLanguage(value)}>
              <SelectTrigger className="w-[60px] sm:w-[80px] lg:w-[120px] text-xs lg:text-sm h-8 lg:h-9">
                <Globe className="w-3 h-3 sm:mr-1" />
                <SelectValue className="hidden sm:inline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nl">NL</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectContent>
            </Select>
            <div className="[&>button]:h-8 [&>button]:w-8 lg:[&>button]:h-9 lg:[&>button]:w-9 shrink-0">
              <ThemeToggle />
            </div>
            <Button className="bg-kk-gradient text-white hover:opacity-90 text-xs lg:text-sm px-2 sm:px-3 lg:px-4 h-8 lg:h-9 flex-1 sm:flex-none">
              <Save className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 shrink-0" />
              <span className="hidden sm:inline truncate">{t.save}</span>
              <span className="sm:hidden">Save</span>
            </Button>
          </div>
        </div>

        {/* Account Sections */}
        <div className="space-y-8">
          {/* Profile Information */}
          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
                {t.profileInfo}
              </CardTitle>
              <CardDescription>
                {t.profileInfoDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">{t.firstName}</Label>
                  <Input id="first-name" value="Luuk" readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">{t.lastName}</Label>
                  <Input id="last-name" value="Wubs" readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.email}</Label>
                  <Input id="email" type="email" value="luuk@klikklaar.io" readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.phone}</Label>
                  <Input id="phone" value="0631354936" readOnly />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subscription */}
          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
                {t.subscription}
              </CardTitle>
              <CardDescription>
                {t.subscriptionDesc}
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
                  <p className="text-sm text-muted-foreground">€149 per maand</p>
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

          {/* Email Preferences */}
          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
                E-mail Voorkeuren
              </CardTitle>
              <CardDescription>
                Beheer welke e-mails u van ons ontvangt
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Wekelijks SEO Rapport</Label>
                  <p className="text-sm text-muted-foreground">
                    Ontvang elke maandag een samenvatting van uw SEO prestaties
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>"We zijn bezig" updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Tussentijdse updates over lopende optimalisaties
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>SEO Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Directe meldingen bij urgente SEO issues
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Aankondigingen & nieuws</Label>
                  <p className="text-sm text-muted-foreground">
                    Updates over nieuwe features en verbeteringen
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>E-mail frequentie</Label>
                  <p className="text-sm text-muted-foreground">
                    Hoe vaak wilt u rapporten ontvangen
                  </p>
                </div>
                <Select defaultValue="weekly">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Wekelijks</SelectItem>
                    <SelectItem value="biweekly">Tweewekelijks</SelectItem>
                    <SelectItem value="monthly">Maandelijks</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Dashboard Notificaties
              </CardTitle>
              <CardDescription>
                Configureer in-app meldingen
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Optimalisatie meldingen</Label>
                  <p className="text-sm text-muted-foreground">
                    Melding wanneer een optimalisatie is toegepast
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Ranking veranderingen</Label>
                  <p className="text-sm text-muted-foreground">
                    Melding bij significante ranking veranderingen
                  </p>
                </div>
                <Switch defaultChecked />
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