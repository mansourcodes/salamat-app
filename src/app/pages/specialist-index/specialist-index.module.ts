import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialistIndexPageRoutingModule } from './specialist-index-routing.module';

import { SpecialistIndexPage } from './specialist-index.page';
import { MaterialMiniFormModule } from 'src/app/services/utilities/material/material-mini-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialistIndexPageRoutingModule,
    MaterialMiniFormModule,
    ReactiveFormsModule,
  ],
  declarations: [SpecialistIndexPage],
})
export class SpecialistIndexPageModule {}
