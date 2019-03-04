import { Component, OnInit } from '@angular/core';
import { Show } from 'src/shared/show.model';
import { ShowsService } from 'src/app/services/shows.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shows-details',
  templateUrl: './shows-details.component.html',
  styleUrls: ['./shows-details.component.css']
})
export class ShowsDetailsComponent implements OnInit {

  show: Show;

  constructor(private showsService: ShowsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showsService.getShowById(this.route.snapshot.params.id)
    .subscribe((show: Show) => this.show = show,
    (error) => console.log(error));
  }

  back(){
    this.router.navigateByUrl('shows');
  }
}
