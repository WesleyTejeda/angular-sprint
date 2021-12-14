import { Component } from '@angular/core';
import { TopNewsComponent } from './top-news/top-news.component';
import { CompanyData } from './company-data.model';
import { GetService } from './services/get.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sprint';
  symbol:string = '';
  result:any = {};

  companyProfiles:CompanyData[] = [];
  companyProfile:CompanyData = {
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
  constructor(private getService: GetService){}
  getData(){
    // console.log(this.symbol);
    this.getService.getPosts(this.symbol).subscribe((data:any) => {
      this.result = data.result[0];
      console.log(this.result);
      this.getCompanyInfo(this.result.symbol);
    });
  }

  getCompanyInfo(companySymbol:string){
    if(query.length != 0){
      this.getService.getCompany(companySymbol).subscribe(data => {
        if(typeof(data) == "object"){
          console.log(true);
          this.companyProfiles = [data];
        }
        else {
          this.companyProfiles = data;
        }
        console.log(this.companyProfiles);
        this.companyProfile = this.companyProfiles[0];
        // console.log(this.companyProfiles);
      })
    }
  }
}
