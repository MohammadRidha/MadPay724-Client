import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';
import { DashboardComponent } from './components/components/dashboard/dashboard.component';
import { ProfileComponent } from './../panel/components/components/userinfo/profile/profile.component';
import { DocumentComponent } from './components/components/userinfo/profile/document/document.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'userinfo/profile', component: ProfileComponent},
      {path: 'userinfo/documents', component: DocumentComponent}

    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
