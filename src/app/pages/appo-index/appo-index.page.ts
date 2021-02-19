import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-appo-index',
  templateUrl: './appo-index.page.html',
  styleUrls: ['./appo-index.page.scss'],
})
export class AppoIndexPage implements OnInit {
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}
