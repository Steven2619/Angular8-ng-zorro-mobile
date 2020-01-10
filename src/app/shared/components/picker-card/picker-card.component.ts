import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker-card',
  templateUrl: './picker-card.component.html',
  styleUrls: ['./picker-card.component.less']
})
export class PickerCardComponent implements OnInit {

  text = 'hi, my is song fei';

  constructor() { }

  ngOnInit() {
  }

}
