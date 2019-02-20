import { Subscription } from 'rxjs';
import { OmdbService } from './../../services/omdb.service';
import { Movie } from './../../models/movie';
import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FavoriteMoviesService } from '../../services/favorite-movies.service';

@Component({
  selector: 'app-favorite-btn',
  templateUrl: './favorite-btn.component.html',
  styleUrls: ['./favorite-btn.component.scss']
})
export class FavoriteBtnComponent implements OnInit, OnDestroy {

  constructor(private favoriteMoviesService: FavoriteMoviesService,
    private omdbService: OmdbService) {
     }

  @Input() movie: Movie;
  @Input() id: string;

  subscription: Subscription;
  favoriteMovie: any;

  

  addToCollection(id) {
    this.subscription = this.omdbService.getMovie(id).subscribe(movie => {
      this.favoriteMoviesService.addMovie(movie);
    });
    
    
  }
  removeFromCollection(movie) {
    this.favoriteMoviesService.removeMovie(this.movie);
  }

  checkMovieInList(movie) {
    return this.favoriteMoviesService.checkMovieInList(this.movie);
  }


  ngOnInit() {
   
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined)
      this.subscription.unsubscribe();
  }

}
