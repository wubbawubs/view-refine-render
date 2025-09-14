import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div>
      {/* Trustpilot Bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div className="flex items-center space-x-2 text-sm">
            <span>Excellent</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400">★</span>
              ))}
            </div>
            <span>63 reviews on</span>
            <span className="font-semibold">Trustpilot</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/746a8291-90ca-4e7e-a087-4feae21cec1d.png" 
                alt="KlikKlaar SEO Logo"
                className="h-18 w-auto"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/login'}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Login
              </Button>
              <Button 
                onClick={() => window.location.href = '/homepage#pricing'}
                className="bg-gray-900 hover:bg-gray-800 text-white"
              >
                Start nu
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;