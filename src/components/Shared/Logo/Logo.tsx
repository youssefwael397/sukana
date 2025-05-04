import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ILogo } from '../../../types/types';

const Logo: React.FC<ILogo> = ({
  imgWidth,
  showText,
  direction,
  className,
  showTextClassName,
}) => {
  const { i18n, t } = useTranslation();

  const currentLang = i18n.language; // Get the current language from i18n
  const homePath = `/${currentLang}/`; // Dynamically set the path for the home route

  return (
    <Link
      to={homePath}
      className={`text-white flex items-center justify-center gap-1 ${className} ${
        direction === 'row' ? 'flex-row' : 'flex-col'
      } row-reverse`}
      aria-label="Home"
    >
      <img
        src="/assets/sukana-logo.svg"
        width={imgWidth}
        alt="Logo"
        className="text-center"
      />

      {showText ? (
        <h1
          className={`ml-2 text-center  font-normal text-[#D1D1D6] uppercase ${
            showTextClassName ?? 'text-[35px] leading-[30px] tracking-[.25em]'
          } `}
        >
          {t('header.title')}
        </h1>
      ) : null}
    </Link>
  );
};

export default Logo;
