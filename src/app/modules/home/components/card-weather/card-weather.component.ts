import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/model/weather.model';

@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.css']
})
export class CardWeatherComponent {
  @Input() data?: Weather
}
