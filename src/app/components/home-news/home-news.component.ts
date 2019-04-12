import { Component, OnInit } from '@angular/core';
import { News } from '../news/News';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.css']
})
export class HomeNewsComponent implements OnInit {
  newsList: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getListNews();
  }

  getListNews() {
    this.newsService.getNews().subscribe(data => this.newsList = data, error => console.log(error));
  }

}
