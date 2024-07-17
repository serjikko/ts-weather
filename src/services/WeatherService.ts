import { AxiosResponse } from 'axios';
import api from '../axios/index';
import weekWeatherApi from '../axios/weekWeatherApi';
import { Weather } from '../store/types/weather';
// import { WeatherList } from '../store/types/weatherListElement'

type tempType = any

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  }

  static getWeekWeather(city: string): Promise<AxiosResponse<tempType>> {
    return weekWeatherApi.get<tempType>(`/forecast?q=${city}`);
  }
}
