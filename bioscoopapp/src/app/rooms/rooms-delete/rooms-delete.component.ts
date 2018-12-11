import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-rooms-delete',
  templateUrl: './rooms-delete.component.html',
  styleUrls: ['./rooms-delete.component.css']
})
export class RoomsDeleteComponent implements OnInit {

  constructor(private router: Router, private roomsService: RoomsService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onCancel(){
    this.router.navigateByUrl('rooms');
  }

  onConfirm(){
    this.roomsService.deleteRoom(this.route.snapshot.params.id)
    .subscribe((response) => console.log(response), (error) => console.log(error), () => {
      this.router.navigate(["rooms"]);
    });
  }
}
