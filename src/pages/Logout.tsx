import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useLogout } from "@/hooks/useDashboardData";

const Logout = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logout.mutateAsync();
        
        // Redirect to login page after logout
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } catch (error) {
        console.error('Logout error:', error);
        // Still redirect to login even if there's an error
        navigate('/login');
      }
    };

    handleLogout();
  }, [logout, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center premium-dashboard-bg">
      <div className="text-center">
        {/* Logo */}
        <div className="mx-auto w-20 h-20 flex items-center justify-center mb-6">
          <img 
            src="/klikklaar-logo-gradient-new.png" 
            alt="KlikKlaar Logo" 
            className="w-full h-full object-contain"
          />
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