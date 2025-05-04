import { useState, FC } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import default styles or customize
import styles from './CustomPhoneInput.module.css';

interface CustomPhoneInputProps {
  label: string;
  value: string;
  onChange: (name: string, value: string) => void;
  onBlur?: () => void;
  name: string;
  placeholder?: string;
  error?: string | boolean;
  disabled?: boolean;
}

const CustomPhoneInput: FC<CustomPhoneInputProps> = ({
  label,
  value,
  onChange,
  onBlur,
  name,
  placeholder = 'Enter phone number',
  error,
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    onBlur && onBlur();
  };
  const handleChange = (value: string) => {
    onChange(name, value);
  };

  const labelClasses = `
    cursor-pointer text-[14px] leading-[16.8px] px-2 font-alexandria font-normal
    ${error ? 'text-[#ff4d4f]' : isFocused ? 'text-transparent bg-clip-text bg-gold2' : 'text-[#33333399]'}
  `;

  const inputWrapperClasses = `
    ${styles.customPhoneWrapper}
  `;

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Label */}
      <div>
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      </div>

      {/* Phone Input Wrapper */}
      <div className={inputWrapperClasses}>
        <PhoneInput
          country={'us'}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          inputProps={{
            id: name,
            name: name,
            disabled: disabled,
          }}
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-[#ff4d4f] text-sm">{error}</p>}
    </div>
  );
};

export default CustomPhoneInput;
