import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppoSinglePageRoutingModule } from './appo-single-routing.module';

import { AppoSinglePage } from './appo-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppoSinglePageRoutingModule
  ],
  declarations: [AppoSinglePage]
})
export class AppoSinglePageModule {}
