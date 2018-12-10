import { Component, OnInit, OnChanges, AfterViewChecked, DoCheck } from '@angular/core';
import { Movie } from 'src/shared/movie.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private moviesService: MoviesService) { }

  ngOnInit() {
    console.log("ngoninit called")
    this.moviesService.getMovies()
    .subscribe(
      (movies: any[]) => this.movies = movies,
      (error) => console.log(error)
    )
  }

  onNewMovie(){
    console.log('OnNewMovie() method called!');
    this.router.navigate(['movies/new']);
  }
}
