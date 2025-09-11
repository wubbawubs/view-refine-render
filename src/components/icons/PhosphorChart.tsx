import { ChartLineUp } from "@phosphor-icons/react";

export const PhosphorChart = ({ className = "w-12 h-12" }: { className?: string }) => (
  <ChartLineUp 
    size={48} 
    weight="duotone" 
    className={className}
    style={{ 
      color: '#10B981',
      background: 'linear-gradient(135deg, #10B981, #3B82F6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }} 
  />
);