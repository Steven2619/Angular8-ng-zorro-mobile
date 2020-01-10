import { HelperService } from '@services/helper.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var JsBarcode: any;

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.less']
})
export class AppointmentComponent implements OnInit, AfterViewInit {

  public barcodeList: string[] = ['142ryui45', 'sdf253452', '3125_s^&$#45', '14221345', '1543253452', '312542345', '3154346543'];
  public barcodeTitle = '图书馆';
  private barCodeNum = '8610212021208984456';
  private barNewCode: string;
  constructor(private helper: HelperService) { }

  ngOnInit() {
    const reg = /(\d{8})\d{4}(\d{7})/;
    this.barNewCode = this.barCodeNum;
    this.barCodeNum = this.barCodeNum.replace(reg, '$1****$2').replace(/(.{4})/g, '$1 ');

  }

  ngAfterViewInit(): void {
    this.generateBarcode('barId', this.barNewCode);
    for (let i = 0; i < this.barcodeList.length; i++) {
      this.generateBarcode('bc_' + i, this.barcodeList[i]);
    }
  }

  /* 生成条形码 */
  generateBarcode(id: string, code: string) {
    const barcode = document.getElementById(id);
    const options = {
      format: 'CODE128',
      displayValue: true,
      fontSize: 18,
      background: '#ffffff',
      height: 100
    };
    JsBarcode(barcode, code, options);
  }

  EventEmit() {
    this.helper.events.emit('callA', { name: 'song fei', age: 28 });
  }
}
