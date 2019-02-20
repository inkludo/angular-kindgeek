import { Component, OnInit } from '@angular/core';
import { FavoriteMoviesService } from '../../services/favorite-movies.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

  constructor(private favoriteMoviesService: FavoriteMoviesService) { }

  public listFavoriteMovies: any;

  ngOnInit() {
    this.listFavoriteMovies = this.favoriteMoviesService.getUserfavoriteList();
  }

  removeFromList(movie){
    this.listFavoriteMovies = this.favoriteMoviesService.removeMovie(movie);
    this.listFavoriteMovies = this.favoriteMoviesService.getUserfavoriteList();
  }


}
