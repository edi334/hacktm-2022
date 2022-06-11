import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefinitelyNotHomePageComponent } from './definitely-not-pages/definitely-not-home-page/definitely-not-home-page.component';
import { DefinitelyNotTopBarComponent } from './shared/definitely-not-top-bar/definitely-not-top-bar.component';
import { DefinitelyNotRegisterComponent } from './definitely-not-pages/definitely-not-register/definitely-not-register.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSliderModule} from "@angular/material/slider";
import { DefinitelyNotLoginPageComponent } from './definitely-not-pages/definitely-not-login-page/definitely-not-login-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    DefinitelyNotHomePageComponent,
    DefinitelyNotTopBarComponent,
    DefinitelyNotRegisterComponent
    DefinitelyNotLoginPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatSliderModule,
        FormsModule
        MatButtonModule,
        MatToolbarModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
