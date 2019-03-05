import { Movie } from 'src/shared/movie.model';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class MoviesService {
    movies: Movie[] = [];

    constructor(private http: Http){}

    getMovies() {
        return this.http.get('https://bioscoopapp-nodejs.herokuapp.com/api/movie')
          .pipe(map(
            (response: Response) => {
              const data = response.json();
              return data;
            }
          )
          ,catchError(
            (error: Response) => {
              return Observable.throw('Something went wrong');
            }
        ));
    }

    getMovieById(id: number){
      return this.http.get('https://bioscoopapp-nodejs.herokuapp.com/api/movie/' + id)
          .pipe(map(
            (response: Response) => {
              const data = response.json();
              return data;
            }
          )
          ,catchError(
            (error: Response) => {
              return Observable.throw('Something went wrong');
            }
        ));
    }

    getMovieByTitle(movieTitle: string){
      return this.http.get('https://bioscoopapp-nodejs.herokuapp.com/api/movie?title=' + movieTitle)
          .pipe(map(
            (response: Response) => {
              const data = response.json();
              return data;
            }
          )
          ,catchError(
            (error: Response) => {
              return Observable.throw('Something went wrong');
            }
        ));
    }

    postMovies(title: string, description: string, director: string, writers: string, imdbScore: number, length: number) {
    let movie = new Movie(title, description, director, writers, imdbScore, length);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://bioscoopapp-nodejs.herokuapp.com/api/movie', movie, {headers: headers});
    }

    putMovies(title: string, description: string, director: string, writers: string, imdbScore: number, length: number, id: string) {
        let movie = new Movie(title, description, director, writers, imdbScore, length);
        const headers = new Headers({'Content-Type': 'application/json'});
        console.log(id);
        return this.http.put('https://bioscoopapp-nodejs.herokuapp.com/api/movie/' + id, movie, {headers: headers});
    }

    deleteMovie(id: string){
      console.log(id);
      return this.http.delete('https://bioscoopapp-nodejs.herokuapp.com/api/movie/' + id);
    }
}


