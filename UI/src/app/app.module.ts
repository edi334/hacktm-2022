import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  DefinitelyNotHomePageComponent
} from './definitely-not-pages/definitely-not-home-page/definitely-not-home-page.component';
import {DefinitelyNotTopBarComponent} from './shared/definitely-not-top-bar/definitely-not-top-bar.component';
import {
  DefinitelyNotRegisterComponent
} from './definitely-not-pages/definitely-not-register/definitely-not-register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSliderModule} from "@angular/material/slider";
import {
  DefinitelyNotLoginPageComponent
} from './definitely-not-pages/definitely-not-login-page/definitely-not-login-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { DefinitelyNotQuizPageComponent } from './definitely-not-pages/definitely-not-quiz-page/definitely-not-quiz-page.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { DefinitelyNotAButtonComponent } from './shared/definitely-not-a-button/definitely-not-a-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DefinitelyNotHomePageComponent,
    DefinitelyNotTopBarComponent,
    DefinitelyNotQuizPageComponent,
    DefinitelyNotRegisterComponent,
    DefinitelyNotLoginPageComponent,
    DefinitelyNotAButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    FontAwesomeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
