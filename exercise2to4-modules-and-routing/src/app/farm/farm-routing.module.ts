import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FarmDetailsComponent} from './farm-details/farm-details.component';
import {FarmFormularComponent} from './farm-formular/farm-formular.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FarmHomeComponent} from "./farm-home/farm-home.component";


const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Home',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        data: {
          breadcrumb: '',
        },
        component: FarmHomeComponent
      },
      {
        path: 'dashboard',
        children: [
          {
            path: '', component: DashboardComponent,
          },
          {
            path: 'details', component: FarmDetailsComponent,
          },
          {
            path: 'create', component: FarmFormularComponent,
          },
        ]
      },
      {
        path: 'add',
        component: FarmFormularComponent
      },
    ]
  },
  {path: '**', redirectTo: 'create'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmRoutingModule {
}
