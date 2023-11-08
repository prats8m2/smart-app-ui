import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DefaultComponent } from "./dashboards/default/default.component";

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard' },
  {
    path: "",
    component: DefaultComponent,
  },
  { path: "dashboard", component: DefaultComponent },
  {
    path: "dashboards",
    loadChildren: () =>
      import("./dashboards/dashboards.module").then((m) => m.DashboardsModule),
  },
  {
    path: "accounts",
    loadChildren: () =>
      import("./accounts/accounts.module").then((m) => m.AccountsModule),
  },
  {
    path: "site",
    loadChildren: () => import("./site/site.module").then((m) => m.SiteModule),
  },
  {
    path: "staff",
    loadChildren: () =>
      import("./staff/staff.module").then((m) => m.StaffModule),
  },
  {
    path: "device",
    loadChildren: () =>
      import("./device/device.module").then((m) => m.DeviceModule),
  },
  {
    path: "room",
    loadChildren: () => import("./room/room.module").then((m) => m.RoomModule),
  },
  {
    path: "table",
    loadChildren: () =>
      import("./table/table.module").then((m) => m.TableModule),
  },
  {
    path: "category",
    loadChildren: () =>
      import("./category/category.module").then((m) => m.CategoryModule),
  },
  {
    path: "product",
    loadChildren: () =>
      import("./product/product.module").then((m) => m.ProductModule),
  },
  {
    path: "menu",
    loadChildren: () => import("./menu/menu.module").then((m) => m.MenuModule),
  },
  {
    path: "order",
    loadChildren: () =>
      import("./order/order.module").then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
