import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-romanescu',
  templateUrl: './romanescu.component.html',
  styleUrls: ['./romanescu.component.scss']
})
export class RomanescuComponent{
  @Input('ngModel')
  name: string = '';

  isChecked = false;

  constructor() {}

  setCheck(): void {
    this.isChecked = true;
  }

}
