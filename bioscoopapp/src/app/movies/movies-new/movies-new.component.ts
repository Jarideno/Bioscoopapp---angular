import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';
//import { Movie } from '../../../shared/movie.model';


@Component({
  selector: 'app-movies-new',
  templateUrl: './movies-new.component.html',
  styleUrls: ['./movies-new.component.css']
})
export class MoviesNewComponent implements OnInit {

  model: any =  {};
  constructor(private moviesService: MoviesService,
    private router: Router) { }

  ngOnInit() {
  }

  onMovieCreate(){
    console.log(this.model);
    this.moviesService.addMovie(this.model.title, 
      this.model.description, 
      this.model.director, 
      this.model.writers, 
      this.model.imdbScore, 
      this.model.length);

      this.router.navigate(['movies']);
  }
}
