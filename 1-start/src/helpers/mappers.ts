import { IFilm, Film } from "../interface/film.interface";


export const mapApiToFilm = (apiFilm: IFilm): Film => {
	const actorsArr = (apiFilm['#ACTORS'] || '')
	.split(',')
	.map(actor => actor.trim())
	.filter(Boolean);
	
	return {
		id: apiFilm['#IMDB_ID'] ?? `${apiFilm['#TITLE']}-${apiFilm['#YEAR']}`,
		title: apiFilm['#TITLE'],
		year: Number(apiFilm['#YEAR']),
		img: apiFilm['#IMG_POSTER'] ,
		rating:Number(apiFilm['#RANK']),
		actors: actorsArr,
		imdbUrl: apiFilm['#IMDB_URL'],
	}
}
