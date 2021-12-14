import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  // results:any = [];
  query:string = '';
  private url:string = 'https://finnhub.io/api/v1/search?q=';
  private symbolUrl:string = 'https://finnhub.io/api/v1/search?q=&token=c0mtnhf48v6tkq13l9bg'
  private key:string = '&token=c0mtnhf48v6tkq13l9bg';
  private newsUrl = 'https://finnhub.io/api/v1/news?category=general&token=c0mtnhf48v6tkq13l9bg';
  private companyUrl = 'https://finnhub.io/api/v1/stock/profile2?symbol='

  constructor(private httpClient: HttpClient) { }

  getPosts(search:string){
    this.query = search;
    console.log(this.url+this.query+this.key);
    return this.httpClient.get(this.url+this.query+this.key);
  }
  
  getNews(){
    return this.httpClient.get(this.newsUrl);
  }

  // getSymbols(){
  //   return this.httpClient.get(this.symbolUrl);
  // }

  getCompany(companySymbol:string){
    return this.httpClient.get(this.companyUrl+companySymbol+this.key);
  }
}
