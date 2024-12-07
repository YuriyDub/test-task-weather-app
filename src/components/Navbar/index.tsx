import { TabNav } from '@radix-ui/themes';
import { CITIES_PAGE, TECH_TASK_PAGE } from '../../routes';

export const Navbar = () => {
  const location = window.location;

  return (
    <TabNav.Root>
      <TabNav.Link href="/" active={location?.pathname === '/'}>
        Home
      </TabNav.Link>
      <TabNav.Link href={CITIES_PAGE} active={location?.pathname === CITIES_PAGE}>
        Cities
      </TabNav.Link>
      <TabNav.Link href={TECH_TASK_PAGE} active={location?.pathname === TECH_TASK_PAGE}>
        Task
      </TabNav.Link>
    </TabNav.Root>
  );
};
