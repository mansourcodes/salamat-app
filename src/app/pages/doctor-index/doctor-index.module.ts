import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorIndexPageRoutingModule } from './doctor-index-routing.module';

import { DoctorIndexPage } from './doctor-index.page';
import { MaterialMiniFormModule } from '../../services/utilities/material/material-mini-form.module';
import { ChosenDoctorModule } from 'src/app/components/chosen-doctor/chosen-doctor.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorIndexPageRoutingModule,
    MaterialMiniFormModule,
    ReactiveFormsModule,
    ChosenDoctorModule,
  ],
  declarations: [DoctorIndexPage],
})
export class DoctorIndexPageModule { }
