import { Component, OnInit } from '@angular/core';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  value;

  constructor(
    private platform: Platform,
  ) {
    console.log('login constructor init');

  }

  ngOnInit() {
    console.log('login on init');

  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');

    SplashScreen.hide();
    console.log('SplashScreen.hide');
    console.log('ionViewDidEnter');

  }

}
