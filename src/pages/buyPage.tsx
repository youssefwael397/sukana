import React, { useState, useEffect, useRef } from 'react';
import SearchAndFIlter from '../components/buy/SearchAndFilter/SearchAndFIlter';
import { IProperty } from '../types/property';
import PropertyCard from '../components/PropertyCard/PropertyCard';
import ScreenWrapper from '../components/Shared/ScreenWrapper/ScreenWrapper';
import { properties } from '../db/properties';
import usePagination from '../hooks/Pagination/usePagination';
import PaginationButtons from '../components/PaginationButtons/PaginationButtons';
import FloatingMap from '../components/FloatingMap/FloatingMap';
import { formatPrice } from '../utils/helpers';

const BuyPage: React.FC = () => {
  const { currentArray: currentProperties, paginationProps } =
    usePagination<IProperty>({
      array: properties.slice(0, 20),
      initialPageSize: 9,
    });

  const [isFloatingMapVisible, setIsFloatingMapVisible] = useState(true);
  const paginationRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer to toggle FloatingMap visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFloatingMapVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    if (paginationRef.current) {
      observer.observe(paginationRef.current);
    }

    return () => {
      if (paginationRef.current) {
        observer.unobserve(paginationRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#292929] pt-[160px] relative z-0">
      {/* Floating Map */}

      <FloatingMap
        className={`${isFloatingMapVisible ? 'fixed' : 'hidden'} transition-all duration-300 bottom-[10px] left-1/2 transform -translate-x-1/2 z-50`}
      />

      {/* Search and Filter Form */}
      <SearchAndFIlter />
      <ScreenWrapper screenWidth="6xl">
        <div className="py-6 text-[#FFFFF5] font-alexandria flex flex-col gap-3">
          <span className="text-[26px] leading-[26px] font-medium">
            Vienna, Austria
          </span>
          <span className="text-[14px] leading-[16.8px] font-normal">
            {formatPrice(3500)} Homes
          </span>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-3 gap-8">
          {currentProperties.map((property: IProperty) => (
            <PropertyCard key={property.id} {...property} showMoreDetailsBtn />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div ref={paginationRef}>
          <PaginationButtons paginationProps={paginationProps} />
        </div>
      </ScreenWrapper>
    </div>
  );
};

export default BuyPage;
