import React, { useState } from 'react';
import PersonalInformation from '../components/EditProfile/PersonalInformation/PersonalInformation';
import NotificationPreferences from '../components/EditProfile/NotificationPreferences/NotificationPreferences';
import HiddenHomes from '../components/EditProfile/HiddenHomes/HiddenHomes';
import SavedHomes from '../components/EditProfile/SavedHomes/SavedHomes';
import SavedSearches from '../components/EditProfile/SavedSearches/SavedSearches';

interface IprofileLink {
  icon: string;
  label: string;
  component: JSX.Element | React.ReactElement;
}
const ProfilePage: React.FC = () => {
  const profileLinks: IprofileLink[] = [
    {
      component: <PersonalInformation />,
      icon: '/assets/icons/white-profile.svg',
      label: 'Edit Profile',
    },
    {
      component: <NotificationPreferences />,
      icon: '/assets/icons/notification.svg',
      label: 'Notification Preferences',
    },
    {
      component: <HiddenHomes />,
      icon: '/assets/icons/hidden.svg',
      label: 'Hidden Homes',
    },
    {
      component: <SavedSearches />,
      icon: '/assets/icons/saved-searches.svg',
      label: 'Saved Searches',
    },
    {
      component: <SavedHomes />,
      icon: '/assets/icons/saved-homes.svg',
      label: 'Saved Homes',
    },
  ];

  const [activeLink, setActiveLink] = useState<IprofileLink>(profileLinks[0]);

  return (
    <div className="flex flex-row pt-[160px] min-h-[calc(818px)] bg-[#292929] font-alexandria">
      <div className="flex flex-col border-r-[2px] border-[#606060B2] w-[400px]">
        <div className="pt-[48px] pb-[24px] mx-auto flex flex-col gap-2">
          <div className="flex flex-col gap-1 justify-center items-center">
            <img src="/assets/icons/gold-profile.svg" className="w-[32px]" />
            <p className="bg-gold text-transparent bg-clip-text font-medium text-[20px] leading-[20px]">
              Essraa
            </p>
          </div>
          <p className="text-[16px] leading-[17.6px] font-normal text-[#D1D1D6]">
            Home Buyer
          </p>
        </div>
        <hr className="border-b-[1px] border-[#606060B2]" />
        <ul className="flex flex-col gap-4 mt-6">
          {profileLinks.map((profileLink: IprofileLink) => (
            <li
              onClick={() => setActiveLink(profileLink)}
              key={profileLink.label}
              className={`cursor-pointer flex flex-row items-center gap-2 py-3 px-8 text-[16px] leading-[17.6px] font-normal ${
                activeLink.label == profileLink.label
                  ? 'bg-gold text-[#292929]'
                  : 'bg-transparent text-[#FFFFF5]'
              }`}
            >
              <img
                src={profileLink.icon}
                className={`w-[20px] ${
                  activeLink.label == profileLink.label ? 'invert' : ''
                }`}
              />
              <span>{profileLink.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full py-16 px-14">{activeLink.component}</div>
    </div>
  );
};

export default ProfilePage;
