export const IconsaxChart = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    <path
      d="M7 18V16"
      stroke="url(#chartGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18V14"
      stroke="url(#chartGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 18V12"
      stroke="url(#chartGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.43 2H9.57C7.8 2 7.8 2 6.93 2.87L2.87 6.93C2 7.8 2 7.8 2 9.57V14.43C2 16.2 2 16.2 2.87 17.07L6.93 21.13C7.8 22 7.8 22 9.57 22H14.43C16.2 22 16.2 22 17.07 21.13L21.13 17.07C22 16.2 22 16.2 22 14.43V9.57C22 7.8 22 7.8 21.13 6.93L17.07 2.87C16.2 2 16.2 2 14.43 2Z"
      stroke="url(#chartGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);