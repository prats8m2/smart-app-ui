import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SimplebarAngularModule } from 'simplebar-angular';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { WidgetModule } from 'src/app/shared/widget/widget.module';

import { AddMenuComponent } from './add-menu/add-menu.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [AddMenuComponent, ViewMenuComponent, ListMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenuRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule,
  ],
})
export class MenuModule {}
