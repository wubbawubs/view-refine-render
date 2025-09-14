const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/746a8291-90ca-4e7e-a087-4feae21cec1d.png" 
                alt="KlikKlaar SEO Logo"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              KlikKlaar SEO maakt je vindbaar op zoekmachines zowel als AI, Volledig automatisch.
            </p>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">in</span>
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">ig</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button 
                  onClick={() => {
                    window.location.href = '/homepage#pricing';
                  }}
                  className="hover:text-white cursor-pointer"
                >
                  Direct starten
                </button>
              </li>
              <li><a href="/over-ons" className="hover:text-white cursor-pointer">Over ons</a></li>
              <li><a href="/algemene-voorwaarden" className="hover:text-white cursor-pointer">Algemene voorwaarden</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Neem contact op</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Onze gegevens</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Klikklaar SEO</li>
              <li>Olieslagers poort 1<br />1601AW Enkhuizen</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">Copyright © 2025. All rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Website by KlikKlaar SEO</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;