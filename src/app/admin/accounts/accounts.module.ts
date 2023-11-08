import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListAccountsComponent } from "./list-accounts/list-accounts.component";
import { AccountsRoutingModule } from "./accounts-routing.module";
import { EditAccountComponent } from "./edit-account/edit-account.component";
import { AddAccountComponent } from "./add-account/add-account.component";
import { ViewAccountComponent } from "./view-account/view-account.component";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { StatusPipe } from "../../core/pipes/status.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ListAccountsComponent,
    EditAccountComponent,
    AddAccountComponent,
    ViewAccountComponent,
    StatusPipe,
  ],
  imports: [
    FormsModule,
    CommonModule,
    AccountsRoutingModule,
    PaginationModule.forRoot(),
  ],
})
export class AccountsModule {}
