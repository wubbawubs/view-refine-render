import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle2, AlertCircle, ThumbsUp, ThumbsDown } from "lucide-react";

const WeeklySummary = () => {
  return (
    <div className="space-y-6">
      {/* Week Summary Card */}
      <Card className="p-6 border bg-card shadow-md animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-5 h-5 text-warning" />
          <h3 className="text-lg font-semibold text-card-foreground">Week 29 Samenvatting</h3>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-green-50 border border-green-200">
            <h4 className="font-medium text-green-900 mb-3">Deze week hebben we bereikt:</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-green-800">
                <CheckCircle2 className="w-4 h-4" />
                <span>114 slimme zoekwoorden toegevoegd</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-800">
                <CheckCircle2 className="w-4 h-4" />
                <span>8.5% hogere Google score</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-800">
                <CheckCircle2 className="w-4 h-4" />
                <span>38% verwachte groei in nieuwe klanten</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-blue-900">Volgende week focussen we op:</h4>
            </div>
            <p className="text-sm text-blue-800">
              Lokale vindbaarheid - zorgen dat mensen in jouw buurt je makkelijker kunnen vinden
            </p>
          </div>
        </div>
      </Card>

      {/* Feedback Card */}
      <Card className="p-6 border bg-card shadow-md animate-slide-up">
        <h3 className="text-lg font-semibold text-card-foreground mb-2">Hoe vond je deze week?</h3>
        <p className="text-sm text-muted-foreground mb-4">Jouw feedback helpt ons om je nog beter te helpen</p>
        
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors group">
            <ThumbsUp className="w-5 h-5 text-orange-600 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-orange-700">Super tevreden</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-border hover:border-muted-foreground hover:bg-muted transition-colors group">
            <ThumbsDown className="w-5 h-5 text-muted-foreground group-hover:scale-110 transition-transform" />
            <span className="font-medium text-muted-foreground">Kan beter</span>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default WeeklySummary;