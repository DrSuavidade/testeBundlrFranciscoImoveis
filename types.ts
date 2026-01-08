export type PropertyType = 'Apartamento' | 'Moradia' | 'Terreno' | 'Comercial';
export type PropertyStatus = 'Venda' | 'Reservado' | 'Vendido';

export interface Listing {
  id: string;
  refCode: string;
  title: string;
  description: string;
  price: number;
  location: {
    district: string;
    concelho: string;
    freguesia: string;
    lat?: number;
    lng?: number;
  };
  type: PropertyType;
  status: PropertyStatus;
  beds: number;
  baths: number;
  areaM2: number;
  features: string[];
  energyRating?: string;
  images: string[];
  createdAt: string;
  isFeatured?: boolean;
}

export interface FilterState {
  keyword: string;
  minPrice: number;
  maxPrice: number;
  type: PropertyType | 'All';
  beds: number | 'All';
}

export interface Lead {
  name: string;
  email: string;
  phone: string;
  message: string;
  type: 'visit' | 'info' | 'valuation';
}
