import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    title: "Geweldig! Top 3 in Google deze week!",
    description: "Je website staat nu hoger in Google dan veel concurrenten. Dit betekent meer zichtbaarheid en potentiële klanten.",
    time: "2 uur geleden",
    type: "success" as const
  },
  {
    icon: Users,
    title: "31% beter vindbaar geworden",
    description: "Meer mensen kunnen je website nu vinden als ze zoeken.",
    time: "1 dag geleden", 
    type: "improvement" as const
  },
  {
    icon: Target,
    title: "2,347 mensen bezoeken je site", 
    description: "Potentiële klanten die uw interesse hebben in jouw diensten!",
    time: "Deze week",
    type: "metric" as const
  },
  {
    icon: Zap,
    title: "114 slimme verbeteringen toegevoegd",
    description: "Onze AI heeft je website automatisch geoptimaliseerd.",
    time: "1 week geleden",
    type: "automation" as const
  }
];

const typeStyles = {
  success: "bg-green-500",
  improvement: "bg-purple-500", 
  metric: "bg-blue-500",
  automation: "bg-orange-500"
};

const SuccessInsights = () => {
  return (
    <Card className="p-6 border-0 bg-white shadow-md animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center shadow-brand">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Success Insights</h3>
            <p className="text-sm text-gray-600">Jouw prestaties deze week</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div 
              key={index}
              className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${typeStyles[insight.type]}`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 mb-1">{insight.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                <span className="text-xs text-gray-500">{insight.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default SuccessInsights;