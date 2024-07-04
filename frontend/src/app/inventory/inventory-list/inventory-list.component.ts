import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct.interface';
import { ProductService } from '../../../services/product.service';
import { IOriginalProduct } from '../../interfaces/IOriginalProduct';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent implements OnInit {
  inventoryList: Array<IProduct> = [];

  constructor(private products: ProductService) {

  }

  ngOnInit(): void {
    this.products.getAllProducts().subscribe(
      (products: IOriginalProduct[]) => {
        this.inventoryList = products.map((product) => ({
          nameProduct: product.name,
          descriptionProduct: product.description,
          priceProduct: product.price,
          dateExpiration: product.expirationDate,
          stockQuantity: product.stockQuantity,
          category: product.category,
          available: product.available,
          id: product.id!
        }));
      }
    )
  }
}
