import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesNewComponent } from './movies/movies-new/movies-new.component';
import { MoviesEditComponent } from './movies/movies-edit/movies-edit.component';
import { MoviesDeleteComponent } from './movies/movies-delete/movies-delete.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsNewComponent } from './rooms/rooms-new/rooms-new.component';
import { RoomsEditComponent } from './rooms/rooms-edit/rooms-edit.component';
import { RoomsDeleteComponent } from './rooms/rooms-delete/rooms-delete.component';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { RoomsDetailsComponent } from './rooms/rooms-details/rooms-details.component';
import { ShowsComponent } from './shows/shows.component';
import { ShowsNewComponent } from './shows/shows-new/shows-new.component';
import { ShowsEditComponent } from './shows/shows-edit/shows-edit.component';
import { ShowsDeleteComponent } from './shows/shows-delete/shows-delete.component';
import { ShowsDetailsComponent } from './shows/shows-details/shows-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', canActivate: [AuthGuard], component: RegisterComponent},
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent},
  { path: 'movies/new', canActivate: [AuthGuard], component: MoviesNewComponent},
  { path: 'movies/edit/:id', canActivate: [AuthGuard], component: MoviesEditComponent},
  { path: 'movies/delete/:id', canActivate: [AuthGuard], component: MoviesDeleteComponent},
  { path: 'movies/details/:id', canActivate: [AuthGuard], component: MoviesDetailsComponent},
  { path: 'rooms', canActivate: [AuthGuard], component: RoomsComponent},
  { path: 'rooms/new', canActivate: [AuthGuard], component: RoomsNewComponent},
  { path: 'rooms/edit/:id', canActivate: [AuthGuard], component: RoomsEditComponent},
  { path: 'rooms/delete/:id', canActivate: [AuthGuard], component: RoomsDeleteComponent},
  { path: 'rooms/details/:id', canActivate: [AuthGuard], component: RoomsDetailsComponent},
  { path: 'shows', canActivate: [AuthGuard], component: ShowsComponent},
  { path: 'shows/new', canActivate: [AuthGuard], component: ShowsNewComponent},
  { path: 'shows/edit/:id', canActivate: [AuthGuard], component: ShowsEditComponent},
  { path: 'shows/delete/:id/:movie/:number', canActivate: [AuthGuard], component: ShowsDeleteComponent},
  { path: 'shows/details/:id', canActivate: [AuthGuard], component: ShowsDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
