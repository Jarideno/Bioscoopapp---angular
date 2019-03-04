import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { RoomsService } from './services/rooms.service';
import { ShowsService } from './services/shows.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'bioscoopapp';
}
