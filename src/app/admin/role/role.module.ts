import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RoleRoutingModule } from "./role-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
} from "@ng-bootstrap/ng-bootstrap";
import { NgApexchartsModule } from "ng-apexcharts";
import { SimplebarAngularModule } from "simplebar-angular";
import { UIModule } from "src/app/shared/ui/ui.module";
import { WidgetModule } from "src/app/shared/widget/widget.module";
import { AddRoleComponent } from "./add-role/add-role.component";
import { ViewRoleComponent } from "./view-role/view-role.component";
import { ListRoleComponent } from "./list-role/list-role.component";

@NgModule({
  declarations: [AddRoleComponent, ViewRoleComponent, ListRoleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoleRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule,
  ],
})
export class RoleModule {}
