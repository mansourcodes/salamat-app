import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppoIndexPage } from './appo-index.page';

const routes: Routes = [
  {
    path: '',
    component: AppoIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppoIndexPageRoutingModule {}
