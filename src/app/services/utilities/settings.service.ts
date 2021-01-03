import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import * as moment from 'moment';
import * as semver from 'semver';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private _settings = new BehaviorSubject<any>(null);

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
    private storage: Storage,
  ) { }

  init() {
    const browserLanguage = this.translate.getBrowserLang();
    this.translate.setDefaultLang(browserLanguage);

    this.storage
      .get(environment.storageKeys.localSettings)
      .then((storedSettings) => {
        if (!storedSettings) {
          storedSettings = this.getDefaultSettings();
        }


        // semver
        console.log(environment.appVersion);
        console.log(storedSettings.appVersion);
        let compareResult = 'none';

        console.log(moment.locale()); // en


        compareResult = semver.diff(environment.appVersion, storedSettings.appVersion);
        console.log(compareResult);

        compareResult = semver.diff('0.0.2', '0.0.3');
        console.log(compareResult);

        compareResult = semver.diff('0.0.2', '0.0.2');
        console.log(compareResult);

        compareResult = semver.diff('0.0.2', '0.1.3');
        console.log(compareResult);

        compareResult = semver.diff('0.0.2', '2.1.3');
        console.log(compareResult);

        this.setSettings(storedSettings);
        console.info('init settings');
      });
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

  getLanguageList() {
    return [
      { text: 'English', value: 'en', flag: 'assets/flags/en' },
      { text: 'عربي', value: 'ar', flag: 'assets/flags/en' },
      { text: 'hindi', value: 'hin', flag: 'assets/flags/en' },
    ];
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
