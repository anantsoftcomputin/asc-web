// src/components/common/Badge.jsx
const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  dot = false,
  ...props
}) => {
  const variants = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary-dark',
    accent: 'bg-accent/10 text-accent-dark',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        font-medium rounded-full
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {dot && (
        <span
          className={`
            w-1.5 h-1.5 rounded-full
            mr-1.5
            ${variant === 'primary' ? 'bg-primary' : ''}
            ${variant === 'secondary' ? 'bg-secondary-dark' : ''}
            ${variant === 'accent' ? 'bg-accent-dark' : ''}
            ${variant === 'success' ? 'bg-green-500' : ''}
            ${variant === 'warning' ? 'bg-yellow-500' : ''}
            ${variant === 'error' ? 'bg-red-500' : ''}
            ${variant === 'info' ? 'bg-blue-500' : ''}
          `}
        />
      )}
      {children}
    </span>
  );
};

export default Badge;