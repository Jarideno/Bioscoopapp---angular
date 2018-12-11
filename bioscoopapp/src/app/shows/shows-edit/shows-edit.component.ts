import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shows-edit',
  templateUrl: './shows-edit.component.html',
  styleUrls: ['./shows-edit.component.css']
})
export class ShowsEditComponent implements OnInit {

  model: any =  {};

  constructor(private showsService: ShowsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onShowEdit(){
    //put request
  }
}
