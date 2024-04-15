export class Coupon {
  id!: number;
  code!: string;
  expiryDate!: Date;
  valueType!: string;
  value!: number;
  maxNumberOfUsages!: number;
  currentNumberOfUsages!: number;
  valid!: boolean;
}
