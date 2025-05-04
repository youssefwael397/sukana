import React from 'react';
import { Dropdown, Button } from 'antd';
import type { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (language: string) => {
    const currentPath = location.pathname.replace(/^\/(en|ar|de)/, ''); // Remove any existing language prefix
    const newPath = `/${language}${currentPath}`; // Add the selected language prefix
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
    navigate(newPath);
  };

  // Define dropdown menu items
  const items: MenuProps['items'] = [
    { key: 'en', label: 'English', onClick: () => handleLanguageChange('en') },
    { key: 'ar', label: 'العربية', onClick: () => handleLanguageChange('ar') },
    { key: 'de', label: 'Deutsch', onClick: () => handleLanguageChange('de') },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['hover']} placement="bottom">
      <Button
        type="text"
        style={{
          color: 'white',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '30px',
          height: '30px',
        }}
      >
        <img src='/assets/icons/world.svg' className='w-[32px]' alt="world icon" />
      </Button>
    </Dropdown>
  );
};

export default LanguageSwitcher;
