import { Component, OnInit } from '@angular/core';
import {DefinitelyNotDirectoryModel} from '../../definitely-not-models/definitely-not-directory-model';
import {DirectoryService} from '../../definitely-not-services/directory.service';
import {WeatherService} from "../../definitely-not-services/weather.service";

@Component({
  selector: 'app-definitely-not-home-page',
  templateUrl: './definitely-not-home-page.component.html',
  styleUrls: ['./definitely-not-home-page.component.scss']
})
export class DefinitelyNotHomePageComponent implements OnInit {
  currentDirectories: DefinitelyNotDirectoryModel[];

  constructor(
    private readonly _directoryService: DirectoryService,
    private readonly _weather:WeatherService
  ) { }

  async ngOnInit(): Promise<void> {
    console.log(await this._weather.getWeather());
    //await this._directoryService.generateBoxPosition();
    // this.currentDirectories = await this._directoryService.nextLevel('-1', 0);
  }

  async getNext(parentId: string) {
    this.currentDirectories = await this._directoryService
      .nextLevel(parentId, this.currentDirectories[0].level + 1);
  }

  async goBack() {
    this.currentDirectories = await this._directoryService
      .goBack(this.currentDirectories[0].parentId, this.currentDirectories[0].level - 1);
  }

}
