import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefinitelyNotHomePageComponent } from './definitely-not-pages/definitely-not-home-page/definitely-not-home-page.component';
import { DefinitelyNotTopBarComponent } from './shared/definitely-not-top-bar/definitely-not-top-bar.component';
import { DefinitelyNotLoginPageComponent } from './definitely-not-pages/definitely-not-login-page/definitely-not-login-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    DefinitelyNotHomePageComponent,
    DefinitelyNotTopBarComponent,
    DefinitelyNotLoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
