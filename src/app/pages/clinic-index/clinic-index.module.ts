import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicIndexPageRoutingModule } from './clinic-index-routing.module';

import { ClinicIndexPage } from './clinic-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicIndexPageRoutingModule
  ],
  declarations: [ClinicIndexPage]
})
export class ClinicIndexPageModule {}
