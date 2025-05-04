import React from 'react';
import { PropertyFeatureProps } from '../../../../types/types';

const PropertyFeature: React.FC<PropertyFeatureProps> = ({
  icon,
  label,
  value,
  direction = 'flex-row',
}) => {
  const textBaseClass =
    'flex items-center text-[#FFFFF5] text-[16px] leading-[17.6px] font-normal gap-1';
  const computedTextClass = `
    ${textBaseClass}
    ${direction}
  `;

  return (
    <div className={'flex flex-row items-center gap-2'}>
      <img src={icon} className="w-[20px]" alt={`${label} icon`} />
      <p className={computedTextClass}>
        <span>{value}</span>
        <span>{label}</span>
      </p>
    </div>
  );
};

export default PropertyFeature;
