import React from 'react'

interface IMainTextProps {
    text: string;
    className?: string;
}

const MainText: React.FC<IMainTextProps> = ({ text, className = '' }) => {
  return (
    <h2 className={`font-albert text-transparent bg-clip-text bg-gradient-to-r from-[#E674F5] to-[#6ED5E0] ${className}`}>
      {text}
    </h2>
  );
};

export default MainText