import { Component, OnInit } from '@angular/core';
import { Show } from 'src/shared/show.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {

  shows: Show[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private showsService: ShowsService) { }

  ngOnInit() {
    console.log("ngoninit called")
    this.showsService.getShows()
    .subscribe(
      (shows: any[]) => this.shows = shows,
      (error) => console.log(error)
    )
  }

  onNewShow(){
    this.router.navigate(['shows/new']);
  }

  showShowDetails(index: number){
    this.router.navigateByUrl('shows/details/' + this.shows[index]._id);
  }

}
