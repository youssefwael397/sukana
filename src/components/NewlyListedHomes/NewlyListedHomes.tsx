import React from 'react';
import GenericCarousel from '../GenericCarousel/GenericCarousel';
import { properties } from '../../db/properties';
import { IProperty } from '../../types/property';
import PropertyCard from '../PropertyCard/PropertyCard';
import { chunkArray } from '../../utils/helpers';

const NewlyListedHomes: React.FC = () => {
  // Group properties into chunks of 4
  const propertyChunks = chunkArray<IProperty>(properties, 4);

  return (
    <div
      className="py-20 relative overflow-hidden bg-[#292929] font-alexandria"
      style={{
        backgroundImage: "url('/assets/footer-bg-2.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col gap-[56px]">
        <h3 className="text-[#F2E26A] text-[40px] leading-[40px] font-medium tracking-wide text-center">
          Newly Listed Homes
        </h3>
        <GenericCarousel
          className="max-w-7xl w-full mx-auto pb-10"
          dots
          arrows
          infinite
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
          ]}
        >
          {propertyChunks.map((chunk, index) => (
            <div key={index}>
              <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto py-5">
                {chunk.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            </div>
          ))}
        </GenericCarousel>
      </div>
    </div>
  );
};

export default NewlyListedHomes;
