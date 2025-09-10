import { FileSearch, AlertTriangle, CheckCircle, Clock, Target } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Audit = () => {
  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      <Sidebar />
      
      <main className="flex-1 px-8 py-6 overflow-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div>
            <h1 className="text-kk-h1 text-foreground mb-1">SEO Audit</h1>
            <p className="text-kk-label text-muted-foreground">
              Volledige analyse van uw website prestaties en optimalisatie mogelijkheden
            </p>
          </div>
          
          <div className="flex gap-3 items-center">
            <ThemeToggle />
            <div className="flex items-center gap-2 text-kk-label text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Laatste audit: 9 september 2025</span>
            </div>
          </div>
        </div>

        {/* Audit Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Technische SEO
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Score</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">8.5/10</Badge>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-xs text-muted-foreground">23 van 27 controles geslaagd</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Content Kwaliteit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Score</span>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">6.2/10</Badge>
                </div>
                <Progress value={62} className="h-2" />
                <p className="text-xs text-muted-foreground">12 van 19 controles geslaagd</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-500" />
                Gebruikerservaring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Score</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">7.8/10</Badge>
                </div>
                <Progress value={78} className="h-2" />
                <p className="text-xs text-muted-foreground">15 van 18 controles geslaagd</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Results */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Goed uitgevoerd
              </CardTitle>
              <CardDescription>Deze elementen zijn correct geoptimaliseerd</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Meta titles aanwezig op alle pagina's</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">✓</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">SSL certificaat actief</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">✓</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Mobile-friendly design</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">✓</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Aandachtspunten
              </CardTitle>
              <CardDescription>Deze punten kunnen worden verbeterd</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <span className="text-sm font-medium">Alt-teksten ontbreken bij afbeeldingen</span>
                    <p className="text-xs text-muted-foreground">5 afbeeldingen zonder alt-tekst gevonden</p>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Middel</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <span className="text-sm font-medium">Pagina laadsnelheid kan beter</span>
                    <p className="text-xs text-muted-foreground">Huidige score: 3.2s, doel: &lt;2.5s</p>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Hoog</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Audit;