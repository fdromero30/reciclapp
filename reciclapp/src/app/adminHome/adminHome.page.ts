import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: 'adminHome.page.html',
  styleUrls: ['adminHome.page.scss']
})
export class AdminHome {

  listSchools: any;
  constructor(private router: Router) {
    this.listSchools = ['1', '2', '3'];
  }

  goToSchoolDetail() {
    this.router.navigate(['tabs/addWaste'])
  }
}
