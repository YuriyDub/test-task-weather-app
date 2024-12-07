import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import CitiesPageSlice from './slices/CitiesPageSlice';
import { openWeatherApi } from '../api';
import { loadFromLocalStorage, saveToLocalStorage } from './utils';

const persistedCitiesPage = loadFromLocalStorage('citiesPage');

export const store = configureStore({
  reducer: {
    citiesPage: CitiesPageSlice,
    [openWeatherApi.reducerPath]: openWeatherApi.reducer,
  },
  preloadedState: {
    citiesPage: persistedCitiesPage,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(openWeatherApi.middleware),
});

store.subscribe(() => {
  saveToLocalStorage('citiesPage', store.getState().citiesPage);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
