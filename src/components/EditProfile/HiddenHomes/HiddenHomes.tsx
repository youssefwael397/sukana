import React from 'react';
import usePagination from '../../../hooks/Pagination/usePagination';
import { properties } from '../../../db/properties';
import EditProfileTitle from '../EditProfileTitle';
import { IProperty, IPropertyCardProps } from '../../../types/property';
import PropertyCard from '../../PropertyCard/PropertyCard';
import PaginationButtons from '../../PaginationButtons/PaginationButtons';

const HiddenHomes: React.FC = () => {
  const { currentArray: currentProperties, paginationProps } =
    usePagination<IProperty>({ array: properties, initialPageSize: 6 });
  return (
    <div>
      <EditProfileTitle title="Hidden Homes" />
      <div className="grid grid-cols-3 gap-8 py-7">
        {currentProperties.map((property: IProperty) => (
          <PropertyCard
            key={property.id}
            {...(property as IPropertyCardProps)}
            showHideBtn
          />
        ))}
      </div>
      <PaginationButtons paginationProps={paginationProps} />
    </div>
  );
};

export default HiddenHomes;
