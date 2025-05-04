import React, { Fragment, useState } from 'react';
import ScreenWrapper from '../Shared/ScreenWrapper/ScreenWrapper';
import { INavLink } from '../../types/types';
import { useTranslation } from 'react-i18next';

const Title: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2 justify-center text-center">
      <h3 className="text-[#BE932A] text-[26px] leading-[26px] font-medium">
        {t('help.title')}
      </h3>
      <div className="flex flex-col gap-2 mx-auto">
        <hr className="border-[1px] text-left border-[#BE932A] w-[100px] rounded" />
        <hr className="border-[1px] border-[#BE932A] w-[180px] rounded" />
      </div>
    </div>
  );
};

const Description: React.FC = () => {
  const { t } = useTranslation();
  const descriptions: string[] = t('help.description').split('\n');

  return (
    <p className="text-center text-[#292929] text-[16px] leading-[17px] font-normal mt-6 w-[993px] mx-auto">
      {descriptions.map((line, index) => (
        <Fragment key={index}>
          {line}
          {index !== descriptions.length - 1 && <br />}
        </Fragment>
      ))}
    </p>
  );
};

const SellOrBuy: React.FC = () => {
  interface IHelpCard {
    icon: string;
    title: string;
    description: string;
    link: INavLink;
  }

  const SingleTab: React.FC<{
    label: string;
    isActive: boolean;
    onClick: () => void;
  }> = ({ label, isActive, onClick }) => {
    const baseClass = `first-letter:uppercase rounded-[16px] py-4 px-10 text-[18px] leading-[24px] sm:text-[20px] sm:leading-[20px] font-medium text-alexandria`;
    const activeClass = `text-[#FFFFF5] bg-[#BE932A]`;
    const inActiveClass = `text-[#33333399] border-[2px] border-[#33333399] bg-transparent`;
    const computedClass = `${baseClass} ${
      isActive ? `${activeClass}` : inActiveClass
    }`;

    return (
      <button className={computedClass} onClick={onClick}>
        {label}
      </button>
    );
  };

  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'selling' | 'buying'>('selling');

  const cards: { [key: string | 'buying' | 'selling']: IHelpCard[] } = {
    buying: [
      {
        icon: '/assets/icons/help/4.svg',
        title: t('help.categories.buying.points.0.title'),
        description: t('help.categories.buying.points.0.description'),
        link: {
          label: t('help.categories.buying.points.0.link'),
          path: '/explore',
        },
      },
      {
        icon: '/assets/icons/help/2.svg',
        title: t('help.categories.buying.points.1.title'),
        description: t('help.categories.buying.points.1.description'),
        link: {
          label: t('help.categories.buying.points.1.link'),
          path: '/super-agent',
        },
      },
      {
        icon: '/assets/icons/help/3.svg',
        title: t('help.categories.buying.points.2.title'),
        description: t('help.categories.buying.points.2.description'),
        link: {
          label: t('help.categories.buying.points.2.link'),
          path: '/view',
        },
      },
    ],
    selling: [
      {
        icon: '/assets/icons/help/1.svg',
        title: t('help.categories.selling.points.0.title'),
        description: t('help.categories.selling.points.0.description'),
        link: {
          label: t('help.categories.selling.points.0.link'),
          path: '/search',
        },
      },
      {
        icon: '/assets/icons/help/2.svg',
        title: t('help.categories.selling.points.1.title'),
        description: t('help.categories.selling.points.1.description'),
        link: {
          label: t('help.categories.selling.points.1.link'),
          path: '/track',
        },
      },
      {
        icon: '/assets/icons/help/3.svg',
        title: t('help.categories.selling.points.2.title'),
        description: t('help.categories.selling.points.2.description'),
        link: {
          label: t('help.categories.selling.points.2.link'),
          path: '/explore',
        },
      },
    ],
  };

  const HelpCard: React.FC<IHelpCard> = ({
    icon,
    description,
    link,
    title,
  }) => {
    return (
      <div className="py-12 px-6 relative flex flex-col gap-5 items-center shadow-custom rounded-[16px] text-center h-[364px] w-full">
        <div className="w-full mx-auto text-center flex justify-center">
          <img src={icon} alt={title} />
        </div>
        <h5 className="text-[20px] leading-[20px] font-medium text-[#BE932A]">
          {title}
        </h5>
        <p className="text-[14px] leading-[17px] text-[#33333399] font-normal">
          {description}
        </p>
        <div className="absolute bottom-0 w-full left-0 pb-12 px-6 mx-auto">
          <p className="text-center text-[18px] leading-[18px] underline text-[#BE932A]">
            {link.label}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8 sm:px-0 px-5">
      <div className="flex flex-row gap-6 justify-center mt-12">
        <SingleTab
          label={t('help.categories.selling.title')}
          onClick={() => setActiveTab('selling')}
          isActive={activeTab == 'selling'}
        />
        <SingleTab
          label={t('help.categories.buying.title')}
          onClick={() => setActiveTab('buying')}
          isActive={activeTab == 'buying'}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {cards[activeTab].map((card: IHelpCard) => (
          <HelpCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

const HelpSection: React.FC = () => {
  return (
    <div className="bg-[#FFFFF5] py-20">
      <ScreenWrapper>
        <Title />
        <Description />
        <SellOrBuy />
      </ScreenWrapper>
    </div>
  );
};

export default HelpSection;
