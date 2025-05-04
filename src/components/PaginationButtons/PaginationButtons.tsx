import { Pagination } from 'antd';
import React from 'react';
import './PaginationButtons.css';

interface PaginationButtonsProps {
  paginationProps: {
    current: number;
    total: number;
    pageSize: number;
  };
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  paginationProps,
}) => {
  const containerClasses = ` 
  py-20 
  ${
    paginationProps.total < paginationProps.pageSize
      ? 'hidden'
      : 'flex flex-row justify-center'
  }`.trim();

  return (
    <div className={containerClasses}>
      <Pagination
        className="propertiesPagination"
        {...paginationProps}
        showSizeChanger={false}
        nextIcon={<img src="/assets/icons/next-icon.svg" alt="Next" />}
        prevIcon={<img src="/assets/icons/prev-icon.svg" alt="Previous" />}
      />
    </div>
  );
};

export default PaginationButtons;
