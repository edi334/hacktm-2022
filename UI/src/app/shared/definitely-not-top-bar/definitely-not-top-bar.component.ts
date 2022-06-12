import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../definitely-not-services/auth.service';

@Component({
  selector: 'app-definitely-not-top-bar',
  templateUrl: './definitely-not-top-bar.component.html',
  styleUrls: ['./definitely-not-top-bar.component.scss']
})
export class DefinitelyNotTopBarComponent implements OnInit {

  constructor(
    readonly authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
