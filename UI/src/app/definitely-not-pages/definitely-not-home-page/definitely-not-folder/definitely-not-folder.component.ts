import {Component, Input, OnInit} from '@angular/core';
import {DefinitelyNotDirectoryModel} from '../../../definitely-not-models/definitely-not-directory-model';

@Component({
  selector: 'app-definitely-not-folder',
  templateUrl: './definitely-not-folder.component.html',
  styleUrls: ['./definitely-not-folder.component.scss']
})
export class DefinitelyNotFolderComponent {
  @Input() directory: DefinitelyNotDirectoryModel;
}
