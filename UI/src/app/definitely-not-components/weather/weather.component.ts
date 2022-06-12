import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../definitely-not-services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherYesterday: any;
  avg = 0;
  min = 0;
  max = 0;
  conditionCode = 0;
  location = 'Bucharest';

  constructor(private readonly _weather: WeatherService) {
  }

  async ngOnInit(): Promise<void> {
    this.setWeather()
  }

  async setWeather() {
    this.weatherYesterday = await this._weather.getWeather();
    this.avg = this.weatherDay().avgtemp_c;
    this.min = this.weatherDay().mintemp_c;
    this.max = this.weatherDay().maxtemp_c;
    this.conditionCode = this.weatherDay().condition.code;
     this.location = this.weatherYesterday.location.name;
  }

  weatherDay() {
    return this.weatherYesterday.forecast.forecastday[0].day;
  }

}
