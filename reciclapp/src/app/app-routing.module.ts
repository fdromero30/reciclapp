import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioModule } from './inicio/inicio.module';
import { LoginModule } from './login/login.module';
import { CconstantsService } from '../shared/constants';

const routes: Routes = [
  {
    path: '', loadChildren: () => InicioModule
    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: CconstantsService.URL_LOGIN, loadChildren: () => LoginModule }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
