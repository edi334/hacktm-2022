import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-definitely-not-captcha',
  templateUrl: './definitely-not-captcha.component.html',
  styleUrls: ['./definitely-not-captcha.component.scss']
})
export class DefinitelyNotCaptchaComponent implements OnInit {

  images: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  random: number = Math.trunc((Math.random() * 10));
  solution: string='';

  constructor(private _snack:MatSnackBar) {
  }

  ngOnInit(): void {
  }

  submit(){
    if(this.solution==='the solution'){
      this._snack.open('Succes','OK',{duration: 4000});
    }
    else this._snack.open('Wrong','OK',{duration: 4000});
  }

}
