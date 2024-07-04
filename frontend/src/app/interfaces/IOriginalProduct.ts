export interface IOriginalProduct {
  id?: number;
  name: string;
  description: string;
  price: number;
  expirationDate: Date;
  stockQuantity: number;
  category: string;
  available: boolean;
  productImage?: string | null;
}
