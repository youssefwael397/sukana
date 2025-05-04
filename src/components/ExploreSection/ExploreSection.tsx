import React from 'react';
import ScreenWrapper from '../Shared/ScreenWrapper/ScreenWrapper';
import ProductsGallery from './ProductsGallery/ProductsGallery';
import { useTranslation } from 'react-i18next';

const ExploreSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="explore mt-10 sm:mt-20">
      <ScreenWrapper>
        <h3 className="text-[#BE932A] text-center font-alexandria text-[24px] leading-[40px] font-medium sm:text-[40px] sm:leading-[40px]">
          {t('explore.title')}
        </h3>
        <p className="text-center text-[16px] leading-[24px] font-normal px-4 sm:text-[24px] sm:leading-[28px] sm:px-8 mt-3">
          {t('explore.description')}
        </p>
      </ScreenWrapper>
      <ProductsGallery />
    </div>
  );
};

export default ExploreSection;
