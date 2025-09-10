import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Aanpassingen from "./pages/Aanpassingen";
import Audit from "./pages/Audit";
import Informatie from "./pages/Informatie";
import Hulp from "./pages/Hulp";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import CheckoutBasis from "./pages/CheckoutBasis";
import CheckoutPro from "./pages/CheckoutPro";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/aanpassingen" element={<Aanpassingen />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/informatie" element={<Informatie />} />
            <Route path="/hulp" element={<Hulp />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/checkout/basis" element={<CheckoutBasis />} />
            <Route path="/checkout/pro" element={<CheckoutPro />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
