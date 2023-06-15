export interface WeatherPrediction {
  date: string
  info: Info[]
}

export interface Info {
  data: Weather[]
}

export interface Weather {
  icon: string
  title: string
  time: string
  celcius: string
  wind: string
  water: string
}
