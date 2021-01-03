import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SettingsService } from './services/utilities/settings.service';

import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
    private settingsService: SettingsService,
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
    console.log('after init');

    this.settingsService.init();
  }

  ngOnInit() { }
}
