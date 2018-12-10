import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesNewComponent } from './movies/movies-new/movies-new.component';
import { MoviesEditComponent } from './movies/movies-edit/movies-edit.component';
import { MoviesDeleteComponent } from './movies/movies-delete/movies-delete.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent},
  { path: 'movies/new', component: MoviesNewComponent},
  { path: 'movies/edit/:id', component: MoviesEditComponent},
  { path: 'movies/delete/:id', component: MoviesDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
