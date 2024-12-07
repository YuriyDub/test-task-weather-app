import {
  Button,
  Card,
  DataList,
  Flex,
  Heading,
  Section,
  Skeleton,
  Text,
  Tooltip,
} from '@radix-ui/themes';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../store';
import { useGetWetherInfoQuery } from '../../../../api';
import { kelvinToCelsius } from '../../../CityCard/utils';
import { ArrowUpIcon, UpdateIcon } from '@radix-ui/react-icons';

export const CityDetails = () => {
  const { id } = useParams();
  const { activeCities } = useAppSelector((state) => state.citiesPage);
  const currentCity = activeCities.find((city) => city.id === id) ?? {
    coord: { lat: 0, lon: 0 },
    id,
  };
  const {
    data: weatherData,
    isLoading: weatherIsLoading,
    refetch,
  } = useGetWetherInfoQuery(currentCity?.coord);
  const baseInfo = weatherData?.weather?.[0];

  return (
    <Section>
      <Flex align="center" justify="between" mb="2">
        <Heading size="8">{weatherData?.name}</Heading>
        <Tooltip content="Refresh weather data">
          <Button onClick={refetch} variant="outline">
            <UpdateIcon />
            Weather Refresh
          </Button>
        </Tooltip>
      </Flex>
      {weatherIsLoading ? (
        <Skeleton height="300px" />
      ) : (
        <Card>
          <Flex justify="between">
            <Flex justify="end" align="center" m="5" mb="9" gap="5">
              <Flex direction="column" align="center" mt="8">
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
                  src={`http://openweathermap.org/img/wn/${baseInfo?.icon}@4x.png`}
                  alt="Weather icon"
                />
                <Text size="3" mt="-7">
                  {baseInfo?.description}
                </Text>
              </Flex>
            </Flex>
            <DataList.Root m="5">
              <DataList.Item>
                <DataList.Label minWidth="88px">Min Temp</DataList.Label>
                <DataList.Value>
                  {weatherData?.main?.temp_max
                    ? `${kelvinToCelsius(weatherData?.main?.temp_max).toFixed(0)}°`
                    : null}
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Max Temp</DataList.Label>
                <DataList.Value>
                  {weatherData?.main?.temp_min
                    ? `${kelvinToCelsius(weatherData?.main?.temp_min).toFixed(0)}°`
                    : null}
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Pressure</DataList.Label>
                <DataList.Value>
                  {weatherData?.main?.temp_min
                    ? `${weatherData?.main?.pressure.toFixed(0)}Pa`
                    : null}
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Humidity</DataList.Label>
                <DataList.Value>
                  {weatherData?.main?.humidity
                    ? `${weatherData?.main?.humidity.toFixed(0)}%`
                    : null}
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Wind</DataList.Label>
                <Flex align="center" gap="1">
                  <Text size="1">{weatherData?.wind?.speed}m/s</Text>
                  <ArrowUpIcon style={{ transform: `rotate(${weatherData?.wind?.deg}deg)` }} />
                </Flex>
              </DataList.Item>
            </DataList.Root>
          </Flex>
        </Card>
      )}
    </Section>
  );
};
