import React, { Fragment, useState } from 'react';
import {  Card, Carousel, Tooltip } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { IPropertyCardProps } from '../../types/property';
import '../../styles/property.css';
import CustomArrow from './CustomArrow';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';

const PropertyCard: React.FC<IPropertyCardProps> = ({
  id,
  type,
  price,
  description,
  bedrooms,
  bathrooms,
  area,
  address,
  gallery_images,
  currency,
  showMoreDetailsBtn,
  showHideBtn,
}) => {
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(false);
  const handleToggleFav = () => {
    setIsFav((prev) => !prev);
  };

  const handleMoreDetails = () => {
    navigate('/productDetails');
  };

  return (
    <Card
      id={id}
      hoverable
      className="property-card relative z-0 max-w-[300px] min-w-[282px]"
      style={{
        borderRadius: 24,
        overflow: 'hidden',
        border: '2px solid #FFFFF5',
        background: '#FFFFF5',
      }}
      styles={{ body: { padding: 13 } }}
      cover={
        <Carousel
          arrows
          nextArrow={<CustomArrow direction="right" />}
          prevArrow={<CustomArrow direction="left" />}
          autoplay={false}
          className="h-[237px]"
        >
          {gallery_images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Property ${index + 1}`}
              className="w-full h-[237px] object-cover"
            />
          ))}
        </Carousel>
      }
    >
      <button
        onClick={handleToggleFav}
        className={`absolute top-[24px] right-[11px] rounded-full ${
          isFav ? 'bg-[#D1D1D6]' : 'bg-[#33333399]'
        } h-8 w-8 flex items-center justify-center`}
      >
        {isFav ? (
          <HeartFilled style={{ fontSize: '20px', color: '#ff3333' }} />
        ) : (
          <HeartOutlined style={{ fontSize: '20px', color: '#D1D1D6' }} />
        )}
      </button>

      <div className="flex flex-col gap-2">
        {/* TYPE */}
        <div
          id="property_type"
          className="flex flex-row gap-1 items-center jsutifty-center"
        >
          <span className="type-dot"></span>
          <div className="type-text">{type}</div>
        </div>

        {/* Price */}
        <div className="flex flex-row justify-between items-center">
          <div
            id="property_price"
            className="flex flex-row gap-1 items-center jsutifty-center"
          >
            <span className="price-currency">{currency}</span>
            <div className="price-text">{formatPrice(price)}</div>
          </div>
          {/* dots */}

          <Tooltip placement="left" title="More Details" color="#8d8d8d">
            <button
              onClick={handleMoreDetails}
              className="absolute right-0 top-[62%] p-4 hover:shadow-sm hover:shadow-[#8d8d8d] bg-transparent rounded-lg transition-all duration-300"
            >
              <img src="/assets/icons/dots.svg" />
            </button>
          </Tooltip>
        </div>

        {/* description */}
        <p id="property_description">
          {description.slice(0, 83)}
          {description.length > 83 && '...'}
        </p>

        {/* intrernal info */}
        <div id="internal-info" className="flex flex-row gap-3">
          {/* Bedrooms */}
          <div
            id="property_bedrooms"
            className="flex flex-row gap-[6px] py-[6px] px-[6px] items-center jsutifty-center"
          >
            <img src="/assets/icons/beds.svg" />
            <div className="bedrooms-text">{bedrooms} beds</div>
          </div>

          {/* Bathrooms */}
          <div
            id="property_bathrooms"
            className="flex flex-row gap-[6px] py-[6px] px-[6px] items-center jsutifty-center"
          >
            <img src="/assets/icons/baths.svg" />
            <div className="bathrooms-text">{bathrooms} beds</div>
          </div>

          {/* Area */}
          <div
            id="property_area"
            className="flex flex-row gap-[6px] py-[6px] px-[6px] items-center jsutifty-center"
          >
            <img src="/assets/icons/beds.svg" />
            <div className="area-text">
              {area} m<sup>2</sup>
            </div>
          </div>
        </div>
        {/* address and more details btn */}
        <div className="flex flex-row justify-between">
          {/* address */}
          <p id="property_address">
            {address.split(',').map((line: string, index: number) => (
              <Fragment key={index}>
                {line}
                {address.split(',').length - 1 !== index && (
                  <>
                    ,
                    <br />
                  </>
                )}
              </Fragment>
            ))}
          </p>
          {/* more details  */}
          {showMoreDetailsBtn && (
            <button className="self-end mb-4 border-[1px] border-[#BE932A] rounded-[20px] py-3 px-4 text-[14px] leading-[16.8px] font-alexandria font-normal text-[#BE932A]">
              More Details
            </button>
          )}
          {showHideBtn && (
            <button className="self-end mt-4 px-4 text-[14px] leading-[16.8px] font-alexandria font-light text-[#33333399] underline">
              Unhide
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
