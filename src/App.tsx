import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { BaseLayout } from './components/BaseLayout';
import { CITIES_PAGE, CITY_DETAILS, TECH_TASK_PAGE } from './routes';
import { CitiesPage } from './components/pages/CitiesPage';
import { TechTaskPage } from './components/pages/TechTaskPage';
import { CityDetails } from './components/pages/CitiesPage/Details';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path={CITIES_PAGE} element={<CitiesPage />} />
          <Route path={CITY_DETAILS} element={<CityDetails />} />
          <Route path={TECH_TASK_PAGE} element={<TechTaskPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
