import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DATA } from 'src/app/data/data-weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {

  constructor(
    private service: WeatherService
  ){}

  public data = DATA

  changePage(index: number): void {
    this.service.changeData(index)
  }
}
