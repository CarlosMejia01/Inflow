import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastAlertService } from '../../../services/toast-alert.service';
import { IProduct } from '../../interfaces/IProduct.interface';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from '../../../services/sweet-alert.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId: string | null = null;
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

  editProductForm = this.fb.group({
    productName: ['', [Validators.required, Validators.minLength(3)]],
    productDescription: ['', [Validators.required, Validators.maxLength(500)]],
    productPrice: [0, [Validators.required, Validators.min(0)]],
    expirationDate: ['', Validators.required],
    stockQuantity: [0, [Validators.required, Validators.min(0)]],
    category: ['', Validators.required],
    available: [false, Validators.required],
    productImage: [null]
  })
  constructor(private fb: FormBuilder, private toast: ToastAlertService, private product: ProductService, private router: Router, private route: ActivatedRoute,
    private sweetAlert: SweetAlertService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = id;
    }

    this.product.getSingleProduct(this.productId!)
      .subscribe((dataProduct) => {
        console.log(dataProduct);
        this.editProductForm.patchValue({
          productName: dataProduct.name,
          productDescription: dataProduct.description,
          productPrice: dataProduct.price,
          expirationDate: new Date(dataProduct.expirationDate).toISOString().split('T')[0],
          stockQuantity: dataProduct.stockQuantity,
          category: dataProduct.category,
          available: dataProduct.available,
          productImage: null
        });
      });

    this.editProductForm.valueChanges.subscribe(values => {
      this.updatePropertyView(values);
    });
  }

  onSubmit() {
    if (this.editProductForm.valid) {
      const productValues = { ...this.editProductForm.value };
      const editProduct = {
        id: Number(this.productId),
        name: productValues.productName!,
        description: productValues.productDescription!,
        expirationDate: new Date(productValues.expirationDate!),
        price: productValues.productPrice!,
        stockQuantity: productValues.stockQuantity!,
        category: productValues.category!,
        available: productValues.available!,
        productImage: "test.jpg"
      };
      this.sweetAlert.showProductAlert(`update`).then((updated) => {
        if(updated) {
          this.product.updateProduct(editProduct, this.productId!).subscribe(() => {
            this.toast.showSuccess(`Product updated successfully`);
            this.router.navigate(['/list-products']);
          });
        };
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

  onBack() {
    this.router.navigate(['/']);
  }

}
