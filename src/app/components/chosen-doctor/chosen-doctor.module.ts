import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChosenDoctorComponent } from './chosen-doctor.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ChosenDoctorComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ChosenDoctorComponent],

})
export class ChosenDoctorModule { }
