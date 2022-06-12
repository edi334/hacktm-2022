import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {DefinitelyNotQuestionModel} from '../definitely-not-models/definitely-not-question-model';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly _apiUrl = environment.apiUrl + 'api/';

  constructor(
    private readonly _http: HttpClient
  ) { }

  getAll(): Promise<DefinitelyNotQuestionModel[]> {
    const url = this._apiUrl + 'Question';
    return firstValueFrom(this._http.get<DefinitelyNotQuestionModel[]>(url));
  }
}
