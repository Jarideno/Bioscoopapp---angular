import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
