import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { ListCategoryComponent } from "./list-category/list-category.component";
import { ViewCategoryComponent } from "./view-category/view-category.component";

@NgModule({
  declarations: [
    AddCategoryComponent,
    ListCategoryComponent,
    ViewCategoryComponent,
  ],
  imports: [CommonModule],
})
export class CategoryModule {}
