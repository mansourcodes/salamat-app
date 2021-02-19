import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BranchIndexPageRoutingModule } from './branch-index-routing.module';

import { BranchIndexPage } from './branch-index.page';
import { MaterialMiniFormModule } from 'src/app/services/utilities/material/material-mini-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BranchIndexPageRoutingModule,
    MaterialMiniFormModule,
    ReactiveFormsModule,
  ],
  declarations: [BranchIndexPage]
})
export class BranchIndexPageModule { }
