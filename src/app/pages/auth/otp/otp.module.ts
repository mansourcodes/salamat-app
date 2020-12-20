import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpPageRoutingModule } from './otp-routing.module';

import { OtpPage } from './otp.page';
import { MaterialMiniFormModule } from 'src/app/services/utilities/material/material-mini-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpPageRoutingModule,
    MaterialMiniFormModule,
    ReactiveFormsModule,
  ],
  declarations: [OtpPage],
})
export class OtpPageModule {}
