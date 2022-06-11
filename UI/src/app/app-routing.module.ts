import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefinitelyNotHomePageComponent} from "./definitely-not-pages/definitely-not-home-page/definitely-not-home-page.component";
import {
  DefinitelyNotRegisterComponent
} from "./definitely-not-pages/definitely-not-register/definitely-not-register.component";
import {
  DefinitelyNotLoginPageComponent
} from "./definitely-not-pages/definitely-not-login-page/definitely-not-login-page.component";


const routes: Routes = [
  {
    path: '',
    component: DefinitelyNotHomePageComponent,
    pathMatch: 'full'
  },

  {
    path:'register',
    component:DefinitelyNotRegisterComponent,
  },

  {
    path: 'login',
    component: DefinitelyNotLoginPageComponent,
    pathMatch: 'full'
  },

  {
    path: '**',
    component: DefinitelyNotHomePageComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
