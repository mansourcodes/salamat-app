import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppoIndexPageRoutingModule } from './appo-index-routing.module';

import { AppoIndexPage } from './appo-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppoIndexPageRoutingModule
  ],
  declarations: [AppoIndexPage]
})
export class AppoIndexPageModule {}
