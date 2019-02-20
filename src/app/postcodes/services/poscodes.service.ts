import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoscodesService {

  private readonly url = 'https://postcodes.io';

  constructor(private httpClient: HttpClient) {  }

  postcode(search: string): Observable<any> {
    return this.httpClient
      .get<{ status: number, error: string }>(`${this.url}/postcodes/${search}`)
      .pipe(
        catchError(this._handleError));
  }
  
  postcodeAutocomplete(search: string): Observable<string[]> {
    return this.httpClient
      .get<{ status: number, result: string[] }>(
        `${this.url}/postcodes/${search}/autocomplete`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map(({ result }) => result));
  }

  private _handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.message);
  }
}
