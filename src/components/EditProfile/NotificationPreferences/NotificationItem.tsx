import React from 'react';
import CustomSwitch from '../../FormItems/CustomSwitch/CustomSwitch';
import { NotificationItemProps } from '../../../types/types';

const NotificationItem: React.FC<NotificationItemProps> = ({
  label,
  description,
  underlineDescription,
  value,
}) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col gap-2">
        <p className="bg-notification-gradient bg-clip-text text-transparent text-[16px] leading-[17.6px] font-normal font-alexandria">
          {label}
        </p>
        <p className="text-[#D1D1D6] text-[14px] leading-[16.8px] font-light">
          {description}
          <span className="underline px-1">{underlineDescription}</span>
        </p>
      </div>
      <CustomSwitch defaultChecked={value} />
    </div>
  );
};

export default NotificationItem;
