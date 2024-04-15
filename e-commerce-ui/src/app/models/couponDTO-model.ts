export class CouponDTO {
  code!: string;
  maxNumberOfUsages!: number;
  valueType!: string;
  value!: number;
  expiryDate!: Date;
}
