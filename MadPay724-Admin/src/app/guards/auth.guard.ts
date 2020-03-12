import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../components/auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';




@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private alertService: ToastrService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.alertService.error('شما به این بخش دسترسی ندارید', 'عدم دسترسی');
      this.router.navigate(['/auth/login'], {
        queryParams: {
          return: state.url
        }
      });
    }
    return false;
  }
}
