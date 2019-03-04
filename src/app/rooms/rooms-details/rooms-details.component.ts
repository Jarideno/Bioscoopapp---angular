import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Room } from 'src/shared/room.model';

@Component({
  selector: 'app-rooms-details',
  templateUrl: './rooms-details.component.html',
  styleUrls: ['./rooms-details.component.css']
})
export class RoomsDetailsComponent implements OnInit {

  room: Room;

  constructor(private roomsService: RoomsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.roomsService.getRoomById(this.route.snapshot.params.id)
    .subscribe((room: Room) => this.room = room,
    (error) => console.log(error));
  }

  back(){
    this.router.navigateByUrl('rooms');
  }
}
