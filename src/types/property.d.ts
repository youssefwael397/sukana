export interface IProperty {
  id: string;
  type: string;
  status: string;
  title: string;
  description: string;
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  currency: string;
  price: number;
  discount_price: number;
  before_price: string;
  after_price: string;
  latitude: number;
  longitude: number;
  area: number;
  exterior_area: number;
  country: string;
  state: string;
  city: string;
  address: string;
  zip_code: string;
  ref_id: string;
  is_map_enabled: boolean;
  gallery_images: string[];
}

export interface IPropertyCardProps extends IProperty {
  showMoreDetailsBtn?: boolean;
  showHideBtn?: boolean;
}

export interface IProdiuctCard {
  id: string;
  title: string;
  price: number;
  discount_price: number;
  before_price: string;
  after_price: string;
  gallery_images: string[];
}

export interface IPropertyType {
  id: string;
}
