import React from 'react';
import { Carousel } from 'antd';
import type { CarouselProps } from 'antd';
import styles from './GenericCarousel.module.css';
import CustomArrow from '../PropertyCard/CustomArrow';

interface GenericCarouselProps extends CarouselProps {
  blackArrows?: boolean;
  items?: React.ReactNode[]; // Option to pass items directly
  children?: React.ReactNode; // Option to pass children directly
}

const GenericCarousel: React.FC<GenericCarouselProps> = ({
  items,
  blackArrows,
  children,
  ...rest
}) => {
  return (
    <Carousel
      nextArrow={
        <CustomArrow black={blackArrows ? true : false} direction="right" />
      }
      prevArrow={
        <CustomArrow black={blackArrows ? true : false} direction="left" />
      }
      {...rest}
    >
      {items
        ? items.map((item, index) => (
            <div key={index} className="carousel-item">
              {item}
            </div>
          ))
        : children}
    </Carousel>
  );
};

export default GenericCarousel;
