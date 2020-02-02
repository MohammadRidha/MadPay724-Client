import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import { RouterModule } from '@angular/router';
import { adminRoutes } from './routes/routes';
import { AuthModule } from './auth/auth.module';
import { PanelModule } from './panel/panel.module';



@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      AuthModule,
      PanelModule,
      RouterModule.forRoot(adminRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
