import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { adminRoutes } from './routes/routes';
import { AuthModule } from './auth/auth.module';
import { PanelModule } from './panel/panel.module';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';



@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      AuthModule,
      PanelModule,
      RouterModule.forRoot(adminRoutes),
      BrowserAnimationsModule,
      ToastrModule.forRoot({
         timeOut: 5000,
         positionClass: 'toast-bottom-center',
         preventDuplicates: true,
         progressBar: true,
         progressAnimation: 'decreasing'
      })
   ],
   providers: [ErrorInterceptorProvider],
   bootstrap: [AppComponent]
})
export class AppModule { }
