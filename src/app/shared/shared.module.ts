import { PickerCardComponent } from './components/picker-card/picker-card.component';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const COMPONENTS = [
  PickerCardComponent
];
const PIPES = [
  CapitalizeFirstPipe,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdMobileModule,
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES
  ]
})
export class SharedModule { }
