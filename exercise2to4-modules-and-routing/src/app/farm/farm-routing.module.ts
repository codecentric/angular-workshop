import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import { FarmFormularComponent } from './farm-formular/farm-formular.component';


const routes: Routes = [
  { path: 'create', component:  FarmFormularComponent},
  { path: 'details', component:  FarmDetailsComponent},
  { path: '**', redirectTo: 'create' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmRoutingModule {}
