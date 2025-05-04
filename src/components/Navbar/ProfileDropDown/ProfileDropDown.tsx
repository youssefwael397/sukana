import React, { useState } from 'react';
import { Dropdown, MenuProps } from 'antd';
import Logout from './Logout/Logout';
import { Link } from 'react-router-dom';

const ProfileDropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const baseClass = 'cursor-pointer py-3 px-4 rounded-[8px]';
  const activeClass = 'text-[#292929] bg-gold';
  const inActiveClass = 'text-[#FFFFF5] bg-transparent';
  const computedClass = `${baseClass} ${isOpen ? activeClass : inActiveClass}`;

  const toggleDropDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const items: MenuProps['items'] = [
    {
      label: <Link to="/profile">Profile</Link>,
      key: '0',
    },
    {
      label: 'Saved Homes',
      key: '1',
    },
    {
      label: 'Saved Searches',
      key: '2',
    },
    {
      label: 'Notifications',
      key: '3',
    },
    {
      label: <Logout />,
      key: '4',
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']} open={isOpen}>
      <a onClick={toggleDropDown} className={computedClass}>
        <div className="flex flex-row gap-1 items-center">
          <img
            src="/assets/icons/profile.svg"
            style={{ filter: isOpen ? 'invert(1)' : 'none' }}
          />
          <p className="font-alexandria font-normal text-[16px] leading-[17.6px]">
            Essraa
          </p>
        </div>
      </a>
    </Dropdown>
  );
};

export default ProfileDropDown;
