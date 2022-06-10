import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefinitelyNotHomePageComponent} from "./definitely-not-pages/definitely-not-home-page/definitely-not-home-page.component";


const routes: Routes = [
  {
    path: '',
    component: DefinitelyNotHomePageComponent,
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
