import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SearchTab: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => {
  const baseClass = `flex-1 text-alexandria transition-all duration-800`;
  const activeClass = `text-[#F2E26A] font-medium text-[24px] leading-[24px]`;
  const inActiveClass = `text-customGray font-light text-[20px] leading-[20px]`;
  const afterClass = `relative after:absolute after:top-[120%] after:left-0 after:w-full after:h-[1.5px] after:rounded-[2.5px] after:bg-[#F2E26A] sm:after:h-[3px] sm:after:rounded-[5px]`;
  const computedClass = `${baseClass} ${
    isActive ? `${activeClass} ${afterClass}` : inActiveClass
  }`;

  return (
    <button className={computedClass} onClick={onClick}>
      {label}
    </button>
  );
};

const HeaderSearch: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sell' | 'buy'>('sell');
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const isAr = language == 'ar';

  return (
    <div className="mx-auto flex flex-col items-center w-full max-w-4xl mt-16 sm:mt-16">
      {/* Tabs */}
      <div className="self-start flex gap-10 bg-[#606060B2] rounded-tl-[16px] rounded-tr-[16px] py-[14px] px-[40px] sm:gap-20 sm:rounded-tl-[32px] sm:rounded-tr-[32px] sm:py-[17px] sm:px-[76px]">
        <SearchTab
          isActive={activeTab === 'sell'}
          label={t('sell.title')}
          onClick={() => setActiveTab('sell')}
        />
        <SearchTab
          isActive={activeTab === 'buy'}
          label={t('buy.title')}
          onClick={() => setActiveTab('buy')}
        />
      </div>

      {/* Search Bar */}
      <div
        className={`flex w-full bg-[#606060B2] text-white ${
          isAr
            ? 'rounded-b-[8px] rounded-tl-[8px] sm:rounded-b-[16px] sm:rounded-tl-[16px]'
            : 'rounded-b-[8px] rounded-tr-[8px] sm:rounded-b-[16px] sm:rounded-tr-[16px]'
        } `}
      >
        <input
          type="text"
          placeholder={t('header.search')}
          className="flex-grow bg-transparent outline-none text-[15px] leading-[20px] font-light placeholder-[#D1D1D6] px-[16px] py-[15px] sm:text-[20px] sm:leading-[28px] sm:px-[32px] sm:py-[30px]"
        />
        <button
          className={`flex items-center justify-center bg-gold text-black px-3 py-1  sm:px-6 sm:py-2 ${
            isAr
              ? 'rounded-l-[8px] sm:rounded-l-[16px] '
              : 'rounded-r-[8px] sm:rounded-r-[16px] '
          }`}
        >
          <img
            src="/assets/icons/search-icon.svg"
            className="w-1/2 sm:w-[30px]"
          />
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
