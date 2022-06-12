import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-definitely-not-a-button',
  templateUrl: './definitely-not-a-button.component.html',
  styleUrls: ['./definitely-not-a-button.component.scss']
})
export class DefinitelyNotAButtonComponent  {
  @Input()
  public text: string;
  @Input() public whiteColor: boolean=false;

  constructor() { }

}
