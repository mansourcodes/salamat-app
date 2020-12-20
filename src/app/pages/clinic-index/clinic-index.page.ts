import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic-index',
  templateUrl: './clinic-index.page.html',
  styleUrls: ['./clinic-index.page.scss'],
})
export class ClinicIndexPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  counter(i: number) {
    return new Array(i);
  }
}
