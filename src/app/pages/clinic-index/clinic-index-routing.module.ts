import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicIndexPage } from './clinic-index.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicIndexPageRoutingModule {}
