import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../definitely-not-services/auth.service";

@Component({
  selector: 'app-definitely-not-login-page',
  templateUrl: './definitely-not-login-page.component.html',
  styleUrls: ['./definitely-not-login-page.component.scss']
})
export class DefinitelyNotLoginPageComponent implements OnInit {
  loginForm: FormGroup;
  private  formSubmitAttempt = false;

  constructor(
    private fb: FormBuilder,
    // private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.loginForm.get(field)!.valid && this.loginForm.get(field)!.touched) ||
      (this.loginForm.get(field)!.untouched && this.formSubmitAttempt)
    );
  }
  //
  // async onSubmit() {
  //   if (this.loginForm.valid) {
  //     await this.authService.login(this.loginForm.value);
  //   }
  //   this.formSubmitAttempt = true;
  // }
}
