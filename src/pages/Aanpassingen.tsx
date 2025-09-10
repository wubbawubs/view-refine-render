import { Settings, Edit3, Eye, Save, Globe } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Aanpassingen = () => {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const [h1Content, setH1Content] = useState('Professionele Kapper Services in Hoorn - KlikKlaar');
  const [metaContent, setMetaContent] = useState('Ervaren kappers in Hoorn. Professionele knip-, kleur- en styling services. Boek vandaag nog een afspraak voor de beste kapsalon ervaring.');

  const texts = {
    nl: {
      title: 'Aanpassingen',
      subtitle: 'Beheer en personaliseer alle automatische optimalisaties',
      save: 'Wijzigingen opslaan',
      h1Title: 'H1 Optimalisatie',
      h1Subtitle: 'Automatisch gegenereerde hoofdtitel',
      metaTitle: 'Meta Beschrijving',
      metaSubtitle: 'SEO-geoptimaliseerde pagina beschrijving',
      originalTitle: 'Originele titel:',
      originalDescription: 'Originele beschrijving:',
      optimizedTitle: 'Geoptimaliseerde titel:',
      optimizedDescription: 'Geoptimaliseerde beschrijving:',
      edit: 'Bewerken',
      examples: 'Voorbeelden',
      active: 'Actief',
      editH1: 'H1 Titel Bewerken',
      editMeta: 'Meta Beschrijving Bewerken',
      cancel: 'Annuleren',
      language: 'Taal'
    },
    en: {
      title: 'Adjustments',
      subtitle: 'Manage and personalize all automatic optimizations',
      save: 'Save Changes',
      h1Title: 'H1 Optimization',
      h1Subtitle: 'Automatically generated main title',
      metaTitle: 'Meta Description',
      metaSubtitle: 'SEO-optimized page description',
      originalTitle: 'Original title:',
      originalDescription: 'Original description:',
      optimizedTitle: 'Optimized title:',
      optimizedDescription: 'Optimized description:',
      edit: 'Edit',
      examples: 'Examples',
      active: 'Active',
      editH1: 'Edit H1 Title',
      editMeta: 'Edit Meta Description',
      cancel: 'Cancel',
      language: 'Language'
    }
  };

  const t = texts[language];

  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      <Sidebar />
      
      <main className="flex-1 px-8 py-6 overflow-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div>
            <h1 className="text-kk-h1 text-foreground mb-1">{t.title}</h1>
            <p className="text-kk-label text-muted-foreground">
              {t.subtitle}
            </p>
          </div>
          
          <div className="flex gap-3 items-center">
            <Select value={language} onValueChange={(value: 'nl' | 'en') => setLanguage(value)}>
              <SelectTrigger className="w-[140px]">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nl">Nederlands</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
            <ThemeToggle />
            <Button className="bg-kk-gradient text-white hover:opacity-90">
              <Save className="w-4 h-4 mr-2" />
              {t.save}
            </Button>
          </div>
        </div>

        {/* Optimizations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* H1 Optimization */}
          <Card className="border border-border/50">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Edit3 className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
                    {t.h1Title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-1">
                    {t.h1Subtitle}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                  {t.active}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{t.originalTitle}</p>
                <div className="p-3 bg-muted/30 rounded-md border">
                  <p className="text-sm font-medium">Welkom bij onze website</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">{t.optimizedTitle}</p>
                <div className="p-3 bg-[hsl(var(--kk-violet))]/5 rounded-md border border-[hsl(var(--kk-violet))]/20">
                  <p className="text-sm font-medium">{h1Content}</p>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit3 className="w-4 h-4 mr-2" />
                      {t.edit}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>{t.editH1}</DialogTitle>
                      <DialogDescription>
                        Pas de H1 titel aan naar uw wensen
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-2">
                      <Label htmlFor="h1-content">H1 Titel</Label>
                      <Textarea 
                        id="h1-content"
                        value={h1Content}
                        onChange={(e) => setH1Content(e.target.value)}
                        className="min-h-[80px]"
                      />
                    </div>
                    <DialogFooter>
                      <Button variant="outline">{t.cancel}</Button>
                      <Button className="bg-kk-gradient text-white">
                        {t.save}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-2" />
                  {t.examples}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Meta Description */}
          <Card className="border border-border/50">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Settings className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
                    {t.metaTitle}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-1">
                    {t.metaSubtitle}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                  {t.active}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{t.originalDescription}</p>
                <div className="p-3 bg-muted/30 rounded-md border">
                  <p className="text-sm">Een website over onze diensten</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">{t.optimizedDescription}</p>
                <div className="p-3 bg-[hsl(var(--kk-violet))]/5 rounded-md border border-[hsl(var(--kk-violet))]/20">
                  <p className="text-sm">{metaContent}</p>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit3 className="w-4 h-4 mr-2" />
                      {t.edit}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>{t.editMeta}</DialogTitle>
                      <DialogDescription>
                        Pas de meta beschrijving aan naar uw wensen
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-2">
                      <Label htmlFor="meta-content">Meta Beschrijving</Label>
                      <Textarea 
                        id="meta-content"
                        value={metaContent}
                        onChange={(e) => setMetaContent(e.target.value)}
                        className="min-h-[100px]"
                        placeholder="Voer uw meta beschrijving in..."
                      />
                    </div>
                    <DialogFooter>
                      <Button variant="outline">{t.cancel}</Button>
                      <Button className="bg-kk-gradient text-white">
                        {t.save}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-2" />
                  {t.examples}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Aanpassingen;