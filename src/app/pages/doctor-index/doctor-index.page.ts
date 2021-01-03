import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-index',
  templateUrl: './doctor-index.page.html',
  styleUrls: ['./doctor-index.page.scss'],
})
export class DoctorIndexPage implements OnInit {
  value;
  constructor() { }

  ngOnInit() { }

  counter(i: number) {
    return new Array(i);
  }
}
