import React, { CSSProperties } from 'react';
import { INavLink } from '../../../types/types';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NavLinkProps extends INavLink {
  className?: string;
  style?: CSSProperties;
  toggleDrawer?: () => void;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  label,
  path,
  className = '',
  style,
  onClick,
}) => {
  const location = useLocation();
  const { i18n } = useTranslation();

  const isActive =
    location.pathname.includes(path) ||
    (path === '#home' && location.pathname === '/');

  const baseClasses =
  'font-alexandria text-[16px] leading-[16px] font-normal transition-all duration-300 ease-in-out transform';

const hoverClasses = 'hover:text-[#F2E26A]';

const activeClasses =
  'text-[#F2E26A] relative after:absolute after:h-[1px] after:bottom-[-4px] after:left-0 after:w-full after:bg-[#F2E26A] after:content-[""] after:rounded-full after:transition-all after:duration-300 after:ease-in-out';

const inactiveClasses =
  'text-[#FFFFF5] relative after:absolute after:h-[1px] after:bottom-[-4px] after:left-0 after:w-0 after:bg-[#F2E26A] after:content-[""] after:rounded-full after:transition-all after:duration-300 after:ease-in-out';


  const computedClasses = `${baseClasses} ${
    isActive ? activeClasses : inactiveClasses
  } ${hoverClasses} ${className}`.trim();

  const currentLang = i18n.language;
  const localizedPath = path.startsWith('#') ? path : `/${currentLang}${path}`;

  return path.startsWith('#') ? (
    <a
      href={localizedPath}
      className={computedClasses}
      style={style}
      onClick={onClick}
    >
      {label}
    </a>
  ) : (
    <Link to={localizedPath} className={computedClasses} style={style}>
      {label}
    </Link>
  );
};

export default NavLink;
