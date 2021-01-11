import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import * as semver from 'semver';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private _settings = new BehaviorSubject<any>(null);

  public languageList = [
    { text: 'English', value: 'en', flag: 'assets/flags/en' },
    { text: 'عربي', value: 'ar', flag: 'assets/flags/ar' },
  ];

  get settings() {
    return this._settings.asObservable().pipe(
      map((settings) => {
        if (settings) {
          return settings;
        } else {
          return null;
        }
      })
    );
  }

  constructor(
    private translate: TranslateService,
    private storage: Storage
  ) {}

  init() {
    const browserLanguage = this.translate.getBrowserLang();
    this.translate.setDefaultLang(browserLanguage);

    this.storage
      .get(environment.storageKeys.localSettings)
      .then((storedSettings) => {
        if (!storedSettings) {
          storedSettings = this.getDefaultSettings();
        }
        this.setSettings(storedSettings);
        console.info('init settings: Done');
      });
  }

  checkVersion() {
    //TODO: call http
    let api;
    console.log('semver');

    let compareResult = 'none';
    compareResult = semver.diff(
      environment.appVersion,
      api.appVersion
    );
  }

  setSettings(newSettings) {
    if (newSettings.language) {
      this.translate.use(newSettings.language);
    }

    this._settings.next(newSettings);
    this.storage.set(
      environment.storageKeys.localSettings,
      newSettings
    );
  }

  getDefaultSettings() {
    console.info('get Default Settings !');
    const browserLanguage = this.translate.getBrowserLang();

    let defaultSettings = {
      ...environment.defaultSettings,
      language: browserLanguage,
      appVersion: environment.appVersion,
    };

    return defaultSettings;
  }
}
