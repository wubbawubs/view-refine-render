import { type LucideIcon } from "lucide-react";

export function IconBadge({ Icon, size = 24 }: { Icon: LucideIcon; size?: number }) {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full
                    bg-[radial-gradient(circle_at_50%_35%,rgba(255,230,128,.12),transparent_55%)]
                    bg-[#F3F6FF] ring-1 ring-[#E5EAFB]">
      <Icon size={size} strokeWidth={1.6} color="url(#kkGradient)" />
    </div>
  );
}