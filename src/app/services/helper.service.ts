import { Injectable } from '@angular/core';
import { EventEmitter } from 'eventemitter3';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  public events: any;
  
  constructor() {
    // 定义发射事件
    this.events = new EventEmitter();
  }

  /*
   * 是否微信浏览器
   */
  isWXBrowser = (() => {
    let isWx = null;
    return () => {
      if (isWx === null) {
        isWx = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
      }
      return isWx;
    };
  })();
  
  /*
   * 是否支付宝浏览器
   */
  isAlipayBrowser = (() => {
    let isAlipay = null;
    return () => {
      if (isAlipay === null) {
        isAlipay = navigator.userAgent.toLowerCase().indexOf('alipay') !== -1;
      }
      return isAlipay;
    };
  })();

  /*
   * 是否ios浏览器
   */
  isIosBrowser = (() => {
    let isIos = null;
    return () => {
      if (isIos === null) {
        isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      }
      return isIos;
    };
  })();
}
