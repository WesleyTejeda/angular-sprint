import { Component, OnInit } from '@angular/core';
import { GetService } from '../services/get.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  news:any = [{}];

  constructor(private getService: GetService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.getService.getNews().subscribe(data => {
      this.news = data;
      this.news.forEach((listing:any) => {
        if(listing.datetime){
          listing.datetime = this.convertUnix(listing.datetime);
        }
      });
      console.log(this.news);
    })
  }

  convertUnix(unixStamp:number){
    let time = new Date(unixStamp * 1000);
    return time.toLocaleString();
  }
}
