import { Component, OnInit, Input, Output } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/shared/movie.model';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

  movie: Movie;

  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.moviesService.getMovieById(this.route.snapshot.params.id)
    .subscribe((movie: Movie) => this.movie = movie,
    (error) => console.log(error));
  }

}
