import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export type Coordinates = { lon: number; lat: number };

export type CitiesPageState = {
  activeCities: { id: string; coord: Coordinates }[];
};

const initialState: CitiesPageState = {
  activeCities: [
    { id: '1', coord: { lon: -74.006, lat: 40.7128 } }, // New York City, USA
    { id: '2', coord: { lon: 139.6917, lat: 35.6895 } }, // Tokyo, Japan
    { id: '3', coord: { lon: 2.3522, lat: 48.8566 } }, // Paris, France
    { id: '4', coord: { lon: -0.1276, lat: 51.5074 } }, // London, UK
    { id: '5', coord: { lon: 151.2093, lat: -33.8688 } }, // Sydney, Australia
  ],
};

const weatherApiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export const addCityAsync = createAsyncThunk(
  'CitiesPage/addCityAsync',
  async (location: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${weatherApiKey}`,
      );
      const data = await response.json();

      if (!response.ok || data.length === 0) {
        return rejectWithValue('City not found');
      }

      const city = data[0];
      const newCity = {
        id: `${Date.now()}`,
        coord: { lon: city.lon, lat: city.lat },
      };

      dispatch(addNewCity(newCity));
      return newCity;
    } catch {
      return rejectWithValue('Failed to fetch city coordinates');
    }
  },
);

const citiesPageSlice = createSlice({
  name: 'CitiesPage',
  initialState,
  reducers: {
    addNewCity: (state, action: PayloadAction<{ id: string; coord: Coordinates }>) => {
      state.activeCities = [action.payload, ...state.activeCities];
    },
    removeCity: (state, action: PayloadAction<string>) => {
      state.activeCities = state.activeCities.filter((city) => city.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCityAsync.rejected, (_, action) => {
      console.error(action.payload);
    });
  },
});

export const { addNewCity, removeCity } = citiesPageSlice.actions;
export default citiesPageSlice.reducer;
