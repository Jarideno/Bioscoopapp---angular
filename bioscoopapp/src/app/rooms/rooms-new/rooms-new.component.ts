import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms-new',
  templateUrl: './rooms-new.component.html',
  styleUrls: ['./rooms-new.component.css']
})
export class RoomsNewComponent implements OnInit {


  model: any =  {};

  constructor(private roomsService: RoomsService, private router: Router) { }

  ngOnInit() {
  }

  onRoomCreate(){
    console.log(this.model);
    this.roomsService.postRooms(this.model.roomNumber, this.model.seats)
      .subscribe((response) => console.log(response), (error) => console.log(error), () => {
        this.router.navigate(["rooms"]);
      });
  }
}
