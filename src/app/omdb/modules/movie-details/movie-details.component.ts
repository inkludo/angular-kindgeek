import { MovieDetails } from './../../models/movie';
import { OmdbService } from './../../services/omdb.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private omdbService: OmdbService) { }

  public movie: MovieDetails;

  subscription: Subscription;




  ngOnInit() {
    this.subscription = this.route.params.pipe(
      map(params => params['id'])
    )
      .subscribe((id) => {
        this.omdbService.getMovie(id)
          .subscribe(movie => {
            this.movie = movie;
          });
      });
  }

  ngOnDestroy(): void { this.subscription.unsubscribe(); }
}
