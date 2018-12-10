import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent implements OnInit {

  model: any =  {};

  constructor() { }

  ngOnInit() {
  }

  onMovieEdit(){
    //http PUT request
  }
}
