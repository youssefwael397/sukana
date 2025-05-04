import React from 'react';
import ScreenWrapper from '../Shared/ScreenWrapper/ScreenWrapper';
import { properties } from '../../db/properties';
import { IProperty } from '../../types/property';
import PropertyCard from '../PropertyCard/PropertyCard';
const RecentlyViewed: React.FC = () => {
  return (
    <div
      className="py-10 relative overflow-hidden bg-[#292929] font-alexandria"
      style={{
        backgroundImage: "url('/assets/footer-bg-2.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
    >
      <ScreenWrapper>
        <div className="flex flex-col gap-[56px]">
          <h3 className="text-[#F2E26A] text-[40px] leading-[40px] font-mediums tracking-wide text-center">
            Recently viewed
          </h3>
          <div className="flex flex-row flex-grow flex-nowrap overflow-scroll hide-scrollbar gap-6 px-6 py-10">
            {properties.slice(0,4).map((property: IProperty) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </ScreenWrapper>
    </div>
  );
};

export default RecentlyViewed;
