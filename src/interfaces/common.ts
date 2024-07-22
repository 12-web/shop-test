export interface LayoutType {
  readonly children: React.ReactNode;
}

export interface Color {
  id: string;
  name: string;
  color: string;
}

export interface Size {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  sizes: Size[];
  colors: Color[];
  category: string;
}

export interface OrderedProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  size: string;
  color: Color;
  count: number;
}

export interface ProductsStore {
  products: Product[];
  pending: boolean;
  error: boolean;
  filter: string;
}

export interface OrderStore {
  products: OrderedProduct[];
  count: number;
  price: number;
}
