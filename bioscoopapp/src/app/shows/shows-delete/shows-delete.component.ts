import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowsService } from 'src/app/services/shows.service';
import { RoomsService } from 'src/app/services/rooms.service';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/shared/movie.model';
import { Room } from 'src/shared/room.model';

@Component({
  selector: 'app-shows-delete',
  templateUrl: './shows-delete.component.html',
  styleUrls: ['./shows-delete.component.css']
})
export class ShowsDeleteComponent implements OnInit {

  movieId: string;
  roomId: string;

  constructor(private showsService: ShowsService, private moviesService: MoviesService,
    private roomsService: RoomsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onCancel(){
    this.router.navigateByUrl('shows');
  }

  onConfirm(){
    this.moviesService.getMovieByTitle(this.route.snapshot.params.movie)
      .subscribe(
        (movie: Movie) => this.movieId = movie._id,
        (error) => console.log(error),
        () => {
          console.log(this.movieId);

          this.roomsService.getRoomByNumber(this.route.snapshot.params.number)
            .subscribe(
              (room: Room) => this.roomId = room._id,
              (error) => console.log(error),
              () => {
                console.log(this.roomId);

                this.showsService.deleteShow(this.movieId, this.route.snapshot.params.id, this.roomId)
                  .subscribe(
                    (response) => console.log(response), (error) => console.log(error), () => {
                    this.router.navigate(["shows"]);
                  });
              }
            )
        }
      )}
  }
