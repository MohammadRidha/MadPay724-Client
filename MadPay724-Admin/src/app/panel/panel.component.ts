import { Component, OnInit } from '@angular/core';

import Chartist from '../../assets/vendors/js/chartist.min.js';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private router: Router, private alertService: ToastrService) {
  }
  ngOnInit() {

  }

  logout() {
    localStorage.removeItem('token');
    this.alertService.warning('خروج با موفقیت انجام شد', 'هشدار');
    this.router.navigate(['/auth/login']);
  }
}
