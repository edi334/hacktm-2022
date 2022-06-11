import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../definitely-not-services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-definitely-not-login-page',
  templateUrl: './definitely-not-login-page.component.html',
  styleUrls: ['./definitely-not-login-page.component.scss']
})
export class DefinitelyNotLoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _snack:MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (!this.loginForm.valid) {
      this._snack.open('Check form','OK',{duration: 4000});
      return
    }
   try{
     await this._authService.login(this.loginForm.value);
     this._snack.open('Succes','OK',{duration: 4000});
   }
    catch (e:any) {
      this._snack.open(e.error.toString(),'OK',{duration: 4000});
    }
  }
}
