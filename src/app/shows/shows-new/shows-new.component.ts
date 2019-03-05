import { Component, OnInit, OnChanges, Output, Input } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { RoomsService } from 'src/app/services/rooms.service';
import { Movie } from 'src/shared/movie.model';
import { Room } from 'src/shared/room.model';
import { Show } from '../../../shared/show.model';

@Component({
  selector: 'app-shows-new',
  templateUrl: './shows-new.component.html',
  styleUrls: ['./shows-new.component.css']
})
export class ShowsNewComponent implements OnInit {

  roomId: string;
  movieId: string;
  model: any = {};

  constructor(private showsService: ShowsService, private moviesService: MoviesService,
    private roomsService: RoomsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  onShowCreate(){
    this.moviesService.getMovieByTitle(this.model.movie)
      .subscribe(
        (movie: Movie) => this.movieId = movie._id,
        (error) => console.log(error),
        () => {
          console.log(this.movieId);

          this.roomsService.getRoomByNumber(this.model.room)
            .subscribe(
              (room: Room) => this.roomId = room._id,
              (error) => console.log(error),
              () => {
                console.log(this.roomId);

                this.showsService.postShows(this.model.movie, this.model.date, this.model.number, this.movieId, this.roomId)
                  .subscribe(
                    (response) => console.log(response), (error) => console.log(error), () => {
                    this.router.navigate(["shows"]);
                    });
              }
            )
        }
      )}
}

