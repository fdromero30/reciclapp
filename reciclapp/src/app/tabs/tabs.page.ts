
import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { SwipeTabDirective } from 'src/directives/swipe-tab.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(SwipeTabDirective, { read: '', static: null }) swipeTabDirective: SwipeTabDirective;
  @ViewChild('myTabs', { read: '', static: null }) tabRef: IonTabs;


  constructor() { }
  ionTabsDidChange($event) {
    this.swipeTabDirective.onTabInitialized($event.tab);
  }

  onTabChange($event) {
    this.tabRef.select($event);
  }
}
