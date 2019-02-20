import { Subscription } from 'rxjs';
import { SimilarMovie } from './../../models/movie';
import { OmdbService } from './../../services/omdb.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.scss']
})
export class SimilarMoviesComponent implements OnInit, OnDestroy {

  constructor(private omdbService: OmdbService) { }

  @Input()
  public id: string;

  subscription: Subscription;

  private listMovies: SimilarMovie[];

  ngOnInit() {
    this.subscription = this.omdbService.getSimilarMovies(this.id)
      .subscribe(
        res => this.listMovies = res,
      );
  }

  ngOnDestroy(): void { this.subscription.unsubscribe(); }

}
