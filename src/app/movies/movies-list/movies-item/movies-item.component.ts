import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../../shared/movie.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {
  @Input() movie: Movie;
  @Input() index: Number;

  constructor(private router: Router, private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onEditMovie(){
    this.router.navigateByUrl('movies/edit/' + this.movie._id);
  }

  onDeleteMovie(){
    this.router.navigateByUrl('movies/delete/' + this.movie._id);
  }
}
