import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Container, Theme } from '@radix-ui/themes';
import { useTheme } from '../Contexts/ThemeContext';

export const BaseLayout = () => {
  const { theme } = useTheme();

  return (
    <Theme appearance={theme}>
      <Header />
      <Container px="5">
        <Outlet />
      </Container>
    </Theme>
  );
};
