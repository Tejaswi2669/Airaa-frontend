export class Coupon {
    id!: number;
    code!: string;
    discountType!: string; // 'fixed' or 'percent'
    discountValue!: number;
    expiryDate!: Date;
    minPurchase!: number;
    isActive!: boolean;
  }
  