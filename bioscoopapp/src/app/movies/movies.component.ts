import { Component, OnInit } from '@angular/core';

import { Movie } from '../../shared/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  selectedMovie: Movie;

  constructor() { }

  ngOnInit() {
   
  }

}