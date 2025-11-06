export interface Country {
  id: string;
  name: string;
  code: string;
  slug: string;
}

export interface State {
  id: string;
  name: string;
  code: string;
  slug: string;
  countryId: string;
}

export interface Area {
  id: string;
  name: string;
  slug: string;
  stateId: string;
}

export interface Brewery {
  id: string;
  name: string;
  slug: string;
  description: string;
  areaId: string;
  website?: string;
  logo?: string;
  established?: number;
}

export type MerchCategory =
  | 'apparel'
  | 'glassware'
  | 'accessories'
  | 'homegoods'
  | 'collectibles';

export type ApparelType = 'tshirt' | 'hoodie' | 'hat' | 'beanie' | 'jacket' | 'tank-top';
export type GlasswareType = 'pint-glass' | 'tulip-glass' | 'pilsner-glass' | 'mug' | 'growler';
export type AccessoryType = 'keychain' | 'sticker' | 'patch' | 'pin' | 'bottle-opener';
export type HomegoodsType = 'coaster' | 'sign' | 'taphandle' | 'flag' | 'poster';
export type CollectibleType = 'limited-edition' | 'vintage' | 'memorabilia';

export interface Product {
  id: string;
  breweryId: string;
  name: string;
  slug: string;
  description: string;
  category: MerchCategory;
  type: ApparelType | GlasswareType | AccessoryType | HomegoodsType | CollectibleType;
  price: number;
  images: string[];
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  stockQuantity: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  brewery: Brewery;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface GeographicLocation {
  country: Country;
  state?: State;
  area?: Area;
  brewery?: Brewery;
}
