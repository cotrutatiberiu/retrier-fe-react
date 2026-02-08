import { createFileRoute } from '@tanstack/react-router';
import { ROUTES } from 'constants/routes';
import { useLazyGetNewsTodayQuery } from 'features/news/newsSlice';

export const Route = createFileRoute(ROUTES.WEATHER)({
  component: News
});

export function News() {
  const [triggetGetNews] = useLazyGetNewsTodayQuery();
  const checkTodaNews = () => {
    triggetGetNews();
  };
  return (
    <div>
      <button onClick={checkTodaNews}>Check today news</button>
    </div>
  );
}
