import { HelperService } from '@services/helper.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-home',
  templateUrl: './hospital-home.component.html',
  styleUrls: ['./hospital-home.component.less']
})
export class HospitalHomeComponent implements OnInit {

  constructor(private router: Router,
              private helper: HelperService) { }

  ngOnInit() {
    this.helper.events.on('callA', (data: any) => {
        console.log(`callA已收到信息：${JSON.stringify(data)}`);
        
    });
  }

  toAppointment() {
    this.router.navigate(['Appointment']);
  }

  toRegistered() {
    this.router.navigate(['Registered']);
  }
}
