import { FavoriteMoviesService } from './../../services/favorite-movies.service';
import { Movie } from './../../models/movie';
import { OmdbService } from './../../services/omdb.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit, OnDestroy {

  constructor(private omdbService: OmdbService, private router: Router, private favoriteMoviesService: FavoriteMoviesService) { }

  public searchControl = new FormControl('');
  private listMovies: Movie[];
  subscription: Subscription;
  subscriptionDetails: Subscription;

  


  ngOnInit() {
  this.subscription =
    this.searchControl
      .valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(search => this.omdbService.getListMovies(search)))
      .subscribe(
        res => this.listMovies = res,
        
        err => console.log('ERROR!:', err));
      
       

       
  }

  

  ngOnDestroy(): void {this.subscription.unsubscribe();}

  


}
