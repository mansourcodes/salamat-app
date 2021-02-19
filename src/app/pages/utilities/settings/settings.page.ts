import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounceTime, filter, take } from 'rxjs/operators';
import { SettingInterface } from 'src/app/services/settings/setting';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { AppState } from 'src/app/store/app.state';
import { updateSettings } from 'src/app/store/settings/settings.actions';
import { getSettings } from 'src/app/store/settings/settings.selectors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  settigns: SettingInterface;
  form: FormGroup;


  constructor(
    public alertController: AlertController,
    private settingsService: SettingsService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.initForm();
    this.store.select(getSettings).subscribe((settigns) => {
      this.settigns = { ...settigns };
      this.initForm();
    });
  }

  initForm() {
    this.form = new FormGroup({
      languageKey: new FormControl(this.settigns?.language.key, {}),
    });

    this.form.valueChanges
      .pipe(
        filter(() => this.form.valid),
        take(1),
      )
      .subscribe((next) => {

        let newlanguage = this.settigns.languageList.find(language => language.key == next.languageKey);
        this.settigns.language = newlanguage;

        this.store.dispatch(updateSettings(({ data: this.settigns })));
      });
  }

  async logoutConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'You are about to logout!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Logout',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }
}
