export interface INavLink {
  label: string | JSX.Element;
  path: string;
  isDropdown?: boolean;
  sublinks?: INavLink[];
}

export interface ILogo {
  imgWidth;
  showText?: boolean;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  className?: string;
  showTextClassName?: string;
}

export interface IService {
  name: string;
  description: string;
}

export interface IServiceLineProps extends IService {
  number: string;
}

export interface IFaq {
  question: string;
  answer: string;
}

export interface IContactPoint {
  title: string;
  subTitle?: string;
  description: string;
}

export interface ICustomInput {
  label: string;
  required: boolean;
}

export interface IFooterList {
  title?: string;
  items: {
    label: string;
    path: string;
  }[];
}

export interface IWhyUsPoint {
  icon: string;
  title: string;
  description: string;
}

export interface ISocialMedia {
  icon: string;
  link: string;
  name: string;
}

export interface IProductCard {
  location: string;
  count: number;
  img: string;
}

export interface IAboutPoint {
  icon: string;
  name: string;
}

export interface SearchFormProps {
  location: string;
  min_price: string;
  max_price: string;
  home_types: never[];
  beds: string;
  baths: string;
  others: {
    furnitures: string;
    completiobn_status: string;
    amenities: never[];
    size: {
      min_area: string;
      max_area: string;
    };
  };
}

export interface NotificationItemProps {
  label: string;
  description: string;
  underlineDescription?: string;
  value: boolean;
}

export interface IUpdateType {
  label: string;
  value: 'instant' | 'daily' | 'no';
}

export interface SearchResultCardProps {
  title: string;
  purpose: string;
  updateType: 'instant' | 'daily' | 'no';
}

export interface PropertyFeatureProps {
  icon: string;
  label: string | JSX.Element;
  value?: number | string;
  direction?: 'flex-row' | 'flex-row-reverse';
}


export interface SocialItemProps {
  icon: string;
  link: string;
  label: string;
}