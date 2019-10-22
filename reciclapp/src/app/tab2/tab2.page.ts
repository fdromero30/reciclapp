import { Component } from '@angular/core';
import { ConstantsService } from 'src/shared/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) { }

  logOut() {
    this.router.navigate([ConstantsService.URL_HOME]);
  }
}
