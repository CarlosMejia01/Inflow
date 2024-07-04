import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { CreateProductComponent } from './inventory/create-product/create-product.component';
import { ProductDetailComponent } from './inventory/product-detail/product-detail.component';
import { EditProductComponent } from './inventory/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: 'list-products', component: InventoryListComponent,
  },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'list-products/product-detail/:id', component: ProductDetailComponent },
  { path: 'list-products/edit-product/:id', component: EditProductComponent },
  { path: '', redirectTo: '/list-products', pathMatch: 'full' },
  // { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
