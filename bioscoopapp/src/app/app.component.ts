import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesService, RoomsService]
})
export class AppComponent {
  title = 'bioscoopapp';
}
