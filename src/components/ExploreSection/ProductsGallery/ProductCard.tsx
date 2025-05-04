import React from 'react';
import { IProductCard } from '../../../types/types';
import { useTranslation } from 'react-i18next';

interface ProductCardProps extends IProductCard {
  type: 'tall' | 'short';
}

const typeDimension = {
  tall: 'w-[350px] h-[574px]',
  short: 'w-[calc(350px*4/5)] h-[calc(550px/2)]',
};

const ProductCard: React.FC<ProductCardProps> = ({
  count,
  img,
  location,
  type,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const isAr = language == 'ar';

  const baseClass = `relative rounded-[32px] bg-black opacity-100 py-8 px-6 transition-all ease-in-out duration-[500ms] group hover:scale-105 hover:shadow-xl`;
  const dimensions = typeDimension[type];
  const computedClass = `${baseClass} ${dimensions}`;

  return (
    <div
      className={computedClass}
      style={{
        backgroundImage: `url('${img}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 rounded-[32px] bg-black opacity-10 transition-opacity ease-in-out duration-[500ms] group-hover:opacity-30"></div>{' '}
      {/* Changed duration to 500ms */}
      <div className="flex flex-row justify-between items-center">
        <p className="text-white text-[26px] leading-[26px] font-normal">
          {location}
        </p>
        <p className="text-[#292929] bg-[#D1D1D699] text-[20px] leading-[20px] font-light px-3 py-2 rounded-[16px]">
          {count}
        </p>
      </div>
      <button className="absolute bottom-8 right-6 bg-[#D1D1D699] text-[20px] leading-[20px] font-light flex flex-row justify-center items-center gap-2 text-[#292929] rounded-[16px] transition-colors duration-[500ms] ease-in-out group-hover:bg-gold py-2 px-3 view-homes-btn">
        {t('explore.viewHomes.title')}
        <img
          src="/assets/icons/right-arrow.svg"
          className={isAr ? 'transform scale-x-[-1]' : ''}
        />
      </button>
    </div>
  );
};

export default ProductCard;
