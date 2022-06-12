import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, tap} from "rxjs";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {DefinitelyNotLoginModel} from "../definitely-not-models/definitely-not-login-model";
import {DefinitelyNotSessionModel} from "../definitely-not-models/definitely-not-session-model";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {IRegister} from "../definitely-not-models/definitely-not-register-model";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly _apiUrl = environment.apiUrl + 'api/';
  private static readonly tokenStorageKey: string = 'token';
  private static readonly sessionStorageKey: string = 'session';
  private _token?: string;
  private _session?: DefinitelyNotSessionModel;
  private _authState: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private readonly _http: HttpClient,
    private readonly _router: Router,
    private readonly _storage: LocalStorage,
  ) { }


  login(request: DefinitelyNotLoginModel): Promise<DefinitelyNotSessionModel> {
    const url = this._apiUrl + "Auth/login";
    const request$ = this._http.post<DefinitelyNotSessionModel>(url, request);
    return firstValueFrom(request$.pipe(tap(res => this.saveSession(res))));
  }

  async isLoggedIn(): Promise<boolean> {
    const token = <string>await this._storage.getItem(AuthService.tokenStorageKey).toPromise();
    return !!token;
  }

  public async saveSession(authSession?: DefinitelyNotSessionModel): Promise<void> {
    if (authSession) {
      await this._storage.setItem(AuthService.tokenStorageKey, authSession.token).toPromise();
      await this._storage.setItem(AuthService.sessionStorageKey, authSession).toPromise();
    } else {
      await this._storage.removeItem(AuthService.tokenStorageKey).toPromise();
      await this._storage.removeItem(AuthService.sessionStorageKey).toPromise();
    }
    await this.loadSession();
  }

  public async logout(): Promise<void> {
    await this._storage.removeItem(AuthService.tokenStorageKey).toPromise();
    await this._storage.removeItem(AuthService.sessionStorageKey).toPromise();

    await this._router.navigate(['login']);
  }

  private async loadSession(): Promise<void> {
    const initialStatus = !!this._token;
    const oldToken = this._token;
    this._token = <string>await this._storage.getItem(AuthService.tokenStorageKey).toPromise();
    if (this._token) {
      this._session = <DefinitelyNotSessionModel>await this._storage.getItem(AuthService.sessionStorageKey).toPromise();
    } else {
      this._session = undefined;
    }
    const differentStatus = initialStatus !== !!this._token || oldToken !== this._token;
    if (differentStatus) {
      this._authState.emit(!!this._token);
    }
  }

  async register(data: IRegister): Promise<any>{
    const url = this._apiUrl + "Auth/register";
    return firstValueFrom(this._http.post(url, data,{responseType: 'text'}));
  }
}
