import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/data/data-weather';
import { DataWeather } from 'src/app/model/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: WeatherService){}

  data: DataWeather = DATA[0]
  date: number = 0
  current: number = 0
  show: boolean = false
  public showWeather: boolean = false
  info: number = 0

  delay = ['delay-[1000ms]', 'delay-[1100ms]', 'delay-[1200ms]', 'delay-[1300ms]']

  ngOnInit(): void {
    this.service.observer.subscribe(res => this.data = res)
    setTimeout(() => { this.show = true }, 1000)
    setTimeout(() => {
      this.showWeather = true
      setInterval(() => this.intervalIndex(), 16000)
     }, 8000)
  }

  get currentData() {
   if (this.info == 0) {
    return this.data.data[this.date].prediction.slice(0, 4)
   }
   return this.data.data[this.date].prediction.slice(4, 9)

  }

  changeDate(index: number) {
    this.current = index
  }

  intervalIndex(){
    this.showWeather = false
    setTimeout(() => {
      if (this.info >= 2) {
        this.info = 0
      } else {
        this.info += 1
      }
      setTimeout(() => {
        this.showWeather = true
      }, 200)
    }, 1800)

  }
}
