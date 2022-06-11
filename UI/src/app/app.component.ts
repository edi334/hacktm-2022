import { Component } from '@angular/core';
import {AuthService} from "./definitely-not-services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI';

  constructor(
    private _authService: AuthService,
  ) {
  }

  isLoggedIn() {
    return this._authService.getSession();
  }
}
