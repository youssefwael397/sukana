import React, { useState, useCallback } from 'react';
import Logo from '../Shared/Logo/Logo';
import NavLink from './NavLink/NavLink';
import { Dropdown, Drawer, Button, MenuProps } from 'antd';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { INavLink } from '../../types/types';
import LanguageSwitcher from '../Shared/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import ScreenWrapper from '../Shared/ScreenWrapper/ScreenWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { openModal as openSignUpModal } from '../../api/features/signupSlice';
import { openModal as openLoginModal } from '../../api/features/loginSlice';
import { RootState } from '../../api/store';
import ProfileDropDown from './ProfileDropDown/ProfileDropDown';

export interface NavbarProps {
  navLinks: INavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const isAboutOrPrivacyPage =
    location.pathname.includes('/about-us') ||
    location.pathname.includes('/privacy');

  const createDropdownMenu = useCallback(
    (sublinks: INavLink[]): MenuProps['items'] =>
      sublinks.map(({ label, path }) => ({
        key: path,
        label: <NavLink label={label} path={path} />,
      })),
    []
  );

  const handleDrawerNavClick = (path: string) => {
    setIsDrawerVisible(false);
    const targetId = path.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      history.replaceState(null, '', path);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-10 bg-[#33333399] ${
        isArabic ? 'rtl text-right' : ' text-left'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <ScreenWrapper screenWidth="6xl">
        <div className="flex items-center justify-between h-20">
          {/* Navigation Links */}
          <div className="hidden lg:flex gap-[100px] px-[50px]">
            {!isAboutOrPrivacyPage &&
              navLinks.map(({ label, path, isDropdown, sublinks }) => (
                <div key={path} className="relative">
                  {isDropdown && sublinks ? (
                    <Dropdown
                      menu={{ items: createDropdownMenu(sublinks) }}
                      trigger={['hover']}
                      placement={isArabic ? 'bottomRight' : 'bottomLeft'}
                      getPopupContainer={() => document.body}
                    >
                      <a className="font-alexandria text-white text-[24px] font-medium flex items-center cursor-pointer">
                        {label}
                        <DownOutlined
                          className={`ml-2 ${isArabic ? 'rotate-180' : ''}`}
                        />
                      </a>
                    </Dropdown>
                  ) : (
                    <NavLink
                      label={label}
                      path={path}

                      // className="text-[#FFFFF5]"
                    />
                  )}
                </div>
              ))}
          </div>

          {/* Logo */}
          <Logo
            imgWidth="103px"
            direction={'row'}
            className="gap-2 text-center mx-2 lg:mx-0"
          />

          <div className="hidden lg:flex flex-row gap-10 items-center self">
            <NavLink
              label={t('contactUs.title')}
              path="#contact"
              className="text-[#FFFFF5]"
            />

            {isLoggedIn ? (
              <>
                <NavLink
                  label={t('savedHomes.title')}
                  path="/savedHomes"
                  className="text-[#FFFFF5]"
                  // onClick={() => dispatch(openLoginModal())}
                />
                <ProfileDropDown />
              </>
            ) : (
              <>
                <NavLink
                  label={t('login.title')}
                  path="#login"
                  className="text-[#FFFFF5]"
                  onClick={() => dispatch(openLoginModal())}
                />
                <NavLink
                  label={t('signUp.title')}
                  path="#signup"
                  onClick={() => dispatch(openSignUpModal())}
                  className="bg-gold h-[48px] flex items-center justify-center px-[32px] rounded-[12px] text-[20px] leading-[20px] font-alexandria font-medium text-black hover:text-black hover:opacity-50"
                />
              </>
            )}

            <LanguageSwitcher />
          </div>

          {/* Burger menu icon */}
          <Button
            className="lg:hidden block mx-2"
            icon={<MenuOutlined style={{ color: 'white' }} />}
            onClick={toggleDrawer}
            style={{ border: 'none', background: 'none' }}
          />
        </div>
      </ScreenWrapper>

      {/* Drawer for mobile view */}
      <Drawer
        placement={isArabic ? 'left' : 'right'}
        open={isDrawerVisible}
        onClose={toggleDrawer}
        width={250}
        styles={{
          header: { backgroundColor: '#333333', color: '#fff' },
          body: { backgroundColor: '#333333', color: '#fff' },
        }}
        closeIcon={<CloseOutlined style={{ color: 'white' }} />}
      >
        <div className="space-y-4">
          {!isAboutOrPrivacyPage &&
            navLinks.map(({ label, path, isDropdown, sublinks }) => (
              <div key={path} className="relative">
                {/* <hr className="border-gray-600" /> */}

                {isDropdown && sublinks ? (
                  <Dropdown
                    menu={{ items: createDropdownMenu(sublinks) }}
                    trigger={['click']}
                    placement={isArabic ? 'bottomRight' : 'bottomLeft'}
                    getPopupContainer={() => document.body}
                  >
                    <a
                      className="font-albert text-white text-[24px] font-medium flex items-center cursor-pointer"
                      onClick={() => handleDrawerNavClick(path)}
                    >
                      {label}
                      <DownOutlined
                        className={`ml-2 ${isArabic ? 'rotate-180' : ''}`}
                      />
                    </a>
                  </Dropdown>
                ) : (
                  <NavLink
                    toggleDrawer={toggleDrawer}
                    label={label}
                    path={path}
                  />
                )}
              </div>
            ))}

          <div className="flex flex-col space-y-4">
            <NavLink
              label={t('contactUs.title')}
              path="/contact"
              className="text-[#FFFFF5]"
            />

            <hr className="border-[#fefefe]" />

            <NavLink
              label={t('login.title')}
              path="/login"
              className="text-[#FFFFF5]"
            />
          </div>
          <div className="py-4">
            <NavLink
              label="Sign Up"
              path="/login"
              className="bg-gold py-[calc(16px*2/3)] px-[calc(32px*2/3)] rounded-[12px] text-[20px] leading-[20px] font-alexandria font-medium text-black"
            />
          </div>

          <hr className="border-[#fefefe]" />
          <div className="flex justify-center">
            <LanguageSwitcher />
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
