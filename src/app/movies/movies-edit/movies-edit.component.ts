import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../../../shared/movie.model';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent implements OnInit {

  model: any =  {};
  movie: Movie;

  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.moviesService.getMovieById(this.route.snapshot.params.id)
    .subscribe((movie: Movie) => this.movie = movie,
    (error) => console.log(error), () => {
      this.model["title"] = this.movie.title;
      this.model["description"] = this.movie.description;
      this.model["director"] = this.movie.director;
      this.model["writers"] = this.movie.writers;
      this.model["imdbScore"] = this.movie.imdbScore;
      this.model["length"] = this.movie.length;
    });
  }

  onMovieEdit(){
    this.moviesService.putMovies(this.model.title, 
      this.model.description, 
      this.model.director, 
      this.model.writers, 
      this.model.imdbScore, 
      this.model.length,
      this.route.snapshot.params.id)
      .subscribe((response) => console.log(response), (error) => console.log(error), () => {
        this.router.navigate(["movies"]);
      });
  }
}

