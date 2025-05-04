import React from 'react';
import { IProperty } from '../../types/property';
import PropertyCard from '../PropertyCard/PropertyCard';
import { properties } from '../../db/properties';

const ProductCards: React.FC = () => {
  return (
    <div className="flex flex-row flex-grow flex-nowrap overflow-scroll hide-scrollbar gap-6 px-6 py-10">
      {properties.map((property: IProperty) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
};

export default ProductCards;
