import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgMovie',
})
export class ImgMoviePipe implements PipeTransform {
  transform(movie: any, poster: boolean = false, logo: boolean = false): any {
    const url = 'http://image.tmdb.org/t/p/w500';
    if (logo) {
      if (movie.logo_path) return url + movie.logo_path;
    } else {
      if (poster) {
        if (movie.poster_path) return url + movie.poster_path;
      }
      if (movie.backdrop_path) return url + movie.backdrop_path;
      if (movie.poster_path) return url + movie.poster_path;
    }

    return 'assets/no-image-found.png';
  }
}
