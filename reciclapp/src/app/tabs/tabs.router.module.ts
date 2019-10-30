import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { Tab1PageModule } from '../tab1/tab1.module';
import { Tab2PageModule } from '../tab2/tab2.module';
import { AdminHomeModule } from '../adminHome/adminHome.module';
import { AddWasteModule } from '../addWaste/addWaste.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () => Tab1PageModule
      },
      {
        path: 'tab1',
        loadChildren: () => Tab1PageModule
      },
      {
        path: 'tab2',
        loadChildren: () => Tab2PageModule
      },
      {
        path: 'adminHome',
        loadChildren: () => AdminHomeModule
      },
      {
        path: 'addWaste',
        loadChildren: () => AddWasteModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
