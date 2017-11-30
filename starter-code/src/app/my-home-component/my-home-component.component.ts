import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers:[ CinemaService ]
})
export class MyHomeComponentComponent implements OnInit {

  moviess = [];

  constructor(public cinema: CinemaService) { }

  ngOnInit() {
    this.moviess = this.cinema.getMovies()
  }

}
