import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListAccountsComponent } from "./list-accounts/list-accounts.component";
import { AddAccountComponent } from "./add-account/add-account.component";
import { EditAccountComponent } from "./edit-account/edit-account.component";
import { ViewAccountComponent } from "./view-account/view-account.component";

const routes: Routes = [
  {
    path: "list-accounts",
    component: ListAccountsComponent,
  },
  {
    path: "add-account",
    component: AddAccountComponent,
  },
  {
    path: "edit-account/:id",
    component: EditAccountComponent,
  },
  {
    path: "view-account/:id",
    component: ViewAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
