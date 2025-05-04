import React from 'react';
import { PropertyFeatureProps } from '../../../../types/types';
import PropertyFeature from '../PropertyFeature/PropertyFeature';

const amenities: PropertyFeatureProps[] = [
  {
    icon: '/assets/icons/property/amenities/Central.svg',
    label: 'Central A/C',
  },
  { icon: '/assets/icons/property/amenities/Balcony.svg', label: 'Balcony' },
  {
    icon: '/assets/icons/property/amenities/Shared Pool.svg',
    label: 'Shared Pool',
  },
  {
    icon: '/assets/icons/property/amenities/Shared Spa.svg',
    label: 'Shared Spa',
  },
  { icon: '/assets/icons/property/amenities/Security.svg', label: 'Security' },
  {
    icon: '/assets/icons/property/amenities/Covered Parking.svg',
    label: 'Covered Parking',
  },
  {
    icon: '/assets/icons/property/amenities/Built in Wardrobes.svg',
    label: 'Built in Wardrobes',
  },
  {
    icon: '/assets/icons/property/amenities/Walk-in Closet.svg',
    label: 'Walk-in Closet',
  },
];

const PropertyAmenities: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <h2 className="text-[24px] leading-[28.8px] font-normal bg-gold bg-clip-text text-transparent">
        Amenities
      </h2>

      {/* Amenities Grid */}
      <div className="grid grid-cols-2 gap-x-[104px] gap-y-3 w-[468px]">
        {amenities.map((amenity, index) => (
          <PropertyFeature key={index} {...amenity} />
        ))}
      </div>
    </div>
  );
};

export default PropertyAmenities;
