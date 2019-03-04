import { Component, OnInit } from '@angular/core';
import { Room } from 'src/shared/room.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  selectedRoom: Room;

  constructor() { }

  ngOnInit() {
  }

}
