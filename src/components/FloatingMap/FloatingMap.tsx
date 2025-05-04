import React from 'react';
import styles from './FloatingMap.module.css';

interface FloatingMapProps {
  className?: string; // Made optional
}

const FloatingMap: React.FC<FloatingMapProps> = ({ className }) => {
  const buttonClasses = `
    h-12 
    bg-[#292929] 
    py-3 
    px-[16.5px] 
    rounded-[80px]
    flex 
    items-center 
    justify-center 
    text-[#F2E26A]
    text-[20px] 
    leading-[20px] 
    font-alexandria 
    text-center 
    z-[9999] 
    ${styles.floatingMapBtn} 
    ${className || ''}
  `.trim();

  return (
    <button className={buttonClasses}>
      <img src="/assets/icons/map.svg" alt="Map Icon" />
      <span>Map</span>
    </button>
  );
};

export default FloatingMap;
