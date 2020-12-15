import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorIndexPageRoutingModule } from './doctor-index-routing.module';

import { DoctorIndexPage } from './doctor-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorIndexPageRoutingModule
  ],
  declarations: [DoctorIndexPage]
})
export class DoctorIndexPageModule {}
