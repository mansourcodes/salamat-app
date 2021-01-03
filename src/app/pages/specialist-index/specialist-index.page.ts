import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialist-index',
  templateUrl: './specialist-index.page.html',
  styleUrls: ['./specialist-index.page.scss'],
})
export class SpecialistIndexPage implements OnInit {

  value;

  constructor() { }

  ngOnInit() { }

  counter(i: number) {
    return new Array(i);
  }
}
