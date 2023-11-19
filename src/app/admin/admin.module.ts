import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { NgApexchartsModule } from 'ng-apexcharts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SimplebarAngularModule } from 'simplebar-angular';
import { LightboxModule } from 'ngx-lightbox';

import { WidgetModule } from '../shared/widget/widget.module';
import { UIModule } from '../shared/ui/ui.module';

// Emoji Picker
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { DashboardsModule } from './dashboards/dashboards.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		FormsModule,
		BsDropdownModule.forRoot(),
		ModalModule.forRoot(),
		AdminRoutingModule,
		NgApexchartsModule,
		ReactiveFormsModule,
		DashboardsModule,
		HttpClientModule,
		UIModule,
		WidgetModule,
		FullCalendarModule,
		TabsModule.forRoot(),
		TooltipModule.forRoot(),
		CollapseModule.forRoot(),
		SimplebarAngularModule,
		LightboxModule,
		PickerModule,
	],
})
export class AdminModule {}
