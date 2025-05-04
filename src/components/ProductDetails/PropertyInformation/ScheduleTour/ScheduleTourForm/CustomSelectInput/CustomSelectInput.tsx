import React, { useState } from 'react';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectInputProps {
  label: string;
  value: string;
  onChange: (name: string, value: string) => void;
  name: string;
  placeholder?: string;
  options: Option[];
  error?: string | boolean;
  disabled?: boolean;
}

const CustomSelectInput: React.FC<CustomSelectInputProps> = ({
  label,
  value,
  onChange,
  name,
  placeholder,
  options,
  error,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleToggle = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleSelect = (value: string) => {
    onChange(name, value);
    setIsOpen(false);
  };

  const labelClasses = `
    cursor-pointer text-[14px] leading-[16.8px] px-2 font-alexandria font-normal
    ${error ? 'text-[#ff4d4f]' : isFocused ? 'text-transparent bg-clip-text bg-gold2' : 'text-[#33333399]'}
  `;

  const inputWrapperClasses = `
     rounded-[28px]
    ${isFocused && error ? 'p-[2px] bg-[#ff4d4f] hover:bg-[#ff4d4f]' : error ? 'p-[1px] bg-[#ff4d4f] hover:bg-[#ff4d4f]' : isFocused ? 'p-[2px] bg-gold2' : 'p-[1px] bg-[#606060B2]'} 
    ${disabled ? 'bg-gray-200 cursor-not-allowed' : 'hover:bg-[#606060]'}
  `;

  const dropdownClasses = `
    absolute z-10 mt-[90px] bg-white rounded-[28px] shadow-md w-full 
    flex flex-col gap-[6px] p-[6px]
  `;

  const optionClasses = `
    px-6 py-4 cursor-pointer rounded-[28px]
    ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}
  `;

  return (
    <div className="w-full flex flex-col gap-3 relative">
      {/* Label */}
      <div>
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      </div>

      {/* Input Wrapper */}
      <div
        className={inputWrapperClasses}
        onClick={handleToggle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        tabIndex={0}
      >
        <div className="bg-[#FFFFF5] text-[#606060B2] rounded-[28px] flex items-center justify-between px-6 py-4 cursor-pointer">
          <span>{value || placeholder || 'Select an option'}</span>
          <img src="/assets/icons/black-down-icon.svg" className="opacity-50" />
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className={dropdownClasses}>
          {/* {placeholder && (
            <div
              className={`${optionClasses} text-gray-400`}
              onClick={() => handleSelect('')}
            >
              {placeholder}
            </div>
          )} */}
          {options.map((option) => (
            <div
              className={`${optionClasses}`}
              key={option.value}
              onClick={() => handleSelect(option.value)}
            >
              <span
                className={`text-inherit px-6 py-4 hover:bg-gold rounded-[28px] ${
                  option.value === value ? 'bg-gold' : ''
                }`}
              >
                {option.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Error Message */}
      {error && <p className="text-[#ff4d4f] text-sm">{error}</p>}
    </div>
  );
};

export default CustomSelectInput;
