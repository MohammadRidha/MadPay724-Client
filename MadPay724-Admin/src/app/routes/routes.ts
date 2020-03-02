import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../auth/components/register/register.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { AuthComponent } from '../auth/auth.component';



export const adminRoutes: Routes = [

  {  path: 'auth', redirectTo: '/auth/login', pathMatch: 'full' },

  {
  path: 'auth',
  component: AuthComponent,
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ]
},

  {  path: 'panel', redirectTo: '/panel', pathMatch: 'full' },
  {  path: '**', redirectTo: '/auth/login', pathMatch: 'full' },

];
