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
    this.showsService.putShows(this.model.movie, this.model.date, this.route.snapshot.params.id)
      .subscribe((response) => console.log(response), (error) => console.log(error), () => {
        this.router.navigate(["shows"]);
      });
  }
}
