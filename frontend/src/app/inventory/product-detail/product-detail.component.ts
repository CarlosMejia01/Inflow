import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { IOriginalProduct } from '../../interfaces/IOriginalProduct';
import { SweetAlertService } from '../../../services/sweet-alert.service';
import { ToastAlertService } from '../../../services/toast-alert.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number | any;
  singleProduct: IOriginalProduct | null = null;


  constructor(private route: ActivatedRoute, private products: ProductService, private router: Router,
    private sweetAlert: SweetAlertService, private toast: ToastAlertService
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    this.products.getSingleProduct(this.productId)
      .subscribe(data => {
        this.singleProduct = data;
      })
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onDeleteProduct() {
    this.sweetAlert.showProductAlert(`delete`).then((deleted) => {
      if(deleted) {
        this.products.deleteProduct(this.productId!).subscribe(() => {
          this.toast.showSuccess(`Product deleted successfully`);
          this.router.navigate(['/list-products']);
        });
      }
    })
  }

}
