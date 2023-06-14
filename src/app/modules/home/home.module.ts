import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardWeatherComponent } from './components/card-weather/card-weather.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardWeatherComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
