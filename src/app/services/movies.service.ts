
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey: string = '438391029873ce7f0915b7df395ae1a0';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
  imgPath: string = 'image.tmdb.org/t/p/w300'

  movies: any[] = [];

  constructor( private http: HttpClient) { }

  getPopularMovies() {
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc`;

    return this.http.jsonp(url, 'callback').pipe(
      map((res: any) => res.results)
    )
  }

  searchMovie( text:string ){
    let url = this.getUrl(`/search/movie?query=${ text }&sort_by=popularity.desc&`);
    return this.http.jsonp( url, 'callback' ).pipe(
      map((res: any) => {
        this.movies = res.results;
        res.results
        console.log(res);
      })
    );
  }

  getThisWeek() {
    const from = new Date();
    const to = new Date();

    to.setDate(to.getDate() + 7);

    let url = this.getUrl(`/discover/movie?`) + `&primary_release_date.gte=${this.dateToString(from)}&primary_release_date.lte=${this.dateToString(to)}`;
    return this.http.jsonp( url, 'callback' ).pipe(
      map((res: any) => res.results)
    );
  }

  forKids() {
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&certification.lte=G&certification_country=US`;

    return this.http.jsonp(url, 'callback').pipe(
      map((res: any) => res.results)
    )
  }

  getMovieById(id:string) {
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}`;

    return this.http.jsonp(url, 'callback');
  }

  private getUrl(query: string) {
    return `${ this.urlMoviedb }${query}api_key=${ this.apiKey }`;
  }

  private dateToString(date: Date) {
    return `${date.getFullYear()}-${date.getMonth()+1 < 10 ? 0 : ''}${date.getMonth()+1}-${date.getDate()}`
  }
}
