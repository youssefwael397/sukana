import React from 'react';

interface IRotatedWaterMark {
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  className?: string;
  fontSize?: string;
  label?: string;
}

const RotatedWaterMark: React.FC<IRotatedWaterMark> = ({
  top,
  right,
  left,
  bottom,
  className = '',
  fontSize = '128px',
  label = 'SmoothFlowTech',
}) => {
  return (
    <p
      style={{
        top: top ?? undefined,
        right: right ?? undefined,
        left: left ?? undefined,
        bottom: bottom ?? undefined,
      }}
      className={`font-[AR_One_Sans] text-[${fontSize}] leading-[${fontSize}}px] underline-from-font opacity-[0.15]  transform z-5 text-[#FA9C01] ${className}`}
    >
      {label}
    </p>
  );
};

export default RotatedWaterMark;
