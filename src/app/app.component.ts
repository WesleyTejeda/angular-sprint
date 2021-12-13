import { Component } from '@angular/core';
import { GetService } from './services/get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sprint';
  symbol:string = '';
  // private url = `https://finnhub.io/api/v1/search?q=${this.symbol}&token=c0mtnhf48v6tkq13l9bg`;

  constructor(private getService: GetService){}
  getData(){
    console.log(this.symbol);
    console.log(this.getService.getPosts(this.symbol).subscribe(data => {
      console.log(data);
    }));
  }
}
