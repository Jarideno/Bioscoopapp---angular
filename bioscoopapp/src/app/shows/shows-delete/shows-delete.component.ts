import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-shows-delete',
  templateUrl: './shows-delete.component.html',
  styleUrls: ['./shows-delete.component.css']
})
export class ShowsDeleteComponent implements OnInit {

  constructor(private router: Router, private showsService: ShowsService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onCancel(){
    this.router.navigateByUrl('shows');
  }

  onConfirm(){
    //delete request
  }
}
