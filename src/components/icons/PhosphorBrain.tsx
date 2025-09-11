import { Brain } from "@phosphor-icons/react";

export const PhosphorBrain = ({ className = "w-12 h-12" }: { className?: string }) => (
  <Brain 
    size={48} 
    weight="duotone" 
    className={className}
    style={{ 
      color: '#8B5CF6',
      background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }} 
  />
);