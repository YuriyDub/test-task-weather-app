import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Coordinates } from '../store/slices/CitiesPageSlice';
import { WeatherResponse } from './types';

const weatherApiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export const openWeatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/' }),
  endpoints: (builder) => ({
    getWetherInfo: builder.query<WeatherResponse, Coordinates>({
      query: (coordinates) => ({
        url: `data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${weatherApiKey}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useLazyGetWetherInfoQuery, useGetWetherInfoQuery } = openWeatherApi;
