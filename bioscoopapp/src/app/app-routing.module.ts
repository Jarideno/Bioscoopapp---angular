import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesNewComponent } from './movies/movies-new/movies-new.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent},
  { path: 'movies/new', component: MoviesNewComponent},
  //{ path: 'movies/delete/:id', component: MoviesDeleteComponent},
  { path: 'movies/edit/:id', component: MoviesNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
