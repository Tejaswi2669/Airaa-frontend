import { OrderItem } from "./OrderItem";


export class Order {
  id!: number;
  userId!: number;
  totalPrice!: number;
  status!: string; // e.g., 'Pending', 'Shipped', 'Delivered'
  orderDate!: Date;
  items!: OrderItem[];
}
