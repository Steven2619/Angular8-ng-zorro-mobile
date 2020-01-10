import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { SharedModule } from '@shared/shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './pages/appointment/appointment.component';

@NgModule({
  declarations: [AppointmentComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppointmentRoutingModule,
    NgZorroAntdMobileModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppointmentModule { }
