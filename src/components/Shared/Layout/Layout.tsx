import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import { useTranslation } from 'react-i18next';
import { INavLink } from '../../../types/types';
import SignUpDialog from '../../SignUpDialog/SignUpDialog';
import LoginDialog from '../../LoginDialog/LoginDialog';

const Layout: React.FC<{
  children: React.ReactNode;
  footerText?: JSX.Element;
  withoutFooter?: boolean;
}> = ({ children, footerText, withoutFooter }) => {
  const { t } = useTranslation();

  const navLinks: INavLink[] = [
    { label: t('sell.title'), path: `#sell` },
    { label: t('buy.title'), path: `/buy` },
    // { label: t('findAnAgent.title'), path: `#find-agent` },
    { label: t('about.title'), path: `#about` },
  ];

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="font-alexandria">{children}</main>

      <SignUpDialog />
      <LoginDialog />
      {!withoutFooter && <Footer footerText={footerText} />}
    </>
  );
};

export default Layout;
