export class Product {
  id!: number;
  code!: string;
  name!: string;
  description!: string;
  price!: number;
  imgUrl!: string;
  category!: {
    id: number;
    name: string;
  };
}
