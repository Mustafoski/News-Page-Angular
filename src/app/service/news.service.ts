import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  landingNews(url: string): Observable<any> {
    return this.http.get(
      `https://newsapi.org/v2/${url}&apiKey=d1a47faa223344649b4a8e18e36a4179`
    );
  }
}
