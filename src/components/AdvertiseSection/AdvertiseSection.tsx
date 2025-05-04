import React from 'react';
import ScreenWrapper from '../Shared/ScreenWrapper/ScreenWrapper';
import { useTranslation } from 'react-i18next';

const AdvertiseSection: React.FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const isAr = language == 'ar';

  return (
    <div className="relative bg-[#292929]">
      {/* Overlay background */}
      <div className="absolute inset-0 bg-[#606060B2]"></div>

      {/* Content */}
      <ScreenWrapper>
        <div className="relative z-10 flex flex-col-reverse sm:flex-row justify-between pb-8 sm:py-0">
          <div className="pt-0 sm:pt-[50px] flex flex-col w-full px-6">
            <h4
              className={`text-center ${
                isAr ? 'sm:text-right' : 'sm:text-left'
              } font-normal text-[32px] leading-[38px] bg-gold bg-clip-text text-transparent`}
            >
              {t('advertise.title')}
            </h4>
            <p
              className={`text-center ${
                isAr ? 'sm:text-right' : 'sm:text-left'
              } text-[16px] leading-[20px] sm:text-[20px] sm:leading-[20px] text-[#D1D1D6] pt-4 pb-8 font-light w-[530px]`}
            >
              {t('advertise.description')}
            </p>
            <div className="mx-auto sm:mx-0">
              <button className="bg-gold py-[18px] px-[24px] font-medium text-[16px] leading-[20px] sm:text-[20px] sm:leading-[20px] rounded-[16px]">
                {t('advertise.button')}
              </button>
            </div>
          </div>
          <div className="w-full">
            <img
              src="/assets/advertise.png"
              className={`w-full max-w-[488px] ${
                isAr ? 'transform scale-x-[-1]' : ''
              }`}
              alt="Advertise"
            />
          </div>
        </div>
      </ScreenWrapper>
    </div>
  );
};

export default AdvertiseSection;
