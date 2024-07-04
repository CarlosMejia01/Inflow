import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastAlertService } from '../../../services/toast-alert.service';
import { IProduct } from '../../interfaces/IProduct.interface';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  propertyView: IProduct = {
    "id": 0,
    "nameProduct": "",
    "descriptionProduct": "",
    "available": true,
    "category": "",
    "dateExpiration": new Date(),
    "priceProduct": 0,
    "stockQuantity": 0
  };

  createProductForm = this.fb.group({
    productName: ['', [Validators.required, Validators.minLength(3)]],
    productDescription: ['', [Validators.required, Validators.maxLength(500)]],
    productPrice: [0, [Validators.required, Validators.min(0)]],
    expirationDate: ['', Validators.required],
    stockQuantity: [0, [Validators.required, Validators.min(0)]],
    category: ['', Validators.required],
    available: [false, Validators.required],
    productImage: [null]
  })
  constructor(private fb: FormBuilder, private toast: ToastAlertService, private product: ProductService, private router: Router) { }

  ngOnInit() {
    this.createProductForm.valueChanges.subscribe(values => {
      this.updatePropertyView(values);
    });
  }

  onSubmit() {
    console.log(this.createProductForm.value);
    if (this.createProductForm.valid) {
      const productValues = { ...this.createProductForm.value };
      const newProduct = {
        name: productValues.productName!,
        description: productValues.productDescription!,
        expirationDate: new Date(productValues.expirationDate!),
        price: productValues.productPrice!,
        stockQuantity: productValues.stockQuantity!,
        category: productValues.category!,
        available: productValues.available!,
        productImage: "test.jpg"
      };
      this.product.uploadProduct(newProduct).subscribe(() => {
        this.toast.showSuccess(`Product created successfully`)
        this.router.navigate(['/list-products']);
      })
    }
  }

  updatePropertyView(values: any) {
    this.propertyView = {
      ...this.propertyView,
      nameProduct: values.productName,
      descriptionProduct: values.productDescription,
      priceProduct: values.productPrice,
      dateExpiration: values.expirationDate,
      stockQuantity: values.stockQuantity,
      category: values.category,
      available: values.available
    };
  }

}
