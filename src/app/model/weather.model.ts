export interface WeatherPrediction {
  date: string
  info: Info[]
}

export interface Info {
  data: Weather[]
}

export interface Weather {
  title: string
  time: string
  celcius: string
  wind: string
  water: string
}
