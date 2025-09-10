import { Card } from "@/components/ui/card";
import { TrendingUp, Eye, Settings, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const UpdatesFeed = () => {
  const updates = [
    {
      type: "ranking",
      title: "31% hogere zichtbaarheid op 47 zoektermen",
      impact: "+15% verwacht organisch verkeer",
      timestamp: "7 dagen",
      badge: "Zichtbaarheid"
    },
    {
      type: "technical", 
      title: "Schema markup toegevoegd op 12 pagina's",
      impact: "Verbeterde rich snippets",
      timestamp: "3 dagen geleden",
      badge: "Tech fix"
    },
    {
      type: "content",
      title: "Toplayer actief op Services, About, Home",
      impact: "Geoptimaliseerde content",
      timestamp: "1 dag geleden", 
      badge: "Content"
    },
    {
      type: "local",
      title: "Google My Business profiel geüpdatet",
      impact: "Lokale zichtbaarheid verbeterd",
      timestamp: "2 uur geleden",
      badge: "Local"
    }
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "ranking": return "bg-kk-gray-100 text-kk-violet";
      case "technical": return "bg-kk-gray-100 text-kk-eggplant"; 
      case "content": return "bg-green-50 text-green-700";
      case "local": return "bg-blue-50 text-blue-700";
      default: return "bg-kk-gray-100 text-kk-gray-700";
    }
  };

  return (
    <Card className="p-6 shadow-card animate-fade-in rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-kk-h2 text-kk-eggplant">Recente updates</h3>
          <p className="text-kk-caption text-kk-gray-500 mt-1">Data-gedreven inzichten van deze week</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="border-l-2 border-kk-gray-300 pl-4 pb-4 last:pb-0">
            <div className="flex items-start justify-between mb-2">
              <span className={cn(
                "px-2 py-1 rounded-full text-kk-caption font-medium",
                getBadgeColor(update.type)
              )}>
                {update.badge}
              </span>
              <span className="text-kk-caption text-kk-gray-500">{update.timestamp}</span>
            </div>
            
            <h4 className="text-kk-label font-semibold text-kk-eggplant mb-1">
              {update.title}
            </h4>
            
            <p className="text-kk-caption text-kk-gray-500 mb-2">
              {update.impact}
            </p>
            
            <button className="text-kk-caption text-kk-violet hover:underline">
              Bekijk details
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default UpdatesFeed;