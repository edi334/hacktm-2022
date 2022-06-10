import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefinitelyNotHomePageComponent } from './definitely-not-pages/definitely-not-home-page/definitely-not-home-page.component';
import { DefinitelyNotTopBarComponent } from './shared/definitely-not-top-bar/definitely-not-top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DefinitelyNotHomePageComponent,
    DefinitelyNotTopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
