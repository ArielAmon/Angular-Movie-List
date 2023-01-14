import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

// change the localhost address by your port:
const apiURL = 'https://localhost:44305';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

    public getAllMovies(): Observable<any> {
        return this.http.get<any>(apiURL + '/api/home/');
    }

    public addMovie(movie: Movie): Observable<any> {
        var jsn = { name: movie.name,
                    genere: movie.geners,
                    year: movie.year,
                    length: movie.length,
                    rank: movie.rank,
                  };
        return this.http.post<any>(apiURL + '/api/home/', jsn);
    }

    public deleteMovie(name: string): Observable<string> {
        return this.http.get<string>(apiURL + '/api/home/' + name);
    }
}
