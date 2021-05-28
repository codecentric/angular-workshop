import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'farm',
    loadChildren: () =>
      import('./farm/farm.module').then(
        (module) => module.FarmModule
      ),
  },
  { path: '', redirectTo: 'farm', pathMatch: 'full' },
  { path: '**', redirectTo: 'farm' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
