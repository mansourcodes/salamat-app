import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicIndexPageRoutingModule } from './clinic-index-routing.module';

import { ClinicIndexPage } from './clinic-index.page';
import { MaterialMiniFormModule } from 'src/app/services/utilities/material/material-mini-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicIndexPageRoutingModule,
    MaterialMiniFormModule,
    ReactiveFormsModule,
  ],
  declarations: [ClinicIndexPage],
})
export class ClinicIndexPageModule {}
