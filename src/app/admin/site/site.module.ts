import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddSiteComponent } from "./add-site/add-site.component";
import { ViewSiteComponent } from "./view-site/view-site.component";
import { ListSiteComponent } from "./list-site/list-site.component";
import { SiteRoutingModule } from "./site-routing.module";
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

@NgModule({
  declarations: [AddSiteComponent, ViewSiteComponent, ListSiteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SiteRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule,
  ],
})
export class SiteModule {}
