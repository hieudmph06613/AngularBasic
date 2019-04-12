import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';
import { News } from '../news/News';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  news: News = new News();

  constructor(private newsService: NewsService, private route: Router) { }

  ngOnInit() {
  }

  addProduct() {
    this.newsService.addNews(this.news).subscribe(() => {
      this.route.navigate(['/news']);
      alert('A news has been added sucessfully!')
      this.newsService.reload();
    })
  }

  onSubmit(formAddNews) {
    if (formAddNews.valid) {
      this.newsService.addNews(formAddNews.value).subscribe(() => {
        this.route.navigate(['/news']);
        alert('A news has been added sucessfully!')
        this.newsService.reload();
      })
    } else{
      alert('Add a new news has a error!');
    }
  }

}
