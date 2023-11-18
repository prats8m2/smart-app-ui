import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { StaffRoutingModule } from './staff-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { StatusPipe } from 'src/app/core/pipes/status.pipe';

@NgModule({
	declarations: [
		AddStaffComponent,
		EditStaffComponent,
		ViewStaffComponent,
		ListStaffComponent,
		StatusPipe,
	],
	imports: [
		CommonModule,
		StaffRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		PaginationModule.forRoot(),
	],
})
export class StaffModule {}
