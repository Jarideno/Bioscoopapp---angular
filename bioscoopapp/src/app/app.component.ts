import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { RoomsService } from './services/rooms.service';
import { ShowsService } from './services/shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesService, RoomsService, ShowsService]
})
export class AppComponent {
  title = 'bioscoopapp';
}
