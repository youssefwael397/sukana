import React from 'react';

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  direction: 'left' | 'right';
  black?: boolean;
}

const CustomArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
  direction,
  black,
}) => {
  return (
    <img
      src={`/assets/icons/slick-${direction}-arrow.svg`}
      className={className}
      style={{ ...style, zIndex: 1, filter: `${black ? 'invert()' : 'none'}` }}
      onClick={onClick}
      alt={`${direction} arrow`}
    />
  );
};

export default CustomArrow;
