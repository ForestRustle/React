import { FilmDetails, Review } from '../interface/film.interface';

export const mapApiToFilmDetails = (apiData: any): FilmDetails => {
  const short = apiData.short || {};
  const ratingsSummary = apiData.main?.ratingsSummary || {};

  const reviewData = short.review
    ? Array.isArray(short.review)
      ? short.review
      : [short.review]
    : [];


  const reviews: Review[] = reviewData.map((rev: any) => ({
    author: rev?.author?.name || 'Неизвестно',
    date: rev?.dateCreated || '',
    text: rev?.reviewBody || 'Отзыв отсутствует',
    rating: rev?.reviewRating?.ratingValue || 0,
    title: rev?.name || '',
  }));

  return {
    id: apiData.imdbId || short.url?.split('/tt')[1]?.replace('/', '') || '',
    title: short.name || apiData.titleText?.text || 'Без названия',
    year: short.datePublished
      ? new Date(short.datePublished).getFullYear()
      : apiData.releaseDate?.year || 0,
    img: short.image || apiData.primaryImage?.url || '',
    rating: ratingsSummary.aggregateRating ?? 0,
    actors: [],
    imdbUrl: short.url || `https://www.imdb.com/title/${apiData.imdbId}/`,
    description: short.description || 'Описание недоступно',
    reviews,
    genre: Array.isArray(short.genre) ? short.genre : [short.genre],
    dateCreated: short.dateCreated || '',
    duration: apiData.main?.runtime?.seconds
      ? Math.round(apiData.main.runtime.seconds / 60)
      : 0,
  };
};
