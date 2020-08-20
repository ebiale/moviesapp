import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [
  ]
})
export class MovieComponent implements OnInit {

  movie: any;
  previousPage: string = '';
  search: string = ''

  constructor(public ms: MoviesService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.previousPage = params['page'];
      if (params['search']) {
        this.search = params['search'];
      }


      this.ms.getMovieById(params['id']).subscribe(res => {
        this.movie = res;
      })
    })
   }

  ngOnInit(): void {
  }

}
