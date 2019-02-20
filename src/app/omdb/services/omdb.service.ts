import { MovieList, Movie, MovieDetails, SimilarMoviesList, SimilarMovie } from './../models/movie';
import { Injectable } from '@angular/core';
import { catchError, map, debounceTime, distinctUntilChanged, switchMap, retry } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {



  constructor(private httpClient: HttpClient) { }

  private omdbUrl: string = 'http://www.omdbapi.com/?t=';
  private key: string = '&apikey=b4f7ca48&s=';

  private theMoviedbUrl: string = 'https://api.themoviedb.org/3/movie/';
  private movieDbApiKey: string = 'api_key=dc0021c5add695dfc39cbfe8e08846b1';


  
  getListMovies(term: string): Observable<Movie[]> {
    return this.httpClient.get<MovieList>(this.omdbUrl + this.key + term)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map(({ Search }) => Search)
      )
  }


  getMovie(id: string): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>(this.omdbUrl + this.key + '&i=' + id)
      .pipe(catchError(this._handleError))
  }

  getSimilarMovies(id: string): Observable<SimilarMovie[]> {
    return this.httpClient.get<SimilarMoviesList>(this.theMoviedbUrl + id + '/similar?' + this.movieDbApiKey)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map(({ results }) => results)
      )
  }



  private _handleError(err: HttpErrorResponse) {
    return throwError(err.error);
  }

}
