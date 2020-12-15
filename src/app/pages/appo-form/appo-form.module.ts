import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppoFormPageRoutingModule } from './appo-form-routing.module';

import { AppoFormPage } from './appo-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppoFormPageRoutingModule
  ],
  declarations: [AppoFormPage]
})
export class AppoFormPageModule {}
