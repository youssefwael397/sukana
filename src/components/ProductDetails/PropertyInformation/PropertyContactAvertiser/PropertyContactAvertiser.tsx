import React from 'react';
import { SocialItemProps } from '../../../../types/types';
import SocialItem from './SocialItem/SocialItem';

const PropertyContactAvertiser: React.FC = () => {
  const socialItems: SocialItemProps[] = [
    { icon: '/assets/icons/advertise/call.svg', label: 'Call', link: '#' },
    { icon: '/assets/icons/advertise/email.svg', label: 'Email', link: '#' },
    {
      icon: '/assets/icons/advertise/whatsapp.svg',
      label: 'Whatsapp',
      link: '#',
    },
  ];

  return (
    <div className="flex flex-col w-[545px] gap-4" id="contact-advertise">
      <h2 className="text-[24px] leading-[28.8px] font-normal bg-gold bg-clip-text text-transparent">
        Contact the advertiser
      </h2>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <img
            className="h-[56px] w-[56px] rounded-full object-cover"
            src="/assets/avatar.jpg"
            alt="profile-avatar"
          />
          <div className="flex flex-col gap-2">
            <p className="text-white text-[16px] leading-[17.6px] font-normal">
              Hadi elhlow
            </p>
            <p className="text-white text-[14px] leading-[16.8px] font-light">
              80 listing
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          {socialItems.map((item: SocialItemProps) => (
            <SocialItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyContactAvertiser;
