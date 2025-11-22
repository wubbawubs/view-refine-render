import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Homepage from "./pages/Homepage";
import Aanpassingen from "./pages/Aanpassingen";
import SEOPlan from "./pages/SEOPlan";
import ContentIdeas from "./pages/ContentIdeas";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/aanpassingen" element={<Aanpassingen />} />
              <Route path="/seo-plan" element={<SEOPlan />} />
              <Route path="/content-ideas" element={<ContentIdeas />} />
              <Route path="/account" element={<Account />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
