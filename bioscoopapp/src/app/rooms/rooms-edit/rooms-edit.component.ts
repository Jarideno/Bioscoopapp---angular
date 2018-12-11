import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-rooms-edit',
  templateUrl: './rooms-edit.component.html',
  styleUrls: ['./rooms-edit.component.css']
})
export class RoomsEditComponent implements OnInit {
  model: any = {};

  constructor(private router: Router, private roomsService: RoomsService, private route: ActivatedRoute) { }

  ngOnInit() {
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
