'use client';

// Helper function to clean template literals
const clean = (strings, ...values) => {
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += values[i];
    }
  }
  return result.replace(/\s+/g, ' ').trim();
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  loading = false,
  ...props
}) => {
  const baseStyles = clean`
    inline-flex items-center justify-center rounded-lg font-semibold
    transition-all duration-300 transform hover:scale-102
    disabled:opacity-60 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const variants = {
    primary: clean`
      bg-gradient-to-r from-primary-400 to-primary-600 
      hover:from-primary-500 hover:to-primary-700
      text-white shadow-lg shadow-primary-200/30
      focus:ring-primary-400
    `,
    secondary: clean`
      bg-gradient-to-r from-secondary-400 to-secondary-600
      hover:from-secondary-500 hover:to-secondary-700
      text-white shadow-lg shadow-secondary-200/30
      focus:ring-secondary-400
    `,
    accent: clean`
      bg-gradient-to-r from-accent-400 to-accent-600
      hover:from-accent-500 hover:to-accent-700
      text-white shadow-lg shadow-accent-200/30
      focus:ring-accent-400
    `,
    outline: clean`
      border-2 border-primary-400 text-primary-600
      hover:bg-primary-50 hover:border-primary-500
      focus:ring-primary-400
    `,
    ghost: clean`
      text-gray-600 hover:bg-gray-100
      focus:ring-gray-400
    `
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={clean`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        <span className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </span>
      )}
    </button>
  );
};

export default Button;