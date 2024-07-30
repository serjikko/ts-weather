import { RootState } from './store';

const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;

const selectWeekWeatherData = (state: RootState) =>
  state.weekWeatherSliceReducer;

const selectRSSData = (state: RootState) =>
  state.RSSSliceReducer;


const selectors = {
  selectCurrentWeatherData,
  selectWeekWeatherData,
  selectRSSData
}


export default selectors