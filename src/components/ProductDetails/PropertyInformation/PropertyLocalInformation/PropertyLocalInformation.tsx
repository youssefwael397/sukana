import React, { useState } from 'react';

const mapContent: Record<'Map' | 'Schools' | 'shopAndEat', string> = {
  Map: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=vienna&t=&z=11&ie=UTF8&iwloc=B&output=embed',
  Schools:
    'https://maps.google.com/maps?width=600&height=400&hl=en&q=schools&t=&z=11&ie=UTF8&iwloc=B&output=embed',
  shopAndEat:
    'https://maps.google.com/maps?width=600&height=400&hl=en&q=shop+and+eat&t=&z=11&ie=UTF8&iwloc=B&output=embed',
};

const PropertyLocalInformation: React.FC = () => {
  const [selectedType, setSelectedType] =
    useState<keyof typeof mapContent>('Map');

  return (
    <div className="rounded-lg">
      {/* Header */}
      <h2 className="text-[24px] leading-[28.8px] font-normal mb-8 bg-gold bg-clip-text text-transparent">
        Local Information
      </h2>

      <div className="flex flex-col gap-6">
        {/* Tabs */}
        <div className="flex flex-row gap-4">
          {Object.keys(mapContent).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type as keyof typeof mapContent)}
              className={`px-8 py-4 rounded-[24px] text-[16px] leading-[17.6px] font-normal ${
                selectedType === type
                  ? 'bg-gold text-black'
                  : 'bg-transparent text-[#D1D1D6] border-[1px] border-[#D1D1D6]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-[16px] overflow-hidden">
          <iframe
            className="w-full h-[247px]"
            src={mapContent[selectedType]}
            title={`${selectedType} Map`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PropertyLocalInformation;
