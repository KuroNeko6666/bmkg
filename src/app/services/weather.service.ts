import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataWeather } from '../model/weather.model';
import { DATA } from '../data/data-weather';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private router: Router) { }

  private data = DATA
  private subject :BehaviorSubject<DataWeather> = new BehaviorSubject<DataWeather>(DATA[0])
  public observer: Observable<DataWeather> = this.subject.asObservable()

  changeData(index: number) {
    this.subject.next(this.data[index])
    this.router.navigateByUrl("/home")
  }

}
