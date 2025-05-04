import React from 'react';
import PropertyFeature from './PropertyFeature/PropertyFeature';
import ScheduleTour from './ScheduleTour/ScheduleTour';
import PropertyLocalInformation from './PropertyLocalInformation/PropertyLocalInformation';
import PropertyDescription from '../PropertyDescription/PropertyDescription';
import PropertyAmenities from './PropertyAmenities/PropertyAmenities';
import PropertyDetails from './PropertyDetails/PropertyDetails';
import PropertyContactAvertiser from './PropertyContactAvertiser/PropertyContactAvertiser';

const PropertyInformation: React.FC = () => {
  return (
    <div className="pt-8 flex flex-row justify-between">
      <div className="flex flex-col gap-4 w-[736px]">
        <div className="flex flex-row items-center justify-between">
          {/* property title and address */}
          <div className="flex flex-col gap-2">
            {/* property type */}
            <div className="flex flex-row gap-1 items-center">
              <span className="h-[10px] w-[10px] rounded-full bg-gold" />
              <span className="text-[#D1D1D6] text-[14px] leading-[16.8px] font-normal">
                House
              </span>
            </div>
            {/* property type */}
            <div className="flex flex-col gap-1">
              <p className="text-[26px] leading-[26px] font-medium bg-gold bg-clip-text text-transparent">
                1 Steuart Ln #1502
              </p>
              <p className="text-[#D1D1D6] text-[14px] lerading-[16.8px] font-normal">
                Vienna , Austria
              </p>
            </div>
          </div>
          {/* price */}
          <p className="text-[26px] leading-[26px] font-medium bg-gold bg-clip-text text-transparent">
            € 690,000
          </p>
        </div>

        {/* beds, baths, and area */}
        <div className="flex flex-row gap-6 px-2">
          {/* beds */}
          <PropertyFeature
            icon="/assets/icons/beds.svg"
            label="beds"
            value={3}
          />
          <PropertyFeature
            icon="/assets/icons/baths.svg"
            label="beds"
            value={1}
          />
          <PropertyFeature
            icon="/assets/icons/area.svg"
            label={
              <>
                m<sup>2</sup>
              </>
            }
            value={190}
          />
        </div>
        {/* 
        here is the rest of the first column 
            local information
            Description
            Property Details
            Amenities
            contact the advertiser
        */}
        <div className="flex flex-col gap-10 mt-12 mb-20">
          <PropertyLocalInformation />
          <hr className="border-[0.5px] w-full px-2 rounded-full border-[#D1D1D6]" />
          <PropertyDescription />
          <hr className="border-[0.5px] w-full px-2 rounded-full border-[#D1D1D6]" />
          <PropertyDetails />
          <hr className="border-[0.5px] w-full px-2 rounded-full border-[#D1D1D6]" />
          <PropertyAmenities />
          <hr className="border-[0.5px] w-full px-2 rounded-full border-[#D1D1D6]" />
          <PropertyContactAvertiser />
        </div>
      </div>
      <div>
        <ScheduleTour />
      </div>
    </div>
  );
};

export default PropertyInformation;
