import React from 'react';
import styles from './ProductDetailsHeader.module.css';
import ScreenWrapper from '../../Shared/ScreenWrapper/ScreenWrapper';
const ProductDetailsHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <ScreenWrapper screenWidth="6xl">
        <div className="flex flex-row justify-between items-center gap-6 px-10">
          <div className="w-full flex flex-row gap-6">
            <div className="flex flex-col">
              <p className="text-transparent bg-gold bg-clip-text text-[20px] leading-[20px] font-medium">
                1 Steuart Ln #1502
              </p>
              <p className="text-[#D1D1D6] text-[12px] leading-[16.8px] font-normal">
                Vienna, Austria
              </p>
            </div>
            <p className="text-transparent bg-gold bg-clip-text text-[20px] leading-[20px] font-medium">
              € 690,000
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full justify-end">
            <button className="flex items-center justify-center gap-1 py-3 px-5 bg-transparent text-[16px] leading-[17.6px] font-normal text-[#D1D1D6] border-[1px] border-[#606060B2]  rounded-[24px]">
              <img src="/assets/icons/hide.svg" alt="hide-icon" />
              Hide
            </button>

            <button className="flex items-center justify-center gap-1 py-3 px-5 bg-transparent text-[16px] leading-[17.6px] font-normal text-[#D1D1D6] border-[1px] border-[#606060B2] rounded-[24px]">
              <img src="/assets/icons/save.svg" alt="save-icon" />
              Save
            </button>
            <button className="flex items-center justify-center gap-1 py-4 px-6 bg-gold text-[16px] leading-[17.6px] font-normal text-[#000] rounded-[24px]">
              Schedule Tour
            </button>
          </div>
        </div>
      </ScreenWrapper>
    </div>
  );
};

export default ProductDetailsHeader;
