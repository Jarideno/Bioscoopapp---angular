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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent},
  { path: 'movies/new', component: MoviesNewComponent},
  { path: 'movies/edit/:id', component: MoviesEditComponent},
  { path: 'movies/delete/:id', component: MoviesDeleteComponent},
  { path: 'movies/details/:id', component: MoviesDetailsComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'rooms/new', component: RoomsNewComponent},
  { path: 'rooms/edit/:id', component: RoomsEditComponent},
  { path: 'rooms/delete/:id', component: RoomsDeleteComponent},
  { path: 'rooms/details/:id', component: RoomsDetailsComponent},
  { path: 'shows', component: ShowsComponent},
  { path: 'shows/new', component: ShowsNewComponent},
  { path: 'shows/edit/:id', component: ShowsEditComponent},
  { path: 'shows/delete/:id', component: ShowsDeleteComponent},
  { path: 'shows/details/:id', component: ShowsDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
