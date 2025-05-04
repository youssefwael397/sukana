import React from 'react';
import { ISocialMedia } from '../../../types/types';
import { useTranslation } from 'react-i18next';

const socialMedia: ISocialMedia[] = [
  {
    name: 'instagram',
    link: 'https://www.instagram.com/smoothflowtech/',
    icon: '/assets/social-media/instagram.svg',
  },
  {
    name: 'facebook',
    link: '/facebook',
    icon: '/assets/social-media/facebook.svg',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/company/smooth-flow-tech/',
    icon: '/assets/social-media/linkedin.svg',
  },
];

const SocialMedia: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p className="text-transparent bg-gold bg-clip-text text-[24px] leading-[28px]">
        {t('footer.followUs.title')}
      </p>
      <div className="flex flex-row gap-4 md:gap-8 justify-center sm:justify-end items-center">
        {socialMedia.map((item) => (
          <a key={item.name} href={item.link}>
            <img src={item.icon} alt={item.name} width={56} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
