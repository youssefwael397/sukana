import React from 'react';
import EditProfileTitle from '../EditProfileTitle';
import styles from './SavedSearches.module.css';
import { SearchResultCardProps } from '../../../types/types';
import SearchResultCard from './SearchResultCard/SearchResultCard';

const SavedSearches: React.FC = () => {
  const searchResults: SearchResultCardProps[] = [
    { purpose: 'For Sale', title: 'Vienna , Austria', updateType: 'daily' },
    { purpose: 'For Sale', title: 'Vienna , Austria', updateType: 'instant' },
    { purpose: 'For Sale', title: 'Vienna , Austria', updateType: 'no' },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 w-[819px]">
        <div>
          <EditProfileTitle title="Saved Searches" />
        </div>
        <p className={styles.headerDescription}>
          Get each new listing right away with instant updates , or get a single
          daily email with new listings for the entire day.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 w-[846px]">
        {searchResults.map((searchResult: SearchResultCardProps) => (
          <SearchResultCard key={searchResult.title} {...searchResult} />
        ))}
      </div>
    </div>
  );
};

export default SavedSearches;
