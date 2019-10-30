
import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { SwipeTabDirective } from 'src/directives/swipe-tab.directive';
import { UtilService } from 'src/shared/util.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(SwipeTabDirective, { read: '', static: null }) swipeTabDirective: SwipeTabDirective;
  @ViewChild('myTabs', { read: '', static: null }) tabRef: IonTabs;

  rol: any;
  constructor(private util: UtilService) {
    this.rol = this.util.getUser().rol;
  }
  ionTabsDidChange($event) {
    this.swipeTabDirective.onTabInitialized($event.tab);
  }

  onTabChange($event) {
    this.tabRef.select($event);
  }
}
