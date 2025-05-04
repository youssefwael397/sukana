import React from 'react';
import { useTranslation } from 'react-i18next';

const HeaderText: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-center text-[30px] leading-[30px] md:text-[60px] md:leading-[60px] font-bold text-transparent bg-gold bg-clip-text">
        {t('header.title')}
      </h1>
      <p className="mx-auto text-center text-[18px] leading-[20px] md:text-[32px] md:leading-[32px] mt-2 text-[#BE932A] font-normal">
        {t('header.description')}
      </p>
    </div>
  );
};

export default HeaderText;
