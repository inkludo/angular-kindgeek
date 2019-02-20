import { Movie } from './../../models/movie';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more-info-btn',
  templateUrl: './more-info-btn.component.html',
  styleUrls: ['./more-info-btn.component.scss']
})
export class MoreInfoBtnComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() 
  public id: string;

  

  goToMoviePage(id) {
    this.router.navigate(['/omdb/search', id], {
      queryParamsHandling: "merge"
    });
  }

  ngOnInit() {
  }

}
