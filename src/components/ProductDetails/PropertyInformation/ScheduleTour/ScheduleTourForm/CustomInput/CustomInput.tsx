import React, { FC, useState } from 'react';

interface CustomInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  type?: string;
  error?: string | boolean;
  disabled?: boolean;
}

const CustomInput: FC<CustomInputProps> = ({
  label,
  value,
  onChange,
  onBlur,
  name,
  placeholder,
  type = 'text',
  error,
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur(e); // Ensure onBlur is called after setting focus state
  };

  const inputClasses = `
    w-full h-full px-6 py-4 rounded-[28px] 
    focus:outline-none caret-[#606060B2] text-[#606060B2] bg-[#FFFFF5]
    transition-all duration-200 ease-in-out
  `;

  const labelClasses = `
    cursor-pointer text-[14px] leading-[16.8px] px-2 font-alexandria font-normal
    ${error ? 'text-[#ff4d4f]' : isFocused ? 'text-transparent bg-clip-text bg-gold2' : 'text-[#33333399]'}
  `;

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Label */}
      <div>
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      </div>

      <div>
        {/* Input field */}
        <div
          className={`rounded-[28px] flex items-center overflow-hidden justify-center
        ${isFocused && error ? 'p-[2px] bg-[#ff4d4f]' : isFocused ? 'p-[2px] bg-gold2' : error ? 'p-[1px] bg-[#ff4d4f]' : 'p-[1px] bg-[#606060B2]'}
        `}
        >
          <input
            id={name}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            className={inputClasses}
          />
        </div>
        {/* Error message */}
        {error && <p className="text-[#ff4d4f] text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default CustomInput;
