import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-definitely-not-resetpass-page',
  templateUrl: './definitely-not-resetpass-page.component.html',
  styleUrls: ['./definitely-not-resetpass-page.component.scss']
})
export class DefinitelyNotResetpassPageComponent {
  @Input('ngModel')
  newPass: string = '';
  inputPass: string = '';

  constructor() { }

  setter = () => {
    this.newPass = this.inputPass
  }
}
