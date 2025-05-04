import React from 'react';
import ProductDetailsHeader from '../components/ProductDetails/ProductDetailsHeader/ProductDetailsHeader';
import PropertyGallery from '../components/ProductDetails/PropertyGallery/PropertyGallery';
import ScreenWrapper from '../components/Shared/ScreenWrapper/ScreenWrapper';
import PropertyInformation from '../components/ProductDetails/PropertyInformation/PropertyInformation';

const ProductDetailsPage: React.FC = () => {
  return (
    <div className="bg-[#292929] font-alexandria min-h-[100vh]">
      <ProductDetailsHeader />
      <ScreenWrapper screenWidth="6xl">
        <div className="pt-10 pb-4 flex flex-col">
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-row gap-1 items-center">
              <img src="/assets/icons/home.svg" alt="home-icon" />
              <img src="/assets/icons/gold-right-arrow.svg" alt="arrow-icon" />
            </div>
            <p className="text-[#D1D1D6] text-[12px] leading-[16.8px] font-normal">
              Homes for Sell
            </p>
          </div>
        </div>
        <PropertyGallery
          images={[
            { alt: 'image 1', src: '/assets/property/image.png' },
            { alt: 'image 1', src: '/assets/property/image1.png' },
            { alt: 'image 1', src: '/assets/property/image2.png' },
            { alt: 'image 1', src: '/assets/property/image3.png' },
          ]}
        />
        <PropertyInformation />
      </ScreenWrapper>
    </div>
  );
};

export default ProductDetailsPage;
