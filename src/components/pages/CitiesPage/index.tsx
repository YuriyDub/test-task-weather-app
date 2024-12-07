import { useState } from 'react';
import { MagnifyingGlassIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { Button, Flex, Grid, Section, TextField, Tooltip } from '@radix-ui/themes';
import styles from './cities-page.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store';
import { CityCard } from '../../CityCard';
import { addCityAsync, removeCity } from '../../../store/slices/CitiesPageSlice';
import { useNavigate } from 'react-router-dom';
import { CITIES_PAGE } from '../../../routes';

export const CitiesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const { activeCities } = useAppSelector((state) => state.citiesPage);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAddNewCity = () => {
    dispatch(addCityAsync(searchValue));
    setSearchValue('');
  };

  const handleRemoveCity = (id: string) => {
    dispatch(removeCity(id));
  };

  return (
    <Section>
      <Flex align="center" gap="2">
        <TextField.Root
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search the city..."
          className={styles.searchField}>
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
        <Tooltip content="Add new city to list below">
          <Button onClick={handleAddNewCity} disabled={!searchValue.length}>
            <PlusCircledIcon />
            Add New
          </Button>
        </Tooltip>
      </Flex>
      <Grid gap={'5'} py="5" columns={{ initial: '1', xs: '2', sm: '3' }}>
        {activeCities.map(({ id, coord }) => (
          <CityCard
            key={id}
            coordinates={coord}
            onDelete={() => handleRemoveCity(id)}
            onClickDetails={() => navigate(`${CITIES_PAGE}/${id}`)}
          />
        ))}
      </Grid>
    </Section>
  );
};
