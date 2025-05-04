import React from 'react';
import { Link } from 'react-router-dom';
import { IFooterList } from '../../../types/types';
import { useTranslation } from 'react-i18next';

const FooterList: React.FC<IFooterList> = ({ title, items }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language; // Get the current language from i18n

  return (
    <div
      className={`flex flex-col ${
        title ? 'gap-2' : 'pt-5'
      } justify-center sm:justify-start`}
    >
      {title && (
        <h4 className="hidden sm:block uppercase font-normal text-[20px] leading-[20px] text-transparent bg-gold bg-clip-text">
          {title}
        </h4>
      )}
      <ul className="flex flex-col gap-2 justify-center sm:justify-start">
        {items.map((item) => (
          <li
            key={item.path} // Ensure unique key for each list item
            className="font-normal text-center sm:text-left text-[18px] leading-[18px] md:text-[24px] md:leading-[28px] text-[#D1D1D6]"
          >
            {/* Use Link for navigation */}
            <Link to={`/${currentLang}${item.path}`}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
