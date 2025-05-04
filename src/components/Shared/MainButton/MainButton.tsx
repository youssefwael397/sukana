import React, { ReactElement } from 'react';

export interface IMainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | ReactElement;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const MainButton: React.FC<IMainButtonProps> = ({
  label,
  className = 'rounded-[28px] text-black px-[58px] py-[16px] font-albert text-[24px] leading-[24px] font-medium',
  type = 'button',
  ...props // The spread operator captures all remaining props like `onClick`, etc.
}) => {
  return (
    <button
      className={`${className} bg-[#FA9C01] `}
      type={type}
      {...props} // Spread the props to the button element
    >
      {label}
    </button>
  );
};

export default MainButton;
