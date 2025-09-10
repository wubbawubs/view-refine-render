import { Settings, Edit3, Eye, Save } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Aanpassingen = () => {
  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      <Sidebar />
      
      <main className="flex-1 px-8 py-6 overflow-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div>
            <h1 className="text-kk-h1 text-foreground mb-1">Aanpassingen</h1>
            <p className="text-kk-label text-muted-foreground">
              Beheer en personaliseer alle automatische optimalisaties
            </p>
          </div>
          
          <div className="flex gap-3 items-center">
            <ThemeToggle />
            <Button className="bg-kk-gradient text-white hover:opacity-90">
              <Save className="w-4 h-4 mr-2" />
              Wijzigingen opslaan
            </Button>
          </div>
        </div>

        {/* Optimizations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Edit3 className="w-5 h-5" />
                    H1 Optimalisatie
                  </CardTitle>
                  <CardDescription>
                    Automatisch gegenereerde hoofdtitel
                  </CardDescription>
                </div>
                <Badge variant="secondary">Actief</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Originele titel:</p>
                  <p className="font-medium">Welkom bij onze website</p>
                </div>
                <div className="p-4 bg-card border border-[hsl(var(--kk-violet))] rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Geoptimaliseerde titel:</p>
                  <p className="font-medium">Professionele Kapper Services in Hoorn - KlikKlaar</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Bewerken
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Voorbeelden
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Meta Beschrijving
                  </CardTitle>
                  <CardDescription>
                    SEO-geoptimaliseerde pagina beschrijving
                  </CardDescription>
                </div>
                <Badge variant="secondary">Actief</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Originele beschrijving:</p>
                  <p className="text-sm">Een website over onze diensten</p>
                </div>
                <div className="p-4 bg-card border border-[hsl(var(--kk-violet))] rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Geoptimaliseerde beschrijving:</p>
                  <p className="text-sm">Ervaren kappers in Hoorn. Professionele knip-, kleur- en styling services. Boek vandaag nog een afspraak voor de beste kapsalon ervaring.</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Bewerken
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Voorbeelden
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Aanpassingen;