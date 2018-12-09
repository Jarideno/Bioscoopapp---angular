import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/shared/movie.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movie: Movie = new Movie("Sherlock Holmes 1","Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.","Guy Ritchie","Michael Robert Johnson, Anthony Peckham",7.6,128);
  movie2: Movie = new Movie("Sherlock Holmes 2: A game of shadows","Sherlock Holmes and his sidekick Dr. Watson join forces to outwit and bring down their fiercest adversary, Professor Moriarty.","Guy Ritchie","Michael Robert Johnson, Anthony Peckham",7.5,129);
  movie3: Movie = new Movie("Sherlock Holmes 1","Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.","Guy Ritchie","Michael Robert Johnson, Anthony Peckham",7.6,128);
  movie4: Movie = new Movie("Sherlock Holmes 1","Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.","Guy Ritchie","Michael Robert Johnson, Anthony Peckham",7.6,128);
  movies: Movie[];

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.movies = [];
    this.movies.push(this.movie);
    this.movies.push(this.movie2);
    this.movies.push(this.movie3);
    this.movies.push(this.movie4);
  }

  onNewMovie(){
    console.log('OnNewMovie() method called!');
    this.router.navigate(['movies/new']);
  }
}
