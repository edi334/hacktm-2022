import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {IWeatherModel} from "../definitely-not-models/definitely-not-weather-model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly _key = '962556a3286c4d13b6e222337221106';
  private _location = 'Timisoara';
  private _date = new Date();
  private _baseURL: string;

  constructor(private readonly _http: HttpClient) {
  }

  getWeather(): Promise<any> {
    if (navigator.geolocation) {
      const d=new Date()
      d.setDate(this._date.getDate() - 1);
      navigator.geolocation.getCurrentPosition(position =>
        this._location = `${position.coords.latitude},${position.coords.longitude}`)
      this._baseURL = `http://api.weatherapi.com/v1/history.json?key=${this._key}&q=${this._location}&dt=${d.toISOString().slice(0, 10)}`;
      return firstValueFrom(this._http.get<any>(this._baseURL));
    }
    return Promise.resolve("Error")
  }
}
