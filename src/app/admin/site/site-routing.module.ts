import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSiteComponent } from './list-site/list-site.component';
import { ViewSiteComponent } from './view-site/view-site.component';
import { AddSiteComponent } from './add-site/add-site.component';

const routes: Routes = [
  {
    path: 'add-site',
    component: AddSiteComponent,
  },
  {
    path: 'edit-site',
    component: AddSiteComponent,
  },
  {
    path: 'view-site/:id',
    component: ViewSiteComponent,
  },
  {
    path: 'list-site',
    component: ListSiteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
