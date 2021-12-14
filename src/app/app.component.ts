import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { TopNewsComponent } from './top-news/top-news.component';
import { GetService } from './services/get.service';
import { OnInit } from '@angular/core';
import { query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-sprint';
  symbol:string = '';
  // symbolBank:any = [{}];
  // reducedBank:any = [];
  // suggested:any = [];
  result:any = [];
  // news:any = [{}];
  companyProfile:any = {
    country: "",
    currency: "",
    exchange: "",
    finnhubIndustry: "",
    ipo: "",
    logo: "",
    marketCapitalization: 0,
    name: "",
    phone: "",
    shareOutstanding: 0,
    ticker: "",
    weburl: ""
  };
  // private url = `https://finnhub.io/api/v1/search?q=${this.symbol}&token=c0mtnhf48v6tkq13l9bg`;

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  //   console.log("changing");
  //     this.filterResults(this.symbol);
  // }

  // ngDoCheck(): void {
  //   if(this.symbol.length >= 2){
  //     this.suggested = this.filterResults(this.symbol);
  //     console.log(this.suggested, "suggested array");
  //     console.log(this.symbol)
  //   }
  // }

  ngOnInit(): void {
      // this.getService.getSymbols().subscribe(data => {
      //   this.symbolBank = data;
      //   console.log(this.symbolBank);
      // })
      // this.getNews();
  }

  constructor(private getService: GetService){}
  getData(){
    // console.log(this.symbol);
    this.getService.getPosts(this.symbol).subscribe((data:any) => {
      this.result = data.result[0];
      console.log(this.result);
      this.getCompanyInfo(this.result.symbol);
    });
  }

  // filterResults(symbol:string){
  //   // console.log(symbol);
  //   return this.symbolBank.result.filter((data:any) => {
  //     if(data.symbol.includes(symbol)){
  //       // console.log(data)
  //       return data
  //     }
  //   });
  // }

  // getNews(){
  //   this.getService.getNews().subscribe(data => {
  //     this.news = data;
  //     this.news.forEach((listing:any) => {
  //       if(listing.datetime){
  //         listing.datetime = this.convertUnix(listing.datetime);
  //       }
  //     });
  //     console.log(this.news);
  //   })
  // }

  // convertUnix(unixStamp:number){
  //   let time = new Date(unixStamp * 1000);
  //   return time.toLocaleString();
  // }

  getCompanyInfo(companySymbol:string){
    if(query.length != 0){
      this.getService.getCompany(companySymbol).subscribe(data => {
        this.companyProfile = data;
        console.log(this.companyProfile);
      })
    }
  }
}
