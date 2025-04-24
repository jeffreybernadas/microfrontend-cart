export interface ICartItem {
  productId: string;
  quantity: number;
}

export interface CartState {
  items: ICartItem[];
}
