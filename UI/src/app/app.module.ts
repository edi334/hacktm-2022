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
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {
  DefinitelyNotQuizPageComponent
} from './definitely-not-pages/definitely-not-quiz-page/definitely-not-quiz-page.component';
import {DefinitelyNotAButtonComponent} from './shared/definitely-not-a-button/definitely-not-a-button.component';
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {
  DefinitelyNotCaptchaComponent
} from './definitely-not-pages/definitely-not-captcha/definitely-not-captcha.component';
import {MatRadioModule} from '@angular/material/radio';
import { DefinitelyNotFolderComponent } from './definitely-not-pages/definitely-not-home-page/definitely-not-folder/definitely-not-folder.component';
import { DefinitelyNotBoxPopupComponent } from './definitely-not-pages/definitely-not-home-page/definitely-not-box-popup/definitely-not-box-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {WeatherComponent} from './definitely-not-components/weather/weather.component';
import { RomanescuComponent } from './definitely-not-components/romanescu/romanescu.component';
import { DeviceComponent } from './definitely-not-components/device/device.component';

@NgModule({
  declarations: [
    AppComponent,
    DefinitelyNotHomePageComponent,
    DefinitelyNotTopBarComponent,
    DefinitelyNotRegisterComponent,
    DefinitelyNotLoginPageComponent,
    DefinitelyNotAButtonComponent,
    DefinitelyNotCaptchaComponent,
    DefinitelyNotFolderComponent,
    DefinitelyNotBoxPopupComponent,
    DefinitelyNotQuizPageComponent,
    WeatherComponent,
    RomanescuComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
