export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  qunatity: number;
}

export interface ICartState {
  items: ICartItem[];
}