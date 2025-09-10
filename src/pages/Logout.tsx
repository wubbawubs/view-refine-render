import { useEffect } from "react";
import { Loader2 } from "lucide-react";

const Logout = () => {
  useEffect(() => {
    // Here you'll handle the logout logic with your backend
    // For now, we'll just redirect to login after a brief moment
    const handleLogout = async () => {
      try {
        // Add your logout API call here
        console.log('Logging out...');
        
        // Clear any local storage or session data
        localStorage.clear();
        sessionStorage.clear();
        
        // Redirect to login page after a brief delay
        setTimeout(() => {
          window.location.href = '/login';
        }, 1500);
      } catch (error) {
        console.error('Logout error:', error);
        // Still redirect to login even if there's an error
        window.location.href = '/login';
      }
    };

    handleLogout();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center premium-dashboard-bg">
      <div className="text-center">
        {/* Logo */}
        <div className="mx-auto w-16 h-16 bg-kk-gradient rounded-2xl flex items-center justify-center shadow-lg mb-6">
          <span className="text-white font-bold text-2xl">K</span>
        </div>
        
        {/* Loading Spinner */}
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-kk-violet" />
        
        {/* Logout Message */}
        <h1 className="text-xl font-semibold text-foreground mb-2">
          Uitloggen...
        </h1>
        <p className="text-muted-foreground">
          U wordt doorgestuurd naar de inlogpagina
        </p>
      </div>
    </div>
  );
};

export default Logout;