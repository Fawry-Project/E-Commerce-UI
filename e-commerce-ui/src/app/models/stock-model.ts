export class Stock{
    stockId !: number;
    storeId !: number | null;
    quantity !: number | null;
    productCode!: string;
    consumedQuantity !: number;
    creationDate !: Date | null;
}