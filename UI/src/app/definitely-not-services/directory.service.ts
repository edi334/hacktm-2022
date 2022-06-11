import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {DefinitelyNotDirectoryModel} from '../definitely-not-models/definitely-not-directory-model';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  private readonly _apiUrl = environment.apiUrl + 'api/';

  constructor(
    private readonly _http: HttpClient
  ) { }

  async nextLevel(parentId: string, level: number): Promise<DefinitelyNotDirectoryModel[]> {
    const url = this._apiUrl + `directory/next-level?parentId=${parentId}&level=${level}`;
    return firstValueFrom(this._http.get<DefinitelyNotDirectoryModel[]>(url));
  }

  async goBack(parentId: string, level: number): Promise<DefinitelyNotDirectoryModel[]> {
    const url = this._apiUrl + `directory/go-back?parentId=${parentId}&level=${level}`;
    return firstValueFrom(this._http.get<DefinitelyNotDirectoryModel[]>(url));
  }

  async generateBoxPosition(): Promise<DefinitelyNotDirectoryModel> {
    const url = this._apiUrl + 'directory/generate-box-position';
    return firstValueFrom(this._http.get<DefinitelyNotDirectoryModel>(url));
  }
}
