import { Component, OnInit } from '@angular/core';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
import { SettingsService } from 'src/app/services/utilities/settings.service';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  settigns: any;

  constructor(
    private platform: Platform,
    private settingsService: SettingsService
  ) {
    console.log('login constructor init');
  }

  ngOnInit() {
    console.log('login on init');
    this.settingsService.settings.subscribe((settigns) => {
      this.settigns = { ...settigns };
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');

    SplashScreen.hide();
    console.log('SplashScreen.hide');
    console.log('ionViewDidEnter');
  }

  updateSettings(event) {
    this.settingsService.setSettings(this.settigns);
  }
}
