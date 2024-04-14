import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductServiceComponent } from './components/product-service/product-service.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { ProductHistoryComponent } from './components/product-history/product-history.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CouponServiceComponent } from './components/coupon-service/coupon-service.component';
import { ListCouponsComponent } from './components/list-coupons/list-coupons.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';
import { DeleteCouponComponent } from './components/delete-coupon/delete-coupon.component';
import { StoreServiceComponent } from './components/store/store-service/store-service.component';
import { CreateStoreComponent } from './components/store/create-store/create-store.component';
import { ListStoresComponent } from './components/store/list-stores/list-stores.component';
import { CreateStockComponent } from './components/store/create-stock/create-stock.component';
import { ListStocksComponent } from './components/store/list-stocks/list-stocks.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product-service',
    component: ProductServiceComponent,
    children: [
      { path: 'list-products', component: ProductListComponent },
      { path: 'create-product', component: CreateProductComponent },
      { path: 'update-product', component: UpdateProductComponent },
      { path: 'delete-product', component: DeleteProductComponent },
      { path: 'list-product-history', component: ProductHistoryComponent },
      { path: 'create-category', component: CreateCategoryComponent },
      { path: '', redirectTo: 'list-products', pathMatch: 'full' }, // Default route
    ],
  },
  {
    path: 'coupon-service',
    component: CouponServiceComponent,
    children: [
      { path: 'list-coupons', component: ListCouponsComponent },
      { path: 'create-coupon', component: CreateCouponComponent },
      { path: 'update-coupon', component: UpdateCouponComponent },
      { path: 'delete-coupon', component: DeleteCouponComponent },
      { path: '', redirectTo: 'list-coupons', pathMatch: 'full' }, // Default route
    ],
  },
  {
    path: 'store-service',
    component: StoreServiceComponent,
    children: [
      { path: 'create-store', component: CreateStoreComponent },
      { path: 'create-stock', component: CreateStockComponent },
      { path: 'list-stores', component: ListStoresComponent },
      { path: 'list-stocks', component: ListStocksComponent },
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]
  }
];