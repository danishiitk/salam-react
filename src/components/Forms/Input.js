import React from 'react';

const Input = ({ label, type, id, name, placeholder, className, ...props }) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-gray-700 text-sm font-semibold mb-2">
          {label}:
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 ${className || ''}`}
        {...props}
      />
    </div>
  );
};

export default Input;