import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { clearAppoform } from 'src/app/store/appoform/appoform.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.store.dispatch(clearAppoform());
  }



}
