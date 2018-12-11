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
        return this.http.get('http://localhost:3000/api/show')
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
      return this.http.get('http://localhost:3000/api/show/' + id)
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

    postShows() {
    
    }

    putShows() {
        
    }

    deleteShow(){
      
    }
}