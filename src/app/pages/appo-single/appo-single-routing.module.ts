import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppoSinglePage } from './appo-single.page';

const routes: Routes = [
  {
    path: '',
    component: AppoSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppoSinglePageRoutingModule {}
