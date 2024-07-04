export interface IProduct {
  id: number;
  nameProduct: string;
  descriptionProduct: string;
  priceProduct: number;
  dateExpiration: Date;
  stockQuantity: number;
  category: string;
  available: boolean;
}
