import { Component, OnInit } from '@angular/core';
import { Room } from 'src/shared/room.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {
  rooms: Room[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private roomsService: RoomsService) { }

  ngOnInit() {
    console.log("ngoninit called")
    this.roomsService.getRooms()
    .subscribe(
      (rooms: any[]) => this.rooms = rooms,
      (error) => console.log(error)
    )
  }

  onNewRoom(){
    console.log('OnNewRoom() method called!');
    this.router.navigate(['rooms/new']);
  }

  showRoomDetails(index: number){
    this.router.navigateByUrl('rooms/details/' + this.rooms[index]._id);
  }

}
