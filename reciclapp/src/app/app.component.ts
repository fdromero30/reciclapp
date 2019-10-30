import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UtilService } from 'src/shared/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  user: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private util: UtilService,
    private router: Router
  ) {
    this.initializeApp();

  }

  ngOnInit() {
    this.getUserInfo();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /**
   * obtiene la información del rol del usuario
   * @author fromero
   */
  getUserInfo() {
    this.user = this.util.getUser();
    this.validateRol();
  }

  validateRol() {
    if (this.user.rol === 'administrador') {
      this.router.navigate(['tabs/adminHome']);
    } else {
      this.router.navigate([''])
    }
  }
}
