import { Component, OnInit, Input } from '@angular/core';
import { Room } from 'src/shared/room.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms-item',
  templateUrl: './rooms-item.component.html',
  styleUrls: ['./rooms-item.component.css']
})
export class RoomsItemComponent implements OnInit {

  @Input() room: Room;
  @Input() index: Number;
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onEditRoom(){
    this.router.navigateByUrl('rooms/edit/' + this.room._id);
  }

  onDeleteRoom(){
    this.router.navigateByUrl('rooms/delete/' + this.room._id);
  }
}
