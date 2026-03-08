import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  Target,
  Lightbulb,
  HelpCircle,
  User,
  Shield,
  LogOut,
  Search,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const pages = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard, group: "Navigatie" },
  { name: "Aanpassingen", path: "/aanpassingen", icon: Settings, group: "Navigatie" },
  { name: "SEO Plan", path: "/seo-plan", icon: Target, group: "Navigatie" },
  { name: "Content Ideeën", path: "/content-ideas", icon: Lightbulb, group: "Navigatie" },
  { name: "Help & Tutorials", path: "/help", icon: HelpCircle, group: "Navigatie" },
  { name: "Account Instellingen", path: "/account", icon: User, group: "Account" },
  { name: "Admin Dashboard", path: "/admin", icon: Shield, group: "Account" },
  { name: "Uitloggen", path: "/logout", icon: LogOut, group: "Account" },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  const navPages = pages.filter((p) => p.group === "Navigatie");
  const accountPages = pages.filter((p) => p.group === "Account");

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Zoek pagina's, acties..." />
      <CommandList>
        <CommandEmpty>Geen resultaten gevonden.</CommandEmpty>
        <CommandGroup heading="Navigatie">
          {navPages.map((page) => (
            <CommandItem
              key={page.path}
              onSelect={() => handleSelect(page.path)}
              className="cursor-pointer"
            >
              <page.icon className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{page.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Account">
          {accountPages.map((page) => (
            <CommandItem
              key={page.path}
              onSelect={() => handleSelect(page.path)}
              className="cursor-pointer"
            >
              <page.icon className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{page.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandPalette;
