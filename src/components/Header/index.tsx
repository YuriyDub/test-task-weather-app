import { Container, Flex, Heading, Switch } from '@radix-ui/themes';
import { Navbar } from '../Navbar';
import styles from './header.module.scss';
import { MoonIcon, OpacityIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from '../Contexts/ThemeContext';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <Container>
        <Flex justify="between" align="center" px="5">
          <div className={styles.logo}>
            <OpacityIcon />
            <Heading size="2">WeatherWise</Heading>
          </div>
          <Navbar />
          <div className={styles.themeSwitch}>
            <SunIcon />
            <Switch checked={theme === 'dark'} onClick={toggleTheme} />
            <MoonIcon />
          </div>
        </Flex>
      </Container>
    </header>
  );
};
