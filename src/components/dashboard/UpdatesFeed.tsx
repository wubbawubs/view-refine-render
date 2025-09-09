import { Card } from "@/components/ui/card";
import { TrendingUp, Eye, Settings, MapPin } from "lucide-react";

const updates = [
  {
    type: "ranking",
    icon: TrendingUp,
    title: "Nieuwe ranking: #3 voor 'kapper hoorn' (+2)",
    description: "+15% verwacht organisch verkeer",
    timestamp: "2 uur geleden"
  },
  {
    type: "visibility", 
    icon: Eye,
    title: "31% hogere zichtbaarheid op 47 zoektermen (7 dagen)",
    description: "Verbeterde posities in lokale zoekresultaten",
    timestamp: "1 dag geleden"
  },
  {
    type: "tech",
    icon: Settings,
    title: "Schema markup toegevoegd op 12 pagina's",
    description: "Betere interpretatie door zoekmachines",
    timestamp: "3 dagen geleden"
  },
  {
    type: "local",
    icon: MapPin,
    title: "Toplayer actief op Services, About, Home",
    description: "Lokale zichtbaarheid geoptimaliseerd",
    timestamp: "1 week geleden"
  }
];

const typeStyles = {
  ranking: "bg-kk-primary text-white",
  visibility: "bg-kk-success text-white", 
  tech: "bg-kk-gray-600 text-white",
  local: "bg-kk-secondary text-white"
};

const typeBadges = {
  ranking: "Ranking",
  visibility: "Visibility", 
  tech: "Tech fix",
  local: "Local"
};

const UpdatesFeed = () => {
  return (
    <Card className="p-6 bg-white border-kk-gray-200 shadow-card animate-fade-in">
      <div className="mb-6">
        <h3 className="text-h3 text-foreground mb-1">Recente updates</h3>
        <p className="text-small text-kk-gray-500">Data-gedreven inzichten van deze week</p>
      </div>

      <div className="space-y-4">
        {updates.map((update, index) => {
          const Icon = update.icon;
          return (
            <div 
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-kk-gray-50 border border-kk-gray-200 hover:shadow-card transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${typeStyles[update.type as keyof typeof typeStyles]}`}>
                <Icon className="w-5 h-5" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-foreground text-small">{update.title}</h4>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs-custom font-medium bg-kk-gray-100 text-kk-gray-600 ml-2 whitespace-nowrap">
                    {typeBadges[update.type as keyof typeof typeBadges]}
                  </span>
                </div>
                <p className="text-xs-custom text-kk-gray-500 mb-2">{update.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs-custom text-kk-gray-400">{update.timestamp}</span>
                  <button className="text-xs-custom text-kk-primary hover:underline">
                    Bekijk details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default UpdatesFeed;