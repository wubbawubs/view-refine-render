import { type LucideIcon } from "lucide-react";

export function IconBadge({ Icon, size = 24 }: { Icon: LucideIcon; size?: number }) {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full
                    bg-[radial-gradient(circle_at_50%_35%,rgba(255,230,128,.12),transparent_55%)]
                    bg-[#F3F6FF] ring-1 ring-[#E5EAFB]">
      <div className="bg-gradient-to-br from-kk-orange via-kk-fuchsia to-kk-violet bg-clip-text">
        <Icon 
          size={size} 
          strokeWidth={1.6} 
          className="text-transparent [&>*]:stroke-current"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--kk-orange)), hsl(var(--kk-fuchsia)), hsl(var(--kk-violet)))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        />
      </div>
    </div>
  );
}