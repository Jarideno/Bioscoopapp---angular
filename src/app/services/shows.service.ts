import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Show } from 'src/shared/show.model';

@Injectable()
export class ShowsService {
    shows: Show[] = [];

    constructor(private http: Http){}

    getShows() {
        return this.http.get('https://bioscoopapp-nodejs.herokuapp.com/api/show')
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

    getShowById(id: number){
      return this.http.get('https://bioscoopapp-nodejs.herokuapp.com/api/show/' + id)
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

    postShows(movie: string, date: string, roomNumber: number, movieId: string, roomId: string) {
      let show = new Show(movie, date, roomNumber);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post(`https://bioscoopapp-nodejs.herokuapp.com/api/show/movie/${movieId}/room/${roomId}`, show, {headers: headers});
    }

    putShows(movie: string, date: string, showId: string) {
      let show = new Show(movie, date);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.put(`https://bioscoopapp-nodejs.herokuapp.com/api/show/${showId}`, show, {headers: headers});
    }

    deleteShow(movieId: string, showId: string, roomId: string){
      return this.http.delete(`https://bioscoopapp-nodejs.herokuapp.com/api/show/${showId}/movie/${movieId}/room/${roomId}`);
    }
}