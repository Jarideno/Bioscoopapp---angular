import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Show } from '../../../shared/show.model';

@Component({
  selector: 'app-shows-edit',
  templateUrl: './shows-edit.component.html',
  styleUrls: ['./shows-edit.component.css']
})
export class ShowsEditComponent implements OnInit {

  model: any =  {};
  show: Show;

  constructor(private showsService: ShowsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showsService.getShowById(this.route.snapshot.params.id)
    .subscribe((show: Show) => this.show = show,
    (error) => console.log(error), () => {
      this.model["movie"] = this.show.movie;
      this.model["date"] = this.show.date;
      this.model["room"] = this.show.room;
    });
  }

  onShowEdit(){
    this.showsService.putShows(this.model.movie, this.model.date, this.route.snapshot.params.id)
      .subscribe((response) => console.log(response), (error) => console.log(error), () => {
        this.router.navigate(["shows"]);
      });
  }
}
