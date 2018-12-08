import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../../shared/movie.model';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {
  @Input() movie: Movie;
  @Input() index: Number;

  constructor() { }

  ngOnInit() {
  }

}
