import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryCardComponent } from "./inventory/inventory-card/inventory-card.component";
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateProductComponent } from './inventory/create-product/create-product.component';

import { ProductDetailComponent } from './inventory/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorService } from '../services/http-interceptor.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EditProductComponent } from './inventory/edit-product/edit-product.component';
@NgModule({
  declarations: [
    AppComponent,
    InventoryCardComponent,
    InventoryListComponent,
    NavBarComponent,
    CreateProductComponent,
    ProductDetailComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
