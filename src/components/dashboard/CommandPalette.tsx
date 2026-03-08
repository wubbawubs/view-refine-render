import { useEffect, useState, createContext, useContext } from "react";
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

import { Rocket } from "lucide-react";

const pages = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard, group: "Navigatie" },
  { name: "Aanpassingen", path: "/aanpassingen", icon: Settings, group: "Navigatie" },
  { name: "SEO Plan", path: "/seo-plan", icon: Target, group: "Navigatie" },
  { name: "Content Ideeën", path: "/content-ideas", icon: Lightbulb, group: "Navigatie" },
  { name: "Help & Tutorials", path: "/help", icon: HelpCircle, group: "Navigatie" },
  { name: "Account Instellingen", path: "/account", icon: User, group: "Account" },
  { name: "Admin Dashboard", path: "/admin", icon: Shield, group: "Account" },
  { name: "SEO Onboarding", path: "/onboarding", icon: Rocket, group: "Account" },
  { name: "Uitloggen", path: "/logout", icon: LogOut, group: "Account" },
];

// Context for controlling the command palette from anywhere
interface CommandPaletteContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CommandPaletteContext = createContext<CommandPaletteContextType>({
  open: false,
  setOpen: () => {},
});

export const useCommandPalette = () => useContext(CommandPaletteContext);

export const CommandPaletteProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

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

  return (
    <CommandPaletteContext.Provider value={{ open, setOpen }}>
      {children}
    </CommandPaletteContext.Provider>
  );
};

const CommandPalette = () => {
  const { open, setOpen } = useCommandPalette();
  const navigate = useNavigate();

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
