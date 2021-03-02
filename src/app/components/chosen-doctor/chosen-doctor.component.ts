import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'chosen-doctor',
  templateUrl: './chosen-doctor.component.html',
  styleUrls: ['./chosen-doctor.component.scss'],
})
export class ChosenDoctorComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

  }

}
