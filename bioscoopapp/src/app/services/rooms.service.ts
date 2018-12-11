import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Room} from '../../shared/room.model';

@Injectable()
export class RoomsService {
    rooms: Room[] = [];

    constructor(private http: Http){}

    getRooms() {
        return this.http.get('https://bioscoopapp-nodejs.herokuapp.com/api/room')
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

    getRoomById(id: number){
      return this.http.get('https://bioscoopapp-nodejs.herokuapp.com/api/room/' + id)
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

    getRoomByNumber(roomNumber: number){
      return this.http.get('https://bioscoopapp-nodejs.herokuapp.com/api/room/number/' + roomNumber)
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

    postRooms(roomNumber: number, seats: number) {
    let room = new Room(roomNumber, seats);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://bioscoopapp-nodejs.herokuapp.com/api/room', room, {headers: headers});
    }

    putRooms(roomNumber: number, seats: number, id: string) {
        let room = new Room(roomNumber, seats);
        const headers = new Headers({'Content-Type': 'application/json'});
        console.log(id);
        return this.http.put('https://bioscoopapp-nodejs.herokuapp.com/api/room/' + id, room, {headers: headers});
    }

    deleteRoom(id: string){
      console.log(id);
      return this.http.delete('https://bioscoopapp-nodejs.herokuapp.com/api/room/' + id);
    }
}