import React from 'react';
import { PropertyFeatureProps } from '../../../../types/types';
import PropertyFeature from '../PropertyFeature/PropertyFeature';

const details: PropertyFeatureProps[] = [
  {
    icon: '/assets/icons/property/details/type.svg',
    label: 'Property Type : ',
    value: 'House',
  },
  {
    icon: '/assets/icons/property/details/size.svg',
    label: 'Property Size : ',
    value: '190 m2',
  },
  {
    icon: '/assets/icons/property/details/beds.svg',
    label: 'Bedrooms : ',
    value: 3,
  },
  {
    icon: '/assets/icons/property/details/baths.svg',
    label: 'Bathrooms : ',
    value: 3,
  },
];

const PropertyDetails: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <h2 className="text-[24px] leading-[28.8px] font-normal bg-gold bg-clip-text text-transparent">
        Property Details
      </h2>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-x-[74px] gap-y-3 w-[488px]">
        {details.map((detail, index) => (
          <PropertyFeature key={index} {...detail} direction='flex-row-reverse' />
        ))}
      </div>
    </div>
  );
};

export default PropertyDetails;
