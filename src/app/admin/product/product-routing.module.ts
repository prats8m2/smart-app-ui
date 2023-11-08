import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ListProductComponent } from './list-product/list-product.component';

const routes: Routes = [
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'edit-product',
    component: AddProductComponent,
  },
  {
    path: 'view-product/:id',
    component: ViewProductComponent,
  },
  {
    path: 'list-product',
    component: ListProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
