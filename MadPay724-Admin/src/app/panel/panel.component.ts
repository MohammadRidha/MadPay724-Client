import { Component, OnInit } from '@angular/core';

import Chartist from '../../assets/vendors/js/chartist.min.js';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/services/auth.service.js';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

jwtHelper = new JwtHelperService();

  constructor(private router: Router, private alertService: ToastrService, public authoService: AuthService) {
  }
  ngOnInit() {
    this.getDecodedToken();
  }

  getDecodedToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authoService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.alertService.warning('خروج با موفقیت انجام شد', 'هشدار');
    this.router.navigate(['/auth/login']);
  }

  loggedIn() {
    return this.authoService.loggedIn();
  }
}
