import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/data/data-weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(){}

  data = DATA
  current: number = 0
  show: boolean = false
  public showWeather: boolean = false
  info: number = 0

  delay = ['delay-[1000ms]', 'delay-[1100ms]', 'delay-[1200ms]', 'delay-[1300ms]']

  ngOnInit(): void {
    setInterval(() => this.intervalIndex(), 5000)
    setTimeout(() => { this.show = true }, 1000)
    setTimeout(() => { this.showWeather = true }, 1000)
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
