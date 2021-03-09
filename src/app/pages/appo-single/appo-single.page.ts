import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppoInterface } from 'src/app/services/appos/appo';
import { AppState } from 'src/app/store/app.state';
import { getAppoById } from 'src/app/store/appos/appos.selectors';

@Component({
  selector: 'app-appo-single',
  templateUrl: './appo-single.page.html',
  styleUrls: ['./appo-single.page.scss'],
})
export class AppoSinglePage implements OnInit {
  appo$: Observable<AppoInterface>;


  constructor(
    private store: Store<AppState>,
    public alertController: AlertController) { }

  ngOnInit() {


    this.appo$ = this.store.select(getAppoById);

    // console.log(this.appo$);


  }

  async callClinic(phone) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'You are about to call ' + phone,
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
