import React from 'react';

const Button = ({ children, type = 'button', className, ...props }) => {
  return (
    <button
      type={type}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors duration-200 ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;