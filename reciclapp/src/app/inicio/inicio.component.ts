import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/shared/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  /**
   * Redirección a login de aplicación
   */
  goToLogin() {
    this.router.navigate([ConstantsService.URL_LOGIN]);
  }

}
