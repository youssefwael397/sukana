import React from 'react';
import SmoothSlider from '../Shared/SmoothSlider/SmoothSlider';
import HeaderText from './HeaderText/HeaderText';
import { useTranslation } from 'react-i18next';
import HeaderSearch from './HeaderSearch/HeaderSearch';

const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // Array of background images
  const bgImages: string[] = [
    '/assets/slider/1.jpeg',
    '/assets/slider/2.png',
    '/assets/slider/3.png',
  ];

  return (
    <SmoothSlider
      className="h-[calc(90vh-80px)] md:h-[135vh]"
      bgImages={bgImages}
      delay={3000}
      // showButtons
      content={
        <div
          dir={isArabic ? 'rtl' : 'ltr'}
          id="home"
          className="max-w-6xl w-screen mx-auto px-3 md:px-0 mt-10 sm:"
        >
          <HeaderText />
          <HeaderSearch />
        </div>
      }
    />
  );
};

export default Header;
