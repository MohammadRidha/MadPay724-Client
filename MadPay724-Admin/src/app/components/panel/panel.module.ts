import { NgModule } from '@angular/core';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';
import { DashboardComponent } from './components/components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './../panel/components/components/userinfo/profile/profile.component';
import { UserService } from './services/user.service';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    PanelRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: [environment.apiUrl + 'site/admin'],
        blacklistedRoutes: [environment.apiUrl + 'site/admin/auth']
      }
    })
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
