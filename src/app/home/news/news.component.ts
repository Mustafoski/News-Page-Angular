import { NewsService } from './../../service/news.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  topNews: any = [];
  // tslint:disable-next-line: variable-name
  constructor(private _service: NewsService, private router: Router) {}

  ngOnInit(): void {
    this._service
      .landingNews(`top-headlines?pageSize=10&country=us&category=business`)
      .subscribe((result) => {
        console.log(result);
        this.topNews = result.articles;
      });
  }

  // tslint:disable-next-line: typedef
  onSelect(news: any) {
    this.router.navigate(['/detail', news.id]);
  }
}
