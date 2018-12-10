import { Movie } from 'src/shared/movie.model';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class MoviesService {
    // movie: Movie = new Movie("Sherlock Holmes 1","Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.","Guy Ritchie","Michael Robert Johnson, Anthony Peckham",7.6,128, "1");
    // movie2: Movie = new Movie("Sherlock Holmes 2: A game of shadows","Sherlock Holmes and his sidekick Dr. Watson join forces to outwit and bring down their fiercest adversary, Professor Moriarty.","Guy Ritchie","Michael Robert Johnson, Anthony Peckham",7.5,129, "2");
    // movie3: Movie = new Movie("Sherlock Holmes 1","Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.","Guy Ritchie","Michael Robert Johnson, Anthony Peckham",7.6,128, "3");
    // movie4: Movie = new Movie("Sherlock Holmes 1","Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.","Guy Ritchie","Michael Robert Johnson, Anthony Peckham",7.6,128, "4");
    movies: Movie[] = [];

    constructor(private http: Http){

    }


    addMovie(title: string, description: string, director: string, writers: string, imdbScore: number, length: number){
        this.movies.push(new Movie(title, description, director, writers, imdbScore, length));
    }

    getMovies() {
        return this.http.get('http://localhost:3000/api/movie')
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
}


