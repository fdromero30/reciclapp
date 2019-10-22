import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioModule } from './inicio/inicio.module';
import { LoginModule } from './login/login.module';
import { ConstantsService } from '../shared/constants';
import { TabsPageModule } from './tabs/tabs.module';
import { Tab1PageModule } from './tab1/tab1.module';

const routes: Routes = [
  {
    path: '', loadChildren: () => InicioModule
  },
  {
    path: ConstantsService.URL_LOGIN, loadChildren: () => LoginModule
  },
  {
    path: ConstantsService.URL_TABS, loadChildren: () => TabsPageModule
  },
  { path: ConstantsService.URL_HOME, loadChildren: () => InicioModule }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
