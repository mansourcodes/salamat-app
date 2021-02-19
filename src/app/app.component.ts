import { Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Plugins } from '@capacitor/core';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setErrorMessage } from './store/shared/shared.actions';
import { getErrorMessage, getLoading } from './store/shared/shared.selectors';
import { SettingsService } from './services/settings/settings.service';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  showLoading$: Observable<boolean>;
  errorMessage$: Observable<string>;


  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
    private settingsService: SettingsService,
    private store: Store<AppState>,
    private alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {

    console.log('init');

    this.platform.ready().then(() => {
      console.log('ready');
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
      // SplashScreen.hide();

    });


  }

  ngOnInit() {

    this.showLoading$ = this.store.select(getLoading);
    this.errorMessage$ = this.store.select(getErrorMessage);
    // this.store.dispatch(autoLoginAuth());

    this.errorMessage$.subscribe((errorMessage) => {
      if (errorMessage) {
        this.presentErrorMessageAlert(errorMessage);
        this.store.dispatch(setErrorMessage({ message: '' }));
      }
    });

    // this.settingsService.init();

  }


  async presentErrorMessageAlert(errorMessage: string) {
    const alert = await this.alertController.create({
      header: 'Oops!',
      message: errorMessage,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: (blah) => { },
        },
      ],
    });

    await alert.present();
  }
}
