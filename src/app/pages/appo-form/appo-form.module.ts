import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppoFormPageRoutingModule } from './appo-form-routing.module';

import { AppoFormPage } from './appo-form.page';
import { ChosenDoctorModule } from 'src/app/components/chosen-doctor/chosen-doctor.module';
import { MaterialMiniFormModule } from 'src/app/services/utilities/material/material-mini-form.module';
import { MaterialButtonsModule } from 'src/app/services/utilities/material/material-buttons.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppoFormPageRoutingModule,
    ChosenDoctorModule,
    MaterialMiniFormModule,
    MaterialButtonsModule
  ],
  declarations: [AppoFormPage]
})
export class AppoFormPageModule { }
