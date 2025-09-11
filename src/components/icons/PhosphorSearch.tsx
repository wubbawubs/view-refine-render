import { MagnifyingGlass } from "@phosphor-icons/react";

export const PhosphorSearch = ({ className = "w-12 h-12" }: { className?: string }) => (
  <MagnifyingGlass 
    size={48} 
    weight="duotone" 
    className={className}
    style={{ 
      color: '#3B82F6',
      background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }} 
  />
);