import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers:[ CinemaService ]
})
export class MyMovieComponentComponent implements OnInit {
  movieId: Number;
  movie = {};

  constructor(private route: ActivatedRoute, public cinema: CinemaService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.movieId = Number(params['id']) - 1);
    this.movie = this.cinema.getMovie(this.movieId);
  }

}
