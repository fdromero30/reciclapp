import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-waste',
  templateUrl: 'addWaste.page.html',
  styleUrls: ['addWaste.page.scss']
})
export class AddWastePage {

  listSchools: any;
  constructor(private router: Router) {
    this.listSchools = ['1', '2', '3'];
  }

  comeBack() {
    this.router.navigate(['tabs/adminHome']);
  }
}
