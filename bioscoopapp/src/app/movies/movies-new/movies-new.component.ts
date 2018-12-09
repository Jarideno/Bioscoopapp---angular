import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Movie } from '../../../shared/movie.model';


@Component({
  selector: 'app-movies-new',
  templateUrl: './movies-new.component.html',
  styleUrls: ['./movies-new.component.css']
})
export class MoviesNewComponent implements OnInit {

  model: any =  {};
  constructor() { }

  ngOnInit() {
  }

  onMovieCreate(){
    console.log(JSON.stringify(this.model));
    //movie: Movie = new Movie("", "", "", "", 1,1);
  }
}
