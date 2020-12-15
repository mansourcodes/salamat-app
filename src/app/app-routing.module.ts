import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'appo-index',
    loadChildren: () =>
      import('./pages/appo-index/appo-index.module').then(
        (m) => m.AppoIndexPageModule
      ),
  },
  {
    path: 'appo-form',
    loadChildren: () =>
      import('./pages/appo-form/appo-form.module').then(
        (m) => m.AppoFormPageModule
      ),
  },
  {
    path: 'appo-single',
    loadChildren: () =>
      import('./pages/appo-single/appo-single.module').then(
        (m) => m.AppoSinglePageModule
      ),
  },
  {
    path: 'clinic-index',
    loadChildren: () =>
      import('./pages/clinic-index/clinic-index.module').then(
        (m) => m.ClinicIndexPageModule
      ),
  },
  {
    path: 'doctor-index',
    loadChildren: () =>
      import('./pages/doctor-index/doctor-index.module').then(
        (m) => m.DoctorIndexPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
