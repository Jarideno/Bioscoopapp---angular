import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-delete',
  templateUrl: './movies-delete.component.html',
  styleUrls: ['./movies-delete.component.css']
})
export class MoviesDeleteComponent implements OnInit {

  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onCancel(){
    this.router.navigateByUrl('movies');
  }

  onConfirm(){
    this.moviesService.deleteMovie(this.route.snapshot.params.id)
    .subscribe((response) => console.log(response), (error) => console.log(error), () => {
      this.router.navigate(["movies"]);
    });
  }
}
