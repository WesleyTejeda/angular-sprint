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

  constructor(private httpClient: HttpClient) { }

  getPosts(search:string){
    this.query = search;
    console.log(this.url+this.query+this.key);
    return this.httpClient.get(this.url+this.query+this.key);
  }

  getSymbols(){
    return this.httpClient.get(this.symbolUrl);
  }
}
