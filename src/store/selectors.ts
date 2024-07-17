import { RootState } from './store';

const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;

const selectWeekWeatherData = (state: RootState) =>
  state.weekWeatherSliceReducer;


const selectors = {
  selectCurrentWeatherData,
  selectWeekWeatherData
}


export default selectors