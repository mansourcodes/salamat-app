import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(
    private translate: TranslateService,
    private storage: Storage
  ) {}

  init() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    this.storage
      .get(environment.storageKeys.localSettings)
      .then((localSettings) => {
        console.log(localSettings);

        if (localSettings) {
          this.setSettings(localSettings);
        } else {
          this.setSettings(this.getDefaultSettings());
          console.info('Default Settings Saved!');
        }
      });
  }

  getSettings() {
    return this.storage.get(environment.storageKeys.localSettings);
  }

  setSettings(newSettings) {
    console.info('New Settings Set!');
    console.info(newSettings);

    this.translate.use(newSettings.language);
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
    let browserLanguage = this.translate.getBrowserLang();
    let defaultSettings = {
      language: browserLanguage,
    };
    return defaultSettings;
  }
}
