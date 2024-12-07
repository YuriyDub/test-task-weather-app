import { Button, Card, Flex, Separator, Skeleton, Text, Tooltip } from '@radix-ui/themes';
import { useGetWetherInfoQuery } from '../../api';
import { Coordinates } from '../../store/slices/CitiesPageSlice';
import { kelvinToCelsius } from './utils';
import { ArchiveIcon, ArrowUpIcon, Cross2Icon, UpdateIcon } from '@radix-ui/react-icons';
import styles from './city-card.module.scss';

export type CityCardPropsType = {
  onClickDetails: () => void;
  onDelete: () => void;
  coordinates: Coordinates;
};

export const CityCard = ({ onClickDetails, onDelete, coordinates }: CityCardPropsType) => {
  const {
    data: weatherData,
    isLoading: weatherIsLoading,
    refetch,
  } = useGetWetherInfoQuery(coordinates);
  const baseInfo = weatherData?.weather?.[0];

  if (weatherIsLoading) {
    return <Skeleton height="250px" />;
  }

  return (
    <Card className={styles.cityCard}>
      <Flex justify="between">
        <Text as="div" size="5" align="left">
          {weatherData?.name}
        </Text>
        <Flex align="center" gap="1">
          <Text size="1">{weatherData?.wind?.speed}m/s</Text>
          <ArrowUpIcon style={{ transform: `rotate(${weatherData?.wind?.deg}deg)` }} />
        </Flex>
      </Flex>
      <Separator orientation="horizontal" size="4" />
      <Flex justify="between" align="end" m="5">
        <Flex direction="column" align="center">
          <Text as="div" size="9" align="left">
            {weatherData?.main?.temp
              ? `${kelvinToCelsius(weatherData?.main?.temp).toFixed(0)}°`
              : null}
          </Text>
          <Text size="3">
            {weatherData?.main?.feels_like
              ? `(feels like: ${kelvinToCelsius(weatherData?.main?.feels_like).toFixed(0)})`
              : null}
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <img
            src={`http://openweathermap.org/img/wn/${baseInfo?.icon}@2x.png`}
            alt="Weather icon"
          />
          <Text size="3" mt="-4">
            {baseInfo?.description}
          </Text>
        </Flex>
      </Flex>
      <Separator orientation="horizontal" size="4" />
      <Flex justify="end" gap="2" mt="2">
        <Tooltip content="Refresh weather data">
          <Button onClick={refetch} size="1" variant="ghost">
            <UpdateIcon />
          </Button>
        </Tooltip>
        <Separator orientation="vertical" mx="2" />
        <Tooltip content="Weather details">
          <Button onClick={onClickDetails} size="1" variant="ghost">
            <ArchiveIcon />
            Details
          </Button>
        </Tooltip>
        <Separator orientation="vertical" mx="2" />
        <Tooltip content="Remove city from list">
          <Button onClick={onDelete} size="1" variant="ghost">
            <Cross2Icon />
            Remove
          </Button>
        </Tooltip>
      </Flex>
    </Card>
  );
};
