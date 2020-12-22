import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialistIndexPage } from './specialist-index.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialistIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialistIndexPageRoutingModule {}
