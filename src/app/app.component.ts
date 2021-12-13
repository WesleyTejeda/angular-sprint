import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetService } from './services/get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sprint';
  private url = "https://finnhub.io/api/v1/search?q=apple&token=c0mtnhf48v6tkq13l9bg"

  constructor(private getService: GetService){}
  getData(){
    console.log(this.getService.getPosts());
  }
}
