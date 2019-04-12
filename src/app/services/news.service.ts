import { Injectable } from '@angular/core';
import { DataNews } from '../components/news/MockNews';
import { News } from '../components/news/News';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private data = [...DataNews];
  private urlAPI = "http://5ca740a28e58df001460302a.mockapi.io/news";

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]>{
    return this.http.get<News[]>(this.urlAPI);
  }

  addNews(news): Observable<News> {
    // const newProduct = { id: this.data.length + 1, ...product };
    // this.data.push(newProduct);
    // console.log(this.data);
    return this.http.post<News>(this.urlAPI, news);
  }

  deleteNews(news): Observable<News> {
    return this.http.delete<News>(`${this.urlAPI}/${news.newsId}`);
  }

  reload(){
    location.reload();
  }
}
