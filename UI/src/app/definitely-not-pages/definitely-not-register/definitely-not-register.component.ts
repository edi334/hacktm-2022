import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../definitely-not-services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-definitely-not-register',
  templateUrl: './definitely-not-register.component.html',
  styleUrls: ['./definitely-not-register.component.scss']
})
export class DefinitelyNotRegisterComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder,
              private _authService: AuthService,
              private  _snack:MatSnackBar,
  ) {
  }

  form = this._formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      firstName:['da'],
      lastName:['da']
    },
    {
      validators: this.mustMatch('password', 'confirmPassword')
    });

  formatLabel(value: number) {
    return '0' + value;
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  ngOnInit(): void {
  }

  async submit() {

    if (!this.form.valid || this.form.controls['phoneNumber'].value == 100000000){
      console.log(this.form.controls['phoneNumber'].value);
    return}

    try {
      this.form.controls['phoneNumber'].patchValue(this.form.controls['phoneNumber'].value.toString());
      await this._authService.register(this.form.value);
      this._snack.open('Succes','OK',{duration: 4000});
    } catch (e:any) {
      this._snack.open(e.error.toString(),'OK',{duration: 4000});
    }
  }

}
