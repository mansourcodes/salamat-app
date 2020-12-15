import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorIndexPage } from './doctor-index.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorIndexPageRoutingModule {}
