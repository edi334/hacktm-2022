import {Component, OnInit} from '@angular/core';
import {DefinitelyNotDirectoryModel} from '../../definitely-not-models/definitely-not-directory-model';
import {DirectoryService} from '../../definitely-not-services/directory.service';
import {MatDialog} from '@angular/material/dialog';
import {DefinitelyNotBoxPopupComponent} from './definitely-not-box-popup/definitely-not-box-popup.component';

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
    private readonly _matDialog: MatDialog
  ) { }

  async ngOnInit(): Promise<void> {
    this.loading = true;
    try {
      await this._directoryService.deleteBox();
      await this._directoryService.generateBoxPosition();
    } catch (e: any) {
      if (e.status === 400) {
        //snack
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
        //snack
      }
    }
  }

  openBox(): void {
    const dialogRef = this._matDialog.open(DefinitelyNotBoxPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
    });
  }

  get isRoot(): boolean {
    return this.currentDirectories[0].level === 0;
  }

  async goBack() {
    this.currentDirectories = await this._directoryService
      .goBack(this.currentDirectories[0].level - 1);
  }
}
