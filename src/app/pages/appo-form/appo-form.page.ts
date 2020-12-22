import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appo-form',
  templateUrl: './appo-form.page.html',
  styleUrls: ['./appo-form.page.scss'],
})
export class AppoFormPage implements OnInit {
  DatePickerYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  DatePickerDayNames = [
    's\u00f8n',
    'man',
    'tir',
    'ons',
    'tor',
    'fre',
    'l\u00f8r',
  ];
  DatePickerOptions: any;

  constructor() {
    this.DatePickerOptions = {
      buttons: [
        {
          text: 'Cancle',
          handler: () => true,
        },
        {
          text: 'Done',
          handler: () => true,
        },
      ],
    };
  }

  ngOnInit() {}
}
