import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SettingsService } from 'src/app/services/utilities/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  isLoading = true;
  settigns: any;

  constructor(
    public alertController: AlertController,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.settingsService.getSettings().then((settings) => {
      this.settigns = settings;
      console.log(settings);
      this.isLoading = false;
    });
  }

  updateSettings() {
    console.log('ionChange');

    this.settingsService.setSettings(this.settigns);
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
