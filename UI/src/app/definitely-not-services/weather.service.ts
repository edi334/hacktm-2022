import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {IWeatherModel} from "../definitely-not-models/definitely-not-weather-model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly _key='962556a3286c4d13b6e222337221106';
  private readonly _location='Paris';
  private readonly _baseURL=`http://api.weatherapi.com/v1/current.json?key=${this._key}&q=${this._location}`;

  constructor(private readonly _http: HttpClient) {
  }

  getWeather(): Promise<any>{
    return firstValueFrom(this._http.get<any>(this._baseURL));
  }
}
