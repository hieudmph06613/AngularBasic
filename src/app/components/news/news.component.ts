import { Component, OnInit } from '@angular/core';
import { News } from './News';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getListNews();
  }

  getListNews(){
    this.newsService.getNews().subscribe(data => this.newsList = data, error => console.log(error));
  }

  deleteNews(news) {
    this.newsService.deleteNews(news).subscribe(data => {
      this.newsList = this.newsList.filter(item => item.newsId !== data.newsId)
    })
    alert('A news has been deleted!');
  }

}
