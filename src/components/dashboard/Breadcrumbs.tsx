import { useLocation, Link } from "react-router-dom";
import { ChevronRight, LayoutDashboard } from "lucide-react";

const routeNames: Record<string, string> = {
  "/": "Dashboard",
  "/aanpassingen": "Aanpassingen",
  "/seo-plan": "SEO Plan",
  "/content-ideas": "Content Ideeën",
  "/help": "Help & Tutorials",
  "/account": "Account",
  "/admin": "Admin",
  "/onboarding": "SEO Onboarding",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentName = routeNames[currentPath];

  // Don't show breadcrumbs on dashboard home
  if (currentPath === "/") return null;

  return (
    <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-foreground transition-colors"
      >
        <LayoutDashboard className="w-3 h-3" />
        <span>Dashboard</span>
      </Link>
      <ChevronRight className="w-3 h-3" />
      <span className="text-foreground font-medium">{currentName || "Pagina"}</span>
    </nav>
  );
};

export default Breadcrumbs;
