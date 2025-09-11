import { Button } from "@/components/ui/button";
import { Star, CheckCircle } from "lucide-react";
import dashboardScreenshot from "@/assets/dashboard-screenshot.png";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Trustpilot Badge */}
      <div className="bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600 py-3">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 text-white">
            <span className="font-semibold">Excellent</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-green-400 text-green-400" />
              ))}
            </div>
            <span className="text-sm">63 reviews on</span>
            <span className="font-semibold">Trustpilot</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <span className="font-bold text-xl text-gray-800">KlikKlaar</span>
              <span className="text-sm text-gray-500 ml-1">SEO</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-purple-600 border-purple-300 hover:bg-purple-50">
              Vacatures
            </Button>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white">
              Product demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Master jouw SEO met de{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Power van AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Betere rankings voor je website in minder tijd
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="mb-16 px-8 py-4 text-lg border-2 border-gray-400 hover:bg-gray-50 rounded-lg"
          >
            Boek hier je Demo
          </Button>
          
          {/* Trust indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-gray-700 mb-20">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span>Vind micro keywords met AI</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span>Produceer content met hoge conversie</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span>Verbeter bestaande content met AI</span>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <img 
                src={dashboardScreenshot} 
                alt="KlikKlaar SEO Dashboard Screenshot"
                className="w-full rounded-2xl shadow-2xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;