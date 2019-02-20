import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {

  

  favoriteList: any;
  constructor() { }

  addMovie(movie: any) {
    this.favoriteList = this.getUserfavoriteList();
    if (!this.checkMovieInList(movie)) {
      
      this.favoriteList.push(movie);
      localStorage.setItem('movies', JSON.stringify(this.favoriteList));
    }
  }

  removeMovie(movie) {
    this.favoriteList = this.getUserfavoriteList();
    if (this.checkMovieInList(movie)) {
      this.favoriteList = this.favoriteList.filter(m => m.imdbID != movie.imdbID);
      localStorage.setItem('movies', JSON.stringify(this.favoriteList));
    }
  }


  checkMovieInList(movie) {
    this.favoriteList = this.getUserfavoriteList();
    
    for(const m of this.favoriteList) {
			if(m.imdbID == movie.imdbID) return true;
    }
    return false;
  }

  getUserfavoriteList() {
    return localStorage.getItem('movies') == null ? [] : JSON.parse(localStorage.getItem('movies'));
  }


}
