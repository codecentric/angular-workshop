import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FarmDetailsComponent} from './farm-details/farm-details.component';
import {FarmFormularComponent} from './farm-formular/farm-formular.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FarmHomeComponent} from "./farm-home/farm-home.component";
import {FarmSelectedGuard} from "./farm-selected.guard";


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
        data: {
          breadcrumb: 'Dashboard',
        },
        children: [
          {
            path: '', component: DashboardComponent,
            data: {
              breadcrumb: '',
            },
          },
          {
            path: 'details', component: FarmDetailsComponent,
            data: {
              breadcrumb: 'Detail-Ansicht',
            },
            canActivate: [FarmSelectedGuard]
          },
          {
            path: 'create', component: FarmFormularComponent,
            data: {
              breadcrumb: 'Farm hinzufügen',
            },
          },
        ]
      },
      {
        path: 'add',
        data: {
          breadcrumb: 'Farm hinzufügen',
        },
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
