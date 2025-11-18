import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import type { Notification } from "@/types/dashboard";

interface NotificationsPopoverProps {
  notifications?: Notification[];
}

const NotificationsPopover = ({ notifications = [] }: NotificationsPopoverProps) => {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-accent"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[hsl(var(--kk-violet))] text-white text-xs flex items-center justify-center font-semibold">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[380px] p-0" align="end">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-lg">Updates & Nieuws</h3>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="bg-[hsl(var(--kk-violet))]/10 text-[hsl(var(--kk-violet))]">
              {unreadCount} nieuw
            </Badge>
          )}
        </div>
        
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b last:border-b-0 hover:bg-muted/50 transition-colors cursor-pointer ${
                !notification.read ? 'bg-[hsl(var(--kk-violet))]/5' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 h-2 w-2 rounded-full flex-shrink-0 ${
                  !notification.read ? 'bg-[hsl(var(--kk-violet))]' : 'bg-transparent'
                }`} />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-sm leading-tight">
                      {notification.title}
                    </h4>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2 leading-snug">
                    {notification.description}
                  </p>
                  
                  <span className="text-xs text-muted-foreground">
                    {notification.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-3 border-t bg-muted/30">
          <Button variant="ghost" className="w-full text-sm" size="sm">
            Bekijk alle updates
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationsPopover;
