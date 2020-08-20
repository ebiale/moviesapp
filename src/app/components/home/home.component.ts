import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit, OnDestroy {
  weekMovies: any;
  kidsMovies: any;
  populars: any;
  subscriptions: Subscription[] = [];

  constructor(private ms: MoviesService) {
    this.subscriptions.push(
      this.ms.getThisWeek().subscribe((res) => {
        this.weekMovies = res;
      })
    );

    this.subscriptions.push(
      this.ms.forKids().subscribe((res) => {
        this.kidsMovies = res;
      })
    );

    this.subscriptions.push(
      this.ms.getPopularMovies().subscribe((res) => {
        this.populars = res;
      })
    );
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit(): void {}
}
