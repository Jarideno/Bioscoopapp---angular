import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesItemComponent } from './movies/movies-list/movies-item/movies-item.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesNewComponent } from './movies/movies-new/movies-new.component';
import { MoviesEditComponent } from './movies/movies-edit/movies-edit.component';
import { HttpModule } from '@angular/http';
import { MoviesDeleteComponent } from './movies/movies-delete/movies-delete.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsDeleteComponent } from './rooms/rooms-delete/rooms-delete.component';
import { RoomsEditComponent } from './rooms/rooms-edit/rooms-edit.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { RoomsNewComponent } from './rooms/rooms-new/rooms-new.component';
import { RoomsItemComponent } from './rooms/rooms-list/rooms-item/rooms-item.component';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { RoomsDetailsComponent } from './rooms/rooms-details/rooms-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MoviesItemComponent,
    HomeComponent,
    MoviesComponent,
    MoviesNewComponent,
    MoviesEditComponent,
    MoviesDeleteComponent,
    RoomsComponent,
    RoomsDeleteComponent,
    RoomsEditComponent,
    RoomsListComponent,
    RoomsNewComponent,
    RoomsItemComponent,
    MoviesDetailsComponent,
    RoomsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
