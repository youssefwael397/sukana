import React from 'react';
import { IProductCard } from '../../../types/types';
import ProductCard from './ProductCard';
import { useTranslation } from 'react-i18next';
import { chunkArray } from '../../../utils/helpers';
import GenericCarousel from '../../GenericCarousel/GenericCarousel';

const productCards: IProductCard[] = [
  { location: 'Vienna, VA', img: '/assets/products/1.png', count: 1200 },
  { location: 'Philadelphia', img: '/assets/products/2.png', count: 200 },
  { location: 'Dubai', img: '/assets/products/3.png', count: 200 },
  { location: 'Dubai', img: '/assets/products/4.png', count: 200 },
  { location: 'Philadelphia', img: '/assets/products/5.png', count: 200 },
  { location: 'Vienna, VA', img: '/assets/products/6.png', count: 1200 },
  { location: 'Dubai', img: '/assets/products/7.png', count: 200 },
  { location: 'Philadelphia', img: '/assets/products/8.png', count: 200 },
  { location: 'Vienna, VA', img: '/assets/products/1.png', count: 1200 },
  { location: 'Philadelphia', img: '/assets/products/2.png', count: 200 },
  { location: 'Dubai', img: '/assets/products/3.png', count: 200 },
  { location: 'Dubai', img: '/assets/products/4.png', count: 200 },
  { location: 'Philadelphia', img: '/assets/products/5.png', count: 200 },
  { location: 'Vienna, VA', img: '/assets/products/6.png', count: 1200 },
  { location: 'Dubai', img: '/assets/products/7.png', count: 200 },
  { location: 'Philadelphia', img: '/assets/products/8.png', count: 200 },
  { location: 'Vienna, VA', img: '/assets/products/1.png', count: 1200 },
  { location: 'Philadelphia', img: '/assets/products/2.png', count: 200 },
  { location: 'Dubai', img: '/assets/products/3.png', count: 200 },
  { location: 'Dubai', img: '/assets/products/4.png', count: 200 },
  { location: 'Philadelphia', img: '/assets/products/5.png', count: 200 },
  { location: 'Vienna, VA', img: '/assets/products/6.png', count: 1200 },
  { location: 'Dubai', img: '/assets/products/7.png', count: 200 },
  { location: 'Philadelphia', img: '/assets/products/8.png', count: 200 },
  { location: 'Vienna, VA', img: '/assets/products/1.png', count: 1200 },
  { location: 'Philadelphia', img: '/assets/products/2.png', count: 200 },
  { location: 'Dubai', img: '/assets/products/3.png', count: 200 },
  { location: 'Dubai', img: '/assets/products/4.png', count: 200 },
  { location: 'Philadelphia', img: '/assets/products/5.png', count: 200 },
  { location: 'Vienna, VA', img: '/assets/products/6.png', count: 1200 },
  { location: 'Dubai', img: '/assets/products/7.png', count: 200 },
  { location: 'Philadelphia', img: '/assets/products/8.png', count: 200 },
];

const ProductsGallery: React.FC = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const isAr = language == 'ar';

  const gallelychunks = chunkArray<IProductCard>(productCards, 6);

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      // className="pt-16 pb-[112px] px-6 w-full flex"
      // className="pt-16 pb-[112px] px-6 w-full overflow-x-auto flex hide-scrollbar"
    >
      <GenericCarousel
        className="max-w-8xl w-full mx-auto pt-16 pb-[112px] px-6"
        blackArrows
        // dots
        arrows
        infinite
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 1 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ]}
      >
        {gallelychunks.map((chunk, index) => (
          <div key={index}>
            <div className="flex flex-row flex-grow gap-6 p-5">
              {chunk.map((product, index) => {
                // Determine layout based on the product index
                if (index === 0 || index % 5 === 0) {
                  return <ProductCard key={index} {...product} type="tall" />;
                }
                if (
                  (index < 5 && index % 2 === 1) ||
                  (index > 5 && index % 2 === 0)
                ) {
                  return (
                    <div className="flex flex-row gap-6" key={`group-${index}`}>
                      <div className="flex flex-col gap-6">
                        <ProductCard {...product} type="short" />
                        {productCards[index + 1] && (
                          <ProductCard
                            {...productCards[index + 1]}
                            type="short"
                          />
                        )}
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        ))}
      </GenericCarousel>
    </div>
  );
};

export default ProductsGallery;
