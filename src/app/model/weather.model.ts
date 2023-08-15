export interface DataWeather {
  city: string
  province: string
  data: DateWeather[]
}

export interface DateWeather {
  date: string
  prediction: Weather[]
}

export interface Weather {
  icon: string
  title: string
  time: string
  celcius: string
  wind: string
  water: string
}
