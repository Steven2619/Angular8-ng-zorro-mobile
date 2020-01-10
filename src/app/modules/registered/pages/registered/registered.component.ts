import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.less']
})
export class RegisteredComponent implements OnInit {

  elementType = 'url';
  value = 'Techiediaries12334--&*#....*&^%$##%^(())';
  size = 180;
  constructor() { }

  ngOnInit() {
  }

}
