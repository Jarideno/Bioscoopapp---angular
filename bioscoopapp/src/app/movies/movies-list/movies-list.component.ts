import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/shared/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movie: Movie = new Movie("test","test","test","test",5,125);
  movie2: Movie = new Movie("test","test","test","test",5,125);
  movies: Movie[];

  constructor() { }

  ngOnInit() {
    this.movies = [];
    this.movies.push(this.movie);
    this.movies.push(this.movie2);
  }

  onNewMovie(){
    console.log('OnNewMovie() method called!');
  }
}
