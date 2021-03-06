import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-definitely-not-captcha',
  templateUrl: './definitely-not-captcha.component.html',
  styleUrls: ['./definitely-not-captcha.component.scss']
})
export class DefinitelyNotCaptchaComponent implements OnInit {

  numbers: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  imagesPath = 'assets/math/';
  random: number = Math.trunc((Math.random() * 10));
  solution: string='';
  images: string[] = this.numbers.map(n => this.imagesPath + n + '.jpg');


  constructor(private _snack:MatSnackBar,
              private _router:Router) {
  }

  ngOnInit(): void {
  }

  async submit() {
    if (this.solution === 'the solution') {
      this._snack.open('Succes', 'OK', {duration: 4000});
      await this._router.navigateByUrl('/login');
    } else this._snack.open('Wrong', 'OK', {duration: 4000});
  }

}
