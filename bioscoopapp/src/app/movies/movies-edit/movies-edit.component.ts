import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent implements OnInit {

  model: any =  {};

  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
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
