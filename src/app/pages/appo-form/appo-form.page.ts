import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadAppformBranch } from 'src/app/store/appoform/appoform.actions';
import { getBranchId } from 'src/app/store/appoform/appoform.selectors';

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

  constructor(private store: Store<AppState>, private router: Router) {

  }

  ngOnInit() {


    this.store.select(getBranchId).subscribe(branch_id => {
      if (!branch_id) {
        this.router.navigateByUrl('/home');
      }
    });


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
}
