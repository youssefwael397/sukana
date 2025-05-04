import React, { Fragment } from 'react';
import Logo from '../Shared/Logo/Logo';
import ScreenWrapper from '../Shared/ScreenWrapper/ScreenWrapper';
import { IAboutPoint } from '../../types/types';
import { useTranslation } from 'react-i18next';

const Title: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 justify-center text-center">
      <div className="flex flex-row justify-center items-center gap-4">
        <Logo imgWidth={80} />
        <h3 className="bg-gold bg-clip-text text-transparent text-[40px] leading-[40px] font-medium">
          {t('about.title')}
        </h3>
      </div>
      <div className="flex flex-col gap-2 mx-auto">
        <hr className="text-left border-[#F2E26A] w-[100px]" />
        <hr className="border-[#F2E26A] w-[225px]" />
      </div>
    </div>
  );
};

const Description: React.FC = () => {
  const { t } = useTranslation();
  const descriptions: string[] = t('about.description').split('\n');

  return (
    <p className="text-center text-[#D1D1D6] text-[14px] leading-[22px] sm:text-[26px] sm:leading-[26px] font-normal mt-10 sm:px-20 px-3">
      {descriptions.map((line, index) => (
        <Fragment key={index}>
          {line}
          {index !== descriptions.length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </Fragment>
      ))}
    </p>
  );
};

const AboutPoint: React.FC<{ point: IAboutPoint }> = ({ point }) => (
  <div className="flex flex-row gap-2 items-center">
    <img src={point.icon} alt={point.name} className="w-[30px] sm:w-[40px]" />
    <p className="text-[#D1D1D6] text-[18px] leading-[22px] sm:text-[24px] sm:leading-[28px] font-normal uppercase">
      {point.name}
    </p>
  </div>
);

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const aboutPoints: IAboutPoint[] = [
    {
      name: t('about.points.optimism'),
      icon: '/assets/icons/about/OPTIMISM.svg',
    },
    {
      name: t('about.points.integrity'),
      icon: '/assets/icons/about/INTEGRITY.svg',
    },
    {
      name: t('about.points.excellence'),
      icon: '/assets/icons/about/EXCELLENCE.svg',
    },
    {
      name: t('about.points.equality'),
      icon: '/assets/icons/about/EQUALITY.svg',
    },
    {
      name: t('about.points.innovation'),
      icon: '/assets/icons/about/INNOVATION.svg',
    },
    {
      name: t('about.points.collaboration'),
      icon: '/assets/icons/about/COLLABORATION.svg',
    },
    {
      name: t('about.points.loyalty'),
      icon: '/assets/icons/about/LOYALTY.svg',
    },
    {
      name: t('about.points.gratitude'),
      icon: '/assets/icons/about/GRATITUDE.svg',
    },
  ];
  return (
    <div className="bg-[#292929] py-20">
      <ScreenWrapper>
        <Title />
        <Description />
        <div className="flex flex-row flex-wrap px-20 gap-x-12 gap-y-8 justify-center mt-[64px]">
          {aboutPoints.map((point) => (
            <AboutPoint key={point.name} point={point} />
          ))}
        </div>
      </ScreenWrapper>
    </div>
  );
};

export default AboutSection;
