import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BranchIndexPage } from './branch-index.page';

const routes: Routes = [
  {
    path: '',
    component: BranchIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchIndexPageRoutingModule {}
