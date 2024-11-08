import { Product } from "./Product";

export class CartItem {
  product: Product;
  quantity: number;

  constructor(product: Product, quantity: number = 1) {
    this.product = product;
    this.quantity = quantity;
  }

  get totalPrice(): number {
    return this.product.price * this.quantity;
  }
}
