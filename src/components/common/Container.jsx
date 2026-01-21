// src/components/common/Container.jsx
'use client';
const Container = ({
  children,
  className = '',
  size = 'default',
  padding = true,
  ...props
}) => {
  const sizes = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-8xl',
    full: 'max-w-full'
  };

  return (
    <div
      className={`
        mx-auto w-full
        ${sizes[size]}
        ${padding ? 'px-4 sm:px-6 lg:px-8' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;