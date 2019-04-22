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
  movies: Movie [] = [];
  movienames: String [] = [];
  selectedName: string = '';
  rooms: Room [] = [];
  roomnames: Number [] = [];
  selectedRoom: number;

  selectChangeHandler (event: any){
    this.selectedName = event.target.value;
  }

  selectChangeHandler2 (event: any){
    this.selectedRoom = event.target.value;
  }

  constructor(private showsService: ShowsService, private moviesService: MoviesService,
    private roomsService: RoomsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.moviesService.getMovies()
    .subscribe(
      (movies: any[]) => this.movies = movies,
      (error) => console.log(error),
      () => {
        this.movies.forEach(element => {
          console.log(element.title);
          this.movienames.push(element.title);
        });
      }
    )

    this.roomsService.getRooms()
    .subscribe(
      (rooms: any[]) => this.rooms = rooms,
      (error) => console.log(error),
      () => {
        this.rooms.forEach(element => {
          console.log(element.roomNumber);
          this.roomnames.push(element.roomNumber);
        });
      }
    )
  }

  onShowCreate(){
    console.log(this.selectedName);
    this.moviesService.getMovieByTitle(this.selectedName)
      .subscribe(
        (movie: Movie) => this.movieId = movie._id,
        (error) => console.log(error),
        () => {
          console.log(this.movieId);

          this.roomsService.getRoomByNumber(this.selectedRoom)
            .subscribe(
              (room: Room) => this.roomId = room._id,
              (error) => console.log(error),
              () => {
                console.log(this.roomId);

                this.showsService.postShows(this.selectedName, this.model.date, this.model.number, this.movieId, this.roomId)
                  .subscribe(
                    (response) => console.log(response), (error) => console.log(error), () => {
                    this.router.navigate(["shows"]);
                    });
              }
            )
        }
      )}

      
}

