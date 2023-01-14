import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

// change the localhost address by your port:
const apiURL = 'https://localhost:7145/api/Movies';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getAllMovies(): Observable<any> {
    return this.http.get<any>(apiURL + '/getMoviesList');
  }

  public addMovie(movie: Movie): Observable<any> {
    return this.http.post<any>(apiURL + '/add-Movie', movie);
  }

  public deleteMovie(name: string): Observable<string> {
    return this.http.delete<string>(apiURL + '/delete-movie/' + name);
  }
}
