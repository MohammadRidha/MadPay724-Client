import { NgModule } from '@angular/core';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';
import { DashboardComponent } from './components/components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './../panel/components/components/userinfo/profile/profile.component';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    PanelRoutingModule,
  ],
  declarations: [
    PanelComponent,
    DashboardComponent,
    ProfileComponent,
    NavbarComponent,
    SidebarComponent

  ],
  providers: [
    UserService
  ],
})
export class PanelModule { }
