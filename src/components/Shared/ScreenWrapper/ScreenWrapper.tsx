import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const ScreenWrapper: React.FC<{
  children: ReactNode;
  screenWidth?: '7xl' | '6xl';
}> = ({ children, screenWidth = '7xl' }) => {
  const {
    i18n: { language },
  } = useTranslation();

  const isAr = language == 'ar';

  const screenWidthMap = {
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
  };


  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      className={`mx-auto w-full ${screenWidthMap[screenWidth]}`}
    >
      {children}
    </div>
  );
};

export default ScreenWrapper;
