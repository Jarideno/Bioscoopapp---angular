import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../../shared/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {
  @Input() movie: Movie;
  @Input() index: Number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEditMovie(){
    this.router.navigate(['movies/edit/' + this.movie._id]);
  }

  onDeleteMovie(){
    //http DELETE request with this.movie._id
  }
}
