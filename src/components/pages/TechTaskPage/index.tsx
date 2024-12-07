import { Box, Card, Heading, Section, Separator } from '@radix-ui/themes';

export const TechTaskPage = () => {
  return (
    <Section py="9">
      <Heading size="8" mb="4">
        Description
      </Heading>
      <Card>
        <Box p="7">
          <Heading>Тестове завдання для React Dev</Heading>
          <Section py="1" className="mb-6">
            <h2>Задача:</h2>
            <ul>
              <li>Реалізувати SPA, яке показує погоду в обраних містах.</li>
            </ul>
          </Section>
          <Separator size="4" orientation="horizontal" />
          <Section py="1">
            <h2>Тех. завдання:</h2>
            <ul>
              <li>
                Вивести список міст "картками". Картка повинна містити:
                <ul>
                  <li>Коротка інформація про погоду у місті</li>
                  <li>
                    При натисканні на картку — вивести детальну інформацію або перейти на сторінку з
                    детальною інформацією
                  </li>
                  <li>Кнопка "оновити дані про погоду зараз", яка оновлює погоду даного міста</li>
                  <li>
                    Можливість додавати/видаляти міста. При додаванні нового міста — отримання
                    поточної погоди та відображення на екрані.
                  </li>
                </ul>
              </li>
              <li>
                Дані зберігати локально в LocalStorage:
                <ul>
                  <li>
                    При перезавантаженні сторінки список міст зберігається, а дані про погоду
                    оновлюються.
                  </li>
                </ul>
              </li>
            </ul>
          </Section>
          <Separator size="4" orientation="horizontal" />
          <Section py="1" className="mb-6">
            <h2>Буде плюсом:</h2>
            <p>
              Реалізувати положення блоку з температурою у вигляді графіку на сторінці детального
              подання, використовуючи погодинний прогноз на поточний день.
            </p>
          </Section>
          <Separator size="4" orientation="horizontal" />
          <Section py="1" className="mb-6">
            <h2>Вимоги:</h2>
            <ul>
              <li>
                Використати Weather API:
                <a href="https://openweathermap.org/">https://openweathermap.org/</a>
              </li>
              <li>Застосувати React, Typescript, Redux + Redux-Thunk</li>
              <li>Рекомендується Redux Toolkit, React-router</li>
              <li>
                Використати препроцессор CSS (SCSS), мобільну версію, UI бібліотеки (наприклад,
                Material UI)
              </li>
              <li>Код повинен бути чистим, зі збереженням форматування (ESLint/Prettier)</li>
              <li>Покрити тестами основні компоненти (Jest + react-testing-library/enzyme)</li>
              <li>Написати компоненти у функціональному стилі із застосуванням хуків</li>
            </ul>
          </Section>
        </Box>
      </Card>
    </Section>
  );
};
