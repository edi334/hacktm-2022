import {Component, OnInit} from '@angular/core';
import {DefinitelyNotDirectoryModel} from '../../definitely-not-models/definitely-not-directory-model';
import {DirectoryService} from '../../definitely-not-services/directory.service';
import {MatDialog} from '@angular/material/dialog';
import {DefinitelyNotBoxPopupComponent} from './definitely-not-box-popup/definitely-not-box-popup.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from "../../definitely-not-services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-definitely-not-home-page',
  templateUrl: './definitely-not-home-page.component.html',
  styleUrls: ['./definitely-not-home-page.component.scss']
})
export class DefinitelyNotHomePageComponent implements OnInit {
  currentDirectories: DefinitelyNotDirectoryModel[] = [];
  loading = true;

  constructor(
    private readonly _directoryService: DirectoryService,
    private readonly _matDialog: MatDialog,
    private readonly _snack: MatSnackBar,
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {
  }

  async ngOnInit(): Promise<void> {
    const log = await this._authService.isLoggedIn()
    if (!log) {
      await this._router.navigateByUrl('/login');
    }
    this.loading = true;
    try {
      // await this._directoryService.deleteBox();
      await this._directoryService.generateBoxPosition();
    } catch (e: any) {
      if (e.status === 400) {
        // this._snack.open('Box already exists!', 'OK', {duration: 4000})
      }
    }
    this.currentDirectories = await this._directoryService.nextLevel('-1', 0);
    this.loading = false;
  }

  async getNext(parentId: string) {
    try {
      this.currentDirectories = await this._directoryService
        .nextLevel(parentId, this.currentDirectories[0].level + 1);

      const boxFound = this.currentDirectories.some(d => d.title === 'Box of Nothing');
      if (boxFound) {
        this.openBox();
      }

    } catch (e: any) {
      if (e.status === 404) {
        this._snack.open('No other child directories to access!', 'OK', {duration: 4000})
      }
    }
  }

  openBox(): void {
    this._matDialog.open(DefinitelyNotBoxPopupComponent);
  }

  get isRoot(): boolean {
    return this.currentDirectories[0].level === 0;
  }

  async goBack() {
    this.currentDirectories = await this._directoryService
      .goBack(this.currentDirectories[0].level - 1);
  }
}
