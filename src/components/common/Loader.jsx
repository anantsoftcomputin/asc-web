'use client';
const Loader = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer circle */}
        <div 
          className={`
            ${sizes[size]}
            border-2 
            border-t-primary
            border-r-primary/30
            border-b-primary/10
            border-l-primary/50
            rounded-full
            animate-spin
          `}
        />
        
        {/* Inner gradient overlay */}
        <div 
          className={`
            absolute inset-0
            ${sizes[size]}
            bg-gradient-to-tr from-transparent via-white/80 to-white
            rounded-full
            mix-blend-overlay
          `}
        />
      </div>
    </div>
  );
};

export default Loader;