import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public emailInput: string;
  public passwordInput: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  /**
   * realiza la petición de autenticación a firebase y redirecciona a tabs
   */
  authenticateUser() {
    this.router.navigate([ConstantsService.URL_TABS]);
  }

}
