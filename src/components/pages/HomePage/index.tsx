import { Blockquote, Box, Flex, Heading, Kbd, Section, Text, ThemePanel } from '@radix-ui/themes';
import styles from './home-page.module.scss';

export const HomePage = () => {
  return (
    <Section>
      <Flex
        gap={{ initial: '0', xs: '0', sm: '9' }}
        align="center"
        direction={{ initial: 'column', xs: 'column', sm: 'row' }}>
        <Box width={{ initial: '200px', xs: '320px', sm: '100%' }}>
          <img
            className={styles.heroImage}
            src="./src/assets/images/Leonardo_Kino_XL_cloudy_weather_0.jpg"
            alt="Landscape photograph by Tobias Tullius"
          />
        </Box>
        <Section p="0">
          <Heading size="8" mt={{ initial: '2', xs: '3', sm: '9' }}mb="4">
            🌦️ Welcome to WeatherWise! 🌤️
          </Heading>
          <Flex maxWidth="500px" mb="4">
            <Blockquote>
              Stay informed about the weather in your city anytime, anywhere. With accurate
              forecasts and real-time updates, we’ll help you plan your day with confidence.
            </Blockquote>
          </Flex>
          <Text>
            Press <Kbd>T</Kbd> - to change theme
          </Text>
        </Section>
      </Flex>
      <ThemePanel defaultOpen={false} />
    </Section>
  );
};
