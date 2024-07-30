import { WeatherService } from "./WeatherService";

WeatherService.getCurrentWeather('paris')

const res = WeatherService.getCurrentWeather('Paris');
console.log(res)

test("API городов", async () => {
  
  expect(2 + 2).toBe(4)

  // expect(WeatherService.getCurrentWeather('Paris')).toBe()
}
)