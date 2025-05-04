import React, { useState } from 'react';
import { IUpdateType, SearchResultCardProps } from '../../../../types/types';
import { Radio, RadioChangeEvent, Space } from 'antd';
import styles from './SavedResult.module.css'

const updateTypes: IUpdateType[] = [
  { label: 'Instant Update', value: 'instant' },
  { label: 'Daily Update', value: 'daily' },
  { label: 'No Update', value: 'no' },
];

const SearchResultCard: React.FC<SearchResultCardProps> = ({
  title,
  purpose,
  updateType,
}) => {
  const [selectedUpdateType, setSelectedUpdateType] = useState(updateType);

  const onChange = (e: RadioChangeEvent) => {
    setSelectedUpdateType(e.target.value);
  };

  return (
    <div className="pt-4 pb-6 px-6  border-[1px] border-[#606060B2] rounded-[24px] font-alexandria">
      <div className="flex flex-row gap-1 items-start">
        <img src="/assets/icons/gold-search.svg" alt="search-icon" />
        <div className="flex flex-col gap-2">
          <p className="bg-gold text-transparent bg-clip-text text-[16px] leading-[17.6px] font-normal">
            {title}
          </p>
          <span className="text-[#D1D1D6] text-[12px] leading-[12px] font-light">
            {purpose}
          </span>
        </div>
      </div>
      <div className="pt-4 pb-6">
        <Radio.Group onChange={onChange} value={selectedUpdateType} className={styles.RadioGroup}>
          <Space direction="vertical">
            {updateTypes.map((updateType: IUpdateType) => (
              <Radio key={updateType.label} value={updateType.value}>
                {updateType.label}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </div>
      <div className="flex flex-row justify-between items-center">
        <button className="bg-gold text-black rounded-[24px] py-1 px-[10.5px] text-[12px] leading-[16.8px] font-normal">
          View New Listings
        </button>
        <button className="bg-gold bg-clip-text text-transparent text-[12px] leading-[16.8px] font-normal">
          Delete Search
        </button>
      </div>
    </div>
  );
};

export default SearchResultCard;
