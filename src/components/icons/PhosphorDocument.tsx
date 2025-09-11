import { FileText } from "@phosphor-icons/react";

export const PhosphorDocument = ({ className = "w-12 h-12" }: { className?: string }) => (
  <FileText 
    size={48} 
    weight="duotone" 
    className={className}
    style={{ 
      color: '#F59E0B',
      background: 'linear-gradient(135deg, #F59E0B, #EF4444)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }} 
  />
);