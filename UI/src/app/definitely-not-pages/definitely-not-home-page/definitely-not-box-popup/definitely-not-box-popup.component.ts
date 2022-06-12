import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-definitely-not-box-popup',
  templateUrl: './definitely-not-box-popup.component.html',
  styleUrls: ['./definitely-not-box-popup.component.scss']
})
export class DefinitelyNotBoxPopupComponent {
  constructor(
    private readonly _router: Router,
    private readonly _dialogRef: MatDialogRef<DefinitelyNotBoxPopupComponent>
  ) {
  }

  goToQuiz(): void {
    this._router.navigate(['quiz']).then();
    this._dialogRef.close();
  }
}
