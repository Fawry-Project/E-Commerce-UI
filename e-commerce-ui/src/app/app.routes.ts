import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductServiceComponent } from './components/product-service/product-service.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { ProductHistoryComponent } from './components/product-history/product-history.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';

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
];
