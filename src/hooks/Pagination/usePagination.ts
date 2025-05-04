import { useState } from 'react';

interface UsePaginationProps<T> {
  array: T[];
  initialPageSize?: number;
}

interface UsePaginationReturn<T> {
  currentArray: T[];
  currentPage: number;
  pageSize: number;
  total: number;
  paginationProps: {
    current: number;
    total: number;
    pageSize: number;
    onChange: (page: number, size?: number) => void;
  };
}

function usePagination<T>({
  array,
  initialPageSize = 9,
}: UsePaginationProps<T>): UsePaginationReturn<T> {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const currentArray = array.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page: number, size?: number) => {
    setCurrentPage(page);
    if (size) setPageSize(size);
  };

  return {
    currentArray,
    currentPage,
    pageSize,
    total: array.length,
    paginationProps: {
      current: currentPage,
      total: array.length,
      pageSize,
      onChange: handlePageChange,
    },
  };
}

export default usePagination;
