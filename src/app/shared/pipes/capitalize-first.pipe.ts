import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
    // 首字母大写化替换以空格分隔的每个单词的首字母
    return value && value.length ? value.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()) : value;

  }
}
