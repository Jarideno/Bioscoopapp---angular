import { Component, OnInit } from '@angular/core';
import { Show } from 'src/shared/show.model';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  selectedShow: Show;

  constructor() { }

  ngOnInit() {
  }

}
