import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {DefinitelyNotResultModel} from '../definitely-not-models/definitely-not-result-model';
import {AuthService} from './auth.service';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private readonly _apiUrl = environment.apiUrl + 'api/';

  constructor(
    private readonly _http: HttpClient,
    private readonly _authService: AuthService
  ) { }

  async saveResults(results: DefinitelyNotResultModel[]): Promise<any> {
    const session = await this._authService.getSession();
    const url = this._apiUrl + `results?userId=${session.userId}`;
    return firstValueFrom(this._http.post(url, results));
  }

  async getResults(): Promise<string> {
    const url = this._apiUrl + 'results';
    return firstValueFrom(this._http.get<string>(url));
  }
}
