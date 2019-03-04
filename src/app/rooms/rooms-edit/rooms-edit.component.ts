import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';
import { Room } from '../../../shared/room.model';

@Component({
  selector: 'app-rooms-edit',
  templateUrl: './rooms-edit.component.html',
  styleUrls: ['./rooms-edit.component.css']
})
export class RoomsEditComponent implements OnInit {

  model: any = {};
  room: Room;
  constructor(private router: Router, private roomsService: RoomsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.roomsService.getRoomById(this.route.snapshot.params.id)
    .subscribe((room: Room) => this.room = room,
    (error) => console.log(error), () => {
      this.model["roomNumber"] = this.room.roomNumber;
      this.model["seats"] = this.room.seats;
    });
  }

  onRoomEdit(){
    this.roomsService.putRooms(this.model.roomNumber,
      this.model.seats,
      this.route.snapshot.params.id)
      .subscribe((response) => console.log(response), (error) => console.log(error), () => {
        this.router.navigate(["rooms"]);
      });
  }
}
