import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angular2-qrcode';

import { RegisteredRoutingModule } from './registered-routing.module';
import { RegisteredComponent } from './pages/registered/registered.component';

@NgModule({
  declarations: [RegisteredComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegisteredRoutingModule,
    QRCodeModule,
  ]
})
export class RegisteredModule { }
