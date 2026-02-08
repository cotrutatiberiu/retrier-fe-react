import { createFileRoute } from '@tanstack/react-router';
import { ROUTES } from 'constants/routes';
import { useLazyGetWeatherTodayQuery } from 'features/weather/weatherSlice';

export const Route = createFileRoute(ROUTES.WEATHER)({
  component: Weather
});

export function Weather() {
  const [triggerGetWeather] = useLazyGetWeatherTodayQuery();
  const checkTodayWeather = () => {
    triggerGetWeather();
  };
  return (
    <div>
      <button onClick={checkTodayWeather}>Check today weather</button>
    </div>
  );
}
