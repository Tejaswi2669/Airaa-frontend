import { Injectable } from '@angular/core';
import { CartItem } from '../Model/CartItem';
import { Product } from '../Model/Product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() {}

  // Get all items in the cart
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  // Add an item to the cart
  addToCart(product: Product): void {

    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push(new CartItem(product));
    }
  }

  // Remove an item from the cart
  removeFromCart(product: Product): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== product.id);
  }

  // Clear all items from the cart
  clearCart(): void {
    this.cartItems = [];
  }

  // Update the quantity of an item in the cart
  updateQuantity(product: Product, quantity: number): void {
    const item = this.cartItems.find(item => item.product.id === product.id);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeFromCart(product); // Remove item if quantity is zero or less
      }
    }
  }

  // Get the total price of items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.totalPrice, 0);
  }
}
