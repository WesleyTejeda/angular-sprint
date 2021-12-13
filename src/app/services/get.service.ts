import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  private url = "https://finnhub.io/api/v1/search?q=apple&token=c0mtnhf48v6tkq13l9bg";
  results:any = [];

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    this.httpClient.get(this.url).subscribe(data => {this.results = data});
    return this.results;
    // return "service works"
  }
}
