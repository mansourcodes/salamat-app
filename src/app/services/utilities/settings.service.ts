import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { SemVer } from '@types/semver';

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
    private semver: SemVer
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

        console.log(environment.appVersion);
        console.log(storedSettings.appVersion);
        // semver

        console.log(this.semver.valid('1.2.3'));

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
