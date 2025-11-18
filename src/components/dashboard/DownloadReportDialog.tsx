import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface DownloadReportDialogProps {
  buttonText: string;
}

const DownloadReportDialog = ({ buttonText }: DownloadReportDialogProps) => {
  const [reportType, setReportType] = useState("complete");
  const [includeCharts, setIncludeCharts] = useState(true);
  const [includeRecommendations, setIncludeRecommendations] = useState(true);
  const [open, setOpen] = useState(false);

  const handleDownload = () => {
    // Simulate PDF generation
    toast({
      title: "Rapport wordt gegenereerd",
      description: "Je PDF rapport wordt voorbereid en wordt binnen enkele seconden gedownload.",
    });
    
    setTimeout(() => {
      toast({
        title: "Rapport klaar!",
        description: "Je SEO rapport is succesvol gedownload.",
      });
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="w-4 h-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>SEO Rapport downloaden</DialogTitle>
          <DialogDescription>
            Kies welke gegevens je wilt opnemen in je PDF rapport
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <Label>Rapport type</Label>
            <RadioGroup value={reportType} onValueChange={setReportType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="complete" id="complete" />
                <Label htmlFor="complete" className="font-normal cursor-pointer">
                  Compleet rapport (alle data)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="summary" id="summary" />
                <Label htmlFor="summary" className="font-normal cursor-pointer">
                  Samenvatting (alleen highlights)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="technical" id="technical" />
                <Label htmlFor="technical" className="font-normal cursor-pointer">
                  Technisch rapport (voor developers)
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3 pt-3 border-t">
            <Label>Extra opties</Label>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="charts"
                  checked={includeCharts}
                  onCheckedChange={(checked) => setIncludeCharts(checked as boolean)}
                />
                <Label htmlFor="charts" className="font-normal cursor-pointer">
                  Inclusief grafieken en visualisaties
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="recommendations"
                  checked={includeRecommendations}
                  onCheckedChange={(checked) => setIncludeRecommendations(checked as boolean)}
                />
                <Label htmlFor="recommendations" className="font-normal cursor-pointer">
                  Inclusief aanbevelingen en actiepunten
                </Label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">
            Annuleren
          </Button>
          <Button onClick={handleDownload} className="flex-1 gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadReportDialog;
