import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ListOrderComponent } from './list-order/list-order.component';



@NgModule({
  declarations: [
    AddOrderComponent,
    ViewOrderComponent,
    ListOrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
