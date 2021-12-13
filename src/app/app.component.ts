import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { GetService } from './services/get.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-sprint';
  symbol:string = '';
  symbolBank:any= {
    result: [
      {
        description: '',
        displaySymbol: '',
        symbol: '',
        type: ''}
      ]
  };
  suggested:any = [];
  // private url = `https://finnhub.io/api/v1/search?q=${this.symbol}&token=c0mtnhf48v6tkq13l9bg`;

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  //   console.log("changing");
  //     this.filterResults(this.symbol);
  // }

  // ngDoCheck(): void {
  //   if(this.symbol.length >= 2){
  //     this.suggested = this.filterResults(this.symbol);
  //   }
  //   else {

  //   }
  // }

  ngOnInit(): void {
      this.getService.getSymbols().subscribe(data => {
        this.symbolBank = data;
        console.log(this.symbolBank);
      })
  }

  constructor(private getService: GetService){}
  getData(){
    // console.log(this.symbol);
    console.log(this.getService.getPosts(this.symbol).subscribe(data => {
      console.log(data);
    }));
  }

  // filterResults(symbol:string){
  //   // console.log(symbol);
  //   return this.symbolBank.result.filter((data:any) => {
  //     if(data.symbol.includes(symbol)){
  //       console.log(data)
  //       return data
  //     }
  //   });
  // }
}
