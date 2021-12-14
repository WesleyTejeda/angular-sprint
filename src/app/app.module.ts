import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CompanyLookupComponent } from './company-lookup/company-lookup.component';
import { TopNewsComponent } from './top-news/top-news.component';

const routes: Routes = [
  {path: "/news", component: TopNewsComponent},
  {path: "", component: CompanyLookupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyLookupComponent,
    TopNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
