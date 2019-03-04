import { Component, OnInit, Input } from '@angular/core';
import { Show } from 'src/shared/show.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-shows-item',
  templateUrl: './shows-item.component.html',
  styleUrls: ['./shows-item.component.css']
})
export class ShowsItemComponent implements OnInit {

  @Input() show: Show;
  @Input() index: Number;

  constructor(private router: Router, private showsService: ShowsService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onEditShow(){
    this.router.navigateByUrl('shows/edit/' + this.show._id);
  }

  onDeleteShow(test: any){
    this.router.navigateByUrl(`shows/delete/${this.show._id}/${this.show.movie}/${this.show.room}`);
  }

}
