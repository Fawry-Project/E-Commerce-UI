import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductServiceComponent } from './components/product/product-service/product-service.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { CreateCategoryComponent } from './components/product/create-category/create-category.component';
import { CouponServiceComponent } from './components/coupone/coupon-service/coupon-service.component';
import { ListCouponsComponent } from './components/coupone/list-coupons/list-coupons.component';
import { CreateCouponComponent } from './components/coupone/create-coupon/create-coupon.component';
import { UpdateCouponComponent } from './components/coupone/update-coupon/update-coupon.component';
import { StoreServiceComponent } from './components/store/store-service/store-service.component';
import { CreateStoreComponent } from './components/store/create-store/create-store.component';
import { ListStoresComponent } from './components/store/list-stores/list-stores.component';
import { CreateStockComponent } from './components/store/create-stock/create-stock.component';
import { ListStocksComponent } from './components/store/list-stocks/list-stocks.component';
import { UpdateStoreComponent } from './components/store/update-store/update-store.component';
import { UpdateStockComponent } from './components/store/update-stock/update-stock.component';
import { DeleteStoreComponent } from './components/store/delete-store/delete-store.component';
import { DeleteStockComponent } from './components/store/delete-stock/delete-stock.component';
import { ListProductsConsumptionsComponent } from './components/store/list-products-consumptions/list-products-consumptions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product-service',
    component: ProductServiceComponent,
    children: [
      { path: 'list-products', component: ProductListComponent },
      { path: 'create-product', component: CreateProductComponent },
      { path: 'update-product', component: UpdateProductComponent },
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
      { path: 'update-store', component: UpdateStoreComponent },
      { path: 'update-stock', component: UpdateStockComponent },
      { path: 'delete-store', component: DeleteStoreComponent },
      { path: 'delete-stock', component: DeleteStockComponent },
      { path: 'list-products-Consumptions', component: ListProductsConsumptionsComponent},
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]
  }
];