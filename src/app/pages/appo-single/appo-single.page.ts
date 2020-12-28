import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-appo-single',
  templateUrl: './appo-single.page.html',
  styleUrls: ['./appo-single.page.scss'],
})
export class AppoSinglePage implements OnInit {
  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  async callClinic() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'You are about to call the clinic!',
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
          text: 'Sure',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }
}
