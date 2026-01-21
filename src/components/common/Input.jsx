'use client';

import { useState } from 'react';

const Input = ({
  label,
  error,
  icon,
  type = 'text',
  className = '',
  required = false,
  helper,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">{icon}</span>
          </div>
        )}
        <input
          type={type}
          className={`
            block w-full rounded-lg
            ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3
            border-2 
            ${error 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-200 focus:border-primary focus:ring-primary'
            }
            focus:ring-2 focus:ring-opacity-20
            transition-all duration-200
            placeholder-gray-400
            ${focused ? 'bg-white' : 'bg-gray-50'}
            ${className}
          `}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {helper && !error && (
        <p className="mt-1 text-sm text-gray-500">{helper}</p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;