import { Component, OnInit } from '@angular/core';

import Chartist from '../../assets/vendors/js/chartist.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private router: Router) {
  }
  ngOnInit() {

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
