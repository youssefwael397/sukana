import React from 'react';
import Logo from '../Shared/Logo/Logo';
import { IFooterList } from '../../types/types';
import SocialMedia from './SocialMedia/SocialMedia';
import FooterList from './FooterList/FooterList';
import { useTranslation } from 'react-i18next';

const Footer: React.FC<{ footerText?: JSX.Element }> = ({ footerText }) => {
  const { t } = useTranslation();

  const footerLists: IFooterList[] = [
    {
      title: 'Sukana',
      items: [
        { label: t('footer.about.title'), path: '/about' },
        { label: t('footer.contact.title'), path: '/contact' },
        { label: t('footer.feedback.title'), path: '/feedback' },
        { label: t('footer.ads.title'), path: '/ads' },
      ],
    },
    {
      items: [
        { label: t('footer.privacy.title'), path: '/privacy' },
        { label: t('footer.terms.title'), path: '/terms' },
        { label: t('footer.sitemap.title'), path: '/sitemap' },
      ],
    },
  ];

  return (
    <div
      className="py-6 relative overflow-hidden bg-[#292929]"
      style={{
        backgroundImage: " url('/assets/footer-bg-2.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
    >
      {footerText && footerText}
      <div className="w-full px-5 max-w-7xl mx-auto mb-[46px] flex flex-col md:flex-row gap-6 relative justify-center md:justify-between items-flex-end">
        <Logo imgWidth="163px" showText className="gap-6 mb-[6px]" />
        {footerLists.map((list, index) => (
          <FooterList {...list} key={index} />
        ))}
        <div className="flex flex-col justify-center sm:justify-end gap-[20px] md:gap-[50px]">
          <SocialMedia />
        </div>
      </div>
      <hr className="w-full max-w-7xl mx-auto rounded-full border-[1px] border-[#D1D1D6] relative" />
      <p className="font-alexandria font-light text-[20px] leading-[20px] mt-6 text-center bg-clip-text text-transparent bg-gold">
        @2024 Smooth Flow Tech
      </p>
    </div>
  );
};

export default Footer;
