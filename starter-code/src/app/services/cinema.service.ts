import { Injectable } from '@angular/core';

interface movieInterface {
  id: Number,
  title: String,
  poster: String,
  synopsis: String,
  genres: Array<String>,
  year: Number,
  director: String,
  actors: Array<String>,
  hours: Array<String>,
  room: Number
}

@Injectable()
export class CinemaService {

movies: Array<movieInterface> = [];

  constructor() { }

  getMovies() {
  return this.movies;
 }

  getMovie(id) {
    return this.movies.filter (e => e.id == id);
 }

}
